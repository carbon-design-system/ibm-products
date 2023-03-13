/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

<<<<<<< HEAD
import React from 'react';
import {
  ChartBubble,
  ChartColumnFloating,
  ChartVennDiagram,
} from '@carbon/react/icons';
=======
import {
  ChartBubble16,
  ChartColumnFloating16,
  ChartVennDiagram16,
} from '@carbon/icons-react';
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8

export const inlineEditSelectItems = [
  {
    id: 'option-0',
<<<<<<< HEAD
    icon: (props) => <ChartColumnFloating size={16} {...props} />,
=======
    icon: ChartColumnFloating16,
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
    text: 'Column Chart',
  },
  {
    id: 'option-1',
<<<<<<< HEAD
    icon: (props) => <ChartBubble size={16} {...props} />,
=======
    icon: ChartBubble16,
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
    text: 'Bubble Chart',
  },
  {
    id: 'option-2',
<<<<<<< HEAD
    icon: (props) => <ChartVennDiagram size={16} {...props} />,
=======
    icon: ChartVennDiagram16,
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
    text: 'Venn Diagram',
  },
];

export const getInlineEditColumns = () => {
  return [
    {
      Header: 'Row Index',
      accessor: (row, i) => i,
      id: 'rowIndex', // id is required when accessor is a function.
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
      inlineEdit: {
        type: 'text',
        // required for including validation, this is used to set the invalid prop internally
<<<<<<< HEAD
        validator: (n) => n.length > 40,
=======
        validator: (n) => n.length >= 40,
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
        // These props are passed to the Carbon component used for inline editing
        inputProps: {
          invalidText: 'Invalid text, character count must be less than 40',
        },
      },
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
      inlineEdit: {
        type: 'text',
        // required for including validation, this is used to set the invalid prop internally
<<<<<<< HEAD
        validator: (n) => n.length > 40,
=======
        validator: (n) => n.length >= 40,
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
        // These props are passed to the Carbon component used for inline editing
        inputProps: {
          invalidText: 'Invalid text, character count must be less than 40',
        },
      },
    },
    {
      Header: 'Age',
      accessor: 'age',
      width: 120,
      inlineEdit: {
        // required for including validation, this is used to set the invalid prop internally
        validator: (n) => n && n < 18,
        type: 'number',
        // These props are passed to the Carbon component used for inline editing
        inputProps: {
          invalidText: 'Invalid number, must be 18 or greater',
        },
      },
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      width: 120,
      inlineEdit: {
        validator: (n) => n && n < 10,
        type: 'number',
        inputProps: {
          invalidText: 'Invalid number, must be 10 or greater',
        }, // These props are passed to the Carbon component used for inline editing
      },
    },
    {
      Header: 'Active since',
      accessor: 'activeSince',
      inlineEdit: {
        type: 'date',
        inputProps: {
          // optionally pass props here to be passed through to Carbon's DatePicker component
          onChange: (newDateObj, cell) => {
            console.log(newDateObj, cell);
          },
<<<<<<< HEAD
<<<<<<< HEAD
=======
          labelText: 'Change active since date',
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
          dateFormat: 'd/m/Y',
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
          // optionally pass props here to be passed through to Carbon's DatePickerInput component
          datePickerInputProps: {
            labelText: 'Change active since date',
          },
        },
      },
    },
    {
      Header: 'Chart type',
      accessor: 'chartType',
      inlineEdit: {
        type: 'selection',
        inputProps: {
          // These props are passed to the Carbon component used for inline editing
          items: inlineEditSelectItems,
<<<<<<< HEAD
          onChange: (item) => console.log(item),
=======
          onChange: (item) => {
            console.log(item);
          },
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
        },
      },
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
