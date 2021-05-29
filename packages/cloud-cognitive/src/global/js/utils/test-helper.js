//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

/**
 * A helper function to mock properties of the HTML element prototype.
 * @param {*} options An object containing one or more properties, being the
 * names of properties to add/replace in the HTML element prototype along with
 * a property descriptor to apply. The property descriptor may contain a value
 * field, and optionally a writable flag, or it may contain a get and/or a set
 * method. Other property descriptor fields may also be included, but each
 * mocked property will always be made configurable (in order to enable the
 * mock to be restored later).
 * @returns An object containing a mockRestore function which will return all
 * replaced properties to their original states and remove all added properties.
 * This function should be called after tests in order not to pollute other
 * tests with the installed mocks.
 */
const hep = HTMLElement.prototype;
export const mockHTMLElement = (options) => {
  const originals = {};

  for (let option in options) {
    originals[option] = Object.getOwnPropertyDescriptor(hep, option);
    Object.defineProperty(
      hep,
      option,
      // Ensure we'll be able to restore or delete the property later
      Object.assign({}, options[option], { configurable: true })
    );
  }

  return {
    mockRestore: () => {
      for (let option in options) {
        if (originals[option]) {
          Object.defineProperty(hep, option, originals[option]);
        } else {
          delete hep[option];
        }
      }
    },
  };
};
