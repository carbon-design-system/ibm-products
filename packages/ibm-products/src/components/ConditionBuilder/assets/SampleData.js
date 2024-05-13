import uuidv4 from '../../../global/js/utils/uuidv4';

export const sampleDataStructure_tree = {
  groups: [
    {
      groupSeparateOperator: 'and', // 'or'|'and'|'null',
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
          groupSeparateOperator: 'and', // 'or'|'and'|'null',
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
              groupSeparateOperator: 'and', // 'or'|'and'|'null',
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
  ],
};

export const sampleDataStructure_sentence = {
  groups: [
    {
      groupSeparateOperator: 'and', // 'or'|'and'|'null',
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
          property: 'price',
          operator: 'is',
          value: '3',
          id: uuidv4(),
        },
      ],
    },
  ],
};
