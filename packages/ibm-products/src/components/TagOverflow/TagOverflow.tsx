/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  ReactNode,
  Ref,
  RefObject,
  createElement,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Tag, Tooltip, DismissibleTag } from '@carbon/react';

import PropTypes from 'prop-types';
import { TYPES } from './constants';
import { TagOverflowModal } from './TagOverflowModal';
import { TagOverflowPopover } from './TagOverflowPopover';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { isRequiredIf } from '../../global/js/utils/props-helper';
import { pkg } from '../../settings';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';
export interface TagOverflowItem {
  className?: string;
  /**
   * @deprecated The `filter` prop is no longer going to be used. To use DismissibleTags, pass in an onClose function.
   */
  filter?: boolean;
  id: string;
  label: string;
  onClose: () => void;
  tagType?:
    | 'red'
    | 'magenta'
    | 'purple'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'gray'
    | 'cool-gray'
    | 'warm-gray'
    | 'high-contrast'
    | 'outline';
  type?: string;
}

export interface TagOverflowProps {
  align?: 'start' | 'center' | 'end';
  allTagsModalAriaLabel?: string;
  allTagsModalSearchLabel?: string;
  allTagsModalSearchPlaceholderText?: string;
  allTagsModalTarget?: ReactNode;
  allTagsModalTitle?: string;
  autoAlign?: boolean;
  className?: string;
  containingElementRef?: RefObject<HTMLElement>;
  items: TagOverflowItem[];
  maxVisible?: number;
  measurementOffset?: number;
  multiline?: boolean;
  overflowAlign?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top';
  overflowClassName?: string;
  overflowType?: 'default' | 'tag';
  onOverflowTagChange?: (arr: TagOverflowItem[]) => void;
  showAllTagsLabel?: string;
  tagComponent?: string;
}

const blockClass = `${pkg.prefix}--tag-overflow`;
const componentName = 'TagOverflow';
const allTagsModalSearchThreshold = 10;

export let TagOverflow = forwardRef(
  (props: TagOverflowProps, ref: Ref<HTMLDivElement>) => {
    const {
      align = 'start',
      allTagsModalAriaLabel,
      allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText,
      allTagsModalTarget,
      allTagsModalTitle,
      autoAlign,
      className,
      containingElementRef,
      items,
      maxVisible,
      measurementOffset = 0,
      multiline,
      overflowAlign = 'bottom',
      overflowClassName,
      overflowType = 'default',
      onOverflowTagChange,
      showAllTagsLabel,
      tagComponent,
      ...rest
    } = props;

    const localContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = ref || localContainerRef;
    const itemRefs = useRef<Map<string, string> | null>(null);
    const overflowRef = useRef<HTMLDivElement>(null);
    // itemOffset is the value of margin applied on each items
    // This value is required for calculating how many items will fit within the container
    const itemOffset = 4;
    const overflowIndicatorWidth = 40;

    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [visibleItems, setVisibleItems] = useState<TagOverflowItem[]>([]);
    const [overflowItems, setOverflowItems] = useState<TagOverflowItem[]>([]);
    const [showAllModalOpen, setShowAllModalOpen] = useState<boolean>(false);
    const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

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
      if (typeof resizeElm !== 'function' && resizeElm.current) {
        setContainerWidth(resizeElm.current.offsetWidth);
      }
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
      const spaceAvailable = optionalContainingElement
        ? optionalContainingElement.offsetWidth - measurementOffsetValue
        : containerWidth;

      const overflowContainerWidth =
        overflowRef &&
        overflowRef.current &&
        overflowRef.current.offsetWidth > overflowIndicatorWidth
          ? overflowRef.current.offsetWidth
          : overflowIndicatorWidth;
      const maxWidth = spaceAvailable - overflowContainerWidth;

      let childrenWidth = 0;
      let maxReached = false;

      return items.reduce((prev: TagOverflowItem[], cur: TagOverflowItem) => {
        if (!maxReached) {
          const itemWidth = (map ? Number(map.get(cur.id)) : 0) + itemOffset;
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
      containerWidth,
      containingElementRef,
      items,
      maxVisible,
      measurementOffset,
      multiline,
    ]);

    const getCustomComponent = (
      item: TagOverflowItem,
      tagComponent: string
    ) => {
      const { className, id, ...other } = item;
      return createElement(tagComponent, {
        ...other,
        key: id,
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
    }, [getVisibleItems, items, maxVisible, onOverflowTagChange]);

    const handleTagOnClose = useCallback(
      (onClose, index) => {
        onClose?.();
        if (index <= visibleItems?.length - 1) {
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
        {...getDevtoolsProps(componentName)}
      >
        {visibleItems?.length > 0 &&
          visibleItems.map((item, index) => {
            // Render custom components
            if (tagComponent) {
              return getCustomComponent(item, tagComponent);
            } else {
              const { id, label, tagType, onClose, filter, ...other } = item;
              // If there is no template prop, then render items as Tags
              return (
                <div ref={(node) => itemRefHandler(id, node)} key={id}>
                  <Tooltip align={overflowAlign} label={label}>
                    {typeof onClose === 'function' || filter ? (
                      <DismissibleTag
                        {...other}
                        className={`${blockClass}__item--tag`}
                        type={tagType}
                        onClose={() => handleTagOnClose(onClose, index)}
                        text={label}
                      />
                    ) : (
                      <Tag
                        {...other}
                        className={`${blockClass}__item--tag`}
                        type={tagType}
                      >
                        {label}
                      </Tag>
                    )}
                  </Tooltip>
                </div>
              );
            }
          })}

        <span className={`${blockClass}__indicator`} ref={overflowRef}>
          {overflowItems?.length > 0 && (
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
                autoAlign={autoAlign}
              />
              <TagOverflowModal
                allTags={items}
                open={showAllModalOpen}
                title={allTagsModalTitle}
                modalAriaLabel={allTagsModalAriaLabel}
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
  ({ items }) => items?.length > allTagsModalSearchThreshold
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
   * aria label for all tags modal with hasScrollingContent
   */
  allTagsModalAriaLabel: PropTypes.string,
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
   * Will auto-align the popover on first render if it is not visible. This prop is currently experimental and is subject to future changes.
   */
  autoAlign: PropTypes.bool,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
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
  //@ts-ignore
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
  //@ts-ignore
  tagComponent: PropTypes.elementType,
};
