/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useIntersection } from './utils';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--carousel__item`;
const componentName = 'CarouselItem';

/**
 * TODO: A description of the component.
 */
const CarouselItem = ({ children, className, ...rest }) => {
  const itemRef = useRef();
  const isInView = useIntersection(itemRef, 0.85);

  useEffect(() => {
    const matches = itemRef.current?.querySelectorAll(
      'a, button, [role="button"], [tabindex]'
    );
    if (matches) {
      const ti = isInView ? 0 : -1;
      [...matches].forEach((match) => {
        match.tabIndex = ti;
      });
    }
  }, [isInView]);

  return (
    <div
      {...rest}
      className={cx(blockClass, className)}
      ref={itemRef}
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

export { CarouselItem };