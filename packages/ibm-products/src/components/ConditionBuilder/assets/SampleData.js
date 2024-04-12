export const sampleDataStructure_tree = {
    groups: [
      {
        groupSeperateOperator: 'and', // 'or'|'and'|'null',
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
            groupSeperateOperator: 'and', // 'or'|'and'|'null',
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
                groupSeperateOperator: 'and', // 'or'|'and'|'null',
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
        groupSeperateOperator: 'and', // 'or'|'and'|'null',
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
        ],
      },
    ],
  };