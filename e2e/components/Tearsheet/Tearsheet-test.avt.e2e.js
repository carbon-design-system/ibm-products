/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon, pkg } from '../../../packages/ibm-products/src/settings';

const bc = `${pkg.prefix}--tearsheet`;

test.describe('Tearsheet @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    await expect(page).toHaveNoACViolations('Tearsheet @avt-default-state');
  });

  test('@avt-open-and-close', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    // Expect Tearsheet to be in the viewport
    await expect(modalElement).toBeInViewport();

    // Pressing 'Escape' key to close the Tearsheet
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-default-state-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--tearsheet',
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

    // Initially the focus is on first input box in the Tearsheet body
    await expect(input1).toBeFocused();

    // Press 'Tab' key to focus the second input box
    await page.keyboard.press('Tab');
    await expect(input2).toBeFocused();

    // Press 'Tab' key to focus the 'Cancel' button
    await page.keyboard.press('Tab');
    await expect(cancelButton).toBeFocused();

    // Press 'Tab' key to focus the 'Back' button
    await page.keyboard.press('Tab');
    await expect(backButton).toBeFocused();

    // Press 'Tab' key to focus the 'Replace' button
    await page.keyboard.press('Tab');
    await expect(replaceButton).toBeFocused();

    // Again pressing 'Tab' key trap the focus and
    // return it in to the first Input field
    await page.keyboard.press('Tab');
    await expect(input1).toBeFocused();

    // Moving the focus back to the 'Replace' button
    await page.keyboard.press('Shift+Tab');
    await expect(replaceButton).toBeFocused();

    // Moving backward to focus the 'Back' button
    await page.keyboard.press('Shift+Tab');
    await expect(backButton).toBeFocused();

    // Then, again moving backward to focus the 'Cancel' button
    await page.keyboard.press('Shift+Tab');
    await expect(cancelButton).toBeFocused();

    // And pressing the 'Cancel' button to close the Tearsheet
    await page.keyboard.press('Enter');

    await page.screenshot({ animations: 'disabled' });
    // Tearsheet is closed
    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-first-element-disabled-focus-behaviour', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--first-element-disabled',
      globals: {
        carbonTheme: 'white',
      },
    });

    const input1 = page.locator('#tss-ft1');
    const input2 = page.locator('#tss-ft2');
    const closeIcon = page.getByLabel('Close the tearsheet');

    await expect(page).toHaveNoACViolations(
      'Tearsheet @avt-focus-return-to-launcher-button'
    );
    // Initially expect close button to be focused
    await expect(closeIcon).toBeFocused();

    // Press 'Tab' key to focus the second input box
    await page.keyboard.press('Tab');
    await expect(input2).toBeFocused();

    // Type some text in the input field
    await expect(input1).toBeDisabled();
    await page.keyboard.type('T');
    await expect(input1).toBeEnabled();
    // Make sure the focus still on the input 2
    await expect(input2).toBeFocused();
  });

  test('@avt-focus-return-to-launcher-button', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--return-focus-to-open-button',
      globals: {
        carbonTheme: 'white',
      },
    });

    const openButton = page.getByText('Open Tearsheet');

    await expect(page).toHaveNoACViolations(
      'Tearsheet @avt-focus-return-to-launcher-button'
    );
    // Initially the focus will be on #tss-ft1 input field
    await expect(page.locator('#tss-ft1')).toBeFocused();

    // Pressing 'Tab' keys to move focus forward
    // Pressing 'Tab' key to focus next input field #tss-ft2
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to switch focus to 'Cancel' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to switch focus to 'Back' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to switch focus to 'Replace' button
    await page.keyboard.press('Tab');
    // Now focus is on the 'Replace' button, and it is the last focusable item
    await expect(page.getByText('Replace')).toBeFocused();
    // Again pressing 'Tab' key trap the focus and
    // return it in to the first Input field #tss-ft1
    await page.keyboard.press('Tab');
    // Now the focus is returned to first element #tss-ft1 input field
    await expect(page.locator('#tss-ft1')).toBeFocused();

    // Moving focus backward
    // Pressing 'Shift' key and 'Tab' key to move focus to the 'Replace' button
    await page.keyboard.press('Shift+Tab');
    // Pressing 'Shift' key and 'Tab' key to move focus to the 'Back' button
    await page.keyboard.press('Shift+Tab');
    // Pressing 'Shift' key and 'Tab' key to move focus to the 'Cancel' button
    await page.keyboard.press('Shift+Tab');

    const cancelButton = page.getByText('Cancel');
    // Now the focus is on the 'Cancel' button
    await expect(cancelButton).toBeFocused();
    // Pressing 'Enter' key to close the Tearsheet
    await page.keyboard.press('Enter');
    // Now the focus is returned to the "Open Tearsheet" button again
    await expect(openButton).toBeFocused();
  });

  test('@avt-stacking', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--stacked',
      globals: {
        carbonTheme: 'white',
      },
    });

    // press escape thrice to close all pre open tearsheets
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    const ts1 = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const stackInput1 = page.locator('#stacked-input-1');
    const stackInput2 = page.locator('#stacked-input-2');
    const stackInput3 = page.locator('#stacked-input-3');

    const openButton1 = page.getByText('Toggle tearsheet 1');
    const openButton2 = page.getByText('Open tearsheet 2');
    const openButton3 = page.getByText('Open tearsheet 3');

    // Expect the "Toggle tearsheet 1" button is focused in the Storybook
    await expect(openButton1).toBeFocused();
    // Pressing 'Enter' key to open the Tearsheet
    await page.keyboard.press('Enter');
    await page.screenshot({ animations: 'disabled' });

    // Now the focus is the on the first input field of the first Tearsheet
    await expect(stackInput1).toBeFocused();

    // Pressing 'Tab' key to focus on 'Cancel' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Back' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Replace' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Open tearsheet 2' button
    await page.keyboard.press('Tab');
    // Pressing enter to open the second Tearsheet
    await page.keyboard.press('Enter');
    await page.screenshot({ animations: 'disabled' });

    const ts2 = page.locator(
      `[class*="${bc}--stacked-${1}-of-${2}"].is-visible`
    );

    // Tearsheet 2 is now open
    await expect(ts2).toBeInViewport();
    // Now the focus is on the first input field of the second Tearsheet
    await expect(stackInput2).toBeFocused();

    // Pressing 'Tab' key to focus on 'Cancel' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Back' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Replace' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Open tearsheet 3' button
    await page.keyboard.press('Tab');
    // Pressing enter to open the second Tearsheet
    await page.keyboard.press('Enter');
    await page.screenshot({ animations: 'disabled' });

    const ts3 = page.locator(
      `[class*="${bc}--stacked-${3}-of-${3}"].is-visible`
    );
    // Tearsheet 3 is open now
    await expect(ts3).toBeInViewport();
    // Now the focus is on the first input field of the 3rd Tearsheet
    await expect(stackInput3).toBeFocused();
    await expect(page).toHaveNoACViolations('Tearsheet @avt-stacking');

    // Pressing 'Escape' key to close the third Tearsheet
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    // Now 3rd Tearsheet is closed and 2nd Tearsheet is in the viewport
    await expect(ts2).toBeInViewport();
    // And the focus is switched to the open button of tearsheet 3
    await expect(openButton3).toBeFocused();

    // Pressing 'Escape' key to close the second Tearsheet
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    // Now the 2nd Tearsheet is closed and 1st Tearsheet in the viewport
    await expect(ts1).toBeInViewport();
    // And the focus now on the open tearsheet 2 button
    await expect(openButton2).toBeFocused();

    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    const tearsheets = await page.locator(`.${carbon.prefix}--modal`).all();
    // Expect all Tearsheets have the aria-hidden='true' attribute
    for (const ts of tearsheets) {
      await expect(ts).toHaveAttribute('aria-hidden', 'true');
    }
  });

  test('@avt-stacking-different-sizes', async ({ page }) => {
    await visitStory(page, {
      component: 'Tearsheet',
      id: 'components-tearsheet--stacked-mixed-sizes',
      globals: {
        carbonTheme: 'white',
      },
    });

    // press escape twice to close all pre open tearsheets
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    const wideTs = page.locator(`[class*="${bc}--wide"]`);
    const openButton = page.getByText('Toggle tearsheet 1');

    // Expect the "Toggle tearsheet 1" button is focused in the Storybook
    await expect(openButton).toBeFocused();
    // Pressing 'Enter' key to open the Tearsheet
    await page.keyboard.press('Enter');
    await page.screenshot({ animations: 'disabled' });

    // Wide Tearsheet is open now
    await expect(wideTs).toBeInViewport();
    await expect(page).toHaveNoACViolations(
      'Tearsheet @avt-stacking-different-sizes'
    );

    const stackedInput1 = page.locator('#stacked-input-1');
    // Now the focus is on the 1st input field of the Wide Tearsheet
    await expect(stackedInput1).toBeFocused();

    // Pressing 'Tab' key to focus on 'Cancel' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Back' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Replace' button
    await page.keyboard.press('Tab');
    // Pressing 'Tab' key to focus on 'Open tearsheet 2' button
    await page.keyboard.press('Tab');

    // The 'Open tearsheet 2' button from the Wide Tearsheet is focused
    await expect(page.getByText('Open tearsheet 2')).toBeFocused();

    // Pressing enter to open the second Tearsheet
    await page.keyboard.press('Enter');
    await page.screenshot({ animations: 'disabled' });

    const narrowTs = page.locator(`[class*="${bc}--narrow"]`);

    // Now the narrow Tearsheet is open and in viewport
    await expect(narrowTs).toBeInViewport();
    await expect(page).toHaveNoACViolations(
      'Tearsheet @avt-stacking-different-sizes'
    );

    const stackedInput2 = page.locator('#stacked-input-2');

    // And the focus is now on 1st input field of narrow Tearsheet
    await expect(stackedInput2).toBeFocused();
    // Pressing 'Escape' key to close narrow Tearsheet
    await page.keyboard.press('Escape');
    // Now the focus is on the 1st input field of the wide Tearsheet
    await expect(page.getByText('Open tearsheet 2')).toBeFocused();
    // Pressing 'Escape' key to close the wide Tearheet
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    // Expect wide Tearsheet has aria-hidden='true' attribute
    await expect(wideTs).toHaveAttribute('aria-hidden', 'true');
    // Expect narrow Tearsheet has aria-hidden='true' attribute
    await expect(narrowTs).toHaveAttribute('aria-hidden', 'true');
  });
});
