/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('WebTerminal @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'WebTerminal',
      id: 'patterns-prebuilt-patterns-webterminal--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.screenshot({ animations: 'disabled' });
    await expect(page).toHaveNoACViolations('WebTerminal @avt-default-state');

    // test web terminal from trigger button
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Enter');
    await page.screenshot({ animations: 'disabled' });
    await expect(page).toHaveNoACViolations('WebTerminal @avt-default-state');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.screenshot({ animations: 'disabled' });
    await expect(page).toHaveNoACViolations('WebTerminal @avt-default-state');
  });
});
