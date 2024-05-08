/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('CreateTearsheetNarrow @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateTearsheetNarrow',
      id: 'ibm-products-patterns-create-flows-createtearsheetnarrow--create-tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'CreateTearsheetNarrow @avt-default-state'
    );
  });
});
