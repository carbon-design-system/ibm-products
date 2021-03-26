//
// Copyright IBM Corp. 2020, 2020
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
import { Button } from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--page-action-item`;
const componentName = 'PageActionItem';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The PageActionItem is used in the page header to populate the page actions
 */
export let PageActionItem = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        {...{
          ...props,
          className: cx([blockClass, className]),
          ref,
          size: 'field',
          type: 'button',
        }}>
        {children}
      </Button>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
PageActionItem = pkg.checkComponentEnabled(PageActionItem, componentName);

// Props the user cannot change
const reservedProps = ['size', 'type'];
// Base props on Carbon Button
const propTypes = { ...Button.propTypes };
const defaultProps = { ...Button.defaultProps };

// Remove reserved props
reservedProps.forEach((prop) => {
  delete propTypes[prop];
  delete defaultProps[prop];
});

PageActionItem.propTypes = {
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
   * Specify the content of your Button
   *
   * (inherited from Carbon Button)
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to your Button
   *
   * (inherited from Carbon Button)
   */
  className: PropTypes.string,
  /**
   * Specify if the button is an icon-only button
   *
   * (inherited from Carbon Button)
   */
  hasIconOnly: PropTypes.bool,
  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   *
   * (inherited from Carbon Button)
   */
  iconDescription: PropTypes.string,
  /**
   * Specify the kind of Button you want to create
   *
   * (inherited from Carbon Button)
   */
  kind: PropTypes.string,
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

PageActionItem.defaultProps = { ...defaultProps };

PageActionItem.displayName = componentName;
