/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { expect } = require('@playwright/test');

async function visitStory(page, options) {
  const { component, story, id, globals, args } = options;

  // Block third-party analytics scripts during tests to prevent accessibility violations
  // from TrustArc cookie consent and IBM privacy pill that are not part of components being tested
  await page.route('**/*', (route) => {
    const url = route.request().url();
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname;
      const pathname = urlObj.pathname;

      // Block IBM analytics scripts
      const isIBMAnalytics =
        hostname === '1.www.s81c.com' &&
        (pathname.includes('/common/stats/ibm-common.js') ||
          pathname.includes('/common/carbon/autotrack.min.js'));

      // Block TrustArc scripts
      const isTrustArc =
        hostname === 'consent.trustarc.com' ||
        hostname.endsWith('.trustarc.com');

      if (isIBMAnalytics || isTrustArc) {
        route.abort();
      } else {
        route.continue();
      }
    } catch (e) {
      // If URL parsing fails, continue with the request
      route.continue();
    }
  });

  let url = getStoryUrl({
    component,
    story,
    id,
  });

  if (args) {
    const values = Object.entries(args)
      .map(([key, value]) => {
        return `${key}:${value}`;
      })
      .join(';');
    url = url + `&args=${values}`;
  }

  if (globals) {
    const values = Object.entries(globals)
      .map(([key, value]) => {
        return `${key}:${value}`;
      })
      .join(',');
    url = url + `&globals=${values}`;
  }

  await page.goto(url);
  await expect(page).toContainAStory(options);
}

function getStoryUrl({ component, story, id }) {
  const normalized = id ? id : `ibm-products-components-${component}--${story}`; // TODO: refactor this because we have some story id's prefixed with `ibm-products-patterns-${component}--${story}`

  // Note: We serve a static storybook in CI that will trim .html extensions
  // from the URL
  if (process.env.CI) {
    return `/iframe?id=${normalized}&viewMode=story`;
  }
  return `/iframe.html?id=${normalized}&viewMode=story`;
}

module.exports = {
  visitStory,
};
