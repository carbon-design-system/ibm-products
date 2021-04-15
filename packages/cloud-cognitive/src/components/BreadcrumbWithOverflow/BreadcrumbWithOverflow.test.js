/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { BreadcrumbItem } from 'carbon-components-react';
import { BreadcrumbWithOverflow } from '.';

import { pkg, carbon } from '../../settings';
const blockClass = `${pkg.prefix}--breadcrumb-with-overflow`;

const breadcrumbContent = [];
for (let i = 1; i <= 5; i++) {
  breadcrumbContent.push(`Breadcrumb ${i}`);
}
const breadcrumbItems = breadcrumbContent.map((item) => (
  <BreadcrumbItem key={item}>
    <a href="/#" onClick={() => {}}>
      {item}
    </a>
  </BreadcrumbItem>
));

const sizes = {
  breadcrumbWidth: 200,
  breadcrumbHeight: 40,
  breadcrumbMargin: 10,
};

const isBreadCrumbItem = function () {
  return this.classList?.contains(`${carbon.prefix}--breadcrumb-item`) || false;
};

Object.defineProperties(window.HTMLElement.prototype, {
  marginLeft: {
    get: () => sizes.breadcrumbMargin,
  },
  marginRight: {
    get: () => sizes.breadcrumbMargin,
  },
  offsetWidth: {
    get: function () {
      // const classList = [];
      // this.classList.forEach((val) => classList.push(val));
      // console.log(classList);
      if (isBreadCrumbItem.bind(this)()) {
        return sizes.breadcrumbWidth;
      } else {
        // return width of test environment
        return parseInt(this.style.width, 10) || this.parentNode.offsetWidth;
      }
    },
  },
  offsetHeight: {
    get: function () {
      if (isBreadCrumbItem.bind(this)()) {
        return sizes.breadcrumbHeight;
      } else {
        // return height of test environment
        return parseInt(this.style.height, 10) || this.parentNode.offsetHeight;
      }
    },
  },
});

// eslint-disable-next-line react/prop-types
const TestBreadcrumbWithOverflow = ({ width, children, ...rest }) => {
  return (
    <div style={{ width, height: 40 }}>
      <BreadcrumbWithOverflow className="fish" {...rest}>
        {children}
      </BreadcrumbWithOverflow>
    </div>
  );
};

describe(BreadcrumbWithOverflow.displayName, () => {
  const { click } = fireEvent;

  it('Renders all as visible breadcrumbs when space available', () => {
    const plentyOfSpace = (breadcrumbItems.length + 1) * sizes.breadcrumbWidth;

    const { container } = render(
      <TestBreadcrumbWithOverflow width={plentyOfSpace}>
        {breadcrumbItems}
      </TestBreadcrumbWithOverflow>
    );

    const visibleBreadcrumbs = container.querySelectorAll(
      `.${blockClass}__breadcrumb-container`
    )?.[1];
    const visibleItems = visibleBreadcrumbs.querySelectorAll(
      `.${carbon.prefix}--breadcrumb-item`
    );

    breadcrumbContent.forEach((item, index) => {
      expect(visibleItems[index]).toHaveTextContent(item);
    });
  });

  it('Renders first and last items when not enough space for all', () => {
    const reduceSpaceBy = 1;
    const notEnoughSpace =
      (breadcrumbItems.length - reduceSpaceBy) * sizes.breadcrumbWidth;
    const overflowItemsExpected = reduceSpaceBy + 1; // + 1 as space for overflow button needed also

    const { container } = render(
      <TestBreadcrumbWithOverflow width={notEnoughSpace}>
        {breadcrumbItems}
      </TestBreadcrumbWithOverflow>
    );

    const visibleBreadcrumbs = container.querySelectorAll(
      `.${blockClass}__breadcrumb-container`
    )?.[1];
    const visibleItems = visibleBreadcrumbs.querySelectorAll(
      `.${carbon.prefix}--breadcrumb-item`
    );
    // not enough room
    expect(visibleItems.length).toEqual(
      breadcrumbItems.length - reduceSpaceBy //
    );
    expect(visibleItems[0]).toHaveTextContent(breadcrumbContent[0]);
    // last item is last breadcrum
    expect(visibleItems[visibleItems.length - 1]).toHaveTextContent(
      breadcrumbContent[4]
    );
    // item 2 contains an overflow menu
    const overflowBtn = visibleItems[1].querySelector(
      `.${carbon.prefix}--overflow-menu`
    );
    expect(overflowBtn).toBeTruthy();

    click(overflowBtn);

    // <ul role='menu' /> but default <ul> role of list used for query
    // see https://testing-library.com/docs/queries/byrole/#api
    // const om = screen.getByRole('list');
    const menuItems = screen.getAllByRole('menuitem'); // expected this to be listitem based on above comment
    expect(menuItems).toHaveLength(overflowItemsExpected);
    expect(menuItems[0]).toHaveTextContent(breadcrumbContent[1]);
    expect(menuItems[1]).toHaveTextContent(breadcrumbContent[2]);
  });
});
