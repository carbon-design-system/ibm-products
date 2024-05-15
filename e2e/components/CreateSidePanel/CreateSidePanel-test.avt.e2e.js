/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('CreateSidePanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'CreateSidePanel',
      id: 'ibm-products-patterns-create-flows-createsidepanel--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByText('Open side panel').click();
    const modalElement = page.locator(`.dev-prefix--c4p--side-panel`);
    await expect(modalElement).toBeVisible();
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations(
      'CreateSidePanel @avt-default-state'
    );
  });
});
