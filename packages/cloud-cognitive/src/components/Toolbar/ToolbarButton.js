/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from 'carbon-components-react';
import React, { forwardRef, useContext } from 'react';

import { pkg } from '../../settings';
import { ToolbarContext } from './Toolbar';

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
export let ToolbarButton = forwardRef((props, ref) => {
  return (
    <Button
      tooltipPosition={useContext(ToolbarContext) && 'right'}
      {...props}
      ref={ref}
      kind="ghost"
      size="md"
      hasIconOnly
    />
  );
});

const componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;

ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);
