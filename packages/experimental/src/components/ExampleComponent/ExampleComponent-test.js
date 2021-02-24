/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';
import { ExampleComponent } from '.';

import { pkgPrefix, getPackageFlags } from '../../global/js/settings';

const { name } = ExampleComponent;
const canaryClass = `${pkgPrefix}--canary`;
const blockClass = `${pkgPrefix}-example-component`;

describe(name, () => {
  test('has no accessibility violations', async () => {
    getPackageFlags(
      { component: { ExampleComponent: true } },
      { initAgain: true }
    );
    const { container } = render(<ExampleComponent />);

    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  test('Renders a canary if no package flags set', () => {
    getPackageFlags(undefined, { initAgain: true });
    const { container } = render(<ExampleComponent />);

    expect(container.querySelector(`.${canaryClass}`)).not.toBeNull();
  });

  test('Renders an experimental-component flag is enabled', () => {
    getPackageFlags(
      { component: { ExampleComponent: true } },
      { initAgain: true }
    );
    const { container } = render(<ExampleComponent />);

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });
});
