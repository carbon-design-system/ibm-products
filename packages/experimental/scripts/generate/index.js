/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { readFileSync, outputFileSync } = require('fs-extra');
const { sync } = require('glob');
const { prompt } = require('inquirer');
const { paramCase } = require('param-case');
const { basename, resolve } = require('path');
const replaceAll = require('string.prototype.replaceall');

async function init() {
  const { name } = await prompt(['name'].map((name) => ({ name })));

  const compile = (content) =>
    replaceAll(
      replaceAll(content, 'DISPLAY_NAME', name),
      'STYLE_NAME',
      paramCase(name)
    );

  sync(resolve(__dirname, 'templates/**/*')).forEach((template) => {
    outputFileSync(
      resolve('src', 'components', name, compile(basename(template))),
      compile(readFileSync(template, 'utf8'))
    );
  });
}

init();
