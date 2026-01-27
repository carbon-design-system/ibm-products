/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { pkg } from '../../../packages/ibm-products/src/settings';

const blockClass = `${pkg.prefix}--options-tile`;

test.describe('OptionsTile @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'OptionsTile',
      id: 'components-optionstile--options-tile',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByRole('heading', { name: 'Language' }).click();

    await page
      .locator(`.${blockClass}__content`)
      .screenshot({ animations: 'disabled' });

    await expect(page).toHaveNoACViolations('OptionsTile @avt-default-state');
  });

  test('@avt-keyboard-navigation', async ({ page }) => {
    await visitStory(page, {
      component: 'OptionsTile',
      id: 'components-optionstile--options-tile&args=enabled',
      globals: {
        carbonTheme: 'white',
      },
    });

    const header = page.locator(`.${blockClass}__header`);
    const content = page.locator(`.${blockClass}__content`);
    const toggle = page.locator(`.${blockClass}__toggle > button`);

    await page.keyboard.press('Tab');
    await expect(toggle).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(header).toBeFocused();
    await page.keyboard.press('Space');
    await expect(content).toBeVisible();
    await page.keyboard.press('Space');
    await expect(content).not.toBeVisible();
  });
});
