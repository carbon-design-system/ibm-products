/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--tearsheet-create__section--divider`;
export let CreateTearsheetDivider = forwardRef(({ className }, ref) => {
  return <span ref={ref} className={cx(blockClass, className)} />;
});

CreateTearsheetDivider.propTypes = {
  /**
   * Sets an optional className to be added to the tearsheet step
   */
  className: PropTypes.string,
};
