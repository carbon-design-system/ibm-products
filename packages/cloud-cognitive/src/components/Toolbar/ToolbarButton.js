/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from 'carbon-components-react';

import cx from 'classnames';
import { string } from 'prop-types';
import React, { forwardRef } from 'react';

import { pkg } from '../../settings';

const { checkComponentEnabled, prefix } = pkg;

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
export let ToolbarButton = forwardRef(({ className, ...rest }, ref) => {
  return (
    <Button
      {...rest}
      ref={ref}
      className={cx(`${prefix}--toolbar-item`, className)}
      kind="ghost"
      size="md"
      hasIconOnly
    />
  );
});

const componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;

ToolbarButton.propTypes = {
  /** Provide an optional class to apply to the containing node */
  className: string,
};

ToolbarButton = checkComponentEnabled(ToolbarButton, componentName);
