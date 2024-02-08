/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import classnames from 'classnames';
// Carbon and package components we use.
import { ArrowUp, Information } from '@carbon/react/icons';
import { Tooltip, SkeletonText } from '@carbon/react';
import { TooltipTrigger } from '../TooltipTrigger';
import {
  formatValue,
  getIconSize,
  getSupportedLocale,
  BigNumbersSize,
  DefaultLocale,
  Characters,
} from './utils';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--big-numbers`;
const skeletonBlockClass = `${pkg.prefix}--big-numbers-skeleton`;
const componentName = 'BigNumbers';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  forceShowTotal: false,
  fractionDigits: 1,
  loading: false,
  locale: DefaultLocale,
  percentage: false,
  size: BigNumbersSize.Default,
  total: 0,
  trending: false,
  truncate: true,
  value: null,
};

/**
 * BigNumbers is used to display large values in a small area. The display of
 * values can be the value itself, or grouped in a numerator / denominator fashion.
 * Control over the total fraction decimals displayed as well as how the
 * values/totals are displayed are done via a locale prop. Other optional props
 * allow control over size, truncation, if the value is a percentage, the addition
 * of a button as well as tool tip functionality.
 * The default locale is English (`en-US`) if one is not provided or if the provided one is not supported.
 */
export let BigNumbers = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      forceShowTotal = defaults.forceShowTotal,
      fractionDigits = defaults.fractionDigits,
      iconButton,
      loading = defaults.loading,
      label,
      locale = defaults.locale,
      percentage = defaults.percentage,
      size = defaults.size,
      tooltipDescription,
      total = defaults.total,
      trending = defaults.trending,
      truncate = defaults.truncate,
      value = defaults.value,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const BigNumbersClasses = classnames(className, {
      [`${blockClass}--lg`]: size === BigNumbersSize.Large,
      [`${blockClass}--xl`]: size === BigNumbersSize.XLarge,
    });

    const supportedLocale = getSupportedLocale(locale);

    const truncatedValue =
      formatValue(supportedLocale, value, fractionDigits, truncate) ??
      Characters.Dash;

    const truncatedTotal =
      formatValue(supportedLocale, total, fractionDigits, truncate) ??
      'Unknown';

    const shouldDisplayDenominator =
      (!percentage && total > value && truncatedValue !== truncatedTotal) ||
      (forceShowTotal && total > 0);

    if (loading) {
      <SkeletonBigNumbers className={className} size={size} {...rest} />;
    }

    return (
      <div
        {...rest}
        className={cx(blockClass, BigNumbersClasses, className)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {/* Label and tooltip row */}
        <span className={`${blockClass}__row`}>
          <h4 className={`${blockClass}__label`}>{label}</h4>
          {tooltipDescription && (
            <Tooltip
              description={tooltipDescription}
              align="right"
              className={`${blockClass}__info`}
            >
              <TooltipTrigger className={`${blockClass}__tooltip-trigger`}>
                <Information size={16} />
              </TooltipTrigger>
            </Tooltip>
          )}
        </span>

        {/* Trending arrow, numerator, denominator, and optional iconButton row */}
        <span className={`${blockClass}__row`} role="math">
          {trending && (
            <ArrowUp
              className={`${blockClass}__trend`}
              size={getIconSize(size)}
            />
          )}

          {/* Numerator */}
          <span className={`${blockClass}__value`}>
            {percentage ? (
              <div className={`${blockClass}__percentage`}>
                {truncatedValue}
                <span className={`${blockClass}__percentage-mark`}>%</span>
              </div>
            ) : (
              truncatedValue
            )}
          </span>

          {/* Denominator */}
          {shouldDisplayDenominator && (
            <span className={`${blockClass}__total`}>
              <span>
                {Characters.Slash}
                {truncatedTotal}
              </span>
            </span>
          )}

          {iconButton}
        </span>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
BigNumbers = pkg.checkComponentEnabled(BigNumbers, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
BigNumbers.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
BigNumbers.propTypes = {
  /**
   * Optional class name.
   * @type number
   */
  className: PropTypes.string,

  /**
   * Display the `total` even when the `value` is equal to
   * the `total` when `forceShowTotal` prop is true on the
   * condition that the `total` is greater than 0.
   * @type bool
   */
  forceShowTotal: PropTypes.bool,

  /**
   * Optional value to control the maximum fraction digits
   * used when truncating the value and total.
   * @type number
   */
  fractionDigits: PropTypes.number,

  /** Displays an iconButton next to the BigNumbers value
   * @type node
   */
  iconButton: PropTypes.node,

  /**
   * Text label for BigNumbers.
   * @type string
   */
  label: PropTypes.string.isRequired,

  /** Specify if the BigNumbers is in a loading state
   * @type bool
   */
  loading: PropTypes.bool,

  /**
   * Locale value to determine approach to formatting numbers.
   * @type string
   */
  locale: PropTypes.string,

  /**
   * Format number to percentage when `percentage` prop is true.
   * @type bool
   */
  percentage: PropTypes.bool,

  /** The size of the BigNumbers.
   * @type string
   */
  size: PropTypes.oneOf(Object.values(BigNumbersSize)),

  /** Label applied to a Tooltip - marked with the Information icon.
   * @type string
   */
  tooltipDescription: PropTypes.string,

  /**
   * Total value that the main BigNumbers value is a subset of.
   * @type number
   */
  total: PropTypes.number,

  /** Display trending icon.
   * @type boolean
   */
  trending: PropTypes.bool,

  /** Specify whether or not the values should be truncated.
   * @type boolean
   */
  truncate: PropTypes.bool,

  /**
   * The main BigNumbers value to display
   * @type number
   */
  value: PropTypes.number,
};

/**
 * SkeletonBigNumbers is used to display a skeleton version while
 * content is loading (handled by the BigNumbers prop `loading').
 *
 * Note: This component is only used within BigNumbers.
 */
let SkeletonBigNumbers = React.forwardRef(
  ({ className, size, ...rest }, ref) => {
    const BigNumbersSkeletonClasses = classnames(className, {
      [`${skeletonBlockClass}--lg`]: size === BigNumbersSize.Large,
      [`${skeletonBlockClass}--xl`]: size === BigNumbersSize.XLarge,
    });
    return (
      <div
        {...rest}
        className={cx(className, skeletonBlockClass, BigNumbersSkeletonClasses)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <SkeletonText className={`${skeletonBlockClass}__label`} />
        <SkeletonText
          heading
          className={`${skeletonBlockClass}__value`}
          width="80%"
        />
      </div>
    );
  }
);

SkeletonBigNumbers.propTypes = {
  /**
   * Optional class name.
   * @type number
   */
  className: PropTypes.string,
  /** The size of the BigNumbers.
   * @type string
   */
  size: PropTypes.oneOf(Object.values(BigNumbersSize)),
};
