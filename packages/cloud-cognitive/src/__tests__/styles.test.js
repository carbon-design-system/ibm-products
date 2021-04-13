/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { renderSync } = require('node-sass');
const { resolve } = require('path');

const name = 'CSS export checks';

describe(name, () => {
  // This test will fail if the generated CSS changes and no longer matches
  // the snapshot. If a change to the exported CSS for released components is
  // intended, re-run the tests with -u to update the snapshot, and check the
  // fresh snapshot in as part of the PR.
  it("doesn't change the exported CSS for released components", () => {
    expect(
      renderSync({
        file: resolve(__dirname, '../index-without-carbon-released-only.scss'),
        includePaths: [resolve(__dirname, '../../../../node_modules')],
        outputStyle: 'expanded',
      }).css.toString()
    ).toMatchSnapshot();
  });
});
