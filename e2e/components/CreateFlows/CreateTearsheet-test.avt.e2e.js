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
      id: 'ibm-products-patterns-create-flows-createtearsheet--multi-step-tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByRole('button', { name: 'Open CreateTearsheet' }).click();
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await expect(modalElement).toBeVisible();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations(
      'CreateTearsheet @avt-default-state'
    );
  });

  test('@avt-focus-move-properly-across-steps', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateTearsheet',
      id: 'ibm-products-patterns-create-flows-createtearsheet--multi-step-tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    // Pressing 'Tab' key to focus on the "Open CreateTearsheet" button in the Storybook
    await page.keyboard.press('Tab');
    // Pressing 'Enter' key to open the Tearsheet
    await page.keyboard.press('Enter');

    await expect(modalElement).toBeVisible();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    const learnMoreAnchor = page.getByText('Learn more.');
    const step1Input1 = page.locator(
      '#tearsheet-multi-step-story-text-input-multi-step-1'
    );
    const nextButton = page.getByText('Next');
    const backButton = page.getByText('Back');
    // Expect the Learn More link to be focused
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

    const step3Input1 = page.locator('#carbon-number');
    // Expect the first input element to be focuses
    await expect(step3Input1).toBeFocused();

    // Switch focus to next button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto previous step by pressing enter
    await expect(backButton).toBeFocused();
    await page.keyboard.press('Enter');

    // Expect the first element in the previous step to be focused
    await expect(step2Input1).toBeFocused();

    // Switch focus to next button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Goto previous step by pressing enter
    await expect(backButton).toBeFocused();
    await page.keyboard.press('Enter');

    //  Expect the previous page first element to be focused
    await expect(learnMoreAnchor).toBeFocused();
  });
});
