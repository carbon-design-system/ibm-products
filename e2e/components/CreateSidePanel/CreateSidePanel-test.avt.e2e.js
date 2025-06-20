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

test.describe('CreateSidePanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateSidePanel',
      id: 'patterns-prebuilt-patterns-create-flows-createsidepanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page
      .locator(`#${pkg.prefix}--side-panel`)
      .screenshot({ animations: 'disabled' });
    await expect(page).toHaveNoACViolations(
      'CreateSidePanel @avt-default-state'
    );
  });
});
