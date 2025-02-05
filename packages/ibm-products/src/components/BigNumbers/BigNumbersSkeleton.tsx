// @ts-check
/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { forwardRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
// Carbon and package components we use.
import { SkeletonText } from '@carbon/react';
import { BigNumbersProps } from './BigNumbers';
import { BigNumbersSize } from './constants';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--big-numbers-skeleton`;
const componentName = 'BigNumbersSkeleton';

/**
 * SkeletonBigNumbers is used to display a skeleton version while
 * content is loading (handled by the BigNumbers prop `loading').
 *
 * Note: This component is only used within BigNumbers.
 */

// Use the same properties and values as parent BigNumbersProps
type BigNumbersSkeletonProps = Pick<BigNumbersProps, 'className' | 'size'>;

export const BigNumbersSkeleton = forwardRef<
  HTMLDivElement,
  BigNumbersSkeletonProps
>(({ className, size, ...rest }, ref) => {
  const bigNumbersSkeletonClasses = cx(className, blockClass, {
    [`${blockClass}--lg`]: size === BigNumbersSize.Large,
    [`${blockClass}--xl`]: size === BigNumbersSize.XLarge,
  });

  return (
    <div
      {...rest}
      className={bigNumbersSkeletonClasses}
      ref={ref}
      {...getDevtoolsProps(componentName)}
    >
      <SkeletonText className={`${blockClass}__label`} />
      <SkeletonText heading className={`${blockClass}__value`} width="80%" />
    </div>
  );
});

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
BigNumbersSkeleton.displayName = componentName;

BigNumbersSkeleton.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   *
   */
  size: PropTypes.oneOf([
    BigNumbersSize.Default,
    BigNumbersSize.Large,
    BigNumbersSize.XLarge,
  ]),
};
