/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon } from '../../../packages/ibm-products/src/settings';

test.describe('FilterPanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'FilterPanel',
      id: 'deprecated-filter-panel-filterpanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.click(`.${carbon.prefix}--accordion__heading`);
    await page
      .locator(`.${carbon.prefix}--accordion__item--active`)
      .screenshot({ animations: 'disabled' });

    await expect(page).toHaveNoACViolations('FilterPanel @avt-default-state');
  });
});
