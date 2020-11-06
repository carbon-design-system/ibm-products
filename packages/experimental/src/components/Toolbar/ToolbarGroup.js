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

const blockClass = `${expPrefix}-toolbar-group`;

export const ToolbarGroup = ({ children, className, ...props }) => {
  return (
    <div data-test="hi" className={cx([className, blockClass])} {...props}>
      {children}
    </div>
  );
};

ToolbarGroup.propTypes = {
  /**
   * children of the tag set (these are expected to be tags)
   */
  children: PropTypes.arrayOf(PropTypes.element),
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
};

ToolbarGroup.defaultProps = {
  children: [],
  withSpacing: false,
};
