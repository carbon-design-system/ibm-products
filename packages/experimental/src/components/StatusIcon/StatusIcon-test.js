/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { StatusIcon } from '.';

const { name } = StatusIcon;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(<StatusIcon>{name}</StatusIcon>);

    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`adds content for the ${name}`, () => {
    expect(
      render(<StatusIcon>{name}</StatusIcon>).getByText(name)
    ).toBeInTheDocument();
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(
        <StatusIcon className={className}>{name}</StatusIcon>
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <StatusIcon data-testid={dataTestId}>{name}</StatusIcon>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
