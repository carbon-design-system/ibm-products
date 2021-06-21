/**
 * @file Time indicator tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { TimeIndicator } from '../../..';

describe('TimeIndicator', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <TimeIndicator>test content</TimeIndicator>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('TimeIndicator');
  });

  test('should add custom class', () => {
    const { getByText } = render(
      <TimeIndicator className="custom-class">test content</TimeIndicator>
    );
    expect(getByText(/test content/i)).toHaveClass('custom-class');
  });

  test('should pass extra props through spread attribute', () => {
    const { queryByTestId } = render(
      <TimeIndicator data-testid="test-id">test content</TimeIndicator>
    );
    expect(queryByTestId('test-id')).toBeInTheDocument();
  });
});
