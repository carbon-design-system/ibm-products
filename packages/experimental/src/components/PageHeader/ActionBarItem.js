//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { prjPrefix } from '../../global/js/settings';

import { Button } from 'carbon-components-react';

const blockClass = `${prjPrefix}-action-bar-item`;

export const ActionBarItem = (props) => {
  const className = cx([blockClass, props.className]);

  return (
    <Button
      {...{
        ...props,
        className,
        hasIconOnly: true,
        kind: 'ghost',
        size: 'field',
        tooltipPosition: 'bottom',
        tooltipAlignment: 'end',
        type: 'button',
      }}></Button>
  );
};

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
const defaultProps = { ...Button.defaultProps };

// Remove reserved props
reservedProps.forEach((prop) => {
  delete propTypes[prop];
  delete defaultProps[prop];
});

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

ActionBarItem.defaultProps = { ...defaultProps };
