/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../../test-utils/storybook';
import { pkg } from '../../../../packages/ibm-products/src/settings';

const blockClass = `${pkg.prefix}--coachmark__next`;

test.describe('Coachmark @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'Coachmark',
      id: 'preview-onboarding-coachmark--tooltip',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('Coachmark @avt-default-state');
  });

  test('@avt-initially-focus-done-button', async ({ page }) => {
    await visitStory(page, {
      component: 'Coachmark',
      id: 'preview-onboarding-coachmark--tooltip',
      globals: {
        carbonTheme: 'white',
      },
    });
    const primaryButton = page.getByRole('button', { name: 'Done' });
    await expect(primaryButton).toBeFocused();
  });

  test('@avt-dragging-happening-on-header', async ({ page }) => {
    await visitStory(page, {
      component: 'Coachmark',
      id: 'preview-onboarding-coachmark--floating',
      globals: {
        carbonTheme: 'white',
      },
    });

    const dragButton = page.getByRole('button', { name: 'Drag' });
    await expect(dragButton).toBeInViewport();

    await dragButton.press('Enter');

    const container = page.locator(`.${blockClass}--coachmark-content`);
    await expect(container).toBeVisible();

    const getPos = async () => {
      const draggableContainer = await container.boundingBox();
      if (draggableContainer)
        return { x: draggableContainer.x, y: draggableContainer.y };
    };

    const position = await getPos();

    await page.keyboard.press('ArrowLeft');
    const afterLeft = await getPos();
    expect(afterLeft.x).toBeLessThan(position.x);

    await page.keyboard.press('ArrowRight');
    const afterRight = await getPos();
    expect(afterRight.x).toBeGreaterThan(afterLeft.x);

    await page.keyboard.press('ArrowUp');
    const afterUp = await getPos();
    expect(afterUp.y).toBeLessThan(afterRight.y);

    await page.keyboard.press('ArrowDown');
    const afterDown = await getPos();
    expect(afterDown.y).toBeGreaterThan(afterUp.y);

    await dragButton.press('Enter');
    await page.keyboard.press('Escape');
    await expect(container).not.toBeVisible();

    const TriggerButton = page.getByRole('button', {
      name: 'Show information',
    });
    await TriggerButton.click();

    await expect(container).toBeVisible();
    const newPosition = await getPos();
    expect(position.x).toEqual(newPosition.x);
    expect(position.y).toEqual(newPosition.y);
  });
});
