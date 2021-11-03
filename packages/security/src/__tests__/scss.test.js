/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');
const { execFileSync } = require('child_process');
const { sync: glob } = require('glob');

const loadPath1 = resolve(__dirname, '../../node_modules');
const loadPath2 = resolve(__dirname, '../../../../node_modules');

const g = (globString) =>
  glob(resolve(__dirname, globString), {
    nodir: true, // cspell:disable-line
    nosort: true, // cspell:disable-line
  });
const scssAll = g('../**/*.scss');

// Check that an SCSS file compiles correctly. This function does not return
// a value, but if the SCSS file does not compile it will throw an Error
// containing details of the compilation failure.
const compile = (file, compressed, collect) => {
  // We use the sass cli because this is currently much faster than using
  // the API owing to the overhead of @import resolution through the API.
  // When the sass API is revised it may be feasible to switch back to
  // using the API for SCSS compilation and checking.
  execFileSync(
    'sass',
    [
      '--style=expanded',
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
  );
};

describe('SCSS entry points', () => {
  // This test will fail for any of our SCSS entry points that does not compile.
  scssAll.forEach((file) =>
    it(`${file.match(/\/src\/(.*)/)[1]} compiles as valid SCSS`, () => {
      expect(() => compile(file)).not.toThrow();
    })
  );
});
