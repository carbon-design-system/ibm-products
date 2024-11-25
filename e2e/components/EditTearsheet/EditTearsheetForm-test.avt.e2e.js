/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon } from '../../../packages/ibm-products/src/settings';

test.describe('EditTearsheetForm @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'EditTearsheetForm',
      id: 'deprecated-edit-and-update-edittearsheet--multi-form-edit-tearsheet',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open EditTearsheet').click();
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await expect(modalElement).toBeVisible();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations(
      'EditTearsheetForm @avt-default-state'
    );
  });
});
