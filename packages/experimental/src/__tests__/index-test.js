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
// import { ExampleComponent } from '../';
import { pkgPrefix, getPackageFlags } from '../global/js/settings';
const canaryClass = `${pkgPrefix}--canary`;
import * as components from '../';
const name = 'export checks';

describe(name, () => {
  const testComponents = {};
  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      // assume component
      // TODO: remove this test and check all components
      if (key === 'ExampleComponent') {
        testComponents[key] = components[key];
      }
    }
  }

  for (const key in testComponents) {
    const TestComponent = testComponents[key];

    test('Renders a canary if no package flags set', () => {
      getPackageFlags({ component: { [key]: false } }, { initAgain: true });
      const { container } = render(<TestComponent />);

      expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
    });

    test('Does not render a canary if package flags set', () => {
      getPackageFlags({ component: { [key]: true } }, { initAgain: true });
      const { container } = render(<TestComponent />);

      expect(container.querySelector(`.${canaryClass}`)).toBeNull();
    });
  }
});
