/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');
import fs from 'fs-extra';
import { scssCompile } from '../global/js/utils/test-helper';

describe('imported-carbon-modules', () => {
  jest.setTimeout(50000);

  it('presents a complete and correct list of module names', async () => {
    const normalize = (str) => str.replace(/"/g, "'").replace(/\s+/g, ' ');
    const generated = scssCompile(
      resolve(__dirname, '../global/styles/_generate-carbon-modules.scss')
    );
    const current = await fs.readFile(
      resolve(__dirname, '../global/styles/_imported-carbon-modules.scss'),
      'utf8'
    );

    expect(
      normalize(
        generated.match(/\.___imported-modules-output {\s*content: (.*?);/s)[1]
      )
    ).toEqual(normalize(current.match(/imported-carbon-modules: (.*?);/s)[1]));
  });
});
