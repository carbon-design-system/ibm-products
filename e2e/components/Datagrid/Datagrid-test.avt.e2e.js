/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('Datagrid @avt', () => {
  test('@avt-basic-usage', async ({ page }) => {
    await visitStory(page, {
      component: 'Datagrid',
      id: 'ibm-products-components-datagrid--basic-usage',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Datagrid @avt-basic-usage');
  });
});
