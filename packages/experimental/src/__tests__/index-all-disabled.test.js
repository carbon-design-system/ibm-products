/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
// import React from 'react';

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';
import { pkg } from '../settings';

const canaryClass = `${pkg.prefix}-canary`;
import * as components from '../index-all-disabled';
const name = 'export checks';

describe(name, () => {
  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      // TODO: remove this test and check all components
      if (key !== 'ExampleComponent') continue;

      const TestComponent = components[key];

      test(`Renders a canary, for "${key}", if no package flags set`, () => {
        const { container } = render(<TestComponent />);

        expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
      });
    }
  }
});
