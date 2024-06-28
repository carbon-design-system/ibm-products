/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('Guidebanner @avt', () => {
  test('@avt-collapsible-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Guidebanner',
      id: 'ibm-products-onboarding-guidebanner--collapsible',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'Guidebanner @avt-collapsible-state'
    );
  });
});
