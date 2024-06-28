import { pkg } from '../../../settings';
import { translationsObject } from './translationObject';

export const statementConfig = [
  {
    label: 'if',
    id: 'if',
  },
  {
    label: 'excl.if',
    id: 'excl_if',
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
export const actionConfig = [
  {
    label: 'then',
    id: 'then',
  },
];

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
    id: 'greater_equal',
    type: 'number',
  },
  {
    label: 'is lower than',
    id: 'lower',
    type: 'number',
  },
  {
    label: 'is lower than or equal to',
    id: 'lower_equal',
    type: 'number',
  },
  {
    label: 'starts with',
    id: 'starts_with',
    type: 'text',
  },
  {
    label: 'ends with',
    id: 'ends_with',
    type: 'text',
  },
  {
    label: 'contains',
    id: 'contains',
    type: 'text',
  },
  {
    label: 'is one of',
    id: 'one_of',
    type: 'option',
  },
  {
    label: 'is before',
    id: 'before',
    type: 'date,time',
  },
  {
    label: 'is after',
    id: 'after',
    type: 'date,time',
  },
  {
    label: 'is between',
    id: 'between',
    type: 'date',
  },
];
// The block part of our conventional BEM class names (blockClass__E--M).
export const blockClass = `${pkg.prefix}--condition-builder`;

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
const translationsObjectCurrent = translationsObject['en']; // TO DO: need to discuss if language is to be passed as prop
export const translateWithId = (key) => {
  return translationsObjectCurrent[key] ?? key;
};

export const valueRenderers = {
  text: (val) => val,
  time: (val) => val,
  number: (val) => val,
  option: (value) => {
    if (value && typeof value !== 'string') {
      const selectedValues = Array.isArray(value) ? value : [value];
      return selectedValues.map((option) => option.label).join(', ');
    }

    return value;
  },
  date: (value) => {
    if (Array.isArray(value) && value.length > 1) {
      const start = value?.[0] ? formatDate(new Date(value[0])) : '';
      const end = value?.[1] ? formatDate(new Date(value[1])) : '';
      return `${start} To ${end}`;
    } else {
      return value && new Date(value) ? formatDate(new Date(value)) : value;
    }
  },
  custom: (value) => value,
};
