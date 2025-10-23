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
      id: 'components-aboutmodal--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await expect(page).toHaveNoACViolations('AboutModal @avt-default-state');
  });

  test('@avt-initially-focus-close-button', async ({ page }) => {
    await visitStory(page, {
      component: 'AboutModal',
      id: 'components-aboutmodal--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    const closeButton = page.getByLabel('Close');
    await expect(closeButton).toBeFocused();
  });

  test('@avt-open-close-with-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'AboutModal',
      id: 'components-aboutmodal--with-additional-content',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal`);
    const closeIcon = page.getByLabel('Close');
    const linkActions = page.getByText('Link action');

    // Initial focus should be on close button, on an open modal
    await expect(modalElement).not.toHaveAttribute('aria-hidden', 'true');
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

    // Press escape twice
    // To close tooltip and modal
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');

    // Closing modal
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(modalElement).toHaveAttribute('aria-hidden', 'true');
    await expect(page).toHaveNoACViolations(
      'AboutModal @avt-open-close-with-focus-trap'
    );

    // Reopening modal from trigger button to check if focus trap is working
    const openButton = page.getByText('Open Modal');
    await openButton.click();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(modalElement).not.toHaveAttribute('aria-hidden', 'true');
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

    // Press escape to twice
    // first to close tooltip then close modal
    await page.keyboard.press('Escape');
    await page.keyboard.press('Escape');

    // Closing modal
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(modalElement).toHaveAttribute('aria-hidden', 'true');

    await expect(page).toHaveNoACViolations(
      'AboutModal @avt-open-close-with-focus-trap'
    );
  });
});
