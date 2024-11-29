/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';
import { carbon, pkg } from '../../../packages/ibm-products/src/settings';

test.describe('ProductiveCard @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @avt-default-state'
    );
  });

  test('@avt-with-caption', async ({ page }) => {
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--with-caption',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('ProductiveCard @avt-with-caption');
  });

  // Disabled state test
  test('@avt-disabled: validates disabled button state', async ({ page }) => {
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--with-action-ghost-button',
    });

    await expect(page).toHaveNoACViolations('ProductiveCard @avt-disabled');

    const buttons = page.locator(`button.${carbon.prefix}--btn`);
    const disabledButton = buttons.nth(2);
    expect(await disabledButton.getAttribute('disabled')).not.toBeNull();

    await page.keyboard.press('Tab');
    expect(
      await buttons.nth(0).evaluate((btn) => document.activeElement === btn)
    ).toBe(true);

    await page.keyboard.press('Tab');
    expect(
      await buttons.nth(1).evaluate((btn) => document.activeElement === btn)
    ).toBe(true);
    // disabled button
    await page.keyboard.press('Tab');
    expect(
      await buttons.nth(2).evaluate((btn) => document.activeElement === btn)
    ).toBe(false);
  });

  // Overflow menu open/close states test
  test('@avt-overflow-menu: validates overflow menu interactions', async ({
    page,
  }) => {
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--with-overflow',
    });

    const menuButton = page.locator('button[aria-haspopup="true"]');
    const menu = page.locator('ul[role="menu"]');

    // Check initial state
    expect(await menuButton.getAttribute('aria-expanded')).toBe('false');

    // Open the menu
    await menuButton.click();

    // Wait for menu to be visible
    await expect(menu).toBeVisible();

    expect(await menuButton.getAttribute('aria-expanded')).toBe('true');
    await expect(page).toHaveNoACViolations('ProductiveCard @menu-open');

    // Close the menu with Escape
    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();

    expect(await menuButton.getAttribute('aria-expanded')).toBe('false');
    await expect(page).toHaveNoACViolations('ProductiveCard @menu-closed');

    // Reopen the menu via keyboard
    await page.keyboard.press('Tab');
    expect(
      await menuButton.evaluate((btn) => document.activeElement === btn)
    ).toBe(true);

    await page.keyboard.press('Enter');
    await expect(menu).toBeVisible();

    // Check menu item count and focus
    const menuItems = page.locator(`li.${carbon.prefix}--menu-item`);
    expect(await menuItems.count()).toBeGreaterThan(0);
    expect(
      await menuItems.first().evaluate((btn) => document.activeElement === btn)
    ).toBe(true);
    expect(await menuButton.getAttribute('aria-expanded')).toBe('true');

    // Ensure the menu is closed when pressing Escape
    await page.keyboard.press('Escape');
    // Focus returns to menu button
    expect(
      await menuButton.evaluate((btn) => document.activeElement === btn)
    ).toBe(true);

    // Check final state
    await expect(menu).not.toBeVisible();
  });

  test('@avt-keyboard: validates keyboard navigation for all interactive elements', async ({
    page,
  }) => {
    // Navigate to the "Supplemental Bottom Bar" story for ProductiveCard, that has all interactive elements
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--supplemental-bottom-bar',
    });

    // Ensure no accessibility violations for the story
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - Supplemental Bottom Bar'
    );

    // Move focus to the Edit button and validate
    await page.keyboard.press('Tab');
    const editButton = page.getByLabel('Edit');
    await expect(editButton).toBeVisible();
    await expect(editButton).toBeFocused();
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - Edit Button'
    );

    // Move focus to the Delete button and validate
    await page.keyboard.press('Tab');
    const deleteButton = page.getByLabel('Delete');
    await expect(deleteButton).toBeVisible();
    await expect(deleteButton).toBeFocused();
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - Delete Button'
    );

    // Move focus to the Read more button and validate
    await page.keyboard.press('Tab');
    const readMoreButton1 = page.getByText('Read more');
    await expect(readMoreButton1).toBeVisible();
    await expect(readMoreButton1).toBeFocused();
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - Read more Button'
    );

    // Navigate to the "Clickable Card" story for ProductiveCard
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--clickable',
    });

    // Ensure no accessibility violations for the story
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - Clickable Card'
    );

    // Move focus to the card element and validate
    await page.keyboard.press('Tab');
    const cardElement = page.locator(
      `[data-carbon-devtools-id="${pkg.prefix}--ProductiveCard"]`
    );
    await expect(cardElement).toBeFocused();
    await expect(cardElement).toHaveAttribute('role', 'button');

    // Move focus to the Read more button and validate
    await page.keyboard.press('Tab');
    const readMoreButton2 = page.getByText('Read more');
    await expect(readMoreButton2).toBeVisible();
    await expect(readMoreButton2).toBeFocused();

    // Navigate to the "button with href" story for ProductiveCard
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'ibm-products-components-cards-productivecard--with-button-href',
    });

    // Ensure no accessibility violations for the story
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - button with href'
    );

    // Move focus to the href button and validate
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const hrefButton = page.getByText('Read more');
    await expect(hrefButton).toHaveAttribute('href', '#');
    await expect(hrefButton).toBeVisible();
    await expect(hrefButton).toBeFocused();
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - href Button'
    );
  });
});
