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
});
