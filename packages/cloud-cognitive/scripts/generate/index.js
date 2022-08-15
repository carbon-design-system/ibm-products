/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { green } = require('chalk');
const { outputFileSync, readFileSync } = require('fs-extra');
const { sync } = require('glob');
const { camelCase, paramCase, pascalCase } = require('change-case');
const { basename, join, resolve } = require('path');

// https://www.npmjs.com/package/yargs#usage
const {
  argv: { _ },
} = require('yargs');

const name = _[0];
const substitutions = {
  DISPLAY_NAME: pascalCase(name),
  FULL_YEAR: new Date().getFullYear(),
  CAMEL_NAME: camelCase(name),
  STYLE_NAME: paramCase(name),
};

const compile = (template) =>
  Object.entries(substitutions).reduce(
    (accumulator, [expression, input]) =>
      accumulator.replace(new RegExp(expression, 'g'), input),
    template
  );

if (name) {
  sync(resolve(__dirname, 'templates/**/*')).forEach((template) => {
    const path = join(
      'src',
      'components',
      substitutions.DISPLAY_NAME,
      compile(basename(template))
    );
    const data = compile(readFileSync(template, 'utf8'));

    outputFileSync(path, data);

    console.log(
      `${green('create')} ${path} (${
        new TextEncoder().encode(data).length
      } bytes)`
    );
  });

  // Update src/global/js/package-settings.js
  const settingsPath = join('src', 'global', 'js', 'package-settings.js');
  const settingsData = readFileSync(settingsPath, 'utf-8');

  // locate place to add new components
  const newComponentsHereRegex = /(\s+)\/\* new component flags here /;
  const here = settingsData.match(newComponentsHereRegex);

  // add new component
  const newSettingsData = `${settingsData.substr(0, here.index)}${here[1]}${
    substitutions.DISPLAY_NAME
  }: false,${settingsData.substr(here.index)}`;
  outputFileSync(settingsPath, newSettingsData);

  // add new component export to end of src/components/index.js
  const componentIndexPath = join('src', 'components', 'index.js');
  const componentIndexData = readFileSync(componentIndexPath, 'utf-8');
  outputFileSync(
    componentIndexPath,
    componentIndexData +
      `export { ${substitutions.DISPLAY_NAME} } from './${substitutions.DISPLAY_NAME}';\n`
  );

  // add new component to end of src/components/_index.scss
  const componentSCSSIndexPath = join('src', 'components', '_index.scss');
  const componentSCSSIndexData = readFileSync(componentSCSSIndexPath, 'utf-8');
  outputFileSync(
    componentSCSSIndexPath,
    componentSCSSIndexData + `@use './${substitutions.DISPLAY_NAME}';\n`
  );

  // add new component to end of src/components/_index-with-carbon.scss
  const componentWithCarbonSCSSIndexPath = join(
    'src',
    'components',
    '_index-with-carbon.scss'
  );
  const componentWithCarbonSCSSIndexData = readFileSync(
    componentWithCarbonSCSSIndexPath,
    'utf-8'
  );
  outputFileSync(
    componentWithCarbonSCSSIndexPath,
    componentWithCarbonSCSSIndexData +
      `@use './${substitutions.DISPLAY_NAME}/index-with-carbon as *';\n`
  );
}
