/**
 * @file Filter panel tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import FilterPanel from '..';
import * as mockProps from '../_mocks_';

describe('FilterPanel', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <FilterPanel title="test title" />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('FilterPanel');
  });

  test('renders without a title or content by default', () => {
    const { container } = render(<FilterPanel />);
    expect(container).not.toHaveTextContent();
  });

  test('renders with a title', () => {
    const { getByText } = render(<FilterPanel title="custom title" />);
    expect(getByText(/custom title/i)).toBeVisible();
  });

  test('renders with a title node', () => {
    const { getByTestId } = render(
      <FilterPanel title={<span data-testid="node-title" />} />
    );
    expect(getByTestId('node-title')).toBeVisible();
  });

  test('renders with content', () => {
    const { getByTestId } = render(
      <FilterPanel>
        <div data-testid="content" />
      </FilterPanel>
    );
    expect(getByTestId('content')).toBeVisible();
  });

  test('adds custom class name', () => {
    const { container } = render(<FilterPanel className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('does not render the legacy filter if filterData is not provided', () => {
    const { queryByTestId } = render(<FilterPanel filterData={null} />);
    expect(queryByTestId('legacy-filter-panel')).not.toBeInTheDocument();
  });

  test('renders the legacy filter panel', () => {
    const { getByTestId } = render(
      <FilterPanel filterData={mockProps.filterData} />
    );
    expect(getByTestId('legacy-filter-panel')).toBeVisible();
  });
});
