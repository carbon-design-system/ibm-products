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

test.describe('TearsheetNarrow @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'components-tearsheet-tearsheetnarrow--tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    await expect(page).toHaveNoACViolations('Tearsheet @avt-default-state');
  });

  test('@avt-default-state open and close', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'components-tearsheet-tearsheetnarrow--tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    // Default opened in story
    // Pressing 'Escape' key to close the Tearsheet
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    await expect(modalElement).not.toBeInViewport();

    // Opening the Tearsheet
    const openButton = page.getByText('Open Tearsheet');
    await openButton.click();
    await page.screenshot({ animations: 'disabled' });
    await expect(modalElement).toBeInViewport();
  });

  test('@avt-default-state focus trap', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'components-tearsheet-tearsheetnarrow--tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const inputField = page.locator('#tss-ft1');
    const createButton = page.getByText('Create');
    const closeButton = modalElement.getByRole('button', { name: 'Close' });
    const cancelButton = modalElement.getByText('Cancel');

    // Default opened in story
    await page.screenshot({ animations: 'disabled' });
    await expect(modalElement).toBeInViewport();
    // Now the focus on the input field in the Tearsheet
    await expect(inputField).toBeFocused();

    // Pressing 'Tab' key to switch focus to next element
    await page.keyboard.press('Tab');
    // Now 'Cancel' button is focused
    await expect(cancelButton).toBeFocused();
    // Pressing 'Tab' key to focus 'Close' button
    await page.keyboard.press('Tab');
    // Now 'Close' button is focused
    await expect(closeButton).toBeFocused();
    // Pressing 'Tab' key to focus 'Create' button
    await page.keyboard.press('Tab');
    // Now 'Create' button is focused
    await expect(createButton).toBeFocused();
    // Pressing 'Tab' key to focus back to first element
    await page.keyboard.press('Tab');
    // Now focus is on Input field
    await expect(inputField).toBeFocused();

    // Move focus backward
    // Pressing 'Shift' and 'Tab' key to move focus back to 'Create' button
    await page.keyboard.press('Shift+Tab');
    // Now the 'Create' button focused again
    await expect(createButton).toBeFocused();
    // Pressing 'Shift+Tab' keys to move focus backward
    await page.keyboard.press('Shift+Tab');
    // Now 'Close' button is focused
    await expect(closeButton).toBeFocused();
    // Pressing 'Shift+Tab' keys to move focus backward
    await page.keyboard.press('Shift+Tab');
    // Now the focus is on 'Cancel' button
    await expect(cancelButton).toBeFocused();
    // Pressing 'Shift+Tab' key to focus back to input field
    await page.keyboard.press('Shift+Tab');
    // Now the focus is on input field
    await expect(inputField).toBeFocused();
    // Pressing 'Escape' to close the Tearsheet
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-all-header-items', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'components-tearsheet-tearsheetnarrow--fully-loaded',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    await page.screenshot({ animations: 'disabled' });
    await expect(page).toHaveNoACViolations(
      'TearsheetNarrow @avt-all-header-items'
    );
    await expect(page.locator('.decorator-container')).toBeInViewport();

    // Selecting the first slug button
    const slugButton1 = page
      .locator('*[aria-label="AI Show information"]')
      .first();
    const closeButton = page.getByLabel('Close the tearsheet');
    const inputField = page.locator('#tss-ft1');

    // Now the focus is on the close button
    await expect(closeButton).toBeFocused();

    await expect(slugButton1).toBeInViewport();
    // Initially expect first slug button aria-expanded attribute is false
    await expect(slugButton1).toHaveAttribute('aria-expanded', 'false');
    // Now switch focus to slug button
    await page.keyboard.press('Shift+Tab');
    // And the focus is on the first slug button
    await expect(slugButton1).toBeFocused();

    // Expanding the fist slug 'AI' button
    await page.keyboard.press('Enter');
    // Now AI slug button expands its popover
    await expect(slugButton1).toHaveAttribute('aria-expanded', 'true');

    // Closing the fist slug 'AI' button
    await page.keyboard.press('Enter');
    // Now AI slug button closed again
    await expect(slugButton1).toHaveAttribute('aria-expanded', 'false');

    // Pressing 'Tab' to focus close button
    await page.keyboard.press('Tab');
    // Now the focus is on the close button
    await expect(closeButton).toBeFocused();

    // Pressing 'Tab' to focus next element
    await page.keyboard.press('Tab');
    // Focus is switched to input field
    await expect(inputField).toBeFocused();

    // Pressing 'Tab' to focus retun to slug first button
    await page.keyboard.press('Tab');
    // Now focus returned to AI button
    await expect(slugButton1).toBeFocused();

    // Closing the Tearsheet by pressing 'Esc' key
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });
    await expect(modalElement).not.toBeInViewport();
  });

  test.skip('@avt-stacking', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'components-tearsheet-tearsheetnarrow--stacked',
      globals: {
        carbonTheme: 'white',
      },
    });

    const tearsheet3 = page.getByLabel('Tearsheet #3');
    await expect(tearsheet3).toBeInViewport();

    const cancelBtn3 = tearsheet3.getByText('Cancel');
    await expect(cancelBtn3).toBeFocused();

    // press escape thrice to close all pre open tearsheets
    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    const tearsheet2 = page.getByLabel('Tearsheet #2');
    await expect(tearsheet2).toBeInViewport();
    const cancelBtn2 = tearsheet2.getByText('Cancel');
    await expect(cancelBtn2).toBeFocused();

    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    const tearsheet1 = page.getByLabel('Tearsheet #1');
    await expect(tearsheet1).toBeInViewport();
    const cancelBtn1 = tearsheet1.getByText('Cancel');
    await expect(cancelBtn1).toBeFocused();

    await page.keyboard.press('Escape');
    await page.screenshot({ animations: 'disabled' });

    // Open tearsheet one
    await page.getByText('Toggle #1').click();
    await page.screenshot({ animations: 'disabled' });

    await expect(tearsheet1).toBeInViewport();
    await expect(cancelBtn1).toBeFocused();
    await expect(page).toHaveNoACViolations('TearsheetNarrow @avt-stacking');

    // Open second tearsheet
    await page.getByText('Toggle #2').click();
    await page.screenshot({ animations: 'disabled' });

    await expect(tearsheet2).toBeInViewport();
    await expect(cancelBtn2).toBeFocused();

    // Open third tearsheet
    await page.getByText('Toggle #3').click();
    await page.screenshot({ animations: 'disabled' });
    await expect(cancelBtn3).toBeFocused();

    await expect(tearsheet3).toBeInViewport();
  });
});
