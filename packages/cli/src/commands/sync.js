/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { getWorkspace } = require('../workspace');
const { displayBanner, createLogger } = require('../logger');

const tasks = {
  npm: require('./sync/npm'),
  'package.json': require('./sync/packageJson'),
  readme: require('./sync/readme'),
};

const logger = createLogger('sync');

async function sync(args) {
  displayBanner();

  const workspace = await getWorkspace();
  const { target } = args;
  const tasksToRun = target === 'all' ? Object.keys(tasks) : [target];

  for (const name of tasksToRun) {
    logger.start(`Syncing group: ${name}`);
    const task = tasks[name];
    await task.run(workspace);
    logger.stop();
  }
}

module.exports = {
  command: 'sync [target]',
  desc: 'sync configuration files for packages in a workspace',
  builder(yargs) {
    yargs.positional('target', {
      describe: 'choose a target to sync',
      choices: ['all', 'npm', 'package.json', 'readme'],
      default: 'all',
    });
  },
  handler: sync,
};
