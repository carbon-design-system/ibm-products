/** @jest-environment node */
/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { renderSync } from 'sass';
import fs from 'fs-extra';

// the sass compile of complete Carbon can take quite a while
jest.setTimeout(300000);

describe('imported-carbon-modules', () => {
  it('presents a complete and correct list of module names', async () => {
    const normalize = (str) => str.replace(/"/g, "'").replace(/\s+/g, ' ');

    const render = renderSync({
      data: `
        @import '@carbon/import-once/scss/import-once';
        @import 'carbon-components/scss/globals/scss/styles';
        
        .___imported-modules-output {
          content: $imported-modules;
        }
      `,
      includePaths: ['node_modules'],
    }).css.toString();

    const carbonModuleList = normalize(
      render.match(/\.___imported-modules-output {\s*content: (.*?);/s)[1]
    );

    const file = await fs.readFile(
      'packages/cloud-cognitive/src/global/styles/_imported-carbon-modules.scss',
      'utf8'
    );

    const fileModuleList = normalize(
      file.match(/imported-carbon-modules: (.*?);/s)[1]
    );

    expect(fileModuleList).toEqual(carbonModuleList);
  });
});
