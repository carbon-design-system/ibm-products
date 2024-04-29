export const sampleDataStructure_tree = {
  groups: [
    {
      groupSeparateOperator: 'and', // 'or'|'and'|'null',
      groupOperator: 'and', //'and|or',
      statement: 'if', // 'if|exclude if',
      conditions: [
        {
          property: 'region',
          operator: 'is',
          value: 'IL',
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
        },
        {
          property: 'delivery',
          operator: 'is',
          value: 'processing',
        },
        //group object repeats
        {
          groupSeparateOperator: 'and', // 'or'|'and'|'null',
          groupOperator: 'and', //'and|or',
          statement: 'if', // 'if|exclude if',
          conditions: [
            {
              property: 'region',
              operator: 'is',
              value: 'IL',
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
            },
            //group object repeats
            {
              groupSeparateOperator: 'and', // 'or'|'and'|'null',
              groupOperator: 'and', //'and|or',
              statement: 'if', // 'if|exclude if',
              conditions: [
                {
                  property: 'region',
                  operator: 'is',
                  value: 'IL',
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: 'processing',
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
      conditions: [
        {
          property: 'continent',
          operator: 'is',
          value: 'Asia',
        },
        {
          property: 'region',
          operator: 'is',
          value: 'India',
        },
        {
          property: 'price',
          operator: 'is',
          value: '20',
        },
      ],
    },
  ],
};
