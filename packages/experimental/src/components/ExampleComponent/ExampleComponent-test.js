/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { pkg } from '../../global/js/settings';

const blockClass = `${pkg.prefix}-example-component`;
// const canaryClass = `${pkg.prefix}-canary`;

const name = 'ExampleComponent';
describe(name, () => {
  test('Renders an experimental-component flag is enabled', async () => {
    pkg.overrideSettings({ flags: { component: { ExampleComponent: true } } }); // must happen before component import
    // ensure import after settings change
    const { ExampleComponent } = await import(
      '../../components/ExampleComponent'
    );
    const {container} = render(<ExampleComponent />);

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });
});
