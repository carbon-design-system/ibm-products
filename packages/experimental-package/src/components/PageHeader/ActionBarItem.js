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
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
  /**
   * Specifies whether the ActionBarItem should be disabled, or not.
   * Optional.
   */
  disabled: PropTypes.bool,
  /**
   * The icon for the ActionBarItem.
   * Mandatory.
   */
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  /**
   * A label to describe the ActionBarItem. Displayed on hover and used as
   * assistive text.
   * Mandatory.
   */
  label: PropTypes.string.isRequired,
  /**
   * Specifies an onClick handler that is called when the ActionBarItem is
   * clicked. Optional.
   */
  onClick: PropTypes.func,
};

ActionBarItem.defaultProps = {
  className: '',
  disabled: false,
};
