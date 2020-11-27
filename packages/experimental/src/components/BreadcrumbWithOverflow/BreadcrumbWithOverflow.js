//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// import { settings } from 'carbon-components';
// const { prefix } = settings;

import { BreadcrumbItem, OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import { OverflowMenuHorizontal32 } from '@carbon/icons-react';

import { expPrefix } from '../../global/js/settings';

import ReactResizeDetector from 'react-resize-detector';

const blockClass = `${expPrefix}-breadcrumb-with-overflow`;

export const BreadcrumbItemWithOverflow = ({
  children,
  className,
  maxVisibleBreadcrumbItems,
}) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [displayedBreadcrumbItems, setDisplayedBreadcrumbItems] = useState([]);
  const [allBreadcrumbItems, setAllBreadcrumbItems] = useState([]);
  const breadcrumbItemWithOverflow = useRef(null);
  const displayedArea = useRef(null);
  const sizingOverflowItem = useRef(null);
  const sizingBreadcrumbItems = useRef([]);

write a story see if it works

  useEffect(() => {
    // updates displayedBreadcrumbItems and overflowBreadcrumbItems based on displayCount and children
    setAllBreadcrumbItems(
      [<div key={`overflow/${children[0].props.href}`} ref={sizingOverflowItem}><BreadcrumbItem><OverflowMenuItem renderIcon={<OverflowMenuHorizontal32 />}/></BreadcrumbItem></div>,
      ...children.map((child, index) => {
        return (
          <div
            key={`sizing-breadcrumb-item-${child.key}`}
            className={`${blockClass}--sizing-breadcrumb-item`}
            ref={(el) => (sizingBreadcrumbItems.current[index] = el)}>
            {React.cloneElement(child)}
          </div>
        );
      })]
    );
    const newDisplayedBreadcrumbItems = [];
    const newOverflowBreadcrumbItems = [];

    for (let index = displayCount; index < children.length; index++) {
      const child = children(index);
      if (index >= displayCount) {
        newOverflowBreadcrumbItems.push(
          child
        );
      }
    }

    for (let index = 0; index < displayCount; index++) {
      const child = children(index);
      newDisplayedBreadcrumbItems.push(
        <div
          key={`displayed-breadcrumb-item-${child.key}`}
          className={`${blockClass}--displayed-breadcrumb-item`}>
          {React.cloneElement(child)}
        </div>
      );
      if (index === 0) {
        // add overflow menu after first item
        newDisplayedBreadcrumbItems.push(
          <BreadcrumbItem>
            <OverflowMenu>
              {newOverflowBreadcrumbItems.map(item => <overflowMenuItem key={item.props.href} href={item.props.href}>{item.props.children}</overflowMenuItem>)}
            </OverflowMenu>
          </BreadcrumbItem>
        )
      }
    }

    setDisplayedBreadcrumbItems(newDisplayedBreadcrumbItems);
  }, [children, displayCount]);

  const checkFullyVisibleBreadcrumbItems = () => {
    // how many will fit?
    let willFit = 0;
    let spaceAvailable = breadcrumbItemWithOverflow.current.clientWidth;

    for (let i in sizingBreadcrumbItems.current) {
      const breadcrumbItemWidth = sizingBreadcrumbItems.current[i].clientWidth;
      if (spaceAvailable >= breadcrumbItemWidth) {
        spaceAvailable -= breadcrumbItemWidth;
        willFit += 1;
      } else {
        break;
      }
    }


    if (willFit < sizingBreadcrumbItems.current.length) {
      while (willFit > 0 && spaceAvailable < sizingOverflowItem.current.clientWidth) {
        // Highly unlikely any useful breadcrumb-item is smaller
        willFit -= 1; // remove one breadcrumb-item
        spaceAvailable += sizingBreadcrumbItems.current[willFit].clientWidth;
      }
    }

    setDisplayCount(
      maxVisibleBreadcrumbItems ? Math.min(willFit, maxVisibleBreadcrumbItems) : willFit
    );
  };

  useEffect(() => {
    checkFullyVisibleBreadcrumbItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVisibleBreadcrumbItems, sizingBreadcrumbItems]);

  const handleResize = () => {
    checkFullyVisibleBreadcrumbItems();
  };

  const handleBreadcrumbItemsResize = () => {
    checkFullyVisibleBreadcrumbItems();
  };

  return (
    <ReactResizeDetector onResize={handleResize}>
      <div className={cx([blockClass, className])} ref={breadcrumbItemWithOverflow}>
        <div
          className={cx([
            `${blockClass}--space`,
          ])}>
          <ReactResizeDetector onResize={handleBreadcrumbItemsResize}>
            <div
              className={`${blockClass}--breadcrumb-item-container ${blockClass}--breadcrumb-item-container--hidden`}
              aria-hidden={true}>
              {allBreadcrumbItems}
            </div>
          </ReactResizeDetector>

          <div className={`${blockClass}--breadcrumb-item-container`} ref={displayedArea}>
            {displayedBreadcrumbItems}
          </div>
        </div>
      </div>
    </ReactResizeDetector>
  );
};

BreadcrumbItemWithOverflow.propTypes = {
  /**
   * children of the breadcrumb-item set (these are expected to be breadcrumb-items)
   */
  children: PropTypes.arrayOf(PropTypes.element),
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * maximum visible breadcrumb-items
   */
  maxVisibleBreadcrumbItems: PropTypes.number,
};

BreadcrumbItemWithOverflow.defaultProps = {
  overflowDirection: 'bottom',
};
