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
import { pkg /*, carbon */ } from '../../settings';
import classnames from 'classnames';
// Carbon and package components we use.
import { ArrowUp } from '@carbon/react/icons';
import { Tooltip } from '@carbon/react';
import { BigNumbersSize } from '.';
// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--big-numbers`;
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
  total: 0,
  locale: 'en-US',
  percentage: false,
  size: BigNumbersSize.Default,
  value: null,
  forceShowTotal: false,
  trending: false,
  truncate: true,
};

/**
 * Ensure that the value includes a percentage if specified by prop,
 * or otherwise the value is properly formatted.
 * @param {string} locale Locale value to be used in formatting numbers.
 * @param {boolean} percentage Whether a percent sign should be included.
 * @param {number|null} value The value to be formatted.
 * @param {boolean} truncate Whether or not the value should be truncated.
 * @returns {string} Formatted string.
 */
const truncateValue = (locale, percentage, value, truncate) => {
  if (value === null) {
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
    ? Intl.NumberFormat(locale, { notation: 'compact' }).format(value)
    : Intl.NumberFormat(locale).format(value);
};

/**
 * TODO: A description of the component.
 */
export let BigNumbers = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      forceShowTotal = defaults.forceShowTotal,
      locale = defaults.locale,
      percentage = defaults.percentage,
      size = defaults.size,
      total = defaults.total,
      trending = defaults.trending,
      truncate = defaults.truncate,
      value = defaults.value,
      iconButton,
      information,
      label,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const ICAClasses = classnames(className, {
      [`${blockClass}--lg`]: size === BigNumbersSize.Large,
      [`${blockClass}--xl`]: size === BigNumbersSize.XLarge,
    });
    const supportedLocal =
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

    const truncatedValue = truncateValue(
      supportedLocal,
      percentage,
      value,
      truncate
    );
    const truncatedTotal = formatValue(supportedLocal, total, truncate);
    const shouldDisplayDivisor =
      (!percentage && total > value && truncatedValue !== truncatedTotal) ||
      (forceShowTotal && truncatedTotal > 0);

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          ICAClasses,
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <span className={`${blockClass}__row`}>
          <h4 className={`${blockClass}__label`}>{label} </h4>
          {information && (
            <Tooltip showIcon={true} direction={'right'}>
              {information}
            </Tooltip>
          )}
        </span>
        <span className={`${blockClass}__row`}>
          {trending && (
            <ArrowUp className={`${blockClass}__trend`} size={iconSize()} />
          )}
          <span className={`${blockClass}__value`}>{truncatedValue}</span>
          {shouldDisplayDivisor ? (
            <span className={`${blockClass}__total`}>
              {' '}
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

  /** Displays an iconButton next to the BigNumbers value */
  iconButton: PropTypes.node,

  /** Pass in content to the body of the information tooltip. */
  information: PropTypes.node,

  /**
   * Text label for BigNumbers.
   * @type string
   */
  label: PropTypes.string.isRequired,

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

  /** The size of the BigNumbers. */
  size: PropTypes.oneOf(Object.values(BigNumbersSize)),

  /**
   * Total value that the main BigNumbers value is a subset of.
   * @type number
   */
  total: PropTypes.number,

  /** Display trending icon. */
  trending: PropTypes.bool,

  /** Specify whether or not the values should be truncated. */
  truncate: PropTypes.bool,

  /**
   * The main BigNumbers value to display
   * @type number
   */
  value: PropTypes.number,
};
