/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import React, { forwardRef } from 'react';

import { pkg } from '../../settings';
import { blockClass } from './Toolbar';

/** Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands. */
export let ToolbarDropdown = forwardRef(
  ({ children, className, renderIcon: Icon, ...rest }, ref) => {
    return (
      <OverflowMenu
        {...rest}
        ref={ref}
        className={cx(`${blockClass}__dropdown`, className)}
        renderIcon={Icon}>
        <OverflowMenuItem itemText={children} />
      </OverflowMenu>
    );
  }
);

const componentName = 'ToolbarDropdown';
ToolbarDropdown.displayName = componentName;

ToolbarDropdown.propTypes = {
  /** Provide the content of the `ToolbarDropdown` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Determines whether the `ToolbarDropdown` is rendered vertically */
  vertical: bool,
};

ToolbarDropdown = pkg.checkComponentEnabled(ToolbarDropdown, componentName);
