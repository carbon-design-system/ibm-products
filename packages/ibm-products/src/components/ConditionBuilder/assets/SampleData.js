/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import uuidv4 from '../../../global/js/utils/uuidv4';

export const sampleDataStructure_Hierarchical = {
  operator: 'or',
  groups: [
    {
      groupOperator: 'and', //'and|or',
      statement: 'ifAll', // 'if|exclude if',
      id: uuidv4(),
      conditions: [
        {
          property: 'region',
          operator: 'is',
          value: { id: 'India', label: 'India' },
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: { id: 'Processing', label: 'Processing' },
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: { id: 'Processing', label: 'Processing' },
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: { id: 'Processing', label: 'Processing' },
          id: uuidv4(),
        },
        //group object repeats
        {
          groupOperator: 'and', //'and|or',
          statement: 'unlessAll', // 'if|exclude if',
          id: uuidv4(),
          conditions: [
            {
              property: 'region',
              operator: 'is',
              value: { id: 'India', label: 'India' },
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: { id: 'Processing', label: 'Processing' },
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: { id: 'Processing', label: 'Processing' },
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: { id: 'Processing', label: 'Processing' },
              id: uuidv4(),
            },
            //group object repeats
            {
              groupOperator: 'or', //'and|or',
              statement: 'ifAny', // 'if|exclude if',
              id: uuidv4(),
              conditions: [
                {
                  property: 'region',
                  operator: 'is',
                  value: { id: 'India', label: 'India' },
                  id: uuidv4(),
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: { id: 'Processing', label: 'Processing' },
                  id: uuidv4(),
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: { id: 'Processing', label: 'Processing' },
                  id: uuidv4(),
                },
                //group object repeats
              ],
            },
          ],
        },
      ],
    },
    {
      groupOperator: 'and', //'and|or',
      statement: 'ifAll', // 'if|exclude if',
      id: uuidv4(),
      conditions: [
        {
          property: 'continent',
          operator: 'is',
          value: { id: 'Asia', label: 'Asia' },
          id: uuidv4(),
        },
        {
          property: 'region',
          operator: 'is',
          value: { id: 'India', label: 'India' },
          id: uuidv4(),
        },
        {
          property: 'price',
          operator: 'is',
          value: '20',
          id: uuidv4(),
        },
      ],
    },
  ],
};

export const sampleDataStructure_nonHierarchical = {
  groups: [
    {
      groupOperator: 'and', //'and|or',
      statement: 'ifAll', // 'if|exclude if',
      id: uuidv4(),
      conditions: [
        {
          property: 'region',
          operator: 'oneOf',
          value: [
            {
              label: 'Africa',
              id: 'Africa',
            },
            {
              label: { id: 'India', label: 'India' },
              id: 'Ind',
            },
          ],
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: { id: 'Processing', label: 'Processing' },
          id: uuidv4(),
        },
        {
          property: 'price',
          operator: 'is',
          value: '3 Dollars',
          id: uuidv4(),
        },
      ],
    },
  ],
};
