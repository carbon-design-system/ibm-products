/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { execFileSync } = require('child_process');
const { copySync } = require('cpx');
const { resolve } = require('path');

const directory = 'src';
const configFile = resolve(__dirname, '..', '.babelrc');

const ignore = [
  '**/__tests__/*',
  '**/*.spec.js',
  '**/*.stories.js',
  '**/*-story.js',
  '**/*-test.js',
].join(',');

const compile = ({ BABEL_ENV, output }) => {
  // https://babeljs.io/docs/en/babel-cli#usage
  execFileSync(
    'babel',
    [directory, '--config-file', configFile, '-d', output, '--ignore', ignore],
    {
      env: Object.assign({}, process.env, {
        BABEL_ENV,
      }),
      stdio: 'inherit',
    }
  );

  // https://www.npmjs.com/package/cpx#nodejs-api
  copySync(`${directory}/**/assets/**`, output);
};

try {
  compile({ BABEL_ENV: 'es', output: 'es' });
  compile({ BABEL_ENV: 'cjs', output: 'lib' });
} catch (error) {
  console.error(error);
  process.exit(1);
}
