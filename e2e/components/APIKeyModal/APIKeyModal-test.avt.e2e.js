/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon } from '../../../packages/ibm-products/src/settings';

test.describe('APIKeyModal @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'APIKeyModal',
      id: 'ibm-products-components-generating-an-api-key-apikeymodal--generate',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByRole('button', { name: 'Generate API key' }).click();

    await expect(page).toHaveNoACViolations('APIKeyModal @avt-default-state');
  });

  test('@avt-instant-generate-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'APIKeyModal',
      id: 'ibm-products-components-generating-an-api-key-apikeymodal--instant-generate',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const generateButton = page.getByRole('button', { name: 'Generate' });

    // Focus the Generate button
    await page.keyboard.press('Tab');
    await expect(generateButton).toBeFocused();

    await page.keyboard.press('Enter');

    // Evaluate the Instant Generate Modal opening animation
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(page).toHaveNoACViolations(
      'APIKeyModal @avt-instant-generate-focus-trap'
    );

    await page.keyboard.press('Tab');

    const apiKeyInput = page.getByLabel('Unique API Key');
    await expect(apiKeyInput).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Focus the close button
    await expect(page.getByRole('button', { name: 'Close' })).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Expect focus came back again to input field
    await expect(apiKeyInput).toBeFocused();

    // Close using Esc key
    await page.keyboard.press('Escape');

    await page
      .locator(`.${carbon.prefix}--modal`)
      .evaluate((element) =>
        Promise.all(
          element.getAnimations().map((animation) => animation.finished)
        )
      );
    await expect(modalElement).not.toBeInViewport();
  });
});
