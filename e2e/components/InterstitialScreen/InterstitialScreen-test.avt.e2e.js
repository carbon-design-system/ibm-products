/**
 * Copyright IBM Corp. 2024, 2026.
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon, pkg } from '../../../packages/ibm-products/src/settings';

const checkButtonsVisibleAndFocused = async (
  visibleButton1,
  visibleButton2,
  focusedButton
) => {
  await expect(visibleButton1).toBeVisible();
  await expect(visibleButton2).toBeVisible();
  await expect(focusedButton).toBeVisible();
  await expect(focusedButton).toBeFocused();
};

const openModal = async (page, launcherButton, modal) => {
  launcherButton.click();
  await page.waitForTimeout(300);
  await expect(modal).toBeVisible();
};

test.describe('InterstitialScreen @avt', () => {
  test('@avt-full-screen-state', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'components-onboarding-interstitialscreen--modal',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-full-screen-state'
    );
  });

  test('@avt-single-step-keyboard-navigation', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'components-onboarding-interstitialscreen--modal',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modal = page.locator(`.${carbon.prefix}--modal-container`);
    const closeButton = page.getByLabel('Close');
    const startButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--start-btn`
    );
    const enableGetStartedButton = page.getByRole('button', {
      name: 'Enable Get Started',
    });
    const skipButton = page.getByTitle('Skip');
    const progressIndicator = page.locator(`.${carbon.prefix}--progress`);

    // Modal should be open
    await expect(modal).toBeVisible();

    // Initial focus should be on close button
    await expect(closeButton).toBeFocused();

    // Tab to navigate, start button should be disabled
    await page.keyboard.press('Tab');
    await expect(startButton).toBeDisabled();
    await expect(closeButton).not.toBeFocused();

    // Tab to skip button
    await page.keyboard.press('Tab');
    await expect(skipButton).toBeFocused();

    // Shift+Tab should go back to Enable Get Started button
    await page.keyboard.press('Shift+Tab');
    await expect(enableGetStartedButton).toBeVisible();
    await expect(enableGetStartedButton).not.toContainClass(
      `${carbon.prefix}--tag--selectable-selected`
    );

    // Select Enable Get Started button, the start button should be enabled now
    await page.keyboard.press('Enter');
    await expect(enableGetStartedButton).toContainClass(
      `${carbon.prefix}--tag--selectable-selected`
    );
    await expect(startButton).not.toBeDisabled();

    // Tab twice to navigate to the start button
    await page.keyboard.press('Tab');
    await expect(skipButton).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(startButton).toBeFocused();

    // Select start button, modal should be closed
    await page.keyboard.press('Enter');
    await expect(modal).not.toBeVisible();

    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-single-step-keyboard-navigation'
    );
  });

  test('@avt-multi-step-keyboard-navigation', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'components-onboarding-interstitialscreen--modal-with-multiple-steps',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modal = page.locator(`.${carbon.prefix}--modal-container`);
    const modalHeader = page.locator(`.${carbon.prefix}--modal-header`);
    const modalContent = page.locator(`.${pkg.prefix}--carousel__elements`);
    const skipButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--skip-btn`
    );
    const closeButton = page.getByLabel('Close');
    const nextButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--next-btn`
    );
    const backButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--prev-btn`
    );
    const startButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--start-btn`
    );
    const progressIndicator = page.locator(`.${carbon.prefix}--progress`);

    // Modal should be open with progress indicator
    await expect(modal).toBeVisible();
    await expect(progressIndicator).toBeVisible();

    // Initial focus should be on close button
    await expect(closeButton).toBeFocused();

    // Tab to navigate to next button (first step, no prev button)
    await page.keyboard.press('Tab');
    await expect(modalContent).toBeFocused();

    // Tab should cycle back to close button
    await page.keyboard.press('Tab');
    await expect(skipButton).toBeFocused();

    // Navigate to next button and click to go to step 2
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300); // Wait for transition

    // Now we should have both prev and next buttons
    await checkButtonsVisibleAndFocused(skipButton, backButton, nextButton);

    await page.keyboard.press('Enter');
    await page.waitForTimeout(300); // Wait for transition
    await checkButtonsVisibleAndFocused(skipButton, backButton, nextButton);

    await page.keyboard.press('Enter');
    await page.waitForTimeout(300); // Wait for transition
    await checkButtonsVisibleAndFocused(skipButton, backButton, nextButton);

    await page.keyboard.press('Enter');
    await page.waitForTimeout(300); // Wait for transition
    await checkButtonsVisibleAndFocused(skipButton, backButton, startButton);
    await expect(nextButton).not.toBeVisible();

    await page.keyboard.press('Enter');
    await expect(modal).not.toBeVisible();

    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-multi-step-keyboard-navigation'
    );
  });

  test('@avt-open-and-close-states', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'components-onboarding-interstitialscreen--modal-with-multiple-steps',
      globals: {
        carbonTheme: 'white',
      },
    });
    const modal = page.locator(`.${carbon.prefix}--modal-container`);
    const closeButton = page.getByLabel('Close');
    const launcherButton = page.getByText('Show Interstitial modal');
    const startButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--start-btn`
    );
    const skipButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--skip-btn`
    );
    const nextButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--next-btn`
    );

    // Modal should be open initially
    await expect(modal).toBeVisible();
    await expect(closeButton).toBeFocused();

    // Close modal using Escape key
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500); // Wait for close animation
    await expect(modal).not.toBeVisible();
    await expect(launcherButton).toBeVisible();

    // Reopen modal by clicking launcher button, close using Close button
    await openModal(page, launcherButton, modal);
    await closeButton.click();
    await page.waitForTimeout(500);
    await expect(modal).not.toBeVisible();
    await expect(launcherButton).toBeVisible();

    // Reopen modal by clicking launcher button, close using Skip button
    openModal(page, launcherButton, modal);
    await skipButton.click();
    await page.waitForTimeout(500);
    await expect(modal).not.toBeVisible();
    await expect(launcherButton).toBeVisible();

    // Reopen modal, go to last step and click start to close modal
    openModal(page, launcherButton, modal);
    await nextButton.click();
    await page.waitForTimeout(300);
    await nextButton.click();
    await page.waitForTimeout(300);
    await nextButton.click();
    await page.waitForTimeout(300);
    await nextButton.click();
    await page.waitForTimeout(300);
    await startButton.click();
    await expect(modal).not.toBeVisible();

    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-open-and-close-states'
    );
  });

  test('@avt-determinate-progress-indicator', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'components-onboarding-interstitialscreen--modal-with-multiple-steps',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modal = page.locator(`.${carbon.prefix}--modal-container`);
    const progressIndicator = page.locator(`.${carbon.prefix}--progress`);
    const progressSteps = page.locator(`.${carbon.prefix}--progress-step`);
    const startButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--start-btn`
    );
    const nextButton = page.locator(
      `.${pkg.prefix}--interstitial-screen--next-btn`
    );

    // Modal should be open with determinate progress indicator
    await expect(modal).toBeVisible();
    await expect(progressIndicator).toBeVisible();

    // Should have 5 steps
    await expect(progressSteps).toHaveCount(5);

    // First step should be current
    const firstStep = progressSteps.first();
    await expect(firstStep).toHaveClass(
      new RegExp(`${carbon.prefix}--progress-step--current`)
    );

    // Navigate to next step
    await nextButton.click();
    await page.waitForTimeout(300);

    // Second step should be current, first should be complete
    const secondStep = progressSteps.nth(1);
    await expect(secondStep).toHaveClass(
      new RegExp(`${carbon.prefix}--progress-step--current`)
    );
    await expect(firstStep).toHaveClass(
      new RegExp(`${carbon.prefix}--progress-step--complete`)
    );

    // Navigate through all steps
    await nextButton.click();
    await page.waitForTimeout(300);
    await nextButton.click();
    await page.waitForTimeout(300);
    await nextButton.click();
    await page.waitForTimeout(300);

    // Last step should be current
    const lastStep = progressSteps.last();
    await expect(lastStep).toHaveClass(
      new RegExp(`${carbon.prefix}--progress-step--current`)
    );

    // All previous steps should be complete
    for (let i = 0; i < 4; i++) {
      await expect(progressSteps.nth(i)).toHaveClass(
        new RegExp(`${carbon.prefix}--progress-step--complete`)
      );
    }

    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-determinate-progress-indicator'
    );
  });

  test('@avt-indeterminate-single-step', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'components-onboarding-interstitialscreen--modal',
      globals: {
        carbonTheme: 'white',
      },
    });

    const modal = page.locator(`.${carbon.prefix}--modal-container`);
    const progressIndicator = page.locator(`.${carbon.prefix}--progress`);

    // Modal should be open & progress indicator should not be visible for single step (indeterminate)
    await expect(modal).toBeVisible();
    await expect(progressIndicator).not.toBeVisible();

    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-indeterminate-single-step'
    );
  });
});
