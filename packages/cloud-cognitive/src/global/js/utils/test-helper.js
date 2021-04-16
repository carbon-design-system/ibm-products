//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export const mockHTMLElement = (options) => {
  const originals = {};

  for (let option in options) {
    originals[option] = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      option
    );

    Object.defineProperty(HTMLElement.prototype, option, options[option]);
  }

  return {
    mockRestore: () => {
      for (let option in originals) {
        if (originals[option]) {
          Object.defineProperty(
            HTMLElement.prototype,
            option,
            originals[option]
          );
        } else {
          delete originals[option];
        }
      }
    },
  };
};
