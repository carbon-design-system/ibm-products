/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { execSync } = require('child_process');
const { resolve } = require('path');

const configFile = resolve(__dirname, '..', '.babelrc');

const ignore = [
  '**/__tests__/*',
  '**/*.spec.js',
  '**/*.stories.js',
  '**/*-story.js',
  '**/*-test.js',
].join(',');

const babel = ({ BABEL_ENV, output }) => {
  execSync(
    `babel src --config-file ${configFile} -d ${output} --ignore '${ignore}'`,
    {
      env: Object.assign({}, process.env, {
        BABEL_ENV,
      }),
      stdio: 'inherit',
    }
  );
};

try {
  babel({ BABEL_ENV: 'es', output: 'es' });
  babel({ BABEL_ENV: 'cjs', output: 'lib' });
} catch (error) {
  console.error(error);
  process.exit(1);
}
