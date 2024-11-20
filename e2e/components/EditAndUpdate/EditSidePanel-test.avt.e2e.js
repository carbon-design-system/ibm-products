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

test.describe('EditSidePanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'EditSidePanel',
      id: 'deprecated-edit-and-update-editsidepanel--edit-side-panel',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByText('Open side panel').click();

    await page
      .locator(`.${pkg.prefix}--side-panel`)
      .screenshot({ animations: 'disabled' });

    await expect(page).toHaveNoACViolations('EditSidePanel @avt-default-state');
  });
});
