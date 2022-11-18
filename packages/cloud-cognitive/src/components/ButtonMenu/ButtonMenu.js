/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';
import { useClickOutside } from '../../global/js/hooks';

// Carbon and package components we use.
import { Button, ButtonSet } from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--button-menu`;
const componentName = 'ButtonMenu';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  size: 'lg',
  kind: 'primary',
  open: false,
  isDanger: false,
  isDisabled: false,
  onClose: () => {},
  onMenuButtonClick: () => {},
};

/**
 * Combining a standard button with a button set, this component appears
 * as a button and has all the usual carbon Button props and rendering, but
 * acts as an overflow menu when clicked. The ButtonMenu component can contain
 * zero to many ButtonMenuItem/s and/or Accordions for nested menus.
 */
export let ButtonMenu = React.forwardRef(
  (
    {
      children,
      className,
      iconDescription,
      kind = defaults.kind,
      label,
      menuOptionsClass,
      onClose = defaults.onClose,
      onMenuButtonClick = defaults.onMenuButtonClick,
      open = defaults.open,
      renderIcon,
      size = defaults.size,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const outerButtonMenuRef = useRef();
    const localRef = ref || outerButtonMenuRef;

    useClickOutside(localRef, () => {
      onClose();
    });

    return (
      <div
        {...rest}
        ref={localRef}
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          {
            [`${blockClass}__${size}`]: size,
          }
        )}
      >
        <Button
          iconDescription={iconDescription}
          size={size}
          kind={kind}
          renderIcon={
            renderIcon ? renderIcon : open ? ChevronUp16 : ChevronDown16
          }
          onClick={() => {
            console.log('clicking');
            onMenuButtonClick?.();
          }}
          className={cx(`${blockClass}__trigger`)}
        >
          {label}
        </Button>
        {open && (
          <ButtonSet
            className={cx(`${blockClass}__button-set`, menuOptionsClass)}
            stacked
          >
            {children}
          </ButtonSet>
        )}
      </div>
    );
  }
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
  children: PropTypes.node.isRequired,

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
   * Optional flag to set a menuItem Button type to "danger"
   */
  isDanger: PropTypes.bool,

  /**
   * Optional flag to set a menuItem to "disabled"
   */
  isDisabled: PropTypes.bool,

  /**
   * The three types the menu button supports: primary, tertiary and ghost.
   */
  kind: PropTypes.oneOf(['primary', 'tertiary', 'ghost']),

  /**
   * The button label for the menu trigger.
   */
  label: PropTypes.node,

  /**
   * class name applied to the menu button list element
   */
  menuOptionsClass: PropTypes.string,

  /**
   * The setter fn for the open state
   */
  onClose: PropTypes.func,

  /**
   * The onClick fn for the menu button
   */
  onMenuButtonClick: PropTypes.func,

  /**
   * The open state for the button menu
   */
  open: PropTypes.bool,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: Button.propTypes.renderIcon,

  /**
   * The size of the button for the menu trigger. The values can be any valid
   * value for the carbon Button component 'size' prop.
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
