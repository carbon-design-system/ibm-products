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
      id: 'components-cards-productivecard--default',
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
      id: 'components-cards-productivecard--with-caption',
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
      id: 'components-cards-productivecard--with-action-ghost-button',
    });

    await expect(page).toHaveNoACViolations('ProductiveCard @avt-disabled');
    const editButton = page.getByRole('button', { name: 'Edit' });
    const deleteButton = page.getByRole('button', { name: 'Delete' });
    const disabledButton = page.getByRole('button', { name: 'Read more' });

    expect(disabledButton.getAttribute('disabled')).not.toBeNull();

    await page.keyboard.press('Tab');
    await expect(editButton).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(deleteButton).toBeFocused();
    // disabled button
    await page.keyboard.press('Tab');
    expect(
      await disabledButton.evaluate((btn) => document.activeElement !== btn)
    ).toBe(true);
  });

  // Overflow menu open/close states test
  test('@avt-overflow-menu: validates overflow menu interactions', async ({
    page,
  }) => {
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--with-overflow',
    });

    const menuButton = page.getByRole('button', { label: 'Option' });
    const menu = page.getByRole('menu');

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

    // Wait for focus to move to the first menu item
    await expect(async () => {
      const firstMenuItem = await menuItems.first().elementHandle();
      const activeElement = await page.evaluateHandle(
        () => document.activeElement
      );
      const isSame = await page.evaluate(
        ([el1, el2]) => el1 === el2,
        [firstMenuItem, activeElement]
      );
      expect(isSame).toBe(true);
    }).toPass({ timeout: 2000 });
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
      id: 'components-cards-productivecard--supplemental-bottom-bar',
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

    // Tab Navigation in "Clickable Card" story for ProductiveCard, (zone one is default, whole card recieves focus)
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--clickable',
    });

    // Ensure no accessibility violations for the story
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @keyboard-navigation - Clickable Card'
    );

    // Move focus to the card element and validate
    await page.keyboard.press('Tab');
    const zone1 = page.getByRole('button', { name: /Title/i });
    await expect(zone1).toBeFocused();
    await expect(zone1).toHaveAttribute('role', 'button');

    // Move focus to the Read more button and validate
    await page.keyboard.press('Tab');
    const readMoreButton2 = page.getByText('Read more');
    await expect(readMoreButton2).toBeVisible();
    await expect(readMoreButton2).toBeFocused();

    // Validate zone two focus
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--clickable&args=clickZone:two',
    });
    await page.keyboard.press('Tab');

    const zone2 = page.locator('*:focus');
    await expect(zone2).toBeFocused();
    await expect(zone2).toHaveAttribute('role', 'button');
    await expect(zone2).toHaveClass(
      new RegExp(`${pkg.prefix}--card__header-body-container`)
    );

    // Move focus to the Read more button and validate
    await page.keyboard.press('Tab');
    const readMoreButton3 = page.getByText('Read more');
    await expect(readMoreButton3).toBeVisible();
    await expect(readMoreButton3).toBeFocused();

    // Validate zone three focus
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--clickable&args=clickZone:three',
    });
    await page.keyboard.press('Tab');
    const zone3 = page.locator('*:focus');
    await expect(zone3).toBeFocused();
    await expect(zone3).toHaveAttribute('role', 'button');
    await expect(zone3).toHaveClass(new RegExp(`${pkg.prefix}--card__body`));

    // Move focus to the Read more button and validate
    await page.keyboard.press('Tab');
    const readMoreButton4 = page.getByText('Read more');
    await expect(readMoreButton4).toBeVisible();
    await expect(readMoreButton4).toBeFocused();

    // Navigate to the "button with href" story for ProductiveCard
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--with-button-href',
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

  // hover states
  test('@avt-hover: validates hover states', async ({ page }) => {
    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--with-overflow',
    });
    const menuButton = page.getByRole('button', { label: 'Overflow menu' });
    const tooltip = page.getByRole('tooltip', { name: 'Overflow menu' });

    await menuButton.hover();
    await expect(page).toHaveNoACViolations(
      'ProductiveCard @hover - with overflow'
    );
    await expect(tooltip).toBeVisible();

    await visitStory(page, {
      component: 'ProductiveCard',
      id: 'components-cards-productivecard--default',
    });
    const editButton = page.getByLabel('Edit');
    const editTooltip = page.getByRole('tooltip', { name: 'Edit' });
    const deleteButton = page.getByLabel('Delete');
    const deleteTooltip = page.getByRole('tooltip', { name: 'Delete' });

    await editButton.hover();
    await expect(page).toHaveNoACViolations('ProductiveCard @hover - default');
    await expect(editTooltip).toBeVisible();

    await deleteButton.hover();
    await expect(page).toHaveNoACViolations('ProductiveCard @hover - default');
    await expect(deleteTooltip).toBeVisible();
  });
});
