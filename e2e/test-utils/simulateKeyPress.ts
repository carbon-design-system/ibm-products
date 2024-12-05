/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Page } from '@playwright/test';

export const simulateKeyPress = async (
  page: Page,
  key: string,
  count: number = 1,
  waitDuration?: number
) => {
  for (let i = 0; i < count; i++) {
    await page.keyboard.press(key);
    if (waitDuration && waitDuration > 0) {
      await page.waitForTimeout(waitDuration);
    }
  }
};
