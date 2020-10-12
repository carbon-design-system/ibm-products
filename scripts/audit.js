/**
 * Licensed Materials - Property of IBM
 *
 * 5737-I89
 * © Copyright IBM Corp. 2019, 2020 All Rights Reserved
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 **/

'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const argv = process.argv.slice(2);
const level = argv[0];
let auditLevel;

async function audit() {
  auditLevel = level ? ' --audit-level=' + level : '';
  await exec('yarn audit --production' + auditLevel);
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
    console.log(err.stdout);
  } catch (e) {
    console.log(
      'audit stage failed due to an invalid error body! Error was: \n',
      e
    );
    process.exit(1);
  }
});
