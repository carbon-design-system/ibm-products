/**
 * Copyright IBM Corp. 2021, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { bgGreen, bgRed, red } = require('chalk');
const path = require('node:path');

/**
 * used in `yarn ci-check` to check if lib is generate in the build command
 */
const importCheck = () => {
  const lib = path.resolve(__dirname, '..', 'lib');
  let status;

  try {
    require('assert')(path);
  } catch (error) {
    status = error;
  } finally {
    console.log(`${status ? bgRed('FAIL') : bgGreen('PASS')} Import '${lib}'`);

    if (status) {
      console.error(`\n${red(status)}`);
    }
  }
};

module.exports = importCheck();
