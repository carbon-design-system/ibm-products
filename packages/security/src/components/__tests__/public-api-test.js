/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { isValidElementType } from 'react-is';

const { mock, requireActual, spyOn } = jest;

beforeEach(() => {
  mock('prop-types', () => {
    const PropTypes = requireActual('prop-types');

    const primitive = [
      'array',
      'bool',
      'func',
      'number',
      'object',
      'string',
      'symbol',
      'node',
      'element',
      'elementType',
      'any',
    ];

    const complex = [
      'arrayOf',
      'instanceOf',
      'objectOf',
      'oneOf',
      'oneOfType',
      'shape',
      'exact',
    ];

    for (const type of primitive) {
      Object.defineProperty(PropTypes, type, {
        get() {
          const value = {
            type,
          };
          Object.defineProperty(value, 'isRequired', {
            enumerable: false,
            get() {
              return {
                type,
                isRequired: true,
              };
            },
          });
          return value;
        },
      });
    }

    for (const type of complex) {
      PropTypes[type] = function (...args) {
        const value = {
          type,
          args,
        };

        Object.defineProperty(value, 'isRequired', {
          enumerable: false,
          get() {
            return {
              type,
              args,
              isRequired: true,
            };
          },
        });

        return value;
      };
    }

    return PropTypes;
  });
});

test('Public API changes with a SemVer change', () => {
  function mapComponentToAPI(Component) {
    const api = {};

    Object.keys(Component).forEach((key) => {
      if (key[0] === '_') {
        return;
      }

      if (key === 'Consumer') {
        api[key] = 'React.Consumer';
        return;
      }

      if (key === 'Provider') {
        api[key] = 'React.Provider';
        return;
      }

      if (
        typeof Component[key] === 'function' &&
        key !== 'render' &&
        isValidElementType(Component[key])
      ) {
        api[key] = mapComponentToAPI(Component[key]);
        return;
      }

      api[key] = Component[key];
    });

    return api;
  }

  // eslint-disable-next-line global-require
  const Components = require('../..');
  const PublicAPI = new Map();

  const { mockRestore } = spyOn(console, 'warn').mockImplementation();

  Object.keys(Components).forEach((name) => {
    const Component = Components[name];
    PublicAPI.set(name, mapComponentToAPI(Component));
  });

  expect(PublicAPI).toMatchSnapshot();
  mockRestore();
});
