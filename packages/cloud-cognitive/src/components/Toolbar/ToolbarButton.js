/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { Button } from 'carbon-components-react';
import { bool } from 'prop-types';
import React, { forwardRef } from 'react';

import { pkg } from '../../settings';
import { blockClass } from './Toolbar';

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
export let ToolbarButton = forwardRef(({ active, ...props }, ref) => {
  return (
    <Button
      {...props}
      ref={ref}
      className={cx({ [`${blockClass}__button--active`]: active })}
      kind="ghost"
      size="md"
      hasIconOnly
    />
  );
});

const componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;

ToolbarButton.propTypes = {
  /** Determines whether the `ToolbarButton` is active */
  active: bool,
};

ToolbarButton.defaultProps = {
  active: false,
};

ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);
