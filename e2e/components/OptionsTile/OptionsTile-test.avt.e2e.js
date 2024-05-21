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

test.describe('OptionsTile @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'OptionsTile',
      id: 'ibm-products-components-options-tile-optionstile--options-tile',
      globals: {
        carbonTheme: 'white',
      },
    });

    const blockClass = `${pkg.prefix}--options-tile`;

    await page.getByRole('heading', { name: 'Language' }).click();

    await page
      .locator(`.${blockClass}__content`)
      .screenshot({ animations: 'disabled' });

    await expect(page).toHaveNoACViolations('OptionsTile @avt-default-state');
  });
});
