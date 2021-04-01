/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { renderSync } = require('node-sass');
const { resolve } = require('path');

describe('Styles', () => {
  // This identifies and raises awareness to style changes of the public API in pull requests. If these are intended, update the snapshot.
  test('Public API', () => {
    expect(
      renderSync({
        file: resolve(__dirname, '../index.scss'),
        includePaths: [resolve(__dirname, '../../../../node_modules')],
        outputStyle: 'expanded',
      }).css.toString()
    ).toMatchSnapshot();
  });
});
