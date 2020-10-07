//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import cx from 'classnames';

import { expPrefix } from '../../global/js/settings';

import { Button } from 'carbon-components-react';

const blockClass = `${expPrefix}-page-action-item`;

export const PageActionItem = ({ children, ...props }) => {
  const className = cx([blockClass, props.className]);

  return (
    <Button
      {...{
        ...props,
        className,
        size: 'field',
        type: 'button',
      }}>
      {children}
    </Button>
  );
};

const reservedProps = ['size', 'type'];
const propTypes = { ...Button.propTypes };
const defaultProps = { ...Button.defaultProps };

reservedProps.forEach((prop) => {
  delete propTypes[prop];
  delete defaultProps[prop];
});

PageActionItem.propTypes = { ...propTypes };
PageActionItem.defaultProps = { ...defaultProps };
