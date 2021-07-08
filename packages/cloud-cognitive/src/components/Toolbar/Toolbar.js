/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Button, ButtonSet } from 'carbon-components-react';
import { ToolbarGroup } from './ToolbarGroup';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--toolbar`;
const componentName = 'Toolbar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is an example component to show relevant conventions and usage.
 */
export let Toolbar = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      borderColor,
      boxedBorder,
      className,
      children,
      onPrimaryClick,
      onSecondaryClick,
      primaryButtonLabel,
      primaryKind,
      secondaryButtonLabel,
      secondaryKind,
      size,
      style,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const modeClass = boxedBorder
      ? `${blockClass}--boxed-set`
      : `${blockClass}--shadow-set`;

    const handlePrimaryClick = (e) => {
      if (onPrimaryClick) {
        onPrimaryClick(e);
      }
    };

    const handleSecondaryClick = (e) => {
      if (onSecondaryClick) {
        onSecondaryClick(e);
      }
    };

    return (
      <div
        className={cx(blockClass, className)}
        role="toolbar"
        aria-label="Text Formatting"
        aria-controls="textarea1">
        <ToolbarGroup />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag.
Toolbar = pkg.checkComponentEnabled(Toolbar, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Toolbar.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Toolbar.propTypes = {
  /**
   * What border color (HTML color value) to use.
   */
  borderColor: PropTypes.string,

  /**
   * If true, the border is a box, otherwise it is a shadow.
   */
  boxedBorder: PropTypes.bool,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * If true, the buttons are disabled, otherwise they can be used.
   */
  disabled: PropTypes.bool,

  /**
   * An optional primary button click handler.
   */
  onPrimaryClick: PropTypes.func,

  /**
   * An optional secondary button click handler.
   */
  onSecondaryClick: PropTypes.func,

  /**
   * The primary button label.
   */
  primaryButtonLabel: PropTypes.string.isRequired,

  /**
   * The kind of button for the primary button ('primary' or 'danger').
   */
  primaryKind: PropTypes.oneOf(['primary', 'danger']),

  /**
   * The secondary button label.
   */
  secondaryButtonLabel: PropTypes.string.isRequired,

  /**
   * The kind of button for the secondary button ('secondary' or 'tertiary').
   */
  secondaryKind: PropTypes.oneOf(['secondary', 'tertiary']),

  /**
   * The size for the buttons ('default', 'small' or 'field').
   */
  size: PropTypes.oneOf(['default', 'small', 'field']),

  /**
   * Optional style settings for the containing node.
   */
  style: PropTypes.object,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
Toolbar.defaultProps = {
  boxedBorder: false,
  primaryKind: 'primary',
  secondaryKind: 'secondary',
  size: 'default',
};
