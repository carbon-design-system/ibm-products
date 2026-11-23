// cspell:words singleaddselect

/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('SingleAddSelect @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'SingleAddSelect',
      id: 'deprecated-prebuilt-patterns-add-and-select-singleaddselect--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'SingleAddSelect @avt-default-state'
    );
  });
});
