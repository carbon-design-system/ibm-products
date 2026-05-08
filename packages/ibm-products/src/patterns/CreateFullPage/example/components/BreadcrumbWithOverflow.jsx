//
// Copyright IBM Corp. 2026
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, {
  useState,
  useEffect,
  useRef,
  useId,
  useLayoutEffect,
} from 'react';

import cx from 'classnames';

// Carbon and package components we use.
import {
  Breadcrumb,
  BreadcrumbItem,
  Link,
  OverflowMenu,
  Tooltip,
  usePrefix,
  unstable_FeatureFlags as FeatureFlags,
  MenuItem,
} from '@carbon/react';
import { ArrowLeft, OverflowMenuHorizontal } from '@carbon/react/icons';

import { TooltipTrigger } from '../../../../components/TooltipTrigger';

const blockClass = 'breadcrumb-with-overflow';
const componentName = 'BreadcrumbWithOverflow';

// Custom hook that uses either `useLayoutEffect` or `useEffect` based on the environment (client-side or server-side).
const useIsomorphicEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Custom hook for observing element resize
const useResizeObserver = (ref, onResize) => {
  const [width, setWidth] = useState(-1);
  const [height, setHeight] = useState(-1);
  const entriesToHandle = useRef(null);
  const cb = useRef(onResize);

  useEffect(() => {
    // ref for onResize removes it as dependency from useIsomorphicEffect
    // This significantly reduces repeated calls if a function is redefined on every
    // render
    cb.current = onResize;
  }, [onResize]);

  useEffect(() => {
    const getInitialSize = () => {
      if (ref.current) {
        const refComputedStyle = window.getComputedStyle(ref.current);

        const initialWidth =
          (ref.current?.offsetWidth ?? 0) -
          (typeof refComputedStyle?.paddingLeft === 'string' &&
          refComputedStyle?.paddingLeft.length
            ? parseFloat(refComputedStyle?.paddingLeft)
            : 0) -
          (typeof refComputedStyle?.paddingRight === 'string' &&
          refComputedStyle?.paddingRight.length
            ? parseFloat(refComputedStyle?.paddingRight)
            : 0);

        const initialHeight =
          (ref.current?.offsetHeight ?? 0) -
          (typeof refComputedStyle?.paddingTop === 'string' &&
          refComputedStyle?.paddingTop.length
            ? parseFloat(refComputedStyle?.paddingTop)
            : 0) -
          (typeof refComputedStyle?.paddingBottom === 'string' &&
          refComputedStyle?.paddingBottom.length
            ? parseFloat(refComputedStyle?.paddingBottom)
            : 0);

        setWidth(initialWidth);
        setHeight(initialHeight);
      }
    };
    if (!ref?.current || (width >= 0 && height >= 0)) {
      return;
    }
    getInitialSize();
    // Ignoring exhaustive-deps as we do NOT want to include the ref in dep array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  useIsomorphicEffect(() => {
    if (!ref?.current) {
      return;
    }

    const doCallbacks = () => {
      if (!ref?.current || !Array.isArray(entriesToHandle?.current)) {
        return;
      }

      const entry = entriesToHandle.current[0];

      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      cb.current && cb.current(entry.contentRect);
    };

    const observer = new ResizeObserver((entries) => {
      // always update entriesToHandle
      entriesToHandle.current = entries;

      window.requestAnimationFrame(() => {
        // do callbacks
        doCallbacks();
      });
    });

    // observe all refs passed
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);
  return { width, height };
};

export let BreadcrumbWithOverflow = ({
  breadcrumbs,
  className,
  label,
  maxVisible,
  noTrailingSlash,
  overflowAriaLabel,
  overflowTooltipAlign,
  ...other
}) => {
  const carbonPrefix = usePrefix();
  const [displayCount, setDisplayCount] = useState(3);
  const [displayedBreadcrumbItems, setDisplayedBreadcrumbItems] = useState([]);
  const breadcrumbItemWithOverflow = useRef(null);
  const sizingContainerRef = useRef(null);
  const internalId = useId();
  const [hiddenSizingItems, setHiddenSizingItems] = useState([]);

  // eslint-disable-next-line react/prop-types
  const BreadcrumbOverflowMenu = ({ overflowItems }) => {
    const handleClick = (evt, item) => {
      if (item?.props?.href) {
        window.location.href = item.props.href;
      }
      item?.props?.onClick?.(evt);
    };

    return (
      <BreadcrumbItem key={`breadcrumb-overflow-${internalId}`}>
        <FeatureFlags enableV12Overflowmenu>
          <OverflowMenu
            role="navigation"
            aria-label={overflowAriaLabel}
            label={overflowAriaLabel} // also needs setting to avoid a11y "Accessible name does not match or contain the visible label text"
            renderIcon={(props) => (
              <OverflowMenuHorizontal size={32} {...props} />
            )}
            className={`${blockClass}__overflow-menu`}
            tooltipAlignment={overflowTooltipAlign}
          >
            {
              // eslint-disable-next-line react/prop-types
              overflowItems.map((item, index) => (
                <MenuItem
                  key={`breadcrumb-overflow-menu-item-${internalId}-${index}`}
                  onClick={(evt) => handleClick(evt, item)}
                  label={item.props.children}
                />
              ))
            }
          </OverflowMenu>
        </FeatureFlags>
      </BreadcrumbItem>
    );
  };

  // create hidden sizing items
  useEffect(() => {
    // Hidden action bar and items used to calculate sizes
    setHiddenSizingItems(
      <div
        className={`${blockClass}__breadcrumb-container ${blockClass}__breadcrumb-container--hidden`}
        aria-hidden={true}
        ref={sizingContainerRef}
      >
        <Breadcrumb aria-label={`${label}-hidden`}>
          <BreadcrumbItem key={`${blockClass}-hidden-overflow-${internalId}`}>
            <OverflowMenu
              role="navigation"
              aria-label={overflowAriaLabel}
              renderIcon={(props) => (
                <OverflowMenuHorizontal size={32} {...props} />
              )}
            />
          </BreadcrumbItem>
          {breadcrumbs.map(
            ({
              label,
              key,
              title,
              id,
              // short title isn't necessary for the hidden sizing
              // eslint-disable-next-line no-unused-vars
              shortTitle,
              ...rest
            }) => (
              <BreadcrumbItem
                key={key}
                {...rest}
                // ensure id is not duplicated
                data-original-id={id}
                title={title ?? label}
              >
                {label}
              </BreadcrumbItem>
            )
          )}
        </Breadcrumb>
      </div>
    );
  }, [breadcrumbs, label, overflowAriaLabel]);

  useEffect(() => {
    // updates displayedBreadcrumbItems and overflowBreadcrumbItems based on displayCount and breadcrumbs
    /* istanbul ignore if */
    if (breadcrumbs.length === 0) {
      setDisplayedBreadcrumbItems([]);
      return;
    }

    const newDisplayedBreadcrumbItems = breadcrumbs.map(
      ({ className, key, label, shortTitle, title, ...rest }, index) => (
        <BreadcrumbItem
          key={key}
          className={
            index > 0 || displayCount > 1
              ? cx([className, `${blockClass}__displayed-breadcrumb`])
              : className
          }
          title={index + 1 === breadcrumbs.length ? title : null}
          {...rest}
        >
          {shortTitle || label}
        </BreadcrumbItem>
      )
    );

    // The breadcrumb has the form [first item] [overflow] [items 2...(n-1)] [last item].
    // The overflow is only shown if there isn't space to display all the items, and in that case:
    //  * the last item is always displayed (even if there isn't really space for it -- it can contract to an ellipsis);
    //  * the first item is the next to be displayed, if there's space once the last item and overflow are shown;
    //  * any remaining space after the first item, last item and overflow are shown is used to show items (n-1), (n-2), (n-3), ..., until the space is used up ;
    // Note that displayCount (min 1) has been computed based on the available space and the above sequence.
    const overflowPosition = displayCount > 1 ? 1 : 0;

    let newOverflowBreadcrumbItems = newDisplayedBreadcrumbItems.splice(
      overflowPosition,
      breadcrumbs.length - displayCount
    );

    // if needed add overflow menu
    if (newOverflowBreadcrumbItems.length) {
      newDisplayedBreadcrumbItems.splice(
        overflowPosition,
        0,
        <BreadcrumbOverflowMenu
          overflowItems={newOverflowBreadcrumbItems}
          key={`displayed-breadcrumb-${internalId}-overflow`}
        />
      );
    }

    setDisplayedBreadcrumbItems(newDisplayedBreadcrumbItems);
  }, [breadcrumbs, displayCount]);

  const checkFullyVisibleBreadcrumbItems = () => {
    if (!breadcrumbItemWithOverflow.current) {
      return;
    }

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

      /* istanbul ignore next */
      if (sizingContainerRef.current) {
        const sizingBreadcrumbItems =
          sizingContainerRef.current.querySelectorAll(
            `.${carbonPrefix}--breadcrumb-item`
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
  }, [hiddenSizingItems, maxVisible]);

  /* istanbul ignore next */ // not sure how to test resize
  const handleResize = () => {
    /* istanbul ignore next */ // not sure how to test resize
    checkFullyVisibleBreadcrumbItems();
  };

  let backItem = breadcrumbs[breadcrumbs.length - 1];
  /* istanbul ignore if */ // not sure how to test media queries
  if (backItem.isCurrentPage) {
    backItem = breadcrumbs[breadcrumbs.length - 2];
  }

  // container resize
  useResizeObserver(sizingContainerRef, handleResize);
  // item resize
  useResizeObserver(breadcrumbItemWithOverflow, handleResize);

  return (
    <div
      className={cx(blockClass, className, {
        [`${blockClass}__with-items`]: displayedBreadcrumbItems.length > 1,
      })}
      ref={breadcrumbItemWithOverflow}
    >
      <div className={cx([`${blockClass}__space`])}>
        {hiddenSizingItems}

        <Breadcrumb
          aria-label={label}
          className={cx(`${blockClass}__breadcrumb-container`, {
            [`${blockClass}__breadcrumb-container-with-items`]:
              displayedBreadcrumbItems.length > 1,
          })}
          noTrailingSlash={noTrailingSlash}
          {...other}
        >
          {backItem?.href && (backItem?.label || backItem?.title) && (
            <BreadcrumbItem className={cx(`${blockClass}__breadcrumb-back`)}>
              <Link
                href={backItem.href}
                renderIcon={() => (
                  <Tooltip
                    align="right"
                    label={backItem.title || backItem.label}
                    className={`${blockClass}__back__button ${carbonPrefix}--icon-tooltip`}
                  >
                    <TooltipTrigger>
                      <ArrowLeft size={16} />
                    </TooltipTrigger>
                  </Tooltip>
                )}
              />
            </BreadcrumbItem>
          )}
          {displayedBreadcrumbItems}
        </Breadcrumb>
      </div>
    </div>
  );
};

BreadcrumbWithOverflow.displayName = componentName;
