/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import React, { createContext, forwardRef } from 'react';

import { pkg } from '../../settings';

const { checkComponentEnabled, prefix } = pkg;
const blockClass = `${prefix}--toolbar`;

const ToolbarContext = createContext();

/** Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands. */
let Toolbar = forwardRef(({ children, className, vertical, ...rest }, ref) => {
  return (
    <div
      {...rest}
      ref={ref}
      className={cx(blockClass, className, {
        [`${blockClass}--vertical`]: vertical,
      })}
      {...(vertical && { 'aria-orientation': 'vertical' })}
      role="toolbar"
    >
      <ToolbarContext.Provider value={vertical}>
        {children}
      </ToolbarContext.Provider>
    </div>
  );
});

const componentName = 'Toolbar';
Toolbar.displayName = componentName;

Toolbar.propTypes = {
  /** Provide the content of the `Toolbar` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Determines whether the `Toolbar` is rendered vertically */
  vertical: bool,
};

Toolbar = checkComponentEnabled(Toolbar, componentName);

export { blockClass, componentName, Toolbar, ToolbarContext };
