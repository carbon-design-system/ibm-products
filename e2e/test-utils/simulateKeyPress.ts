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
