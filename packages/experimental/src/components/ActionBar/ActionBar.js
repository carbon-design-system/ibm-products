//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import uuidv4 from '../../global/js/utils/uuidv4';
import unwrapIfFragment from '../../global/js/utils/unwrap-if-fragment';

import { Canary } from '../_Canary';
import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}-action-bar`;
const componentName = 'ActionBar';

export const ActionBar = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({
      children,
      className,
      maxVisibleActionBarItems,
      onWidthChange,
      rightAlign,
    }) => {
      const [displayCount, setDisplayCount] = useState(0);
      const [displayedItems, setDisplayedItems] = useState([]);
      const internalId = useRef(uuidv4());
      const [childArray, setChildArray] = useState([]);
      const refDisplayedItems = useRef(null);

      const ActionBarOverflowItems = ({ overflowItems }) => {
        if (displayCount < childArray.length) {
          return (
            <OverflowMenu
              ariaLabel={null}
              className={`${blockClass}--overflow-menu`}
              direction="bottom"
              flipped
              menuOptionsClass={`${blockClass}--options`}>
              {overflowItems.map((item, index) => {
                // This uses a copy of a menu item option
                // NOTE: Cannot use a real Tooltip icon below as it uses a <button /> the
                // div equivalent below is based on Carbon 10.25.0
                return (
                  <OverflowMenuItem
                    className={`${blockClass}--overflow-menu-item`}
                    key={`${blockClass}-overflow-${internalId.current}-${index}`}
                    itemText={
                      <div
                        className={`${blockClass}--overflow-menu-item-content`}
                        aria-describedby={`${internalId}--overflow-menu-item-label`}>
                        <span
                          className={`${blockClass}--overflow-menu-item-label`}
                          id={`${internalId}--overflow-menu-item-label`}>
                          {item.props.iconDescription}
                        </span>
                        <item.props.renderIcon />
                      </div>
                    }
                  />
                );
              })}
            </OverflowMenu>
          );
        } else {
          return null;
        }
      };

      // create child array from children which may be a fragment
      useEffect(() => {
        setChildArray(unwrapIfFragment(children));
      }, [children]);

      // creates displayed items based on displayCount and alignment
      useEffect(() => {
        const newDisplayedItems = [];
        const newOverflowItems = [];

        // add visible items
        for (let index = 0; index < displayCount; index++) {
          newDisplayedItems.push(
            React.cloneElement(childArray[index], {
              key: `displayed-action-bar-item-${internalId.current}-${index}`,
            })
          );
        }

        // add overflow items
        for (let index = displayCount; index < childArray.length; index++) {
          newOverflowItems.push(
            React.cloneElement(childArray[index], {
              key: `overflow-action-bar-item-${internalId.current}-${index}`,
            })
          );
        }

        // add overflow menu with items
        if (newOverflowItems.length) {
          const overflowMenu = (
            <ActionBarOverflowItems
              overflowItems={newOverflowItems}
              key={`overflow-menu-${internalId.current}`}></ActionBarOverflowItems>
          );
          newDisplayedItems.push(overflowMenu);
        }

        setDisplayedItems(newDisplayedItems);
      }, [childArray, displayCount]);

      // determine display count based on space available and width of pageActions
      const checkFullyVisibleItems = () => {
        const spaceAvailable = refDisplayedItems.current.offsetWidth;
        const actionBarItemWidth = refDisplayedItems.current.offsetHeight; // short cut measure width

        console.log(
          'Hi',
          spaceAvailable,
          actionBarItemWidth,
          refDisplayedItems.current.parentNode.offsetWidth,
          refDisplayedItems.current.parentNode.parentNode.offsetWidth,
          refDisplayedItems.current.parentNode.parentNode.outerHTML
        );

        if (actionBarItemWidth > 0) {
          const mightFit = spaceAvailable / actionBarItemWidth;
          // visibleItems may include 1 overflow menu
          const visibleItems = maxVisibleActionBarItems
            ? Math.min(childArray.length, maxVisibleActionBarItems)
            : childArray.length;
          let willFit = Math.min(Math.floor(mightFit), visibleItems);

          onWidthChange &&
            onWidthChange({
              maxWidth: actionBarItemWidth * visibleItems,
              minWidth: actionBarItemWidth,
            });

          // action bar items are a fixed width
          if (willFit < childArray.length) {
            willFit -= 1; // remove one for overflow menu
          }

          setDisplayCount(willFit);
        }
      };

      useEffect(() => {
        checkFullyVisibleItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [maxVisibleActionBarItems, childArray.length]);

      const handleResize = () => {
        // width is the space available for all action bar items horizontally
        // the action bar items are squares so the height should be one item wide
        checkFullyVisibleItems();
      };

      return (
        <ReactResizeDetector onResize={handleResize}>
          <div className={cx([blockClass, className])}>
            <div
              ref={refDisplayedItems}
              className={cx([
                `${blockClass}--displayed-items`,
                { [`${blockClass}--displayed-items--right`]: rightAlign },
              ])}>
              {displayedItems}
            </div>
          </div>
        </ReactResizeDetector>
      );
    };

ActionBar.displayName = componentName;
ActionBar.propTypes = {
  /**
   * children of the action bar (action bar items)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]), // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * maximum visible ActionbBarItems
   */
  maxVisibleActionBarItems: PropTypes.number,
  /**
   * onItemCountChange - event reporting maxWidth
   */
  onWidthChange: PropTypes.func,
  /**
   * align tags to right of available space
   */
  rightAlign: PropTypes.bool,
  /**
   * heading for the show all modal
   */
};

ActionBar.defaultProps = {
  rightAlign: false,
};
