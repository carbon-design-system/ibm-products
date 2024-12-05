/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
//cspell:disable
import uuidv4 from '../../../global/js/utils/uuidv4';

export const sampleDataStructure_Hierarchical = {
  operator: 'or',
  groups: [
    {
      groupOperator: 'and',
      statement: 'ifAll',
      id: uuidv4(),
      conditions: [
        {
          property: 'continent',
          operator: 'is',
          value: {
            label: 'Africa',
            id: 'Africa',
          },
          id: uuidv4(),
        },
        {
          property: 'region',
          operator: 'oneOf',
          value: [
            {
              label: 'Algeria',
              id: 'DZ',
            },
            {
              label: 'Andorra',
              id: 'AD',
            },
          ],
          id: uuidv4(),
        },
        {
          statement: 'unlessAll',
          groupOperator: 'and',
          conditions: [
            {
              property: 'delivery',
              operator: 'is',
              value: {
                label: 'Delivered',
                id: 'Delivered',
              },
              id: uuidv4(),
            },
            {
              property: 'id',
              operator: 'startsWith',
              value: '#delivered',
              id: uuidv4(),
            },
          ],
          id: uuidv4(),
        },
        {
          statement: 'ifAny',
          groupOperator: 'or',
          conditions: [
            {
              property: 'season',
              operator: 'is',
              value: {
                label: 'Summer',
                id: 'Summer',
              },
              id: uuidv4(),
            },
            {
              property: 'season',
              operator: 'is',
              value: {
                label: 'Fall',
                id: 'Fall',
              },
              id: uuidv4(),
            },
          ],
          id: uuidv4(),
        },
      ],
    },
    {
      statement: 'ifAll',
      groupOperator: 'and',
      id: uuidv4(),
      conditions: [
        {
          property: 'delivery',
          operator: 'oneOf',
          value: [
            {
              label: 'Processing',
              id: 'Processing',
            },
            {
              label: 'Preparing for dispatch',
              id: 'Preparing for dispatch',
            },
          ],
          id: uuidv4(),
        },
        {
          statement: 'ifAll',
          groupOperator: 'and',
          conditions: [
            {
              property: 'price',
              operator: 'greater',
              value: '50 Dollars',
              id: uuidv4(),
            },
            {
              property: 'id',
              operator: 'is',
              value: '#proccessing',
              id: uuidv4(),
            },
          ],
          id: uuidv4(),
        },
      ],
    },
  ],
};

export const sampleDataStructure_nonHierarchical = {
  groups: [
    {
      groupOperator: 'and',
      statement: 'ifAll',
      id: uuidv4(),
      conditions: [
        {
          property: 'continent',
          operator: 'is',
          value: {
            label: 'Asia',
            id: 'Asia',
          },
          id: uuidv4(),
        },
        {
          property: 'region',
          operator: 'oneOf',
          value: [
            {
              label: 'Afghanistan',
              id: 'AF',
            },
            {
              label: 'India',
              id: 'IN',
            },
          ],
          id: uuidv4(),
        },
        {
          property: 'date',
          operator: 'between',
          value: ['2024-12-04T18:30:00.000Z', '2024-12-18T18:30:00.000Z'],
          id: uuidv4(),
        },
        {
          property: 'season',
          operator: 'is',
          value: {
            label: 'Fall',
            id: 'Fall',
          },
          id: uuidv4(),
        },
      ],
    },
  ],
  operator: 'or',
};
