/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useTranslations } from './useTranslations';

export const useDataConfigs = () => {
  const [
    ifAll,
    ifAny,
    unlessAll,
    unlessAny,
    and,
    or,
    is,
    greater,
    greaterEqual,
    lower,
    lowerEqual,
    startsWith,
    endsWith,
    contains,
    oneOf,
    before,
    after,
    between,
  ] = useTranslations([
    'ifAll',
    'ifAny',
    'unlessAll',
    'unlessAny',
    'and',
    'or',
    'is',
    'greater',
    'greaterEqual',
    'lower',
    'lowerEqual',
    'startsWith',
    'endsWith',
    'contains',
    'oneOf',
    'before',
    'after',
    'between',
  ]);

  const statementConfig = [
    {
      label: 'ifText',
      id: 'ifAll',
      connector: 'and',
      text1: ifAll,
      text2: '(a && b)',
    },
    {
      label: 'ifText',
      id: 'ifAny',
      connector: 'or',
      text1: ifAny,
      text2: '(a || b)',
    },
    {
      label: 'unlessText',
      id: 'unlessAll',
      connector: 'and',
      text1: unlessAll,
      text2: '! (a && b)',
    },
    {
      label: 'unlessText',
      id: 'unlessAny',
      connector: 'or',
      text1: unlessAny,
      text2: '! (a || b)',
    },
  ];

  const connectorConfig = [
    {
      label: and,
      id: 'and',
    },
    {
      label: or,
      id: 'or',
    },
  ];

  const operatorConfig = [
    {
      label: is,
      id: 'is',
      type: 'all',
    },
    {
      label: greater,
      id: 'greater',
      type: 'number',
    },
    {
      label: greaterEqual,
      id: 'greaterEqual',
      type: 'number',
    },
    {
      label: lower,
      id: 'lower',
      type: 'number',
    },
    {
      label: lowerEqual,
      id: 'lowerEqual',
      type: 'number',
    },
    {
      label: startsWith,
      id: 'startsWith',
      type: 'text,textarea',
    },
    {
      label: endsWith,
      id: 'endsWith',
      type: 'text,textarea',
    },
    {
      label: contains,
      id: 'contains',
      type: 'text,textarea',
    },
    {
      label: oneOf,
      id: 'oneOf',
      type: 'option',
    },
    {
      label: before,
      id: 'before',
      type: 'date,time',
    },
    {
      label: after,
      id: 'after',
      type: 'date,time',
    },
    {
      label: between,
      id: 'between',
      type: 'date',
    },
  ];

  return {
    statementConfig,
    connectorConfig,
    operatorConfig,
  };
};
