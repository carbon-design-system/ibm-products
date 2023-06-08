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
import { Button } from 'carbon-components-react';
import { Crossroads16 } from '@carbon/icons-react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner__element-button`;
const componentName = 'GuidebannerElementButton';

/**
 * One of two buttons styled specifically for the GuidebannerElement.
 */
const GuidebannerElementButton = ({
  children,
  className,
  renderIcon,
  ...rest
}) => {
  if (renderIcon === 'crossroads') {
    return (
      <Button
        {...rest}
        className={cx(blockClass, className)}
        iconDescription={'Crossroads'}
        kind="tertiary"
        renderIcon={Crossroads16}
        role="button"
        size="md"
        {...getDevtoolsProps(componentName)}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      {...rest}
      className={cx(blockClass, className)}
      kind="ghost"
      role="button"
      size="md"
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </Button>
  );
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
GuidebannerElementButton.propTypes = {
  /**
   * Provide the contents of the GuidebannerElementButton.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * If renderIcon is "crossroads", return a button with the "crossroads" icon.
   */
  renderIcon: PropTypes.string,

  /* TODO: add types and DocGen for all props. */
};

export { GuidebannerElementButton };
