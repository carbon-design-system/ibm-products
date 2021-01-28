//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { prjPrefix /*, carbonPrefix */ } from '../../global/js/settings';

const blockClass = `${prjPrefix}-action-bar`;

export const ActionBar = ({ children, className }) => {
  return <div className={cx([blockClass, className])}>{children}</div>;
};

ActionBar.propTypes = {
  /**
   * children of the action bar (action bar items)
   */
  children: PropTypes.node,
  /**
   * className
   */
  className: PropTypes.string,
};

ActionBar.defaultProps = {
  className: '',
};
