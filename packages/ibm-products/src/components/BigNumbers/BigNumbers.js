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
import { BigNumbersSize } from './utils/enums';
import uuidv4 from '../../global/js/utils/uuidv4';
// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--big-numbers`;
const skeletonBlockClass = `${pkg.prefix}--big-numbers-skeleton`;
const componentName = 'BigNumbers';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  forceShowTotal: false,
  fractionDigits: 1,
  loading: false,
  locale: 'en-US',
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
      information,
      loading = defaults.loading,
      label,
      locale = defaults.locale,
      percentage = defaults.percentage,
      size = defaults.size,
      total = defaults.total,
      trending = defaults.trending,
      truncate = defaults.truncate,
      value = defaults.value,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const labelID = uuidv4();
    const BigNumbersClasses = classnames(className, {
      [`${blockClass}--lg`]: size === BigNumbersSize.Large,
      [`${blockClass}--xl`]: size === BigNumbersSize.XLarge,
    });
    const BigNumbersSkeletonClasses = classnames(className, {
      [`${skeletonBlockClass}--lg`]: size === BigNumbersSize.Large,
      [`${skeletonBlockClass}--xl`]: size === BigNumbersSize.XLarge,
    });

    const supportedLocale =
      Intl.NumberFormat.supportedLocalesOf(locale).length > 0
        ? locale
        : defaults.locale;

    const iconSize = () => {
      switch (size) {
        case BigNumbersSize.Large:
          return 20;
        case BigNumbersSize.XLarge:
          return 24;
        default:
          return 16;
      }
    };

    /**
     * Ensure that the value includes a percentage if specified by prop,
     * or otherwise the value is properly formatted.
     * @param {string} locale Locale value to be used in formatting numbers.
     * @param {boolean} percentage Whether a percent sign should be included.
     * @param {number|null|undefined} value The value to be formatted.
     * @param {boolean} truncate Whether or not the value should be truncated.
     * @returns {string} Formatted string.
     */
    const truncateValue = (locale, percentage, value, truncate) => {
      if (value === null || value === undefined) {
        return '–';
      } else if (percentage) {
        return (
          <div className={`${blockClass}__percentage`}>
            {formatValue(locale, value, truncate)}
            <span className={`${blockClass}__percentage-mark`}>%</span>
          </div>
        );
      } else {
        return formatValue(locale, value, truncate);
      }
    };

    /**
     * Ensure that the value is formatted correctly based on whether it should be truncated or not.
     * @param {string} locale Locale value to be used in formatting numbers.
     * @param {number} value The value to format.
     * @param {boolean} truncate Whether or not the value should be truncated.
     * @returns {string} The formatted value.
     */
    const formatValue = (locale, value, truncate) => {
      return truncate
        ? Intl.NumberFormat(locale, {
            notation: 'compact',
            minimumFractionDigits: 0,
            maximumFractionDigits: Math.round(fractionDigits),
          }).format(value)
        : Intl.NumberFormat(locale).format(value);
    };

    const truncatedValue = truncateValue(
      supportedLocale,
      percentage,
      value,
      truncate
    );
    const truncatedTotal = formatValue(supportedLocale, total, truncate);

    const shouldDisplayDenominator =
      (!percentage && total > value && truncatedValue !== truncatedTotal) ||
      (forceShowTotal && total > 0);

    if (loading) {
      return (
        <div
          {
            // Pass through any other property values as HTML attributes.
            ...rest
          }
          className={cx(
            className,
            skeletonBlockClass,
            BigNumbersSkeletonClasses
          )}
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

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          BigNumbersClasses,
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        aria-labelledby={labelID}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <span className={`${blockClass}__row`}>
          <h4 id={labelID} className={`${blockClass}__label`}>
            {label}
          </h4>
          {information && (
            <Tooltip
              label={information}
              align={'right'}
              className={`${blockClass}__info`}
            >
              <TooltipTrigger className={`${blockClass}__tooltip-trigger`}>
                <Information size={16} />
              </TooltipTrigger>
            </Tooltip>
          )}
        </span>
        <span className={`${blockClass}__row`}>
          {trending && (
            <ArrowUp className={`${blockClass}__trend`} size={iconSize()} />
          )}
          <span
            role="math"
            aria-label="Value"
            className={`${blockClass}__value`}
          >
            {truncatedValue}
          </span>
          {shouldDisplayDenominator ? (
            <span
              role="math"
              aria-label="Total"
              className={`${blockClass}__total`}
            >
              <span>/{truncatedTotal}</span>
            </span>
          ) : null}
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

  /** Pass in content to the body of the information tooltip.
   * @type string
   */
  information: PropTypes.string,

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
