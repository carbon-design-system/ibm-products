/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Generic utility to compose event handlers so that consumers can supply their
 * own event listeners on table components. The default heuristic here is to
 * iterate through the given functions until `preventDefault` is called on the
 * given event.
 *
 * @param {Array<Function>} fns array of functions to apply to the event
 * @returns {Function}
 */
const composeEventHandlers =
  (fns) =>
  (event, ...args) => {
    for (let i = 0; i < fns.length; i += 1) {
      if (event.defaultPrevented) {
        break;
      }
      /* eslint-disable security/detect-object-injection */
      if (typeof fns[i] === 'function') {
        fns[i](event, ...args);
      }
      /* eslint-enable security/detect-object-injection */
    }
  };

export default composeEventHandlers;
