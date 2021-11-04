/**
 * @file Style tests.
 * @copyright IBM Security 2020 - 2021
 */

const { resolve } = require('path');
const { execFileSync } = require('child_process');

const loadPath1 = resolve(__dirname, '../../../node_modules');
const loadPath2 = resolve(__dirname, '../../../../../node_modules');

// Compile an SCSS file, and return the compiled CSS as a String. If the SCSS
// file does not compile this function will throw an Error containing details
// of the compilation failure.
const scssCompile = (file) =>
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
      maxBuffer: 1024 * 1024 * 2,
      stdio: ['ignore', 'pipe', 'pipe'],
    }
  ).toString();

describe('Styles', () => {
  test('Bundle', () => {
    expect(
      scssCompile(resolve(__dirname, '../../index.scss'))
    ).toMatchSnapshot();
  });
});
