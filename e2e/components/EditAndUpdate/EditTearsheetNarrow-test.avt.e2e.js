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

test.describe('EditTearsheetNarrow @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'EditTearsheetNarrow',
      id: 'deprecated-edit-and-update-edittearsheetnarrow--edit-tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByText('Open EditTearsheetNarrow').click();

    await page
      .locator(`.${pkg.prefix}--tearsheet`)
      .screenshot({ animations: 'disabled' });

    await expect(page).toHaveNoACViolations(
      'EditTearsheetNarrow @avt-default-state'
    );
  });
});
