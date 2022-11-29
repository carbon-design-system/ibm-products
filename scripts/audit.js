//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

'use strict';

// cspell:words ENOAUDIT

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const argv = process.argv.slice(2);
const group = argv[0];
const level = argv[1];
let auditLevel;

async function audit() {
  auditLevel = level ? ' --level ' + level : '';
  const auditCommand = 'yarn npm audit --groups ' + group + auditLevel;
  console.log('Running audit using:', auditCommand);
  await exec(auditCommand);
}

audit().catch((err) => {
  // Failed to contact endpoint
  if (err && err.message && err.message.includes('code ENOAUDIT')) {
    console.log(
      'audit stage has failed because of an error contacting the yarn audit endpoint, this will not fail the build!'
    );
    process.exit(0);
  }

  // Report any vulnerabilities
  try {
    // If any entry in the table, this must be reported
    if (err.stdout.includes('Prototype Pollution')) {
      console.log(err.stdout);
      process.exit(1);
    } else {
      // If not table reported, we're good
      process.exit(0);
    }
  } catch (e) {
    console.log(
      'audit stage failed due to an invalid error body! Error was: \n',
      e
    );
  }

  process.exit(1);
});
