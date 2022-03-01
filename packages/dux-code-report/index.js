//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
const args = process.argv.slice(2);
// const path = require('path');
const fs = require('fs');

// console.log(args);

const jsRegex = new RegExp(
  'import {(.*)} from [\'"]@carbon/((ibm-products)|(ibm-cloud-cognitive))[\'"].*',
  'gi'
);

const genReport = async () => {
  // const promises = [];

  console.log('Scanning for use of Carbon for IBM Products\n');
  console.log(
    '-----------------------------------------------------------------------------\n'
  );
  console.log('Submit the following as part of your DUX report.\n');
  console.log(
    '-Start-of-DUX-code-report--------------------------------------------------------------------------\n'
  );

  // This worked in stand along project, but not here. Not sure what was different.
  const importedMap = {};
  for (let i = 0; i < args.length; i++) {
    const file = args[i];
    const data = fs.readFileSync(file, 'utf8');
    let match;

    while ((match = jsRegex.exec(data))) {
      const importsUsed = match[1].split(',');
      importsUsed.forEach((importUsed) => {
        importedMap[importUsed.trim()] = true;
      });
      console.log(`${file} (${match.index}): ${match[0]}\n`);
    }
  }

  // await Promise.all(promises);

  console.log(
    '-Summary----------------------------------------------------------------------------\n'
  );
  console.log(
    `The following @carbon/ibm-products imports were used:\n\n ${Object.keys(
      importedMap
    ).join(', ')} were imported.\n`
  );
  console.log(
    '-End-of-DUX-code-report----------------------------------------------------------------------------\n'
  );
};

genReport();
