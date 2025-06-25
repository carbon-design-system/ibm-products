// cspell:words createfullpage

/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe.configure({ mode: 'parallel' });

test.describe('CreateFullPage @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateFullPage',
      id: 'patterns-prebuilt-patterns-create-flows-createfullpage--create-full-page',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'CreateFullPage @avt-default-state'
    );
  });

  test('@avt-error-disabled-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateFullPage',
      id: 'patterns-prebuilt-patterns-create-flows-createfullpage--create-full-page',
      globals: {
        carbonTheme: 'white',
      },
    });
    const inputElement = await page.locator('#test-1');
    await inputElement.click();
    await page.mouse.click(0, 0);
    const dataInvalid = await inputElement.getAttribute('data-invalid');
    const nextButtonElement = page.locator('button:has-text("Next")');
    const backButtonElement = page.locator('button:has-text("Back")');
    const isNextDisabled = await nextButtonElement.evaluate((button) =>
      button.hasAttribute('disabled')
    );
    const isBackDisabled = await backButtonElement.evaluate((button) =>
      button.hasAttribute('disabled')
    );
    await expect(dataInvalid).toBe('true');
    await expect(isBackDisabled).toBe(true);
    await expect(isNextDisabled).toBe(true);
    await inputElement.click();
    await inputElement.fill('test');
    await expect(inputElement).toHaveValue('test');
    const isNextDisabledNow = await nextButtonElement.evaluate((button) =>
      button.hasAttribute('disabled')
    );
    const isBackDisabledNow = await backButtonElement.evaluate((button) =>
      button.hasAttribute('disabled')
    );
    await expect(isNextDisabledNow).toBe(false);
    await expect(isBackDisabledNow).toBe(true);
    const dataInvalidNow = await inputElement.getAttribute('data-invalid');
    await expect(dataInvalidNow).toBe(null);
  });
});
