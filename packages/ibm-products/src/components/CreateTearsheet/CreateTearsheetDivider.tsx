/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

const componentName = 'CreateTearsheetDivider';
const blockClass = `${pkg.prefix}--tearsheet-create__section--divider`;

interface CreateTearsheetDividerProps {
  /** Specifies an optional className to be added to the tearsheet divider */
  className?: string;
}

export let CreateTearsheetDivider = forwardRef(
  (
    { className, ...rest }: PropsWithChildren<CreateTearsheetDividerProps>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return <span {...rest} ref={ref} className={cx(blockClass, className)} />;
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateTearsheetDivider = pkg.checkComponentEnabled(
  CreateTearsheetDivider,
  componentName
);

CreateTearsheetDivider.propTypes = {
  /**
   * Sets an optional className to be added to the tearsheet divider
   */
  className: PropTypes.string,
};
