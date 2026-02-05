/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { devices, expect } = require('@playwright/test');
const path = require('node:path');
const { pkg } = require('./packages/ibm-products/src/settings');

const config = {
  // https://playwright.dev/docs/api/class-testconfig#test-config-test-dir
  testDir: path.join(__dirname, 'e2e'),

  // https://playwright.dev/docs/api/class-testconfig#test-config-test-ignore
  testIgnore: [],

  // https://playwright.dev/docs/api/class-testconfig#test-config-test-match
  testMatch: /.*-test(.avt|.vrt)?.e2e\.m?js$/,

  // https://playwright.dev/docs/api/class-testconfig#test-config-timeout
  timeout: 10000 * 30,

  // https://playwright.dev/docs/test-timeouts
  expect: { timeout: 100000 },

  // https://playwright.dev/docs/api/class-testconfig#test-config-output-dir
  outputDir: path.join(__dirname, '.playwright', 'results'),
  snapshotDir: path.join(__dirname, '.playwright', 'snapshots'),

  // https://playwright.dev/docs/test-parallel#parallelize-tests-in-a-single-file
  // fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  use: {
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    // Desktop
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  reporter: [
    // Dot reporter is used in CI because it's very concise - it only produces a
    // single character per successful test run.
    [process.env.CI ? 'dot' : 'line'],

    // The remaining reporters should always be used, in both CI and dev.
    ['blob'],
    [
      'json',
      {
        outputFile: path.join(__dirname, '.playwright', 'results.json'),
      },
    ],
    [
      'json',
      {
        outputFile: path.join(
          __dirname,
          'packages/ibm-products/.playwright',
          'INTERNAL_AVT_REPORT_DO_NOT_USE.json'
        ),
      },
    ],
  ],
};

const isDev = !!process.env.AVT;
if (isDev) {
  // use a custom prefix in avt environment
  pkg.prefix = `dev-prefix--${pkg.prefix}`;
}

let aChecker;

expect.extend({
  async toHaveNoACViolations(page, id) {
    if (!aChecker) {
      aChecker = require('accessibility-checker');
      const denylist = new Set([
        'html_lang_exists',
        'page_title_exists',
        'skip_main_exists',
        'html_skipnav_exists',
        'aria_content_in_landmark',
        'aria_child_tabbable',
        'skip_main_described',
      ]);

      const ruleset = await aChecker.getRuleset('IBM_Accessibility');
      const customRuleset = JSON.parse(JSON.stringify(ruleset));

      customRuleset.id = 'Custom_Ruleset';
      customRuleset.checkpoints = customRuleset.checkpoints.map(
        (checkpoint) => {
          checkpoint.rules = checkpoint.rules.filter((rule) => {
            return !denylist.has(rule.id);
          });
          return checkpoint;
        }
      );

      aChecker.addRuleset(customRuleset);
    }

    // Remove third-party widgets before accessibility scanning
    // Using a more targeted approach that only removes elements if they exist
    await page.evaluate(() => {
      // Remove TrustArc cookie consent elements
      const trusteElements = document.querySelectorAll(
        '[id^="truste-consent"], [id^="truste-"], [class*="truste-"]'
      );
      trusteElements.forEach((el) => el.remove());

      // Remove IBM privacy choice pill elements
      const privacyPillElements = document.querySelectorAll(
        '[id*="ypc-pill"], [class*="dbdm--ypc-pill"], [class*="ypc-pill"]'
      );
      privacyPillElements.forEach((el) => el.remove());
    });

    const result = await aChecker.getCompliance(page, id);
    if (aChecker.assertCompliance(result.report) === 0) {
      return {
        pass: true,
      };
    } else {
      return {
        pass: false,
        message: () => aChecker.stringifyResults(result.report),
      };
    }
  },
});

expect.extend({
  async toContainAStory(page, options) {
    let pass;
    try {
      /**
       * This isn't a foolproof way to determine that an actual story
       * has been rendered, but it should determine if a storybook
       * error page is present or not.
       */
      await expect(page.locator('css=.story-wrapper')).toBeInViewport();
      pass = true;
    } catch (e) {
      console.error(e);
      pass = false;
    }

    if (pass) {
      return {
        pass: true,
      };
    } else {
      return {
        pass: false,
        message:
          () => `An element with the "story-wrapper" class was not found at url:
          ${page.url()}
          The url is probably invalid and does not render a story.
          Check the url locally, and verify the parameters passed to visitStory are correct.
          {
            component: ${options.component} 
            story: ${options.story} 
            id: ${options.id} 
            globals: ${JSON.stringify(options.globals)} 
            args: ${JSON.stringify(options.args)},
          }
          `,
      };
    }
  },
});

module.exports = config;
