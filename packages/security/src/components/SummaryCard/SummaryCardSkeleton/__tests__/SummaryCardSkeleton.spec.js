/**
 * @file Summary card skeleton tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import { SummaryCardSkeleton } from '../../../..';

describe('SummaryCardSkeleton', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(<SummaryCardSkeleton />);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('SummaryCardSkeleton');
  });

  test('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(
        <SummaryCardSkeleton className={className} />
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(<SummaryCardSkeleton data-testid={dataTestId} />).getByTestId(
        dataTestId
      )
    ).toBeInTheDocument();
  });
});
