//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

// import { settings } from 'carbon-components';
// const { prefix } = settings;

import { expPrefix } from '../../global/js/settings';

import { Button } from 'carbon-components-react';

const blockClass = `${expPrefix}-action-bar-item`;

export const ActionBarItem = ({
  className,
  disabled,
  icon,
  label,
  onClick,
}) => {
  return (
    <Button
      className={cx([blockClass, className])}
      disabled={disabled}
      hasIconOnly
      iconDescription={label}
      kind="ghost"
      onClick={onClick}
      renderIcon={icon}
      size="field"
      tooltipPosition="bottom"
      tooltipAlignment="end"
      type="button"></Button>
  );
};

ActionBarItem.propTypes = {
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * icon
   */
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * onClick click event handler
   */
  onClick: PropTypes.func,
};

ActionBarItem.defaultProps = {
  className: '',
};
