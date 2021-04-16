/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../settings';

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

      // TODO: remove this - security components does not currently support canary
      if (key.startsWith('ComboButton')) continue;

      if (!pkg.isComponentEnabled(key)) {
        // We check that exported components are listed in package settings.
        it(`has a component flag in package settings for "${key}"`, () => {
          expect(pkg.isComponentPublic(key)).toBeTruthy();
        });

        // We check that unreleased public components render a Canary.
        // Non-canary components are tested elsewhere.
        it(`renders a canary by default for "${key}"`, () => {
          const { container } = render(<TestComponent />);
          expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
        });
      }
    }
  }
});
