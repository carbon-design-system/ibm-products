/**
 * @file Description list module tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { DescriptionListModule } from '../../../..';

const { name } = DescriptionListModule;

describe(name, () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <DescriptionListModule>{name}</DescriptionListModule>
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  test(`adds content for the '${name}'`, () => {
    expect(
      render(<DescriptionListModule>{name}</DescriptionListModule>).getByText(
        name
      )
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <DescriptionListModule data-testid={dataTestId}>
          {name}
        </DescriptionListModule>
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
