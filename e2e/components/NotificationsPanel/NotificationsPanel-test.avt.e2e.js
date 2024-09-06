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
      id: 'ibm-products-patterns-notifications-notificationspanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    const notificationPanelElement = page.locator(
      `#${pkg.prefix}--notifications-panel`
    );
    await page.getByLabel('Notifications').click();
    await notificationPanelElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations(
      'NotificationsPanel @avt-default-state'
    );
  });
  test('@avt-notification-panel-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'NotificationsPanel',
      id: 'ibm-products-patterns-notifications-notificationspanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    const notificationTrigger = page.getByRole('button', {
      name: 'Notifications',
    });
    await notificationTrigger.click();

    const notificationPanel = await page.locator(
      `div#${pkg.prefix}--notifications-panel`
    );
    await expect(notificationPanel).toBeVisible();

    const firstElement = page.locator(
      `button.${pkg.prefix}--notifications-panel__dismiss-button`
    );
    await firstElement.focus();
    await expect(firstElement).toBeFocused();

    const lastElement = page.locator(
      `button.${pkg.prefix}--notifications-panel__settings-button`
    );
    await page.keyboard.press('Shift+Tab');
    await expect(lastElement).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(firstElement).toBeFocused();

    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      await expect(notificationPanel).toContainText(
        await page.evaluate(() => document.activeElement?.textContent || '')
      );
    }
  });
});
