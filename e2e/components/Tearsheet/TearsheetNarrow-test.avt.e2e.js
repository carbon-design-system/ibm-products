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
      id: 'ibm-products-components-tearsheet-tearsheetnarrow--tearsheet-narrow',
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

  test('@avt-default-state open and close', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'ibm-products-components-tearsheet-tearsheetnarrow--tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    // Pressing 'Tab' key to focus on the "Open Tearsheet" button in the Storybook
    await page.keyboard.press('Tab');
    // Pressing 'Enter' key to open the Tearsheet
    await page.keyboard.press('Enter');

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    // Pressing 'Escape' key to close the Tearsheet
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

  test('@avt-default-state focus trap', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'ibm-products-components-tearsheet-tearsheetnarrow--tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    const inputField = page.locator('#tss-ft1');
    const createButton = page.getByText('Create');
    const closeButton = page.getByRole('button', { name: 'Close' });
    const cancelButton = page.getByText('Cancel');

    // Pressing 'Tab' key to focus on the "Open Tearsheet" button in the Storybook
    await page.keyboard.press('Tab');
    // Pressing 'Enter' key to open the Tearsheet
    await page.keyboard.press('Enter');

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
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

    await page
      .locator(`.${carbon.prefix}--modal`)
      .evaluate((element) =>
        Promise.all(
          element.getAnimations().map((animation) => animation.finished)
        )
      );
    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-all-header-items', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'ibm-products-components-tearsheet-tearsheetnarrow--fully-loaded',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    // Pressing 'Tab' key to focus on the "Open Tearsheet" button in the Storybook
    await page.keyboard.press('Tab');
    // Pressing 'Enter' key to open the Tearsheet
    await page.keyboard.press('Enter');

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations(
      'TearsheetNarrow @avt-all-header-items'
    );
    await expect(page.locator('.aiLabel-container')).toBeInViewport();

    // Selecting the first slug button
    const slugButton1 = page
      .locator('*[aria-label="AI - Show information"]')
      .first();
    const closeButton = page.getByLabel('Close the tearsheet');
    const inputField = page.locator('#tss-ft1');

    await expect(slugButton1).toBeInViewport();
    // Initially expect first slug button aria-expanded attribute is false
    await expect(slugButton1).toHaveAttribute('aria-expanded', 'false');
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

    await page
      .locator(`.${carbon.prefix}--modal`)
      .evaluate((element) =>
        Promise.all(
          element.getAnimations().map((animation) => animation.finished)
        )
      );
    await expect(modalElement).not.toBeInViewport();
  });

  test('@avt-stacking', async ({ page }) => {
    await visitStory(page, {
      component: 'TearsheetNarrow',
      id: 'ibm-products-components-tearsheet-tearsheetnarrow--stacked',
      globals: {
        carbonTheme: 'white',
      },
    });

    // Open tearsheet one
    await page.getByText('Toggle #1').click();

    const ts1 = page.locator(`.${carbon.prefix}--modal.is-visible`);

    await ts1.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations('Tearsheet @avt-stacking');

    // Open second tearsheet
    await page.getByText('Toggle #2').click();

    const ts2 = page.locator(
      `[class*="${bc}--stacked-${2}-of-${2}"].is-visible`
    );

    await ts2.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    // Tearsheet 2 is now open
    await expect(ts2).toBeInViewport();
    await expect(ts2).toHaveAttribute('aria-hidden', 'false');

    // Open third tearsheet
    await page.getByText('Toggle #3').click();

    const ts3 = page.locator(
      `[class*="${bc}--stacked-${3}-of-${3}"].is-visible`
    );

    await ts3.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    // Tearsheet 3 is now open
    await expect(ts3).toBeInViewport();
    await expect(ts3).toHaveAttribute('aria-hidden', 'false');
  });
});
