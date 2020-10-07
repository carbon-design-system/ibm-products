//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { expPrefix } from '../../global/js/settings';

import { Button } from 'carbon-components-react';

const blockClass = `${expPrefix}-page-action-item`;

export const PageActionItem = (props) => {
  const className = cx([blockClass, props.className]);

  return (
    <Button
      {...{
        ...props,
        className,
        size: 'field',
        type: 'button',
      }}></Button>
  );
};

PageActionItem.propTypes = {
  /**
   * Specifies class(es) to be applied to the top-level PageHeader node.
   * Optional.
   */
  className: PropTypes.string,
};
PageActionItem.defaultProps = {
  className: '',
};
