/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { Children } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { blockClass as blockClassItem } from './IconButtonBarItem';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--icon-button-bar`;
const componentName = 'IconButtonBar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  length: 3,
  overflowMenuProps: {},
};

/**
 * A button toolbar. The `length` prop determines when to convert the
 * remaining buttons into overflow menu items.
 */
export let IconButtonBar = React.forwardRef(
  (
    {
      children,
      className,
      length = defaults.length,
      overflowMenuProps = defaults.overflowMenuProps,
      ...rest
    },
    ref
  ) => {
    const arrayChildren = Children.toArray(children);
    // If `length` >= arrayChildren.length, then show all the buttons.
    // If `length` <= 1, then show only the overflow menu.
    // Else `length` number of buttons to show, including the overflow menu button.
    // (Use Math.max() to limit `length` to positive numbers.)
    const maxButtons =
      length === arrayChildren.length
        ? Math.max(0, length)
        : Math.max(0, length - 1);
    const childrenAsButtons = arrayChildren.toSpliced(maxButtons);
    const childrenAsMenuItems = arrayChildren.toSpliced(0, maxButtons);

    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        ref={ref}
        role="toolbar"
        {...getDevtoolsProps(componentName)}
      >
        {/* Render visible buttons as passed. */}
        {childrenAsButtons}

        {/* Render remaining buttons as menu items. */}
        {childrenAsMenuItems.length > 0 && (
          <OverflowMenu
            className={`${blockClass}__overflow-menu`}
            // If size is undefined, then default to small.
            size={overflowMenuProps.size || 'sm'}
            {...overflowMenuProps}
          >
            {childrenAsMenuItems.map((child) => {
              // Take the child props assigned to IconButtonBarItem
              // and reassign them to each OverflowMenuItem.
              const { className, label, ...rest } = child.props;

              return (
                <OverflowMenuItem
                  className={cx(blockClassItem, className)}
                  itemText={label}
                  key={label}
                  {...rest}
                />
              );
            })}
          </OverflowMenu>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
IconButtonBar = pkg.checkComponentEnabled(IconButtonBar, componentName);

IconButtonBar.displayName = componentName;

IconButtonBar.propTypes = {
  /**
   * Provide the contents of the IconButtonBar.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Determines the maximum number of buttons to render. If the number
   * of buttons is greater than `length`, then the remaining buttons
   * will be rendered as overflow menu items.
   */
  length: PropTypes.number,

  /**
   * A JavaScript object to be passed to the `OverflowMenu` component as props.
   *
   * For all other `OverflowMenu` props, see the `OverflowMenu` documentation.
   */
  overflowMenuProps: PropTypes.any,
};
