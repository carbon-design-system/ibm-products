export const statementConfig = [
  {
    label: 'if',
    id: 'if',
  },
  {
    label: 'excl.if',
    id: 'excl.if',
  },
];

export const connectorConfig = [
  {
    label: 'and',
    id: 'and',
  },
  {
    label: 'or',
    id: 'or',
  },
];
//op types : option, text, number, date,
export const operatorConfig = [
  {
    label: 'is',
    id: 'is',
    type: 'all',
  },
  {
    label: 'is greater than',
    id: 'greater',
    type: 'number',
  },
  {
    label: 'is greater than or equal to',
    id: 'greater-equal',
    type: 'number',
  },
  {
    label: 'is lower than',
    id: 'lower',
    type: 'number',
  },
  {
    label: 'is lower than or equal to',
    id: 'lower-equal',
    type: 'number',
  },
  {
    label: 'starts with',
    id: 'starts-with',
    type: 'text',
  },
  {
    label: 'ends with',
    id: 'ends-with',
    type: 'text',
  },
  {
    label: 'contains',
    id: 'contains',
    type: 'text',
  },
  {
    label: 'is one of',
    id: 'one-of',
    type: 'option',
  },
  {
    label: 'is before',
    id: 'before',
    type: 'date',
  },
  {
    label: 'is after',
    id: 'after',
    type: 'date',
  },
];

export const valueRenderers = {
  text: (val) => val,
  number: (val) => val,
  option: (value) => {
    return Array.isArray(value) ? value.join(', ') : value;
  },
  date: (value) => {
    return value ? new Date(value).toISOString().split('T')[0] : value;
  },
};
