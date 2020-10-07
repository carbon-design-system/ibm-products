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

const blockClass = `${expPrefix}-action-bar-item`;

export const ActionBarItem = (props) => {
  const className = cx([blockClass, props.className]);

  return (
    <Button
      {...{
        ...props,
        className,
        hasIconOnly: true,
        kind: 'ghost',
        size: 'field',
        tooltipPosition: 'bottom',
        tooltipAlignment: 'end',
        type: 'button',
      }}></Button>
  );
};

const reservedProps = [
  'hasIconOnly',
  'kind',
  'size',
  'tooltipPosition',
  'tooltipAlignment',
  'type',
];
const propTypes = { ...Button.propTypes };
const defaultProps = { ...Button.defaultProps };

reservedProps.forEach((prop) => {
  delete propTypes[prop];
  delete defaultProps[prop];
});

ActionBarItem.propTypes = { ...propTypes };
ActionBarItem.defaultProps = { ...defaultProps };
