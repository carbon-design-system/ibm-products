/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('SidePanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--slide-over',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page).toHaveNoACViolations('SidePanel @avt-default-state');
  });
});
