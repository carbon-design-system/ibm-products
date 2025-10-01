/**
 * Copyright IBM Corp. 2021, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('node:path');

const reset = "\x1b[0m";
const green = str => `\x1b[42m${str + reset}`;
const red = str => `\x1b[41m${str + reset}`;

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
    console.log(`${status ? red('FAIL') : green('PASS')} Import '${lib}'`);

    if (status) {
      console.error(`\n${red(status)}`);
    }
  }
};

module.exports = importCheck();
