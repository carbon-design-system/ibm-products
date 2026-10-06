/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Ensures the requested `locale` is valid, else returns the default locale.
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales
 */

export const getSupportedLocale = (
  locale: Intl.LocalesArgument,
  defaultLocale: string = 'en-US'
): Intl.LocalesArgument => {
  let supportedLocale: Intl.LocalesArgument;

  try {
    // This line will throw an error if `locale` is not supported.
    const supported = Intl.NumberFormat.supportedLocalesOf(
      locale as string | string[]
    );
    return supported.length > 0 ? locale : defaultLocale;
  } catch (error) {
    // else return `defaultLocale`.
    supportedLocale = defaultLocale;
  }

  return supportedLocale;
};
