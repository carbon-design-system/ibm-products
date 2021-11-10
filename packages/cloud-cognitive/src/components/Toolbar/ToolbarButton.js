/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from 'carbon-components-react';
import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import React, { forwardRef, useContext } from 'react';

import { pkg } from '../../settings';
import { blockClass, ToolbarContext } from './Toolbar';

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
export let ToolbarButton = forwardRef(
  ({ caret, children, className, ...rest }, ref) => {
    return (
      <Button
        tooltipPosition={useContext(ToolbarContext)?.vertical && 'right'}
        {...rest}
        ref={ref}
        className={cx(className, { [`${blockClass}__button--caret`]: caret })}
        kind="ghost"
        size="md"
        hasIconOnly
      >
        <>
          {children}

          {caret && <span className={`${blockClass}__button__caret`} />}
        </>
      </Button>
    );
  }
);

const componentName = 'ToolbarButton';
ToolbarButton.displayName = componentName;

ToolbarButton.propTypes = {
  /** Determines whether the caret is rendered */
  caret: bool,

  /** Provide the content of the `ToolbarButton` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

ToolbarButton.defaultProps = {
  caret: false,
};

ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);
