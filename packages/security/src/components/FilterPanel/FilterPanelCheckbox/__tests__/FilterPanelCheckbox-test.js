/**
 * @file Filter panel checkbox tests.
 * @copyright IBM Security 2020 - 2021
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import FilterPanelCheckbox from '../FilterPanelCheckbox';

import expectWarning from '../../expect-warning';

describe('FilterPanelCheckbox', () => {
  const id = 'id';
  const labelText = 'labelText';

  const props = { id, labelText };

  expectWarning(<FilterPanelCheckbox {...props} />);

  test('has no accessibility violations', async () => {
    const { container } = render(<FilterPanelCheckbox {...props} />);

    await expect(container).toBeAccessible('FilterPanelCheckbox');
    await expect(container).toHaveNoAxeViolations();
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelCheckbox {...props} className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('does not render a count by default', () => {
    const { container } = render(<FilterPanelCheckbox {...props} />);

    expect(container).toHaveTextContent(labelText);
  });

  test('renders count', () => {
    const { container } = render(<FilterPanelCheckbox {...props} count={10} />);
    expect(container).toHaveTextContent(/10/);
  });

  test('renders 0 count', () => {
    const { container } = render(<FilterPanelCheckbox {...props} count={0} />);
    expect(container).toHaveTextContent(/0/);
  });

  test('invokes onChange when user selects checkbox', () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
      <FilterPanelCheckbox {...props} onChange={onChangeMock} />
    );

    userEvent.click(getByLabelText(labelText));

    expect(onChangeMock).toHaveBeenCalledWith(true, id, expect.anything());
  });
});
