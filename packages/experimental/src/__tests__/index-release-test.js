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
import { pkg } from '../global/js/settings';

const canaryClass = `${pkg.prefix}-canary`;
import * as components from '..';
const name = 'export checks';

describe(name, () => {
  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      const TestComponent = components[key];

      if (!pkg.isComponentEnabled(key)) {
        // We only check unreleased components render a canary
        // Non-canary components are tested elsewhere.
        it(`renders a canary by default for "${key}"`, () => {
          // TODO: remove this test and check all components
          if (key !== 'ExampleComponent') return;

          const { container } = render(<TestComponent />);
          expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
        });
      }
    }
  }
});
