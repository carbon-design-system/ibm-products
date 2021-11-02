/**
 * @file Filter panel checkbox with overflow menu tests.
 * @copyright IBM Security 2020 - 2021
 */

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

import OverflowMenuItem from '../../../OverflowMenuItem';
import FilterPanelCheckboxWithOverflowMenu from '../FilterPanelCheckboxWithOverflowMenu';

import expectWarning from '../../expect-warning';

describe(FilterPanelCheckboxWithOverflowMenu.name, () => {
  const id = 'id';
  const labelText = 'labelText';
  const overflowMenuAriaLabel = 'overflowMenuAriaLabel';

  const props = { id, labelText, overflowMenuAriaLabel };

  expectWarning(<FilterPanelCheckboxWithOverflowMenu {...props} />);

  test('has no accessibility violations', async () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    await expect(container).toBeAccessible(
      `${FilterPanelCheckboxWithOverflowMenu.name}-default`
    );

    await expect(container).toHaveNoAxeViolations();
  });

  test('has no accessibility violations', async () => {
    const main = document.createElement('main');
    main.setAttribute('data-floating-menu-container', 'true');

    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} open>
        <OverflowMenuItem itemText="option 1" />
        <OverflowMenuItem itemText="option 2" />
      </FilterPanelCheckboxWithOverflowMenu>
    );

    // Open overflow menu and waitFor for options to appear on the DOM.
    fireEvent.mouseEnter(screen.getByLabelText(labelText));

    await expect(container).toBeAccessible(
      `${FilterPanelCheckboxWithOverflowMenu.name}-open`
    );

    await expect(container).toHaveNoAxeViolations();
  });

  test('adds custom class name', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu
        {...props}
        className="custom-class"
      />
    );

    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  test('does not render a count by default', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    expect(container).toHaveTextContent(labelText);
  });

  test('renders count', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} count={10} />
    );

    expect(container).toHaveTextContent(/10/);
  });

  test('renders 0 count', () => {
    const { container } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} count={0} />
    );

    expect(container).toHaveTextContent(/0/);
  });

  test('invokes onChange when user selects checkbox', () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} onChange={onChangeMock} />
    );
    userEvent.click(getByLabelText(labelText));

    expect(onChangeMock).toHaveBeenCalledWith(true, id, expect.anything());
  });

  it('does not render the overflow menu button by default', () => {
    const { queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    expect(queryByLabelText(overflowMenuAriaLabel)).not.toBeInTheDocument();
  });

  it('renders the overflow menu button when the user hovers over the checkbox', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    fireEvent.mouseEnter(getByLabelText(labelText));

    expect(getAllByLabelText(overflowMenuAriaLabel)[0]).toBeInTheDocument();
  });

  it('removes the overflow menu button when the user stops hovering over the checkbox', () => {
    const { getByLabelText, queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    const checkbox = getByLabelText(labelText);

    fireEvent.mouseEnter(checkbox);
    fireEvent.mouseLeave(checkbox);

    expect(queryByLabelText(overflowMenuAriaLabel)).not.toBeInTheDocument();
  });

  it('renders the overflow menu button when the user focuses on the checkbox', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    fireEvent.focus(getByLabelText(labelText));

    expect(getAllByLabelText(overflowMenuAriaLabel)[0]).toBeInTheDocument();
  });

  it('renders the overflow menu button when the user focuses on the overflow button', () => {
    const { getByLabelText, getAllByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    fireEvent.focus(getByLabelText(labelText));

    const overflowButton = getAllByLabelText(overflowMenuAriaLabel)[0];

    fireEvent.focus(overflowButton);

    expect(overflowButton).toBeInTheDocument();
  });

  it('removes the overflow menu button when the user removes focuses', async () => {
    const { getByLabelText, queryByLabelText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props} />
    );

    const checkbox = getByLabelText(labelText);

    fireEvent.focus(checkbox);
    fireEvent.blur(checkbox);

    expect(queryByLabelText(overflowMenuAriaLabel)).not.toBeInTheDocument();
  });

  it('renders the provided overflow menu options when the user opens the menu', async () => {
    const { getByLabelText, getAllByLabelText, findByText } = render(
      <FilterPanelCheckboxWithOverflowMenu {...props}>
        <OverflowMenuItem itemText="option 1" />
        <OverflowMenuItem itemText="option 2" />
      </FilterPanelCheckboxWithOverflowMenu>
    );

    fireEvent.mouseEnter(getByLabelText(labelText));
    userEvent.click(getAllByLabelText(overflowMenuAriaLabel)[0]);

    expect(await findByText(/option 1/i)).toBeInTheDocument();
    expect(await findByText(/option 2/i)).toBeInTheDocument();
  });
});
