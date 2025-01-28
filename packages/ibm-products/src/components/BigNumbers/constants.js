/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* **************************** | CONSTANTS | ***************************** */

export const BigNumbersSize = {
  Default: 'default',
  Large: 'lg',
  XLarge: 'xl',
};

export const Characters = {
  Dash: '–',
  Slash: '/',
};

export const DefaultLocale = 'en-US';

/* ************************ | UTILITY FUNCTIONS | ************************* */

/**
 * Ensure that the value is formatted correctly based on whether it should be truncated or not.
 * @param {string} locale Locale value to be used in formatting numbers.
 * @param {number | null | undefined } value The value to format.
 * @param {number} fractionDigits How many significant figures should be displayed.
 * @param {boolean} truncate Whether or not the value should be truncated.
 * @returns {string | null | undefined } The formatted value.
 */
export const formatValue = (locale, value, fractionDigits, truncate) => {
  if (value === null || value === undefined || typeof value !== 'number') {
    return null;
  }
  return truncate
    ? Intl.NumberFormat(locale, {
        notation: 'compact',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: Math.round(fractionDigits),
      }).format(value)
    : Intl.NumberFormat(locale).format(value);
};

/**
 * Function which takes a size and returns a numeric value for sizing icons
 * @param {string} size Size of desired icon. Expected values are 'default', 'lg', or 'xl'.
 */
export const getIconSize = (size) => {
  switch (size) {
    case BigNumbersSize.Large:
      return 20;
    case BigNumbersSize.XLarge:
      return 24;
    default:
      return 16;
  }
};
