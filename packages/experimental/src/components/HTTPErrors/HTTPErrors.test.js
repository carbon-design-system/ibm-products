/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';

import { pkg } from '../../settings';
import '../../enable-all';

const blockClass = `${pkg.prefix}--http-errors`;

import { HTTPErrors } from '.';
const name = HTTPErrors.displayName;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<HTTPErrors title="Test heading" />);
    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  test('Renders the component `HTTPErrors` if flag is enabled', () => {
    const { container } = render(<HTTPErrors />);

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(<HTTPErrors className={className} />).container.querySelector(
        `.${className}`
      )
    ).toBeInTheDocument();
  });
});
