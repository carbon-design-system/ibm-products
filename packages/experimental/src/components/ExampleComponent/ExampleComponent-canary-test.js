/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { pkg } from '../../global/js/settings';

const canaryClass = `${pkg.prefix}-canary`;

const name = 'ExampleComponent';
describe(name, () => {
  let ExampleComponent;
  beforeAll(async () => {
     // must happen before component import
    pkg.overrideSettings({ flags: { component: { ExampleComponent: false } } }  );
    // ensure import after settings change
    const { ExampleComponent: LateLoadedComponent } = await import('.');
    ExampleComponent = LateLoadedComponent;
  });

  test('Renders a canary if no package flags set', async () => {
    const { container } = render(<ExampleComponent />);

    expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
  });
});
