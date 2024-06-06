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

test.describe('WebTerminal @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'WebTerminal',
      id: 'ibm-products-patterns-web-terminal-webterminal--default',
      globals: {
        carbonTheme: 'white',
      },
    });

    await page.getByLabel('Web terminal').click();
    const modalElement = page.locator(`.${pkg.prefix}--web-terminal`);
    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );
    await expect(page).toHaveNoACViolations('WebTerminal @avt-default-state');
  });
});
