/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';

// Carbon and package components we use.
import { Button, OverflowMenu } from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--button-menu`;
const componentName = 'ButtonMenu';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * Combining a standard button with an overflow menu, this component appears
 * as a button and has all the usual carbon Button props and rendering, but
 * acts as an overflow menu when clicked. The ButtonMenu component can contain
 * zero to many ButtonMenuItem, which is identical to the carbon
 * OverflowMenuItem component.
 */
export let ButtonMenu = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      children,
      className,
      iconDescription,
      label,
      menuOptionsClass,
      renderIcon: Icon,
      size,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => (
    <OverflowMenu
      {
        // Pass through any other property values as HTML attributes.
        ...rest
      }
      className={cx(
        blockClass, // Apply the block class to the main HTML element
        className // Apply any supplied class names to the main HTML element.
      )}
      menuOptionsClass={cx(`${blockClass}__options`, menuOptionsClass)}
      renderIcon={() => (
        <div
          className={cx([
            `${blockClass}__trigger`,
            `${carbon.prefix}--btn`,
            `${carbon.prefix}--btn--primary`,
            `${carbon.prefix}--btn--${size}`,
          ])}
        >
          {label}
          {Icon && (
            <Icon
              aria-hidden="true"
              aria-label={iconDescription}
              className={`${carbon.prefix}--btn__icon`}
            />
          )}
        </div>
      )}
      ref={ref}
    >
      {children}
    </OverflowMenu>
  )
);

// Return a placeholder if not released and not enabled by feature flag
ButtonMenu = pkg.checkComponentEnabled(ButtonMenu, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
ButtonMenu.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
ButtonMenu.propTypes = {
  /**
   * Provide the contents of the ButtonMenu. This should be one or more
   * ButtonMenuItem components.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: Button.propTypes.iconDescription,

  /**
   * The button label for the menu trigger.
   */
  label: PropTypes.node,

  /**
   * class name applied to the overflow options
   */
  menuOptionsClass: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: Button.propTypes.renderIcon,

  /**
   * The size of the button for the menu trigger. The values can be any valid
   * value for the carbon Button component 'size' prop.
   */
  size: Button.propTypes.size,
};

ButtonMenu.defaultProps = {
  size: Button.defaultProps.size,
};
