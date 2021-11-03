/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');
const { execFileSync } = require('child_process');
const { sync: glob } = require('glob');

const r = (file) => resolve(__dirname, file);
const loadPath1 = r('../../node_modules');
const loadPath2 = r('../../../../node_modules');

const g = (globString) =>
  glob(r(globString), {
    nodir: true, // cspell:disable-line
    nosort: true, // cspell:disable-line
  });
const scssAll = g('../**/*.scss');

const compile = (file, compressed, collect) =>
  execFileSync(
    'sass',
    [
      compressed ? '--style=compressed' : '--style=expanded',
      '--no-source-map',
      '--load-path',
      loadPath1,
      '--load-path',
      loadPath2,
      file,
    ],
    {
      stdio: ['ignore', collect ? 'pipe' : 'ignore', 'pipe'],
    }
  )?.toString();

describe('CSS export checks', () => {
  // This test will fail for any of our SCSS entry points that does not compile.
  scssAll.forEach((file) =>
    it(`${file.match(/\/src\/(.*)/)[1]} compiles as valid SCSS`, () => {
      expect(() => compile(file)).not.toThrow();
    })
  );
});
