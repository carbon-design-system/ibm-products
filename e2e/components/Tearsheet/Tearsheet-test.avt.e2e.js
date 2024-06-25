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

  test('@avt-focus-trap-and-return', async ({ page }) => {
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
      'Tearsheet @avt-focus-trap-and-return'
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
