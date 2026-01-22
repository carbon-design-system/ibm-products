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
      id: 'patterns-prebuilt-patterns-apikeymodal--generate',
      globals: {
        carbonTheme: 'white',
      },
    });

    await expect(page).toHaveNoACViolations('APIKeyModal @avt-default-state');
  });

  test('@avt-instant-generate-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'APIKeyModal',
      id: 'patterns-prebuilt-patterns-apikeymodal--instant-generate',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    await expect(modalElement).toBeInViewport();
    await expect(modalElement).not.toHaveAttribute('aria-hidden', 'true');

    await expect(page).toHaveNoACViolations(
      'APIKeyModal @avt-instant-generate-focus-trap'
    );

    // Initial focus should be on first interactive element, on an open modal
    const apiKeyInput = page.getByLabel('Unique API Key');
    await expect(apiKeyInput).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    // Focus the close button
    await expect(
      modalElement.getByRole('button', { name: 'Close' })
    ).toBeFocused();

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

    // check the focus returns to trigger button
    const generateButton = page.getByRole('button', { name: 'Generate' });
    await expect(generateButton).toBeFocused();

    // Reopen modal from trigger button to check if first focusable element is input field
    await generateButton.click();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(modalElement).toBeInViewport();
    await expect(modalElement).not.toHaveAttribute('aria-hidden', 'true');
    await expect(apiKeyInput).toBeFocused();
  });
});
