//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
const printReport = (reportResults) => {
  console.log('Scanning for use of Carbon for IBM Products\n');
  console.log(
    '-----------------------------------------------------------------------------\n'
  );
  console.log(
    '- Start of component usage report --------------------------------------------------------------------------\n'
  );

  reportResults.forEach((result) => {
    console.log(`\nFile: '${result.file}'`);
    console.log(`Components: [${result.components.join(', ')}]`);
    console.log(`Imports:`);
    result.imports.forEach((item) => {
      console.log(`\t(${item.index}): ${item.match[0]}`);
    });
  });

  console.log(
    '- End of component usage report ----------------------------------------------------------------------------\n'
  );
};

export default printReport;
