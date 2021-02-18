/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { bgGreen, bgRed, red } = require('colors');

module.exports = (path) => {
  let status;

  try {
    require('assert')(require(path));
  } catch (error) {
    status = error;
  } finally {
    console.log(`${status ? bgRed('FAIL') : bgGreen('PASS')} Import '${path}'`);

    if (status) {
      console.error(`\n${red(status)}`);
    }
  }
};
