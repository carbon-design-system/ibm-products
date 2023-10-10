/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs-extra');
const path = require('path');
const prettier = require('prettier');
const prettierConfig = require('prettier-config-carbon');
const createRemark = require('remark');
const monorepo = require('./remark/monorepo');

const packageDenyList = new Set([]);

async function run(workspace) {
  const { directory, packages } = workspace;
  const remark = createRemark().use(monorepo, {
    root: directory,
  });
  const prettierOptions = {
    ...prettierConfig,
    parser: 'markdown',
  };

  return Promise.all(
    packages
      .filter((pkg) => !packageDenyList.has(pkg.packageJson.name))
      .map(async ({ packageFolder }) => {
        const README_PATH = path.join(packageFolder, 'README.md');
        if (!fs.existsSync(README_PATH)) {
          return;
        }

        const readme = await fs.readFile(README_PATH, 'utf8');
        const file = await process(remark, packageFolder, readme);
        await fs.writeFile(
          README_PATH,
          prettier.format(String(file), prettierOptions)
        );
      })
  );
}

function process(remark, cwd, contents) {
  return new Promise((resolve, reject) => {
    remark.process({ cwd, contents }, (error, file) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(file);
    });
  });
}

module.exports = {
  run,
};
