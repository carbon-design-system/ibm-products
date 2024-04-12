import { tranlationsObject } from './Translations';
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
  {
    label: 'is between',
    id: 'between',
    type: 'date',
  },
];

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
const tranlationsObjectCurrent = tranlationsObject['en']; // TO DO: need to discuss if language is to be passed as prop
export const translatewithId = (key) => {
  return tranlationsObjectCurrent[key] ?? key;
};

export const valueRenderers = {
  text: (val) => val,
  number: (val) => val,
  option: (value) => {
    return Array.isArray(value) ? value.join(', ') : value;
  },
  date: (value) => {
    if (Array.isArray(value) && value.length > 1) {
      let start = value?.[0] ? formatDate(new Date(value[0])) : '';
      let end = value?.[1] ? formatDate(new Date(value[1])) : '';
      return `${start} To ${end}`;
    } else {
      return value && new Date(value) ? formatDate(new Date(value)) : value;
    }
  },
};
