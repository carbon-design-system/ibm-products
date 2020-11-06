//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import { expPrefix } from '../../global/js/settings';
import cx from 'classnames';

const blockClass = `${expPrefix}-toolbar-separator`;

export const ToolbarSeparator = ({ className, ...props }) => {
  return <div className={cx([className, blockClass])} {...props} />;
};

ToolbarSeparator.propTypes = {
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
};

ToolbarSeparator.defaultProps = {};
