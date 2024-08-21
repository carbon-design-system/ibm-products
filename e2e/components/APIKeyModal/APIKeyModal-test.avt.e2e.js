/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('APIKeyModal @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'APIKeyModal',
      id: 'ibm-products-components-generating-an-api-key-apikeymodal--generate',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByRole('button', { name: 'Generate API key' }).click();

    await expect(page).toHaveNoACViolations('APIKeyModal @avt-default-state');
  });
});
