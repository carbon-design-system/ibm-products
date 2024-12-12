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
      id: 'ibm-products-onboarding-checklist--checklist',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Checklist @avt-default-state');

    const buttonEle = page.locator('[aria-label="Checklist toggle"]');
    const viewButton = page.getByRole('button', { name: 'View all (10)' });
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

    //Press escape to clear the focus
    await page.keyboard.press('Escape');

    //check button element is showing Toggle tooltip while hovering
    await buttonEle.hover();
    const tooltipContent = await page.getByText('Toggle');
    await expect(tooltipContent).toBeVisible();
  });

  test('@avt-task-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Checklist',
      id: 'ibm-products-onboarding-checklist--task-states',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Checklist @avt-task-state');
  });
});
