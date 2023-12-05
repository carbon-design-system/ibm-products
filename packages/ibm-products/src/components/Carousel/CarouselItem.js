/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--carousel__item`;
const componentName = 'CarouselItem';

/**
 * The Carousel acts as a scaffold for other Novice to Pro content.
 *
 * This component is not intended for general use.
 */
export let CarouselItem = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={cx(blockClass, className)}
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </div>
  );
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CarouselItem.propTypes = {
  /**
   * Provide the contents of the CarouselItem.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
