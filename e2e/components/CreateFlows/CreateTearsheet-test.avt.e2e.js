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

test.describe('CreateTearsheet @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateTearsheet',
      id: 'patterns-prebuilt-patterns-create-flows-createtearsheet--multi-step-tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.screenshot({ animations: 'disabled' });
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await expect(modalElement).toBeVisible();
    await expect(modalElement).toHaveAttribute('aria-hidden', 'false');
    await expect(page).toHaveNoACViolations(
      'CreateTearsheet @avt-default-state'
    );
  });

  test('@avt-focus-move-properly-across-steps', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateTearsheet',
      id: 'patterns-prebuilt-patterns-create-flows-createtearsheet--multi-step-tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.screenshot({ animations: 'disabled' });
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    await expect(modalElement).toBeVisible();
    await expect(modalElement).toHaveAttribute('aria-hidden', 'false');

    const learnMoreAnchor = page.getByText('Learn more.');
    const step1Input1 = page.locator(
      '#tearsheet-multi-step-story-text-input-multi-step-1'
    );
    const nextButton = page.getByText('Next');
    const backButton = page.getByText('Back');

    // Focus learn more link
    await page.keyboard.press('Shift+Tab');

    // Expect the Learn More link to be focused
    await expect(learnMoreAnchor).toBeVisible();
    await expect(learnMoreAnchor).toBeFocused();

    // Switch focus to input box
    await page.keyboard.press('Tab');
    // Expect the input box to be focused
    await expect(step1Input1).toBeFocused();

    // Type some text in the input field
    await page.keyboard.type('H');
    // Expect the Next button to be enabled at this moment
    await expect(nextButton).toBeEnabled();

    // Switch focus to next button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Expect next button to be focused
    await expect(nextButton).toBeFocused();

    // Goto next step by pressing enter
    await page.keyboard.press('Enter');

    // Wait for step transition animation to complete
    await page.waitForTimeout(500);

    const step2Input1 = page.locator('#custom-step-input');
    // Expect the Step 2 input field is focused
    await expect(step2Input1).toBeFocused();
    // Also confirm the Next button disabled in this step
    await expect(nextButton).toBeDisabled();

    // Type some text in the input field
    await page.keyboard.type('L');
    // Expect Next button enabled now
    await expect(nextButton).toBeEnabled();

    // Switch focus to next button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto next step by pressing enter
    await page.keyboard.press('Enter');

    // Wait for step transition animation to complete
    await page.waitForTimeout(500);

    const step3Input1 = page.locator('#carbon-number');
    // Expect the first input element to be focused
    await expect(step3Input1).toBeFocused();

    // Switch focus to next button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto next step by pressing enter
    await page.keyboard.press('Enter');

    // Wait for step transition animation to complete
    await page.waitForTimeout(500);

    const step4Input1 = page.locator('#one-day');
    // Expect the first element in the last step to be focused
    await expect(step4Input1).toBeFocused();

    // Switch focus to back button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto previous step by pressing enter
    await expect(backButton).toBeFocused();
    await page.keyboard.press('Enter');

    // Wait for step transition animation to complete
    await page.waitForTimeout(500);

    // Expect the first element in the previous step to be focused
    await expect(step3Input1).toBeFocused();

    // Switch focus to back button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto previous step by pressing enter
    await expect(backButton).toBeFocused();
    await page.keyboard.press('Enter');

    // Wait for step transition animation to complete
    await page.waitForTimeout(500);

    // Expect the first element in the previous step to be focused
    await expect(step2Input1).toBeFocused();

    // Switch focus to back button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto previous step by pressing enter
    await expect(backButton).toBeFocused();
    await page.keyboard.press('Enter');

    // Wait for step transition animation to complete
    await page.waitForTimeout(500);
    await page.screenshot({ animations: 'disabled' });

    // Expect the previous page first element to be focused
    await expect(step1Input1).toBeFocused();
  });

  test('@avt-simulate-error-and-focus', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateTearsheet',
      id: 'patterns-prebuilt-patterns-create-flows-createtearsheet--multi-step-tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.screenshot({ animations: 'disabled' });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await expect(modalElement).toBeVisible();

    const step1Input1 = page.locator(
      '#tearsheet-multi-step-story-text-input-multi-step-1'
    );
    const nextButton = page.getByText('Next');
    const errorToggle = page.locator('#simulated-error-toggle');

    // Expect the input box to be focused
    await expect(step1Input1).toBeFocused();

    // Type some text in the input field
    await page.keyboard.type('H');
    // Expect the Next button to be enabled at this moment
    await expect(nextButton).toBeEnabled();

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await expect(errorToggle).toBeFocused();

    // Enable simulate error toggle
    await page.keyboard.press('Space');

    // Wait for toggle state to update
    await page.waitForTimeout(200);

    // Verify the toggle is actually checked
    const toggleInput = page.locator('#simulated-error-toggle');
    await expect(toggleInput).toBeChecked();

    // Navigate to next button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Ensure Next button is focused before pressing Enter
    await expect(nextButton).toBeFocused();

    // Press on Next button - this triggers async operation with 750ms delay
    await page.keyboard.press('Enter');

    // Wait for the simulated delay to complete (750ms + buffer)
    await page.waitForTimeout(1000);

    // Wait for the error notification to appear
    const errorNotification = page.locator('#step-submit-error');
    await expect(errorNotification).toBeVisible({ timeout: 3000 });

    // Expect the focus returned to first element
    await expect(step1Input1).toBeFocused({ timeout: 1000 });
  });
});
