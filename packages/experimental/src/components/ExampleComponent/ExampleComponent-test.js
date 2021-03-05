/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported

const blockClass = `${pkg.prefix}-example-component`;

import { ExampleComponent } from '.';
const name = 'ExampleComponent';

describe(name, () => {
  test('Renders an experimental-component if flag is enabled', () => {
    const { container } = render(<ExampleComponent />);

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });
});
