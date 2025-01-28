/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales
 *
 * @param {string} locale Desired locale for number formatting.
 * @param {string} defaultLocale Fallback locale if `locale` is not supported.
 * @returns `locale` or `defaultLocale`
 */
export const getSupportedLocale = (locale, defaultLocale = 'en-US') => {
  let supportedLocale;
  try {
    // This line will throw an error if `locale` is not supported.
    Intl.NumberFormat.supportedLocalesOf(locale);
    // If no error is thrown, return `locale`,
    supportedLocale = locale;
  } catch (error) {
    // else return `defaultLocale`.
    supportedLocale = defaultLocale;
  }
  return supportedLocale;
};
