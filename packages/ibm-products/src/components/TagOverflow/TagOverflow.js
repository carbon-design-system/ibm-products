/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { isRequiredIf } from '../../global/js/utils/props-helper';
import { pkg } from '../../settings';

import { Tag, Tooltip } from '@carbon/react';
import { TYPES } from './constants';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';
import { TagOverflowPopover } from './TagOverflowPopover';
import { TagOverflowModal } from './TagOverflowModal';

const blockClass = `${pkg.prefix}--tag-overflow`;
const componentName = 'TagOverflow';

const allTagsModalSearchThreshold = 10;

// Default values for props
const defaults = {
  items: [],
  align: 'start',
  measurementOffset: 0,
  overflowAlign: 'bottom',
  overflowType: 'default',
  onOverflowTagChange: () => {},
};

/**
 * TODO: A description of the component.
 */
export let TagOverflow = React.forwardRef(
  (
    {
      items = defaults.items,
      tagComponent,
      align = defaults.align,
      showAllTagsLabel,
      allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText,
      allTagsModalTarget,
      allTagsModalTitle,
      className,
      containingElementRef,
      measurementOffset = defaults.measurementOffset,
      maxVisible,
      multiline,
      overflowAlign = defaults.overflowAlign,
      overflowClassName,
      overflowType = defaults.overflowType,
      onOverflowTagChange = defaults.onOverflowTagChange,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const localContainerRef = useRef(null);
    const containerRef = ref || localContainerRef;
    const itemRefs = useRef(null);
    const overflowRef = useRef(null);
    // itemOffset is the value of margin applied on each items
    // This value is required for calculating how many items will fit within the container
    const itemOffset = 4;
    const overflowIndicatorWidth = 40;

    const [containerWidth, setContainerWidth] = useState(0);
    const [visibleItems, setVisibleItems] = useState([]);
    const [overflowItems, setOverflowItems] = useState([]);
    const [showAllModalOpen, setShowAllModalOpen] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);

    const resizeElm =
      containingElementRef && containingElementRef.current
        ? containingElementRef
        : containerRef;

    const handleShowAllClick = () => {
      setShowAllModalOpen(true);
    };

    const handleModalClose = () => {
      setShowAllModalOpen(false);
    };

    const handleResize = () => {
      setContainerWidth(resizeElm.current.offsetWidth);
    };

    useResizeObserver(resizeElm, handleResize);

    const getMap = () => {
      if (!itemRefs.current) {
        itemRefs.current = new Map();
      }
      return itemRefs.current;
    };

    const itemRefHandler = (id, node) => {
      const map = getMap();
      if (id && node && map.get(id) !== node.offsetWidth) {
        map.set(id, node.offsetWidth);
      }
    };

    const getVisibleItems = useCallback(() => {
      if (!itemRefs.current) {
        return items;
      }

      if (multiline) {
        const visibleItems = maxVisible ? items?.slice(0, maxVisible) : items;
        return visibleItems;
      }

      const map = getMap();
      const optionalContainingElement = containingElementRef?.current;
      const measurementOffsetValue =
        typeof measurementOffset === 'number' ? measurementOffset : 0;
      let spaceAvailable = optionalContainingElement
        ? optionalContainingElement.offsetWidth - measurementOffsetValue
        : containerWidth;

      const overflowContainerWidth =
        overflowRef.current?.offsetWidth > overflowIndicatorWidth
          ? overflowRef.current.offsetWidth
          : overflowIndicatorWidth;
      const maxWidth = spaceAvailable - overflowContainerWidth;

      let childrenWidth = 0;
      let maxReached = false;

      return items.reduce((prev, cur) => {
        if (!maxReached) {
          const itemWidth = map.get(cur.id) + itemOffset;
          const fits = itemWidth + childrenWidth < maxWidth;

          if (fits) {
            childrenWidth += itemWidth;
            prev.push(cur);
          } else {
            maxReached = true;
          }
        }
        return prev;
      }, []);
    }, [
      itemRefs,
      overflowRef,
      containerWidth,
      items,
      multiline,
      maxVisible,
      containingElementRef,
      measurementOffset,
    ]);

    const getCustomComponent = (item) => {
      const { className, id, ...other } = item;
      return React.createElement(tagComponent, {
        ...other,
        className: cx(`${blockClass}__item`, className),
        ref: (node) => itemRefHandler(id, node),
      });
    };

    useEffect(() => {
      let visibleItemsArr = getVisibleItems();

      if (maxVisible && maxVisible < visibleItemsArr.length) {
        visibleItemsArr = visibleItemsArr?.slice(0, maxVisible);
      }

      const hiddenItems = items?.slice(visibleItemsArr.length);
      const overflowItemsArr = hiddenItems?.map(({ tagType, ...other }) => {
        return { type: tagType, ...other };
      });

      setVisibleItems(visibleItemsArr);
      setOverflowItems(overflowItemsArr);
      onOverflowTagChange?.(overflowItemsArr);
    }, [
      containerWidth,
      items,
      maxVisible,
      getVisibleItems,
      onOverflowTagChange,
    ]);

    const handleTagOnClose = useCallback(
      (onClose, index) => {
        onClose?.();
        if (index <= visibleItems.length - 1) {
          setPopoverOpen(false);
        }
      },
      [visibleItems]
    );

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className, `${blockClass}--align-${align}`, {
          [`${blockClass}--multiline`]: multiline,
        })}
        ref={containerRef}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        {visibleItems.length > 0 &&
          visibleItems.map((item, index) => {
            // Render custom components
            if (tagComponent) {
              return getCustomComponent(item);
            } else {
              const { id, label, tagType, onClose, ...other } = item;
              // If there is no template prop, then render items as Tags
              return (
                <div ref={(node) => itemRefHandler(id, node)} key={id}>
                  <Tooltip align={overflowAlign} label={label}>
                    <Tag
                      {...other}
                      className={`${blockClass}__item--tag`}
                      type={tagType}
                      onClose={() => handleTagOnClose(onClose, index)}
                    >
                      {label}
                    </Tag>
                  </Tooltip>
                </div>
              );
            }
          })}

        <span className={`${blockClass}__indicator`} ref={overflowRef}>
          {overflowItems.length > 0 && (
            <>
              <TagOverflowPopover
                allTagsModalSearchThreshold={allTagsModalSearchThreshold}
                className={overflowClassName}
                onShowAllClick={handleShowAllClick}
                overflowTags={overflowItems}
                overflowAlign={overflowAlign}
                overflowType={overflowType}
                showAllTagsLabel={showAllTagsLabel}
                key="tag-overflow-popover"
                ref={overflowRef}
                popoverOpen={popoverOpen}
                setPopoverOpen={setPopoverOpen}
              />
              <TagOverflowModal
                allTags={items}
                open={showAllModalOpen}
                title={allTagsModalTitle}
                onClose={handleModalClose}
                overflowType={overflowType}
                searchLabel={allTagsModalSearchLabel}
                searchPlaceholder={allTagsModalSearchPlaceholderText}
                portalTarget={allTagsModalTarget}
              />
            </>
          )}
        </span>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
TagOverflow = pkg.checkComponentEnabled(TagOverflow, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
TagOverflow.displayName = componentName;

const tagTypes = Object.keys(TYPES);

/**
 * The strings shown in the showAllModal are only shown if we have more than allTagsModalSearchLThreshold
 * @returns null if no problems
 */
export const string_required_if_more_than_10_tags = isRequiredIf(
  PropTypes.string,
  ({ items }) => items && items.length > allTagsModalSearchThreshold
);

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
TagOverflow.propTypes = {
  /**
   * align the Tags displayed by the TagSet. Default start.
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * label text for the show all search. **Note: Required if more than 10 tags**
   */
  allTagsModalSearchLabel: string_required_if_more_than_10_tags,
  /**
   * placeholder text for the show all search. **Note: Required if more than 10 tags**
   */
  allTagsModalSearchPlaceholderText: string_required_if_more_than_10_tags,
  /**
   * portal target for the all tags modal
   */
  allTagsModalTarget: PropTypes.node,
  /**
   * title for the show all modal. **Note: Required if more than 10 tags**
   */
  allTagsModalTitle: string_required_if_more_than_10_tags,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Optional ref for custom resize container to measure available space
   * Default will measure the available space of the TagSet container itself.
   */
  containingElementRef: PropTypes.object,

  /**
   * The items to be shown in the TagOverflow. Each item is specified as an object with properties:
   * **label**\* (required) to supply the content,
   * **id**\* (required) to uniquely identify each item.
   * **tagType** the type value to be passed to the Carbon Tag component.
   * Refer https://react.carbondesignsystem.com/?path=/docs/components-tag--default to see the possible values for tagType
   *
   * If you want to render a custom component, pass it as tagComponent prop and
   * then pass the props required for your custom component as the properties of item object
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      tagType: PropTypes.oneOf(tagTypes),
    }).isRequired
  ),
  /**
   * maximum visible items
   */
  maxVisible: PropTypes.number,
  /**
   * Specify offset amount for measure available space, only used when `containingElementSelector`
   * is also provided
   */
  measurementOffset: PropTypes.number,
  /**
   * display items in multiple lines
   */
  multiline: PropTypes.bool,
  /**
   * Handler to get overflow tags
   */
  onOverflowTagChange: PropTypes.func,
  /**
   * overflowAlign from the standard tooltip. Default center.
   */
  overflowAlign: PropTypes.oneOf([
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'left-bottom',
    'left-top',
    'right',
    'right-bottom',
    'right-top',
  ]),
  /**
   * overflowClassName for the tooltip popup
   */
  overflowClassName: PropTypes.string,
  /**
   * Type of rendering displayed inside of the tag overflow component
   */
  overflowType: PropTypes.oneOf(['default', 'tag']),
  /**
   * label for the overflow show all tags link.
   *
   * **Note:** Required if more than 10 tags
   */
  showAllTagsLabel: string_required_if_more_than_10_tags,
  /** Component definition of the items to be rendered inside TagOverflow.
   * If this is not passed, items will be rendered as Tag component
   */
  tagComponent: PropTypes.elementType,
};
