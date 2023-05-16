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
import { Link } from 'carbon-components-react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner__element-link`;
const componentName = 'GuidebannerElementLink';

/**
 * A link styled specifically for the GuidebannerElement.
 */
const GuidebannerElementLink = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={cx(blockClass, className)}
      kind="ghost"
      role="link"
      size="md"
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </Link>
  );
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
GuidebannerElementLink.propTypes = {
  /**
   * Provide the contents of the GuidebannerElementLink.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};

export { GuidebannerElementLink };