/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { IconButton } from '@carbon/react';

// The block part of our conventional BEM class names (blockClass__E--M).
export const blockClass = `${pkg.prefix}--icon-button-bar__item`;
const componentName = 'IconButtonBarItem';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  onClick: () => {},
  size: 'sm',
};

/**
 * An IconButtonBar item when rendered as a button.
 *
 * This component refers to the Carbon `IconButton`.
 */
export let IconButtonBarItem = React.forwardRef(
  (
    {
      children,
      className,
      divider,
      label,
      onClick = defaults.onClick,
      size = defaults.size,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        {(divider === 'left' || divider === 'sides') && (
          <span className={`${blockClass}-divider`}>
            <span />
          </span>
        )}

        <IconButton
          {...rest}
          className={cx(blockClass, className)}
          label={label}
          kind="ghost"
          onClick={onClick}
          size={size}
          ref={ref}
          {...getDevtoolsProps(componentName)}
        >
          {children}
        </IconButton>

        {(divider === 'right' || divider === 'sides') && (
          <span className={`${blockClass}-divider`}>
            <span />
          </span>
        )}
      </>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
IconButtonBarItem = pkg.checkComponentEnabled(IconButtonBarItem, componentName);

IconButtonBarItem.displayName = componentName;

IconButtonBarItem.propTypes = {
  /**
   * Provide the contents of the IconButtonBarItem.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Specify a vertical divider if needed. Applies only to buttons.
   */
  divider: PropTypes.oneOf(['left', 'right', 'sides']),

  /**
   * `label` will be used as either the button's tooltip text or overflow menu item's text.
   *
   * `label` is listed here because it is a required `IconButton` prop.
   * For all other `IconButton` props, see the `IconButton` documentation.
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional callback function for when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * `size` applies only to buttons.
   *
   * `size` is listed here to provide a default size for the `IconButton` prop.
   * For all other `IconButton` props, see the `IconButton` documentation.
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
