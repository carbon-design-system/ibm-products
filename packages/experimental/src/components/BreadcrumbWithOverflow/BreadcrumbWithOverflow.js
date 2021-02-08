//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import {
  Breadcrumb,
  BreadcrumbItem,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { OverflowMenuHorizontal32 } from '@carbon/icons-react';

import { pkgPrefix, carbonPrefix } from '../../global/js/settings';

import ReactResizeDetector from 'react-resize-detector';
import uuidv4 from '../../global/js/utils/uuidv4';
import unwrapIfFragment from '../../global/js/utils/unwrap-if-fragment';

const blockClass = `${pkgPrefix}-breadcrumb-with-overflow`;

export const BreadcrumbWithOverflow = ({
  children,
  className,
  maxVisibleBreadcrumbItems,
  noTrailingSlash,
  ...other
}) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [displayedBreadcrumbItems, setDisplayedBreadcrumbItems] = useState([]);
  const breadcrumbItemWithOverflow = useRef(null);
  const sizingContainerRef = useRef(null);
  const internalId = useRef(uuidv4());
  const [childArray, setChildArray] = useState([]);

  // eslint-disable-next-line react/prop-types
  const BreadcrumbOverflowMenu = ({ overflowItems }) => {
    return (
      <BreadcrumbItem key={`breadcrumb-overflow-${internalId.current}`}>
        <OverflowMenu
          ariaLabel={null}
          renderIcon={OverflowMenuHorizontal32}
          className={`${blockClass}--overflow-menu`}>
          {
            // eslint-disable-next-line react/prop-types
            overflowItems.map((item, index) => (
              <OverflowMenuItem
                key={`breadcrumb-overflow-menu-item-${internalId.current}-${index}`}
                href={item.props.href}
                onClick={item.props.onClick}
                itemText={item.props.children}
              />
            ))
          }
        </OverflowMenu>
      </BreadcrumbItem>
    );
  };

  // creates child array from children which may be a fragment
  useEffect(() => {
    setChildArray(unwrapIfFragment(children));
  }, [children]);

  useEffect(() => {
    // updates displayedBreadcrumbItems and overflowBreadcrumbItems based on displayCount and childArray
    const newDisplayedBreadcrumbItems = [];
    const newOverflowBreadcrumbItems = [];
    let child;

    // overflow starts from item 1 not the end
    for (let index = 0; index < childArray.length - displayCount; index++) {
      if (displayCount === 0) {
        // adding them all
        child = childArray[index];
      } else {
        // adding just 1 to childArray.length - displayCount
        child = childArray[index + 1];
      }
      newOverflowBreadcrumbItems.push(
        React.cloneElement(child, {
          key: `displayed-breadcrumb-${internalId}-overflow-item-${index}`,
        })
      );
    }

    if (displayCount === 0) {
      newDisplayedBreadcrumbItems.push(
        <BreadcrumbOverflowMenu
          overflowItems={newOverflowBreadcrumbItems}
          key={`$displayed-breadcrumb-${internalId}-overflow`}
        />
      );
    } else {
      let displayed = 0;
      for (
        let index = 0;
        displayed < displayCount && index < childArray.length;
        index++
      ) {
        displayed++;

        if (index === 1 && displayCount < childArray.length) {
          // we only want the last childArray.length - displayCount
          index += childArray.length - displayCount;
        }

        child = childArray[index];
        newDisplayedBreadcrumbItems.push(
          React.cloneElement(child, {
            className: cx([
              child.props.className,
              `${blockClass}--displayed-breadcrumb`,
            ]),
            key: `displayed-breadcrumb-${internalId.current}-${index}`,
          })
        );
        if (index === 0 && displayCount < childArray.length) {
          // add overflow menu after first item
          newDisplayedBreadcrumbItems.push(
            <BreadcrumbOverflowMenu
              overflowItems={newOverflowBreadcrumbItems}
              key={`$displayed-breadcrumb-${internalId}-overflow`}
            />
          );
        }
      }
    }

    setDisplayedBreadcrumbItems(newDisplayedBreadcrumbItems);
  }, [childArray, displayCount]);

  const checkFullyVisibleBreadcrumbItems = () => {
    // how many will fit?
    let willFit = 0;
    let spaceAvailable = breadcrumbItemWithOverflow.current.offsetWidth;

    if (sizingContainerRef.current) {
      const sizingBreadcrumbItems = sizingContainerRef.current.querySelectorAll(
        `.${carbonPrefix}--breadcrumb-item`
      );

      const breadcrumbWidthsIncludingMargin = [];
      for (let item of sizingBreadcrumbItems) {
        const computedStyle = window
          ? window.getComputedStyle(sizingBreadcrumbItems[0])
          : null;
        const marginWidths = computedStyle
          ? parseFloat(computedStyle.marginLeft, 0) +
            parseFloat(computedStyle.marginRight, 0)
          : 0;
        breadcrumbWidthsIncludingMargin.push(item.offsetWidth + marginWidths);
      }

      let overflowWidth = breadcrumbWidthsIncludingMargin[0];

      for (let i = 1; i < breadcrumbWidthsIncludingMargin.length; i++) {
        // add all that will fit (ignoring overflow breadcrumb for now)
        if (spaceAvailable >= breadcrumbWidthsIncludingMargin[i]) {
          spaceAvailable -= breadcrumbWidthsIncludingMargin[i];
          willFit += 1;
        } else {
          break;
        }
      }

      // address overflow breadcrumb if needed
      if (willFit < sizingBreadcrumbItems.length - 1) {
        // -1 for overflow item
        for (let i = 1; willFit > 0 && spaceAvailable < overflowWidth; i++) {
          // Highly unlikely any useful breadcrumb-item is smaller
          willFit -= 1; // remove one breadcrumb-item

          // we remove from 1 up not from end
          spaceAvailable += breadcrumbWidthsIncludingMargin[i];
        }
      }
    }

    setDisplayCount(
      maxVisibleBreadcrumbItems
        ? Math.min(willFit, maxVisibleBreadcrumbItems)
        : willFit
    );
  };

  useEffect(() => {
    checkFullyVisibleBreadcrumbItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVisibleBreadcrumbItems]);

  const handleResize = () => {
    checkFullyVisibleBreadcrumbItems();
  };

  const handleBreadcrumbItemsResize = () => {
    checkFullyVisibleBreadcrumbItems();
  };

  return (
    <ReactResizeDetector onResize={handleResize}>
      <div
        className={cx([blockClass, className])}
        ref={breadcrumbItemWithOverflow}>
        <div className={cx([`${blockClass}--space`])}>
          <ReactResizeDetector onResize={handleBreadcrumbItemsResize}>
            <div
              className={`${blockClass}--breadcrumb-container ${blockClass}--breadcrumb-container--hidden`}
              aria-hidden={true}
              ref={sizingContainerRef}>
              <BreadcrumbItem
                key={`${blockClass}-hidden-overflow-${internalId}`}>
                <OverflowMenu
                  ariaLabel={null}
                  renderIcon={OverflowMenuHorizontal32}
                />
              </BreadcrumbItem>
              {children}
            </div>
          </ReactResizeDetector>

          <Breadcrumb
            className={`${blockClass}--breadcrumb-container`}
            noTrailingSlash={noTrailingSlash}
            {...other}>
            {displayedBreadcrumbItems}
          </Breadcrumb>
        </div>
      </div>
    </ReactResizeDetector>
  );
};

BreadcrumbWithOverflow.propTypes = {
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
  /**
   * noTrailing slash - same as for Carbon
   */
  noTrailingSlash: PropTypes.bool,
};

BreadcrumbWithOverflow.defaultProps = {
  noTrailingSlash: false,
};
