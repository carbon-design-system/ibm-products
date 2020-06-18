/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const glob = require('fast-glob');
const fs = require('fs-extra');
const path = require('path');

/**
 * Get information about the current workspace that a command is executing
 * within.
 * @returns {object}
 */
async function getWorkspace() {
  const [directory, packageJson] = await getWorkspaceRoot(process.cwd());
  const packages = glob
    .sync(
      packageJson.workspaces.packages.map(
        (pattern) => `${pattern}/package.json`
      ),
      {
        cwd: directory,
      }
    )
    .map((match) => {
      const packageJsonPath = path.join(directory, match);
      return {
        packageJsonPath,
        packageJson: fs.readJsonSync(packageJsonPath),
        packageFolder: path.dirname(packageJsonPath),
      };
    });

  return {
    directory,
    packageJson,
    packages,
  };
}

/**
 * Get the closest root folder and package.json for a Yarn workspace from an
 * arbitrary path
 * @param {string} directory
 * @returns {Array<string, object>}
 */
async function getWorkspaceRoot(directory) {
  let cwd = directory;

  while (path.dirname(cwd) !== '/' && cwd !== '/') {
    const packageJsonPath = path.join(cwd, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      if (packageJson.workspaces) {
        return [cwd, packageJson];
      }
    }
    cwd = path.dirname(cwd);
  }

  throw new Error(`Unable to find workspace root from directory: ${directory}`);
}

module.exports = {
  getWorkspace,
};
