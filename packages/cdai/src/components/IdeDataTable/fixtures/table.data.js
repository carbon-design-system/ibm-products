//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export const headers = [
  {
    key: 'name',
    header: 'column 1',
  },
  {
    key: 'protocol',
    header: 'column 2',
  },
];

const rowTemplate = headers.reduce(
  (row, header) => ({
    ...row,
    [header.key]: 'testValue',
  }),
  {}
);

export const rows = new Array(200)
  .fill(rowTemplate)
  .map((row, index) => ({ ...row, id: `row-${index}`, name: `test-${index}` }));
