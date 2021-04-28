/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../settings';
import '../utils/enable-all'; // must come before components are imported (directly or indirectly)

import * as components from '..';

const canaryClass = `${pkg.prefix}-canary`;
const name = 'JS export checks';

describe(name, () => {
  let mockError;
  beforeEach(() => {
    // The component instantiations that follow will generate a stack of
    // console errors about required props not provided, and we don't care.
    mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    mockError.mockRestore();
  });

  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      const TestComponent = components[key];

      it(`Does not render a canary for "${key}" if package flags set to enable`, () => {
        const { container } = render(<TestComponent />);
        expect(container.querySelector(`.${canaryClass}`)).toBeNull();
      });
    }
  }
});
