/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('TagOverflow @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'TagOverflow',
      id: 'utilities-tagoverflow--tags-with-overflow-count',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('+2').click();
    await expect(page).toHaveNoACViolations('TagOverflow @avt-default-state');
  });
});
