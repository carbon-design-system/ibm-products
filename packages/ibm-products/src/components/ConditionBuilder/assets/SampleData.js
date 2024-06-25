import uuidv4 from '../../../global/js/utils/uuidv4';

export const sampleDataStructure_tree = {
  operator: 'or',
  groups: [
    {
      groupOperator: 'and', //'and|or',
      statement: 'if', // 'if|exclude if',
      id: uuidv4(),
      conditions: [
        {
          property: 'region',
          operator: 'is',
          value: 'IL',
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
          id: uuidv4(),
        },
        //group object repeats
        {
          groupOperator: 'and', //'and|or',
          statement: 'if', // 'if|exclude if',
          id: uuidv4(),
          conditions: [
            {
              property: 'region',
              operator: 'is',
              value: 'IL',
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
              id: uuidv4(),
            },
            //group object repeats
            {
              groupOperator: 'and', //'and|or',
              statement: 'if', // 'if|exclude if',
              id: uuidv4(),
              conditions: [
                {
                  property: 'region',
                  operator: 'is',
                  value: 'IL',
                  id: uuidv4(),
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: 'processing',
                  id: uuidv4(),
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: 'processing',
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
      statement: 'if', // 'if|exclude if',
      id: uuidv4(),
      conditions: [
        {
          property: 'continent',
          operator: 'is',
          value: 'Asia',
          id: uuidv4(),
        },
        {
          property: 'region',
          operator: 'is',
          value: 'India',
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

export const sampleDataStructure_sentence = {
  groups: [
    {
      groupOperator: 'and', //'and|or',
      statement: 'if', // 'if|exclude if',
      id: uuidv4(),
      conditions: [
        {
          property: 'region',
          operator: 'one_of',
          value: [
            {
              label: 'Africa',
              id: 'Africa',
            },
            {
              label: 'India',
              id: 'Ind',
            },
          ],
          id: uuidv4(),
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
          id: uuidv4(),
        },
        {
          property: 'price',
          operator: 'is',
          value: '3',
          id: uuidv4(),
        },
      ],
    },
  ],
};
