//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export const options = [
  {
    label: 'People',
    options: [
      {
        value: 'alex.mccarthy@southamptonfc.com',
        label: 'alex.mccarthy@southamptonfc.com',
      },
      {
        value: 'cedric.soares@southamptonfc.com',
        label: 'cedric.soares@southamptonfc.com',
      },
      {
        value: 'maya.yoshida@southamptonfc.com',
        label: 'maya.yoshida@southamptonfc.com',
      },
      {
        value: 'jannik.vestergaard@southamptonfc.com',
        label: 'jannik.vestergaard@southamptonfc.com',
      },
      {
        value: 'jack.stephens@southamptonfc.com',
        label: 'jack.stephens@southamptonfc.com',
      },
    ],
  },
  {
    label: 'Tags',
    options: [
      { type: 'cyan', value: 'Customer', label: 'Customer' },
      { type: 'cyan', value: 'Patient', label: 'Patient' },
      {
        type: 'cyan',
        value: 'Warehouse supply chain',
        label: 'Warehouse supply chain',
      },
      { value: 'Medical', label: 'Medical' },
      { value: 'Wards', label: 'Wards' },
    ],
  },
  {
    label: 'Types',
    options: [
      { value: 'Connections', label: 'Connections' },
      { value: 'Documents', label: 'Documents' },
      { value: 'JSON objects', label: 'JSON objects' },
      { value: 'Flows', label: 'Flows' },
    ],
  },
];

export const untypedOptions = options.map(category => ({
  label: category.label,
  options: category.options.map(option => ({
    label: option.label,
    value: option.value,
  })),
}));

export const aceOptions = [
  {
    label: 'Types',
    options: [
      {
        type: 'cyan',
        value: 'applications',
        label: 'Applications',
      },
      {
        type: 'cyan',
        value: 'services',
        label: 'Services',
      },
      {
        type: 'cyan',
        value: 'restapis',
        label: 'REST APIs',
      },
      {
        type: 'cyan',
        value: 'sharedlibraries',
        label: 'Shared Libraries',
      },
    ],
  },
  {
    label: 'States',
    options: [
      { type: 'green', value: 'started', label: 'Started' },
      { type: 'green', value: 'stopped', label: 'Stopped' },
    ],
  },
];
