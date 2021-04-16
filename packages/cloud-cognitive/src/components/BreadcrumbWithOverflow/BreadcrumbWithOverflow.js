//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

// Import portions of React that are needed.
import React, { useState, useEffect, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
import ReactResizeDetector from 'react-resize-detector';

// Carbon and package components we use.
import {
  Breadcrumb,
  BreadcrumbItem,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { OverflowMenuHorizontal32 } from '@carbon/icons-react';
import uuidv4 from '../../global/js/utils/uuidv4';
import unwrapIfFragment from '../../global/js/utils/unwrap-if-fragment';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--breadcrumb-with-overflow`;
const componentName = 'BreadcrumbWithOverflow';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The BreadcrumbWithOverflow is used internally by the PageHeader to wrap BreadcrumbItems.
 */
export let BreadcrumbWithOverflow = ({
  children,
  className,
  maxVisible,
  noTrailingSlash,
  overflowAriaLabel,
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
          menuOffset={{ top: 10, left: 59 }} // TODO: REMOVE borrowed from https://github.com/carbon-design-system/carbon/pull/7085
          renderIcon={OverflowMenuHorizontal32}
          className={`${blockClass}__overflow-menu`}
          menuOptionsClass={`${carbon.prefix}--breadcrumb-menu-options`} // TODO: REMOVE borrowed from https://github.com/carbon-design-system/carbon/pull/7085
        >
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
    if (childArray.length === 0) {
      setDisplayedBreadcrumbItems([]);
      return;
    }
    const getTitle = (item) => {
      // This function should extract text from item.props.children
      return item.props?.children?.props?.children;
    };

    // clones of children needed as the children are used in the sizing render
    const cloneChildren = (items) =>
      items.map((item, index) => {
        // likely truncated add title
        const title =
          index + 1 === childArray.length && displayCount === 1
            ? getTitle(item)
            : null;

        const className =
          index > 0 || displayCount > 1
            ? cx([
                childArray[index].props.className,
                `${blockClass}__displayed-breadcrumb`,
              ])
            : childArray[index].props.className;

        return React.cloneElement(item, { key: index, title, className });
      });

    const newDisplayedBreadcrumbItems = cloneChildren(childArray);

    // The breadcrumb has the form [first item] [overflow] [items 2...(n-1)] [last item].
    // The overflow is only shown if there isn't space to display all the items, and in that case:
    //  * the last item is always displayed (even if there isn't really space for it -- it can contract to an ellipsis);
    //  * the first item is the next to be displayed, if there's space once the last item and overflow are shown;
    //  * any remaining space after the first item, last item and overflow are shown is used to show items (n-1), (n-2), (n-3), ..., until the space is used up ;
    // Note that displayCount (min 1) has been computed based on the available space and the above sequence.
    const overflowPosition = displayCount > 1 ? 1 : 0;

    let newOverflowBreadcrumbItems = newDisplayedBreadcrumbItems.splice(
      overflowPosition,
      childArray.length - displayCount
    );

    // if needed add overflow menu
    if (newOverflowBreadcrumbItems.length) {
      newDisplayedBreadcrumbItems.splice(
        overflowPosition,
        0,
        <BreadcrumbOverflowMenu
          overflowItems={newOverflowBreadcrumbItems}
          key={`$displayed-breadcrumb-${internalId}-overflow`}
        />
      );
    }

    setDisplayedBreadcrumbItems(newDisplayedBreadcrumbItems);
  }, [childArray, displayCount]);

  const checkFullyVisibleBreadcrumbItems = () => {
    const displayItemIndex = (itemCount, index) => {
      // In this data set the overflow measuring item is [0]
      // so the first displayItem in the list is [1]
      // we never return 0;

      if (index === 0) {
        return itemCount - 1; // the last item in the list
      } else if (index === 1) {
        return 1; // the first item in the list
      } else {
        return itemCount - index; // count down from itemCount - 2 to 1
      }
    };

    if (maxVisible <= 1) {
      setDisplayCount(1);
    } else {
      // how many will fit?
      let willFit = 0;
      let spaceAvailable = breadcrumbItemWithOverflow.current.offsetWidth; // not sure how to test resize

      /* istanbul ignore next if */
      if (sizingContainerRef.current) {
        const sizingBreadcrumbItems = sizingContainerRef.current.querySelectorAll(
          `.${carbon.prefix}--breadcrumb-item`
        );

        const breadcrumbWidthsIncludingMargin = [];
        for (let item of sizingBreadcrumbItems) {
          const computedStyle = window
            ? window.getComputedStyle(sizingBreadcrumbItems[0])
            : null;

          const marginWidths = computedStyle
            ? parseFloat(computedStyle.marginLeft || 0, 10) +
              parseFloat(computedStyle.marginRight || 0, 10)
            : 0;

          breadcrumbWidthsIncludingMargin.push(item.offsetWidth + marginWidths);
        }

        let overflowWidth = breadcrumbWidthsIncludingMargin[0];

        for (let i = 0; i < breadcrumbWidthsIncludingMargin.length - 1; i++) {
          // count used one less than length to account for the included overflow item
          const index = displayItemIndex(
            breadcrumbWidthsIncludingMargin.length,
            i
          );

          if (spaceAvailable >= breadcrumbWidthsIncludingMargin[index]) {
            spaceAvailable -= breadcrumbWidthsIncludingMargin[index];
            willFit += 1;
          } else {
            break;
          }
        }

        // if not enough space for all breadcrumb items
        if (willFit < breadcrumbWidthsIncludingMargin.length - 1) {
          // -1 for overflow item

          while (willFit > 0 && spaceAvailable < overflowWidth) {
            willFit -= 1;

            // Highly unlikely any useful breadcrumb-item is smaller than the overflow menu, but we loop anyway just in case

            // item removed is based on last item added which is the current value of willFit
            const itemToRemove = displayItemIndex(
              breadcrumbWidthsIncludingMargin.length,
              willFit
            );
            spaceAvailable += breadcrumbWidthsIncludingMargin[itemToRemove];
          }
        }
      }

      if (willFit <= 1) {
        setDisplayCount(1);
      } else {
        setDisplayCount(maxVisible ? Math.min(willFit, maxVisible) : willFit);
      }
    }
  };

  useEffect(() => {
    checkFullyVisibleBreadcrumbItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxVisible]);

  const handleResize = () => {
    /* istanbul ignore next */ // not sure how to test resize
    checkFullyVisibleBreadcrumbItems();
  };

  const handleBreadcrumbItemsResize = () => {
    /* istanbul ignore next */ // not sure how to test resize
    checkFullyVisibleBreadcrumbItems();
  };

  return (
    <ReactResizeDetector onResize={handleResize}>
      <div
        className={cx([blockClass, className])}
        ref={breadcrumbItemWithOverflow}>
        <div className={cx([`${blockClass}__space`])}>
          {/* This next element is purely here to measure the size of the breadcrumb items */}
          <ReactResizeDetector onResize={handleBreadcrumbItemsResize}>
            <div
              className={`${blockClass}__breadcrumb-container ${blockClass}__breadcrumb-container--hidden`}
              aria-hidden={true}
              ref={sizingContainerRef}>
              <BreadcrumbItem
                key={`${blockClass}-hidden-overflow-${internalId}`}>
                <OverflowMenu
                  ariaLabel={overflowAriaLabel}
                  renderIcon={OverflowMenuHorizontal32}
                />
              </BreadcrumbItem>
              {children}
            </div>
          </ReactResizeDetector>

          <Breadcrumb
            className={`${blockClass}__breadcrumb-container`}
            noTrailingSlash={noTrailingSlash}
            {...other}>
            {displayedBreadcrumbItems}
          </Breadcrumb>
        </div>
      </div>
    </ReactResizeDetector>
  );
};

// Return a placeholder if not released and not enabled by feature flag
BreadcrumbWithOverflow = pkg.checkComponentEnabled(
  BreadcrumbWithOverflow,
  componentName
);

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
   * maxVisble: maximum visible breadcrumb-items before overflow is used (values less than 1 are treated as 1)
   */
  maxVisible: PropTypes.number,
  /**
   * noTrailing slash - same as for Carbon
   */
  noTrailingSlash: PropTypes.bool,
  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: PropTypes.string,
};

BreadcrumbWithOverflow.defaultProps = {
  overflowAriaLabel: 'Open and close additional breadcrumb item list.',
  noTrailingSlash: false,
};
BreadcrumbWithOverflow.displayName = componentName;
