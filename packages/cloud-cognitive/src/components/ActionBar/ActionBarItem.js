//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Button } from '@carbon/react';

// The block part of our conventional BEM class names (blockClass__E--M).
const componentName = 'ActionBarItem';
const blockClass = `${pkg.prefix}--action-bar-item`;

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The ActionBarItem is used in the page header to populate the action bar
 */
export let ActionBarItem = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <Button
      {...{
        ...rest,
        ref,
        className: cx(blockClass, className),
        hasIconOnly: true,
        kind: 'ghost',
        size: 'md',
        tooltipPosition: 'bottom',
        tooltipAlignment: 'end',
        type: 'button',
      }}
    />
  );
});

// Return a placeholder if not released and not enabled by feature flag
ActionBarItem = pkg.checkComponentEnabled(ActionBarItem, componentName);

// Props the user cannot change
const reservedProps = [
  'hasIconOnly',
  'kind',
  'size',
  'tooltipPosition',
  'tooltipAlignment',
  'type',
];
// Base props on Carbon Button
const propTypes = { ...Button.propTypes };

// Remove reserved props
reservedProps.forEach((prop) => {
  delete propTypes[prop];
});

ActionBarItem.displayName = componentName;
ActionBarItem.propTypes = {
  /**
   * The ...propTypes are copies of those from Button minus the props reserved for use by this component
   */
  ...propTypes,
  /* ***************************************
  /
  /  The declarations below allow storybook & DocGen to produce documentation.
  /  Some or all of them may be inherited from the underlying Carbon component.
  /
  / ****************************************/
  /**
   * Specify an optional className to be added to your Button
   *
   * (inherited from Carbon Button)
   */
  className: PropTypes.string,
  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   *
   * (inherited from Carbon Button)
   */
  iconDescription: PropTypes.string,
  /**
   * Optional click handler
   *
   * (inherited from Carbon Button)
   */
  onClick: PropTypes.func,
  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   *
   * (inherited from Carbon Button)
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
