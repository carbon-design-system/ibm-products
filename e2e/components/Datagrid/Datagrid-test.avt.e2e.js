/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe.configure({ mode: 'parallel' });

test.describe('Datagrid @avt', () => {
  test('@avt-basic-usage', async ({ page }) => {
    await visitStory(page, {
      component: 'Datagrid',
      id: 'ibm-products-components-datagrid--basic-usage',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Datagrid @avt-basic-usage');
  });

  test('@avt-open-and-dismiss-sidepanel-onRowClick', async ({ page }) => {
    await visitStory(page, {
      component: 'Datagrid',
      id: 'ibm-products-components-datagrid-clickablerow--clickable-row-story',
      globals: {
        carbonTheme: 'white',
      },
    });
    const table = await page.getByLabel('Data table title');
    await expect(table).toBeVisible();
    const firstRow = await table.getByRole('row', {
      name: 'Toggle Row Selected 1',
    });
    firstRow.click();
    await page.waitForTimeout(3000);
    const sidePanel = page.locator('[aria-label="Title"]');
    await page.waitForTimeout(3000);
    await expect(sidePanel).toBeVisible();
    const button = sidePanel.getByText('View details');
    await expect(button).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Enter');
    await expect(firstRow).toBeFocused();
    await expect(page).toHaveNoACViolations(
      'Datagrid @avt-open-and-dismiss-sidepanel-onRowClick'
    );
  });
});
