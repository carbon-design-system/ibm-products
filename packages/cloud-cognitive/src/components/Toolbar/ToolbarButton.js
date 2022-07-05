/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IconButton } from '@carbon/react';
import cx from 'classnames';
import { bool, func, node, string } from 'prop-types';
import React, { forwardRef, useContext } from 'react';

import { pkg } from '../../settings';

import { blockClass as toolbarClass, ToolbarContext } from './Toolbar';

const blockClass = `${toolbarClass}__button`;

/** Toolbar buttons are common functions performed as part of a products interface or an open window.  */
let ToolbarButton = forwardRef(
  (
    { caret, children, className, renderIcon, iconDescription, ...rest },
    ref
  ) => {
    const Icon = renderIcon;
    return (
      <IconButton
        align={useContext(ToolbarContext)?.vertical && 'right'}
        {...rest}
        label={iconDescription}
        ref={ref}
        className={cx(className, { [`${blockClass}--caret`]: caret })}
        kind="ghost"
        size="md"
      >
        <>
          <Icon />
          {children}

          {caret && <span className={`${blockClass}__caret`} />}
        </>
      </IconButton>
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

  /** Specifies the label for the icon button */
  iconDescription: string,

  /** Specifies the icon to be used by the ToolbarButton component */
  renderIcon: func,
};

ToolbarButton = pkg.checkComponentEnabled(ToolbarButton, componentName);

export { blockClass, ToolbarButton };
