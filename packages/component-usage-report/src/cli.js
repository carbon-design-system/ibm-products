//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import scan from './scan.js';
import printReport from './print-report.js';

export const cli = (argv) => {
  const args = argv.slice(2);

  const scanResults = scan(args);
  printReport(scanResults);
};
