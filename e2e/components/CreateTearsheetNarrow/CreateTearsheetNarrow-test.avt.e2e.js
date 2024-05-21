/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon } from '../../../packages/ibm-products/src/settings';

test.describe('CreateTearsheetNarrow @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateTearsheetNarrow',
      id: 'ibm-products-patterns-create-flows-createtearsheetnarrow--create-tearsheet-narrow',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByText('Open CreateTearsheetNarrow').click();
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);
    await expect(modalElement).toBeVisible();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations(
      'CreateTearsheetNarrow @avt-default-state'
    );
  });
});
