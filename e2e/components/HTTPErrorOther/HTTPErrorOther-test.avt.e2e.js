/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('HTTPErrorOther @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'HTTPErrorOther',
      id: 'deprecated-http-errors-httperrorother--with-all-props-set',
      globals: {
        carbonTheme: 'white',
        errorCodeLabel: 'Error 502',
        title: 'Bad gateway',
        description: 'Received an invalid response.',
      },
    });
    await expect(page).toHaveNoACViolations(
      'HTTPErrorOther @avt-default-state'
    );
  });
});
