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

test.describe('AboutModal @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'AboutModal',
      id: 'ibm-products-components-about-modal-aboutmodal--about-modal',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await page.getByText('Open the About modal').click();

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(page).toHaveNoACViolations('AboutModal @avt-default-state');
  });

  test('@avt-initially-focus-close-button', async ({ page }) => {
    await visitStory(page, {
      component: 'AboutModal',
      id: 'ibm-products-components-about-modal-aboutmodal--about-modal',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await page.getByText('Open the About modal').click();

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    const closeButton = page.getByLabel('Close');

    await expect(closeButton).toBeFocused();
  });

  test('@avt-open-close-with-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'AboutModal',
      id: 'ibm-products-components-about-modal-aboutmodal--about-modal-with-all-props-set',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const openButton = page.getByText(
      'Open the About modal with all props set'
    );
    const closeIcon = page.getByLabel('Close');
    const linkActions = page.getByText('Link action');

    // Focus the open button
    await page.keyboard.press('Tab');
    // Expect open button to be focused
    await expect(openButton).toBeFocused();
    // Open modal by pressing 'Enter' key
    await page.keyboard.press('Enter');

    // Opening modal
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(page).toHaveNoACViolations(
      'AboutModal @avt-open-close-with-focus-trap'
    );

    // Initial focus should be on close button
    await expect(closeIcon).toBeFocused();
    // Press tab to move focus to first link element
    await page.keyboard.press('Tab');
    await expect(linkActions.first()).toBeFocused();

    // Press tab to move focus to second link element
    await page.keyboard.press('Tab');
    await expect(linkActions.nth(1)).toBeFocused();

    // Press tab to move focus to last link element
    await page.keyboard.press('Tab');
    await expect(linkActions.last()).toBeFocused();

    // Press tab to move focus back to close button
    await page.keyboard.press('Tab');
    await expect(closeIcon).toBeFocused();

    // Press escape to close modal
    await page.keyboard.press('Escape');
    // Opening modal
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(modalElement).toHaveAttribute('aria-hidden', 'true');
  });
});
