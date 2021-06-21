/**
 * @file Filter panel checkbox tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import FilterPanelCheckbox from '../FilterPanelCheckbox';

describe('FilterPanelCheckbox', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <FilterPanelCheckbox labelText="test checkbox" id="test-checkbox-id" />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('FilterPanelCheckbox');
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelCheckbox className="custom-class" labelText="label" id="id" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('does not render a count by default', () => {
    const { container } = render(
      <FilterPanelCheckbox labelText="custom label" id="id" />
    );
    expect(container).toHaveTextContent('custom label');
  });

  test('renders count', () => {
    const { container } = render(
      <FilterPanelCheckbox count={10} labelText="label" id="id" />
    );
    expect(container).toHaveTextContent(/10/);
  });

  test('renders 0 count', () => {
    const { container } = render(
      <FilterPanelCheckbox count={0} labelText="label" id="id" />
    );
    expect(container).toHaveTextContent(/0/);
  });

  test('invokes onChange when user selects checkbox', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <FilterPanelCheckbox
        onChange={onChangeMock}
        labelText="checkbox label"
        id="checkbox-id"
      />
    );
    userEvent.click(getByLabelText(/checkbox label/i));
    expect(onChangeMock).toHaveBeenCalledWith(
      true,
      'checkbox-id',
      expect.anything()
    );
  });
});
