/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon } from '../../../packages/ibm-products/src/settings';

test.describe.configure({ mode: 'parallel' });

test.describe('Tearsheet @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'ibm-products-components-tearsheet--tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await page.getByText('Open Tearsheet').click();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations('Tearsheet @avt-default-state');
  });

  test('@avt-open-and-close', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'ibm-products-components-tearsheet--tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(modalElement).toBeInViewport();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page
      .locator(`.${carbon.prefix}--modal`)
      .evaluate((element) =>
        Promise.all(
          element.getAnimations().map((animation) => animation.finished)
        )
      );
    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-default-state-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'ibm-products-components-tearsheet--tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const input1 = page.locator('#tss-ft1');
    const input2 = page.locator('#tss-ft2');
    const cancelButton = page.getByText('Cancel');
    const backButton = page.getByText('Back');
    const replaceButton = page.getByText('Replace');

    await page.getByText('Open Tearsheet').click();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(modalElement).toBeInViewport();
    await expect(input1).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(input2).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(cancelButton).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(backButton).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(replaceButton).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(input1).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(replaceButton).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(backButton).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(cancelButton).toBeFocused();

    await page.keyboard.press('Enter');

    await page
      .locator(`.${carbon.prefix}--modal`)
      .evaluate((element) =>
        Promise.all(
          element.getAnimations().map((animation) => animation.finished)
        )
      );
    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-focus-return-to-launcher-button', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'ibm-products-components-tearsheet--return-focus-to-open-button',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const openButton = page.getByText('Open Tearsheet');

    await page.keyboard.press('Tab');
    await expect(openButton).toBeFocused();
    await page.keyboard.press('Enter');
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(page).toHaveNoACViolations(
      'Tearsheet @avt-focus-return-to-launcher-button'
    );
    await expect(page.locator('#tss-ft1')).toBeFocused();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page.getByText('Replace')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#tss-ft1')).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Shift+Tab');

    const cancelButton = page.getByText('Cancel');
    await expect(cancelButton).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(openButton).toBeFocused();
  });
});
