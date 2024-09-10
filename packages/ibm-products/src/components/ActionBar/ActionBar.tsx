//
// Copyright IBM Corp. 2020, 2024
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

// Import portions of React that are needed.
import React, {
  useEffect,
  useState,
  useRef,
  PropsWithChildren,
  Ref,
  ForwardedRef,
} from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';

// Carbon and package components we use.
import { Button } from '@carbon/react';
import uuidv4 from '../../global/js/utils/uuidv4';
import { prepareProps } from '../../global/js/utils/props-helper';
import { ActionBarItem } from './ActionBarItem';
import { ActionBarOverflowItems } from './ActionBarOverflowItems';
import { ButtonProps } from '@carbon/type';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--action-bar`;
const componentName = 'ActionBar';

// Default values for props
const defaults = {
  actions: Object.freeze([]),
};

interface Action extends ButtonProps {
  id?: string;
  key: string;
  iconDescription: string;
  label: string;
  onClick?: () => void;
  renderIcon: CarbonIconType;
}

interface ActionBarProps extends PropsWithChildren {
  /**
   * Specifies the action bar items. Each item is specified as an object
   * with required fields: key for array rendering, renderIcon, iconDescription and
   * label to provide the icon to display,
   * and optional 'onClick' to receive notifications when the button is clicked.
   * Additional fields in the object will be passed to the
   * Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props.
   *
   * Note that the Button props 'kind', 'size',
   * 'tooltipPosition', 'tooltipAlignment' and 'type' are ignored, as these
   * cannot be used for an action bar item.
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions?: readonly Action[];
  // expects action bar item as array or in fragment,
  /**
   * className
   */
  className?: string;
  /**
   * maxVisible : Maximum action bar items visible before going into the overflow menu
   */
  maxVisible?: number;
  /**
   * class name applied to the overflow options
   */
  menuOptionsClass?: string;
  /**
   * onItemCountChange - event reporting maxWidth
   */
  onWidthChange?: (sizes: { minWidth: number; maxWidth: number }) => void;
  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: string;
  /**
   * overflowMenuRef for the overflow menu width that is needed to calculate the width of the action bar with overflow
   */
  overflowMenuRef?: ForwardedRef<HTMLDivElement>;
  /**
   * align tags to right of available space
   */
  rightAlign?: boolean;
}

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The ActionBar is used internally by the PageHeader to wrap ActionBarItems.
 */
export let ActionBar = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      actions = defaults.actions,
      className,
      maxVisible,
      menuOptionsClass,
      onWidthChange,
      overflowAriaLabel,
      overflowMenuRef,
      rightAlign,

      // Collect any other property values passed in.
      ...rest
    }: ActionBarProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [displayCount, setDisplayCount] = useState(0);
    const [displayedItems, setDisplayedItems] = useState<JSX.Element[]>([]);
    const [hiddenSizingItems, setHiddenSizingItems] =
      useState<JSX.Element | null>(null);
    const internalId = useRef(uuidv4());
    const refDisplayedItems = useRef<HTMLDivElement>(null);
    const sizingRef = useRef<HTMLDivElement>(null);
    const sizes = useRef<{ minWidth?: number; maxWidth?: number }>({});

    const backupRef = useRef<HTMLDivElement>(null);
    const localRef = ref || backupRef;

    // create hidden sizing items
    useEffect(() => {
      // Hidden action bar and items used to calculate sizes
      setHiddenSizingItems(
        <div
          className={`${blockClass}__hidden-sizing-items`}
          aria-hidden={true}
          ref={sizingRef}
        >
          <span>
            <ActionBarOverflowItems
              className={`${blockClass}__hidden-sizing-item`}
              overflowAriaLabel="hidden sizing overflow items"
              overflowMenuRef={overflowMenuRef}
              overflowItems={[]}
              key="hidden-overflow-menu"
              tabIndex={-1}
            />
            {actions.map(({ key, id, ...rest }) => (
              <ActionBarItem
                {...rest}
                // ensure id is not duplicated
                data-original-id={id}
                key={`hidden-item-${key}`}
                className={`${blockClass}__hidden-sizing-item`}
                tabIndex={-1}
              />
            ))}
          </span>
        </div>
      );
    }, [actions, overflowMenuRef]);

    // creates displayed items based on actions, displayCount and alignment
    useEffect(() => {
      // Calculate the displayed items
      const newDisplayedItems = actions.map(({ key, ...rest }) => (
        <ActionBarItem {...rest} key={key} />
      ));

      // extract any there is not enough room for into newOverflowItems
      const newOverflowItems = newDisplayedItems.splice(displayCount);

      // add overflow menu if needed
      if (newOverflowItems.length) {
        newDisplayedItems.push(
          <ActionBarOverflowItems
            menuOptionsClass={menuOptionsClass}
            overflowAriaLabel={overflowAriaLabel}
            overflowMenuRef={overflowMenuRef}
            overflowItems={newOverflowItems}
            key={`overflow-menu-${internalId.current}`}
          />
        );
      }

      setDisplayedItems(newDisplayedItems);
    }, [
      actions,
      displayCount,
      overflowAriaLabel,
      menuOptionsClass,
      overflowMenuRef,
    ]);

    // determine display count based on space available and width of pageActions
    const checkFullyVisibleItems = () => {
      /* istanbul ignore if */
      if (sizingRef.current) {
        const sizingItems = Array.from(
          sizingRef.current.querySelectorAll<HTMLElement>(
            `.${blockClass}__hidden-sizing-item`
          )
        );

        // first item is always the overflow even if nothing else is rendered
        const overflowItem = sizingItems.shift();

        // determine how many will fit
        let spaceAvailable = refDisplayedItems.current?.offsetWidth;
        let willFit = 0;
        let maxVisibleWidth = 0;
        const fitLimit = maxVisible
          ? Math.min(maxVisible, sizingItems.length)
          : sizingItems.length;

        // loop checking the space available
        for (let i = 0; i < fitLimit; i++) {
          const newSpaceAvailable =
            spaceAvailable && spaceAvailable - sizingItems[i].offsetWidth;

          // update maxVisibleWidth for later use by onWidthChange
          maxVisibleWidth += sizingItems[i].offsetWidth;

          if (newSpaceAvailable && newSpaceAvailable >= 0) {
            spaceAvailable = newSpaceAvailable;
            willFit += 1;
          }
        }

        // if not enough space for all items then make room for the overflow
        const overflowWidth = overflowItem!.offsetWidth;
        if (willFit < sizingItems.length) {
          // Check space for overflow
          while (
            willFit > 0 &&
            spaceAvailable &&
            spaceAvailable < overflowWidth
          ) {
            willFit -= 1;

            // Highly unlikely that any action bar item is narrower than the overflow item

            // Make sure by removing items in reverse order
            spaceAvailable += sizingItems[willFit].offsetWidth;
          }
        }

        if (
          onWidthChange &&
          (sizes.current.minWidth !== overflowWidth ||
            sizes.current.maxWidth !== maxVisibleWidth)
        ) {
          sizes.current.minWidth = overflowWidth;
          sizes.current.maxWidth = maxVisibleWidth;
          // emit onWidthChange
          onWidthChange({
            minWidth: overflowWidth,
            maxWidth: maxVisibleWidth,
          });
        }
        if (willFit < 1) {
          setDisplayCount(0);
        } else {
          setDisplayCount(willFit);
        }
      }
    };

    useEffect(() => {
      checkFullyVisibleItems();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxVisible, hiddenSizingItems]);

    // /* istanbul ignore next */ // not sure how to fake window resize
    const handleResize = () => {
      // when the hidden sizing items change size
      /* istanbul ignore next */
      // not sure how to fake window resize
      checkFullyVisibleItems();
    };

    // // resize of the items
    useResizeObserver(sizingRef, handleResize);
    useResizeObserver(localRef, handleResize);

    return (
      <div {...rest} className={cx([blockClass, className])} ref={localRef}>
        {hiddenSizingItems}

        <div
          ref={refDisplayedItems}
          className={cx([
            `${blockClass}__displayed-items`,
            { [`${blockClass}__displayed-items--right`]: rightAlign },
          ])}
        >
          {displayedItems}
        </div>
      </div>
    );
  }
);

ActionBar = pkg.checkComponentEnabled(ActionBar, componentName);
ActionBar.displayName = componentName;
ActionBar.propTypes = {
  /**
   * Specifies the action bar items. Each item is specified as an object
   * with required fields: key for array rendering, renderIcon, iconDescription and
   * label to provide the icon to display,
   * and optional 'onClick' to receive notifications when the button is clicked.
   * Additional fields in the object will be passed to the
   * Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props.
   *
   * Note that the Button props 'kind', 'size',
   * 'tooltipPosition', 'tooltipAlignment' and 'type' are ignored, as these
   * cannot be used for an action bar item.
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  /**@ts-ignore */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      /**@ts-ignore */
      ...prepareProps(Button.propTypes, [
        // props not desired from Button.propTypes
        'kind',
        'size',
        'tooltipPosition',
        'tooltipAlignment',
      ]),
      id: PropTypes.string,
      // Additional props
      key: PropTypes.string.isRequired,
      // Redefine as form different  to Button and a key prop used by ActionBarItems
      iconDescription: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      /**@ts-ignore */
      renderIcon: Button.propTypes.renderIcon.isRequired,
      // We duplicate onClick here to improve DocGen in Storybook
      onClick: PropTypes.func,
    })
  ),
  // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * maxVisible : Maximum action bar items visible before going into the overflow menu
   */
  maxVisible: PropTypes.number,
  /**
   * class name applied to the overflow options
   */
  menuOptionsClass: PropTypes.string,
  /**
   * onItemCountChange - event reporting maxWidth
   */
  onWidthChange: PropTypes.func,
  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: PropTypes.string.isRequired,
  /**
   * overflowMenuRef for the overflow menu width that is needed to calculate the width of the action bar with overflow
   */
  /**@ts-ignore */
  overflowMenuRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.elementType }),
    PropTypes.object,
  ]),
  /**
   * align tags to right of available space
   */
  rightAlign: PropTypes.bool,
};
