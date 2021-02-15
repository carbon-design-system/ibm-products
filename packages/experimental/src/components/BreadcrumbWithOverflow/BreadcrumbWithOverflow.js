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

    // The breadcrumb has the form [first item] [overflow] [items 2...(n-1)] [last item].
    // The overflow is only shown if there isn't space to display all the items, and in that case:
    //  * the last item is always displayed (even if there isn't really space for it -- it can contract to an ellipsis);
    //  * the first item is the next to be displayed, if there's space once the last item and overflow are shown;
    //  * any remaining space after the first item, last item and overflow are shown is used to show items (n-1), (n-2), (n-3), ..., until the space is used up ;
    // Note that displayCount has been computed based on the available space and the above sequence.
    const overflowStart = displayCount > 1 ? 1 : 0;
    for (let i = overflowStart; i < childArray.length - displayCount; i++) {
      child = childArray[i];

      newOverflowBreadcrumbItems.push(
        React.cloneElement(child, {
          key: `displayed-breadcrumb-${internalId}-overflow-item-${i}`,
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
      const addOverflow = () => {
        newDisplayedBreadcrumbItems.push(
          <BreadcrumbOverflowMenu
            overflowItems={newOverflowBreadcrumbItems}
            key={`$displayed-breadcrumb-${internalId}-overflow`}
          />
        );
      };

      for (let i = 0; displayed < displayCount && i < childArray.length; i++) {
        // either last item only
        // first plus displayCount - 1 from end
        // or all
        const index =
          displayCount === 1
            ? (i = childArray.length - 1)
            : i === 1 && displayCount < childArray.length
            ? (i += childArray.length - displayCount)
            : i;

        displayed++;

        if (displayCount === 1) {
          // add overflow menu before only item
          addOverflow();
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

        if (i === 0 && displayCount < childArray.length) {
          // add overflow menu after first item
          addOverflow();
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

      for (let i = 0; i < breadcrumbWidthsIncludingMargin.length - 1; i++) {
        // 0 = add all that will fit (ignoring overflow breadcrumb for now)
        // last = important
        // first next most important
        // then descending order
        const index =
          i === 0
            ? breadcrumbWidthsIncludingMargin.length - 1
            : i === 1
            ? 1
            : breadcrumbWidthsIncludingMargin.length - i;

        if (spaceAvailable >= breadcrumbWidthsIncludingMargin[index]) {
          spaceAvailable -= breadcrumbWidthsIncludingMargin[index];
          willFit += 1;
        } else {
          break;
        }
      }

      // address overflow breadcrumb if needed
      if (willFit > 1 && willFit < sizingBreadcrumbItems.length - 1) {
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
