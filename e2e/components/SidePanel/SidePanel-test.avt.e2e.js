/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('SidePanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--slide-over',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page).toHaveNoACViolations('SidePanel @avt-default-state');
  });

  test('@avt-multi-step', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--panel-with-second-step',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page.getByText('Main view')).toBeVisible();
    await page.getByText('View all').click();
    await expect(page.getByText('Detail view')).toBeVisible();
    await page.getByLabel('back').click();
    await expect(page.getByText('Main view')).toBeVisible();
  });

  test('@avt-action-toolbar', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--with-action-toolbar',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page.getByLabel('Close')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByText('Copy')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Settings')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Delete')).toBeFocused();
  });

  test('@avt-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      // This used to be a specific story but using a default story to test the focus trap
      id: 'ibm-products-components-side-panel-sidepanel--slide-over',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page.getByLabel('Close')).toBeFocused();
    await page.getByLabel('Close').click();
    await expect(page.getByText('Open side panel')).toBeFocused();
  });

  test('@avt-first-element-disabled', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      // This used to be a specific story but using a default story to test the focus trap
      id: 'ibm-products-components-side-panel-sidepanel--first-element-disabled',
      globals: {
        carbonTheme: 'white',
      },
    });

    // Open side panel
    await page.getByText('Open side panel').click();
    // Expect close button to be focused
    await expect(page.getByLabel('Close')).toBeFocused();

    // Move focus to next element
    await page.keyboard.press('Tab');

    // Expect the second input to be focus as the first input is disabled
    await expect(page.locator('#side-panel-story-text-input-b')).toBeFocused();
  });
});
