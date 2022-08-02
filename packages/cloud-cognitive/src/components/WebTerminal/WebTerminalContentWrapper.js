/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { useWebTerminal } from './hooks';

// The block part of our conventional BEM class names (blockClass__E--M).
const componentName = 'WebTerminalContentWrapper';
const blockClass = `${pkg.prefix}--web-terminal-content-wrapper`;

export let WebTerminalContentWrapper = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      children,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const { open } = useWebTerminal();
    return (
      <div
        ref={ref}
        className={cx([blockClass, { [`${blockClass}--open`]: open }])}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
WebTerminalContentWrapper = pkg.checkComponentEnabled(
  WebTerminalContentWrapper,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
WebTerminalContentWrapper.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
WebTerminalContentWrapper.propTypes = {
  /**
   * Pass in content as children.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
