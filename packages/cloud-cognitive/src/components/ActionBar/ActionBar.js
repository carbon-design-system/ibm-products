//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

// Import portions of React that are needed.
import React, { useEffect, useState, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import ReactResizeDetector from 'react-resize-detector';

// Carbon and package components we use.
import { Button } from 'carbon-components-react';
import uuidv4 from '../../global/js/utils/uuidv4';
import {
  deprecateProp,
  extractShapesArray,
  prepareProps,
} from '../../global/js/utils/props-helper';
import { ActionBarItem } from './ActionBarItem';
import { ActionBarOverflowItems } from './ActionBarOverflowItems';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--action-bar`;
const componentName = 'ActionBar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The ActionBar is used internally by the PageHeader to wrap ActionBarItems.
 */
export let ActionBar = React.forwardRef(
  (
    {
      actions,
      children,
      className,
      maxVisible,
      onWidthChange,
      overflowAriaLabel,
      rightAlign,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [displayCount, setDisplayCount] = useState(0);
    const [displayedItems, setDisplayedItems] = useState([]);
    const internalId = useRef(uuidv4());
    const [itemArray, setItemArray] = useState([]);
    const refDisplayedItems = useRef(null);

    // create child array from children which may be a fragment
    useEffect(() => {
      if (actions) {
        setItemArray(actions);
      } else {
        setItemArray(extractShapesArray(children));
      }
    }, [actions, children]);

    // creates displayed items based on displayCount and alignment
    useEffect(() => {
      const newDisplayedItems = itemArray.map(({ key, ...rest }) => (
        <ActionBarItem {...rest} key={key} />
      ));
      // extract any there are not room for to newOverflowItems
      const newOverflowItems = newDisplayedItems.splice(displayCount);
      // add overflow menu if needed
      if (newOverflowItems.length) {
        newDisplayedItems.push(
          <ActionBarOverflowItems
            overflowAriaLabel={overflowAriaLabel}
            overflowItems={newOverflowItems}
            key={`overflow-menu-${internalId.current}`}></ActionBarOverflowItems>
        );
      }

      setDisplayedItems(newDisplayedItems);
    }, [itemArray, displayCount, overflowAriaLabel]);

    // determine display count based on space available and width of pageActions
    const checkFullyVisibleItems = () => {
      const spaceAvailable = refDisplayedItems.current.offsetWidth;
      const actionBarItemWidth = refDisplayedItems.current.offsetHeight; // short cut measure width

      /* istanbul ignore next if */
      if (actionBarItemWidth > 0) {
        const mightFit = spaceAvailable / actionBarItemWidth;
        // visibleItems may include 1 overflow menu
        const visibleItems = maxVisible
          ? Math.min(itemArray.length, maxVisible + 1) // + 1 for overflow menu if needed
          : itemArray.length;
        let willFit = Math.min(Math.floor(mightFit), visibleItems);

        onWidthChange &&
          onWidthChange({
            maxWidth: actionBarItemWidth * visibleItems,
            minWidth: actionBarItemWidth,
          });

        // action bar items are a fixed width
        if (willFit < itemArray.length) {
          willFit -= 1; // remove one for overflow menu
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
    }, [maxVisible, itemArray]);

    const handleResize = () => {
      // width is the space available for all action bar items horizontally
      // the action bar items are squares so the height should be one item wide
      /* istanbul ignore next */ // not sure how to fake window resize
      checkFullyVisibleItems();
    };

    return (
      <ReactResizeDetector onResize={handleResize}>
        <div {...rest} className={cx([blockClass, className])} ref={ref}>
          <div
            ref={refDisplayedItems}
            className={cx([
              `${blockClass}__displayed-items`,
              { [`${blockClass}__displayed-items--right`]: rightAlign },
            ])}>
            {displayedItems}
          </div>
        </div>
      </ReactResizeDetector>
    );
  }
);

ActionBar.displayName = componentName;
ActionBar.propTypes = {
  /**
   * Specifies the action bar items. Each item is specified as an object
   * with required fields: key for array rendering, renderIcon and
   * iconDescription to provide the icon to display,
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
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      ...prepareProps(Button.propTypes, [
        // props not desired from Button.propTypes
        'kind',
        'size',
        'tooltipPosition',
        'tooltipAlignment',
      ]),
      // Additional props
      key: PropTypes.string.isRequired,
      // Redefine as form different  to Button and a key prop used by ActionBarItems
      iconDescription: PropTypes.string.isRequired,
      renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        .isRequired,
      // We duplicate onClick here to improve DocGen in Storybook
      onClick: PropTypes.func,
    })
  ),
  /**
   * children of the action bar (action bar items)
   */
  children: deprecateProp(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]),
    'See documentation on the `actions` prop.'
  ), // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * maxVisible : Maximum action bar items visible before going into the overflow menu
   */
  maxVisible: PropTypes.number,
  /**
   * onItemCountChange - event reporting maxWidth
   */
  onWidthChange: PropTypes.func,
  /**
   * overflowAriaLabel label for open close button overflow used for action bar items that do nto fit.
   */
  overflowAriaLabel: PropTypes.string,
  /**
   * align tags to right of available space
   */
  rightAlign: PropTypes.bool,
};

ActionBar.defaultProps = {
  overflowAriaLabel: 'Open and close additional action bar items list.',
  rightAlign: false,
};
