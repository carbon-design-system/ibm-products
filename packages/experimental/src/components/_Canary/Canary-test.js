/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { Canary } from '.';

const { name } = Canary;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<Canary>{name}</Canary>);

    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`adds content for the ${name}`, () => {
    expect(render(<Canary>{name}</Canary>).getByText(name)).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(
        <Canary className={className}>{name}</Canary>
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(<Canary data-testid={dataTestId}>{name}</Canary>).getByTestId(
        dataTestId
      )
    ).toBeInTheDocument();
  });
});
