/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '@carbon/react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--inline-tip__button`;
const componentName = 'InlineTipButton';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * This is a standard Carbon button, styled specifically for use inside InlineTip.
 */
export let InlineTipButton = React.forwardRef(
  ({ children, className, ...rest }, ref) => {
    return (
      <Button
        {...rest}
        className={cx(blockClass, className)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
        size="md"
        kind="ghost"
      >
        {children}
      </Button>
    );
  }
);

InlineTipButton.propTypes = {
  /**
   * Provide the contents of the InlineTipButton.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /* TODO: add types and DocGen for all props. */
};
