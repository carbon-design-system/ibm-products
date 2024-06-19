/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('InterstitialScreen @avt', () => {
  test('@avt-full-screen-state', async ({ page }) => {
    await visitStory(page, {
      component: 'InterstitialScreen',
      id: 'ibm-products-onboarding-interstitial-screen-interstitialscreen--interstitial-screen-full-screen-image',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'InterstitialScreen @avt-full-screen-state'
    );
  });
});
