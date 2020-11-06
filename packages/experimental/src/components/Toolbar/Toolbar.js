/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { expPrefix } from '../../global/js/settings';

const blockClass = `${expPrefix}-toolbar`;

// import './toolbar.scss'; // Do not import SCSS directly it will be rolled up separately.

export const Toolbar = ({ className, ...props }) => {
  return <div className={cx([className, `${blockClass}`])} {...props}></div>;
};

Toolbar.propTypes = {
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
};

Toolbar.defaultProps = {};
