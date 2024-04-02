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
import { pkg } from '../../settings';

import { Tag, Tooltip } from '@carbon/react';
import { TagSet } from '../TagSet';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';

const blockClass = `${pkg.prefix}--tag-overflow`;
const componentName = 'TagOverflow';

/**
 * TODO: A description of the component.
 */
export let TagOverflow = React.forwardRef(
  (
    {
      className,
      items,
      itemTemplate,
      maxVisible,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    // type of Tags elements within the component
    const tagType = 'blue';

    const localContainerRef = useRef(null);
    const containerRef = ref || localContainerRef;
    const itemRefs = useRef(null);
    const overflowRef = useRef(null);
    // measurementOffset is the value of margin applied on each items
    // This value is required for calculating how many items will fit within the container
    const measurementOffset = 4;
    const overflowIndicatorWidth = 40;

    const [containerWidth, setContainerWidth] = useState(0);
    const [visibleItems, setVisibleItems] = useState([]);
    const [overflowItems, setOverflowItems] = useState([]);

    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };

    useResizeObserver(containerRef, handleResize);

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

      const map = getMap();
      const overflowContainerWidth =
        overflowRef.current.offsetWidth > overflowIndicatorWidth
          ? overflowRef.current.offsetWidth
          : overflowIndicatorWidth;
      const maxWidth = containerWidth - overflowContainerWidth;

      let childrenWidth = 0;
      let maxReached = false;

      return items.reduce((prev, cur) => {
        if (!maxReached) {
          const itemWidth = map.get(cur.id) + measurementOffset;
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
    }, [itemRefs, overflowRef, containerWidth, items]);

    const ItemComponent = ({ templateProps }) => {
      const itemRef = (node) => itemRefHandler(templateProps.id, node);
      let className = templateProps.className
        ? `${blockClass}__item ${templateProps.className}`
        : `${blockClass}__item`;

      const ItemComp = () =>
        React.createElement(itemTemplate, {
          ref: itemRef,
          ...templateProps,
          className,
        });

      return <ItemComp></ItemComp>;
    };

    ItemComponent.propTypes = {
      templateProps: PropTypes.shape({
        id: PropTypes.string.isRequired,
        className: PropTypes.string,
      }).isRequired,
    };

    useEffect(() => {
      let visibleItemsArr = getVisibleItems();

      if (maxVisible && maxVisible < visibleItemsArr.length) {
        visibleItemsArr = visibleItemsArr?.slice(0, maxVisible);
      }

      const hiddenItems = items?.slice(visibleItemsArr.length);
      const overflowItemsArr = hiddenItems?.map((item) => {
        return { type: tagType, label: item.label };
      });

      setVisibleItems(visibleItemsArr);
      setOverflowItems(overflowItemsArr);
    }, [containerWidth, items, maxVisible, getVisibleItems]);

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className)}
        ref={containerRef}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        {visibleItems.length > 0 &&
          visibleItems.map((item) => {
            // Render custom components
            if (itemTemplate) {
              return (
                <ItemComponent
                  templateProps={item}
                  key={item.id}
                ></ItemComponent>
              );
            } else {
              // If there is no template prop, then render items as Tags
              return (
                <div
                  ref={(node) => itemRefHandler(item.id, node)}
                  key={item.id}
                >
                  <Tooltip align="bottom" label={item.label}>
                    <Tag className={`${blockClass}__item--tag`} type={tagType}>
                      {item.label}
                    </Tag>
                  </Tooltip>
                </div>
              );
            }
          })}
        <span className={`${blockClass}__indicator`} ref={overflowRef}>
          {overflowItems.length > 0 && (
            <TagSet
              tags={overflowItems}
              allTagsModalTitle="All tags"
              containingElementRef={overflowRef}
              allTagsModalSearchLabel="Search all tags"
              allTagsModalSearchPlaceholderText="Search all tags"
              showAllTagsLabel="Show all tags"
            />
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

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
TagOverflow.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Component definition of the items to be rendered inside TagOverflow.
   * If this is not passed, items will be rendered as Tag component
   */
  itemTemplate: PropTypes.elementType,

  /**
   * The items to be shown in the TagOverflow. Each item is specified as an object with properties:
   * **label**\* (required) to supply the item content,
   * **id**\* (required) to uniquely identify the each item.
   * if you are passing an ItemTemplate prop for rendering custom components,
   * then pass the props required for your custom component as the properties of item object
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ),
  /**
   * maximum visible items
   */
  maxVisible: PropTypes.number,
};
