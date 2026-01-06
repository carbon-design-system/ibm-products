/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('Checklist @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Checklist',
      id: 'components-onboarding-checklist--checklist',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Checklist @avt-default-state');

    const buttonEle = page.locator('[aria-label="Checklist toggle"]');
    const viewButton = page.getByRole('button', { name: 'View all (10)' });
    const tooltipContent = await page.getByText('Toggle');
    const taskButtons = page.locator('[title="Task name"]');
    //press tab to move focus to buttonELement
    await page.keyboard.press('Tab');
    await expect(buttonEle).toBeInViewport();
    await expect(buttonEle).toBeFocused();

    //check the checklist is expanded
    await expect(buttonEle).toHaveAttribute('aria-expanded', 'true');
    await expect(viewButton).toBeVisible();
    //Press enter to collapse the checklist
    await page.keyboard.press('Enter');
    await expect(buttonEle).toHaveAttribute('aria-expanded', 'false');

    //Press escape to hide tooltip
    await page.keyboard.press('Escape');
    await expect(tooltipContent).not.toBeVisible();

    //Press tab to move focus to 1st Task name
    await page.keyboard.press('Tab');
    await expect(taskButtons.nth(0)).toBeFocused();

    //Press tab to move focus to 2nd Task name
    await page.keyboard.press('Tab');
    await expect(taskButtons.nth(1)).toBeFocused();

    //Press tab to move focus to 3rd Task name
    await page.keyboard.press('Tab');
    await expect(taskButtons.nth(2)).toBeFocused();

    //Press tab to move focus to View all(10) button
    await page.keyboard.press('Tab');
    await expect(viewButton).toBeFocused();

    //check button element is showing Toggle tooltip while hovering
    await buttonEle.hover();
    await expect(tooltipContent).toBeVisible();
  });

  test('@avt-task-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Checklist',
      id: 'components-onboarding-checklist--task-states',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Checklist @avt-task-state');
  });
});
