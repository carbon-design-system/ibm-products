//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { PropTypes } from 'carbon-components-react';
import cx from 'classnames';

// import { Button } from 'carbon-components-react';

import { pkg } from '../../settings';

const componentName = 'PageHeaderBreadcrumbRow';
const blockClass = `${pkg.prefix}--page-header-breadcrumb-row`;

export const PageHeaderBreadcrumbRow = React.forwardRef(
  ({ className, ...rest }, ref) => {
    return (
      <div {...rest} className={cx([blockClass, className])} ref={ref}></div>
    );
  }
);

PageHeaderBreadcrumbRow.propTypes = {
  /**
   * Specifies class(es) to be applied to the top-level 'PageHeaderBreadcrumbRow' node.
   * Optional.
   */
  className: PropTypes.string,
};

PageHeaderBreadcrumbRow.defaultProps = {
  className: '',
};

PageHeaderBreadcrumbRow.displayName = componentName;
