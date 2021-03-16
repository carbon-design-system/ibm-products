/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const chalk = require('chalk'); // https://www.npmjs.com/package/chalk#usage
const { outputFileSync, readFileSync } = require('fs-extra');
const { sync } = require('glob');
const { paramCase } = require('param-case'); // https://www.npmjs.com/package/param-case#usage
const { basename, join, resolve } = require('path');

// https://www.npmjs.com/package/yargs#usage
const {
  argv: { _ },
} = require('yargs');

const name = _[0];

const compile = (template) =>
  Object.entries({
    DISPLAY_NAME: name,
    FULL_YEAR: new Date().getFullYear(),
    STORYBOOK_NAME: name.toLowerCase(),
    STYLE_NAME: paramCase(name),
  }).reduce(
    (accumulator, [expression, input]) =>
      accumulator.replace(new RegExp(expression, 'g'), input),
    template
  );

if (name) {
  sync(resolve(__dirname, 'templates/**/*')).forEach((template) => {
    const path = join('src', 'components', name, compile(basename(template)));
    const data = compile(readFileSync(template, 'utf8'));

    outputFileSync(path, data);

    console.log(
      `${chalk.green('create')} ${path} (${
        new TextEncoder().encode(data).length
      } bytes)`
    );
  });
}
