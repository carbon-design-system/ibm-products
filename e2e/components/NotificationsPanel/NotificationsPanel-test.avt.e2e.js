/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { pkg } from '../../../packages/ibm-products/src/settings';

test.describe('NotificationsPanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'NotificationsPanel',
      id: 'components-notificationspanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await expect(page).toHaveNoACViolations(
      'NotificationsPanel @avt-default-state'
    );
  });
  test('@avt-notification-panel-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'NotificationsPanel',
      id: 'components-notificationspanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    const notificationPanel = await page.locator(
      `#${pkg.prefix}--notifications-panel`
    );
    await expect(notificationPanel).toBeVisible();

    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      await expect(notificationPanel).toContainText(
        await page.evaluate(() => document.activeElement?.textContent || '')
      );
    }

    // check if focus returns to trigger button when panel is closed
    await page.keyboard.press('Escape');
    const notificationTrigger = page.getByRole('button', {
      name: 'Notifications',
    });
    await expect(notificationTrigger).toBeFocused();
  });
  test('@avt-notification-panel-focus-return-to-trigger', async ({ page }) => {
    await visitStory(page, {
      component: 'NotificationsPanel',
      id: 'components-notificationspanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    const notificationPanel = await page.locator(
      `#${pkg.prefix}--notifications-panel`
    );
    await expect(notificationPanel).toBeVisible();
    const notificationTrigger = page.locator(
      'button[aria-label="Open notifications"]'
    );
    await page.evaluate(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    await expect(notificationPanel).not.toBeVisible({ timeout: 2000 });
    await expect(async () => {
      const isFocused = await notificationTrigger.evaluate(
        (el) => el === document.activeElement
      );
      expect(isFocused).toBeTruthy();
    }).toPass({ timeout: 2000 });
  });
  test('@avt-notification-panel-doesn-not-focus-return-to-trigger-when-clicked-on-actionable-elements', async ({
    page,
  }) => {
    await visitStory(page, {
      component: 'NotificationsPanel',
      id: 'components-notificationspanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    const notificationPanel = await page.locator(
      `#${pkg.prefix}--notifications-panel`
    );
    await expect(notificationPanel).toBeVisible();
    const notificationTrigger = page.locator(
      'button[aria-label="Open notifications"]'
    );
    const addNotificationButton = page.getByRole('button', {
      name: 'Add new notification',
      exact: true,
    });
    await addNotificationButton.click();
    await expect(notificationPanel).not.toBeVisible({ timeout: 2000 });
    await expect(notificationTrigger).not.toBeFocused();
    await expect(addNotificationButton).toBeFocused({ timeout: 2000 });
  });
});
