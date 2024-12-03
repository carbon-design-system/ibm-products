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

test.describe('TagSet @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--five-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('TagSet @avt-default-state');
  });
  test('@avt-many-tags', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--many-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('TagSet @avt-many-tags');
  });
  test('@avt-multiline-tags', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--multiline-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('TagSet @avt-multiline-tags');
  });
  test('@avt-hundreds-of-tags', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--hundreds-of-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('TagSet @avt-hundreds-of-tags');
  });
  test('@avt-with-close', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--with-close',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations('TagSet @avt-with-close');
  });
  test('@avt-with-close-and-overflow-tags', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--with-close-and-overflow-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    await expect(page).toHaveNoACViolations(
      'TagSet @avt-with-close-and-overflow-tags'
    );
  });

  //open close popover
  test('@avt-open-and-close-tags', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--many-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    const moreTagsButton = page.locator(
      `.${pkg.prefix}--tag-set-overflow__popover-trigger`
    );

    moreTagsButton.click();
    await expect(
      page.locator(`.${carbon.prefix}--popover--open`)
    ).toBeVisible();

    moreTagsButton.click();
    await expect(page.locator(`.${carbon.prefix}--popover--open`)).toBeHidden();
  });

  //open close popover
  test('@avt-open-and-close-all-tags-modal', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--many-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    const moreTagsButton = page.locator(
      `.${pkg.prefix}--tag-set-overflow__popover-trigger`
    );
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    moreTagsButton.click();

    await page
      .locator(`.${pkg.prefix}--tag-set-overflow__show-all-tags-link`)
      .click();

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(page.getByRole('heading', { name: 'All tags' })).toBeVisible();

    //checking search funtionality
    await expect(page.getByRole('searchbox')).toBeFocused();
    await expect(modalElement.getByText('Two')).toBeVisible();
    await page.getByRole('searchbox').fill('One');
    await expect(modalElement.getByText('Two')).toBeHidden();

    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.locator(`.${carbon.prefix}--modal`)).toBeHidden();
  });

  test('@avt-close-tags', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--with-close-and-overflow-tags',
      globals: {
        carbonTheme: 'white',
      },
    });

    await expect(
      page.locator('.dev-prefix--c4p--tag-set__displayed-tag').getByText('One')
    ).toBeVisible();
    await page.getByRole('button', { name: 'Dismiss' }).first().click();
    await expect(
      page.locator('.dev-prefix--c4p--tag-set__displayed-tag').getByText('One')
    ).toBeHidden();
  });

  test('@avt-keyboard', async ({ page }) => {
    await visitStory(page, {
      component: 'TagSet',
      id: 'ibm-products-components-tag-set-tagset--with-close-and-overflow-tags',
      globals: {
        carbonTheme: 'white',
      },
    });
    const modalElement = page.locator(`.${carbon.prefix}--modal.is-visible`);

    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('button', { name: 'Dismiss' }).first()
    ).toBeFocused();
    pressTabKey(page, 6);

    const moreTagsButton = page.locator(
      `.${pkg.prefix}--tag-set-overflow__popover-trigger`
    );
    await expect(moreTagsButton).toBeFocused();
    await page.keyboard.press('Enter');

    await expect(
      page.locator(`.${carbon.prefix}--popover--open`)
    ).toBeVisible();

    pressTabKey(page, 1); //first tag inside popover is focussed
    await expect(
      page
        .locator(`.${pkg.prefix}--tag-set-overflow__tag-list`)
        .getByRole('button', { name: 'Dismiss' })
        .first()
    ).toBeFocused();

    pressTabKey(page, 10);

    await expect(
      page.locator(`.${pkg.prefix}--tag-set-overflow__show-all-tags-link`)
    ).toBeFocused(); //view all tags modal link is focussed

    await page.keyboard.press('Enter');

    await modalElement.evaluate((element) =>
      Promise.all(
        element.getAnimations().map((animation) => animation.finished)
      )
    );

    await expect(page.getByRole('heading', { name: 'All tags' })).toBeVisible();
    pressTabKey(page, 1);
    await page.keyboard.press('Enter');
    await expect(page.locator(`.${carbon.prefix}--modal`)).toBeHidden();
  });
});
async function pressTabKey(page, number) {
  for (let i = 0; i < number; i++) {
    await page.keyboard.press('Tab');
  }
}
