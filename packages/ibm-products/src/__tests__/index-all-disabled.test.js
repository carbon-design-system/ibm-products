/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../settings';

import * as components from '..';

const canaryClass = `${pkg.prefix}--canary`;
const name = 'JS export checks';

pkg.setAllComponents(false);

describe(name, () => {
  let mockError, mockWarn;

  beforeEach(() => {
    // The component instantiations that follow will generate a stack of
    // console errors and warnings about required props not provided or
    // conditions not met, and for the purposes of these tests we don't care.
    mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
    mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    mockError.mockRestore();
    mockWarn.mockRestore();
  });

  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      const TestComponent = components[key];

      // TODO: remove this - security components does not currently support canary
      if (key.startsWith('ComboButton')) {
        continue;
      }

      it(`Renders a canary for "${key}" if package flags set to disable`, () => {
        const { container } = render(<TestComponent />);
        expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
      });
    }
  }
});
