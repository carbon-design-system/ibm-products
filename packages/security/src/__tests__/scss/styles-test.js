/**
 * @file Style tests.
 * @copyright IBM Security 2020 - 2021
 */

import { execFileSync as _exec } from 'child_process';
import { sync as glob } from 'glob';
import { resolve } from 'path';

import { roots } from '../../../config';

const dependencies = roots
  .map((root) => ['-I', resolve(root, 'node_modules')])
  .flat();

const dirname = resolve(__dirname, '../..');
const src = resolve(dirname, 'index.scss');

function compile({ exec, input, sass = [] }) {
  return _exec('sass', [...dependencies, ...sass, input], exec);
}

const files = glob(resolve(dirname, '**/*.scss'), {
  ignore: [src, '**/css-gridish/**'],
});

describe('Styles', () => {
  test('Bundle', () => {
    expect(
      compile({
        input: src,
        exec: { maxBuffer: 1024 * 1024 * 1.5 },
      }).toString()
    ).toMatchSnapshot();
  });

  test.concurrent.each(files)("Compile '%s'", (input) => {
    expect(() =>
      compile({ input, sass: ['-s', 'compressed'], exec: { stdio: 'ignore' } })
    ).not.toThrow();
  });
});
