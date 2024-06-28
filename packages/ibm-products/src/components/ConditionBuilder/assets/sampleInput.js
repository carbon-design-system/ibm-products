import {
  Calendar,
  ColorPalette,
  Cube,
  Currency,
  DeliveryTruck,
  Earth,
  Flag,
  Hashtag,
  Tree,
  Wikis,
} from '@carbon/react/icons';
import CustomInput from './CustomInput';

//keeping this , an alternative way to give support for dynamic options.
//instead of supplying getOptions callback, we keep option property in inputConfig always as a async method instead to array as below.
export const inputDataForAsyncOptions = {
  properties: [
    {
      id: 'continent',
      label: 'Continent',
      icon: Earth,
      type: 'option',
      config: {
        options: async () => {
          let returnVal = [
            {
              label: 'Africa',
              id: 'Africa',
            },
            {
              label: 'Antarctica',
              id: 'Antarctica',
            },
            {
              label: 'Asia',
              id: 'Asia',
            },
            {
              label: 'Australia',
              id: 'Australia',
            },
            {
              label: 'Europe',
              id: 'Europe',
            },
          ];
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(returnVal);
            }, 2000);
          });
        },
      },
    },
  ],
};

const customOperators = [
  {
    label: 'is greater than',
    id: 'greater',
  },
  {
    label: 'is greater than or equal to',
    id: 'greater_equal',
  },
];

export const inputData = {
  properties: [
    {
      id: 'continent',
      label: 'Continent',
      icon: Earth,
      type: 'option',
      config: {
        options: [
          {
            label: 'Africa',
            id: 'Africa',
          },
          {
            label: 'Antarctica',
            id: 'Antarctica',
          },
          {
            label: 'Asia',
            id: 'Asia',
          },
          {
            label: 'Australia',
            id: 'Australia',
          },
          {
            label: 'Europe',
            id: 'Europe',
          },
        ],
      },
    },
    {
      id: 'region',
      label: 'Region',
      icon: Flag,
      type: 'option',
      config: {
        options: [
          {
            label: 'Afghanistan',
            id: 'AF',
            icon: Wikis,
          },
          {
            label: 'Albania',
            id: 'AL',
            icon: Wikis,
          },
          {
            label: 'Algeria',
            id: 'AG',
            icon: Wikis,
          },
          {
            label: 'Andorra',
            id: 'AN',
            icon: Wikis,
          },
          {
            label: 'India',
            id: 'India',
            icon: Wikis,
          },
        ],
      },
    },
    {
      id: 'color',
      label: 'Color',
      icon: ColorPalette,
      type: 'option',
      config: {
        options: [
          {
            label: 'black',
            id: 'black',
          },
          {
            label: 'silver',
            id: 'silver',
          },
          {
            label: 'gray',
            id: 'gray',
          },
          {
            label: 'white',
            id: 'white',
          },
          {
            label: 'maroon',
            id: 'maroon',
          },
          {
            label: 'red',
            id: 'red',
          },
          {
            label: 'purple',
            id: 'purple',
          },
          {
            label: 'fuchsia',
            id: 'fuchsia',
          },
          {
            label: 'green',
            id: 'green',
          },
          {
            label: 'lime',
            id: 'lime',
          },
          {
            label: 'olive',
            id: 'olive',
          },
          {
            label: 'yellow',
            id: 'yellow',
          },
          {
            label: 'navy',
            id: 'navy',
          },
          {
            label: 'blue',
            id: 'blue',
          },
          {
            label: 'teal',
            id: 'teal',
          },
          {
            label: 'aqua',
            id: 'aqua',
          },
        ],
      },
    },
    {
      id: 'id',
      label: 'ID',
      icon: Hashtag,
      type: 'text',
      config: {},
    },
    {
      id: 'price',
      label: 'Price',
      icon: Currency,
      type: 'number',
      config: {
        min: 0,
        step: 1,
        unit: 'Dollars',
      },
    },
    {
      id: 'date',
      label: 'Date',
      icon: Calendar,
      type: 'date',
      config: {},
    },
    {
      id: 'time',
      label: 'Time',
      icon: Calendar,
      type: 'time',
      config: {
        timeZones: ['IST', 'CET', 'UTC', 'LOCAL'],
      },
    },
    {
      id: 'delivery',
      label: 'Delivery',
      icon: DeliveryTruck,
      type: 'option',
      config: {
        options: [
          {
            label: 'Processing',
            id: 'Processing',
          },
          {
            label: 'Preparing for dispatch',
            id: 'Preparing for dispatch',
          },
          {
            label: 'Dispatched',
            id: 'Dispatched',
          },
          {
            label: 'In delivery',
            id: 'In delivery',
          },
          {
            label: 'Delivered',
            id: 'Delivered',
          },
        ],
      },
    },
    {
      id: 'season',
      label: 'Season',
      icon: Tree,
      type: 'option',
      config: {
        options: [
          {
            label: 'Winter',
            id: 'Winter',
          },
          {
            label: 'Spring',
            id: 'Spring',
          },
          {
            label: 'Summer',
            id: 'Summer',
          },
          {
            label: 'Fall',
            id: 'Fall',
          },
        ],
      },
    },
    {
      id: 'product',
      label: 'Product',
      icon: Cube,
      type: 'custom',
      config: {
        component: CustomInput,
        operators: customOperators,
      },
    },
  ],
};

export const inputDataDynamicOptions = {
  properties: [
    {
      id: 'continent',
      label: 'Continent',
      icon: Earth,
      type: 'option',
      config: {},
    },
    {
      id: 'region',
      label: 'Region',
      icon: Flag,
      type: 'option',
      config: {},
    },
    {
      id: 'color',
      label: 'Color',
      icon: ColorPalette,
      type: 'option',
      config: {},
    },
    {
      id: 'id',
      label: 'ID',
      icon: Hashtag,
      type: 'text',
      config: {},
    },
    {
      id: 'price',
      label: 'Price',
      icon: Currency,
      type: 'number',
      config: {
        min: 0,
        step: 1,
        unit: 'Dollars',
      },
    },
    {
      id: 'date',
      label: 'Date',
      icon: Calendar,
      type: 'date',
      config: {},
    },
    {
      id: 'time',
      label: 'Time',
      icon: Calendar,
      type: 'time',
      config: {
        timeZones: ['IST', 'CET', 'UTC', 'LOCAL'],
      },
    },

    {
      id: 'product',
      label: 'Product',
      icon: Cube,
      type: 'text',
      config: {},
    },
    {
      id: 'delivery',
      label: 'Delivery',
      icon: DeliveryTruck,
      type: 'option',
      config: {
        options: [
          {
            label: 'Processing',
            id: 'Processing',
          },
          {
            label: 'Preparing for dispatch',
            id: 'Preparing for dispatch',
          },
          {
            label: 'Dispatched',
            id: 'Dispatched',
          },
          {
            label: 'In delivery',
            id: 'In delivery',
          },
          {
            label: 'Delivered',
            id: 'Delivered',
          },
        ],
      },
    },
    {
      id: 'season',
      label: 'Season',
      icon: Tree,
      type: 'option',
      config: {
        options: [
          {
            label: 'Winter',
            id: 'Winter',
          },
          {
            label: 'Spring',
            id: 'Spring',
          },
          {
            label: 'Summer',
            id: 'Summer',
          },
          {
            label: 'Fall',
            id: 'Fall',
          },
        ],
      },
    },
  ],
};
