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

test.describe('ExpressiveCard @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--default',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-default-state'
    );
    const buttonEle = page.getByText('Read more');
    // Pressing 'Tab' key to focus on the "Read more" button
    await page.keyboard.press('Tab');
    await expect(buttonEle).toBeFocused();
  });

  test('@avt-label-only-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--label-only',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-label-only-state'
    );
  });
  test('@avt-with-caption-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-caption',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-caption-state'
    );
  });
  test('@avt-with-media-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-media',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-media-state'
    );
  });
  test('@avt-with-action-icon-link-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-action-icon-link',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-action-icon-link-state'
    );

    const hrefEle = page.locator('a[href="https://carbondesignsystem.com/"]');
    // Pressing 'Tab' key to focus on the '->' href button
    await page.keyboard.press('Tab');
    await expect(hrefEle).toBeFocused();
  });
  test('@avt-with-pictogram-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-pictogram',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-pictogram-state'
    );
  });
  test('@avt-with-secondary-action-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-secondary-action',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-secondary-action-state'
    );
    const primaryButtonEle = page.getByText('Remove');
    const secondaryButtonEle = page.getByText('Read more');
    // Pressing 'Tab' key to focus on the "Remove" button
    await page.keyboard.press('Tab');
    await expect(primaryButtonEle).toBeFocused();
    // Pressing 'Tab' key to focus on the "Read more" button
    await page.keyboard.press('Tab');
    await expect(secondaryButtonEle).toBeFocused();
  });
  test('@avt-clickable-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--clickable',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-clickable-state'
    );
    const cardElement = page.locator(`.${pkg.prefix}--card__clickable`);
    // Pressing 'Tab' key to focus on the clickable card
    await page.keyboard.press('Tab');
    await expect(cardElement).toBeFocused();
  });
  test('@avt-with-button-href-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-button-href',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-button-href-state'
    );
  });
  test('@avt-with-button-icon-state', async ({ page }) => {
    await visitStory(page, {
      component: 'ExpressiveCard',
      id: 'components-cards-expressivecard--with-button-icon',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'ExpressiveCard @avt-with-button-icon-state'
    );
  });
});
