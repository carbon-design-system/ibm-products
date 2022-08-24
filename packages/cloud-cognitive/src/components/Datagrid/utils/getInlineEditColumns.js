/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const getInlineEditColumns = () => {
  return [
    {
      Header: 'Row Index',
      accessor: (row, i) => i,
      sticky: 'left',
      id: 'rowIndex', // id is required when accessor is a function.
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
      editType: 'text',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
      editType: 'text',
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 50,
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      width: 60,
    },
    {
      Header: 'Someone 1',
      accessor: 'someone1',
    },
    {
      Header: 'Someone 2',
      accessor: 'someone2',
    },
    {
      Header: 'Someone 3',
      accessor: 'someone3',
    },
    {
      Header: 'Someone 4',
      accessor: 'someone4',
    },
    {
      Header: 'Someone 5',
      accessor: 'someone5',
    },
    {
      Header: 'Someone 6',
      accessor: 'someone6',
    },
    {
      Header: 'Someone 7',
      accessor: 'someone7',
    },
    {
      Header: 'Someone 8',
      accessor: 'someone8',
    },
    {
      Header: 'Someone 9',
      accessor: 'someone9',
    },
    {
      Header: 'Someone 10',
      accessor: 'someone10',
    },
  ];
};
