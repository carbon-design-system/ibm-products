//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { settings } from 'carbon-components';
const { prefix } = settings;

import {
  Breadcrumb,
  BreadcrumbItem,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { OverflowMenuHorizontal32 } from '@carbon/icons-react';

import { expPrefix } from '../../global/js/settings';

import ReactResizeDetector from 'react-resize-detector';

const blockClass = `${expPrefix}-breadcrumb-with-overflow`;

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
  const displayedArea = useRef(null);

  // eslint-disable-next-line react/prop-types
  const BreadcrumbOverflowMenu = ({ overflowItems }) => {
    return (
      <BreadcrumbItem key="breadcrumb-overflow">
        <OverflowMenu
          ariaLabel={null}
          renderIcon={OverflowMenuHorizontal32}
          className={`${blockClass}--overflow-menu`}>
          {
            // eslint-disable-next-line react/prop-types
            overflowItems.map((item, index) => (
              <OverflowMenuItem
                key={`${item.props.href}#${index}`}
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

  useEffect(() => {
    // updates displayedBreadcrumbItems and overflowBreadcrumbItems based on displayCount and children
    const newDisplayedBreadcrumbItems = [];
    const newOverflowBreadcrumbItems = [];

    // overflow starts from item 1 not the end
    for (let index = 0; index < children.length - displayCount; index++) {
      let child;
      if (displayCount === 0) {
        // adding them all
        child = children[index];
      } else {
        // adding just 1 to children.length - displayCount
        child = children[index + 1];
      }
      newOverflowBreadcrumbItems.push(React.cloneElement(child));
    }

    if (displayCount === 0) {
      newDisplayedBreadcrumbItems.push(
        <BreadcrumbOverflowMenu overflowItems={newOverflowBreadcrumbItems} />
      );
    } else {
      let displayed = 0;
      for (let index = 0; displayed < displayCount; index++) {
        displayed++;
        if (index === 1 && displayCount < children.length) {
          // we only want the last children.length - displayCount
          index += children.length - displayCount;
        }

        const child = children[index];
        newDisplayedBreadcrumbItems.push(
          React.cloneElement(child, {
            className: cx(
              child.props.className,
              `${blockClass}--displayed-breadcrumb`
            ),
            key: `displayed-breadcrumb-${child.key}`,
          })
        );
        if (index === 0 && displayCount < children.length) {
          // add overflow menu after first item

          // TODO: add a proper key
          newDisplayedBreadcrumbItems.push(
            <BreadcrumbOverflowMenu
              overflowItems={newOverflowBreadcrumbItems}
            />
          );
        }
      }
    }

    setDisplayedBreadcrumbItems(newDisplayedBreadcrumbItems);
  }, [children, displayCount]);

  const checkFullyVisibleBreadcrumbItems = () => {
    // how many will fit?
    let willFit = 0;
    let spaceAvailable = breadcrumbItemWithOverflow.current.clientWidth;

    if (sizingContainerRef.current) {
      const sizingBreadcrumbItems = sizingContainerRef.current.querySelectorAll(
        `.${prefix}--breadcrumb-item`
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
        breadcrumbWidthsIncludingMargin.push(item.clientWidth + marginWidths);
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
              <BreadcrumbItem>
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
            ref={displayedArea}
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
  overflowDirection: 'bottom',
};
