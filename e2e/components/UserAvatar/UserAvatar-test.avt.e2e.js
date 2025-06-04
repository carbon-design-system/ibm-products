// cspell:words useravatar

/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('UserAvatar @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'UserAvatar',
      id: 'components-useravatar--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('UserAvatar @avt-default-state');
  });

  test('@avt-focus-state', async ({ page }) => {
    await visitStory(page, {
      component: 'UserAvatar',
      id: 'components-useravatar--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.keyboard.press('Tab');
    await expect(
      page
        .locator('section')
        .filter({ hasText: "useTheme reveals theme: 'White" })
        .getByLabel('Thomas J. Watson')
    ).toBeFocused();
  });

  test('@avt-hover-state', async ({ page }) => {
    await visitStory(page, {
      component: 'UserAvatar',
      id: 'components-useravatar--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    const tooltipTrigger = page
      .locator('section')
      .filter({ hasText: "useTheme reveals theme: 'White" })
      .getByLabel('Thomas J. Watson');
    await expect(tooltipTrigger).toBeVisible();
    await tooltipTrigger.hover();
    const tooltipContent = page
      .getByText('TW, Thomas J. Watson user profile')
      .first();
    await expect(tooltipContent).toBeVisible();
    // Press ESCAPE key while hover is active
    await page.keyboard.press('Escape');
    await expect(tooltipContent).toBeHidden();
  });
});
