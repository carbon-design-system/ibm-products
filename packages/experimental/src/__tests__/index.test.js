/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
// import React from 'react';

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';
import { pkg } from '../settings';

import * as components from '..';
const name = 'export checks';
const canaryClass = `${pkg.prefix}-canary`;

describe(name, () => {
  beforeAll(() => {
    // The component instantiations that follow will generate a stack of
    // console errors about required props not provided, and we don't care.
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      const TestComponent = components[key];

      if (!pkg.isComponentEnabled(key)) {
        // We check that unreleased components render a Canary.
        // Non-canary components are tested elsewhere.
        it(`renders a canary by default for "${key}"`, () => {
          const { container } = render(<TestComponent />);
          expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
        });
      }
    }
  }
});
