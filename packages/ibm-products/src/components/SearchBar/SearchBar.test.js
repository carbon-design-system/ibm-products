/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg, carbon } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { SearchBar } from '.';

const blockClass = `${pkg.prefix}--search-bar`;
const componentName = SearchBar.displayName;
const dataTestId = uuidv4();
const scopesTypeLabel = 'Scopes';

const defaultProps = {
  clearButtonLabelText: 'Clear',
  placeHolderText: 'Search...',
  submitLabel: 'Search',
};

const scopes = [
  {
    id: 'scope-2',
    text: 'Scope 2',
  },
  {
    id: 'scope-1',
    text: 'Scope 1',
  },
  {
    id: 'scope-3',
    text: 'Scope 3',
  },
];

const renderComponent = (props = defaultProps) => {
  return render(<SearchBar {...props} />);
};

describe(componentName, () => {
  it('renders with default props', async () => {
    renderComponent();

    const searchBox = screen.getByRole('searchbox');
    const submitButton = screen.getByText(defaultProps.submitLabel);

    expect(searchBox).toBeInTheDocument();
    expect(searchBox.value).toBe('');
    expect(searchBox.placeholder).toBe(defaultProps.placeHolderText);
    expect(submitButton).toHaveTextContent(defaultProps.submitLabel);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('has initial value, it enables submit button, and click clear button to clear input field', async () => {
    const value = 'Initial Value';
    renderComponent({ ...defaultProps, value });

    const searchBox = screen.getByDisplayValue(value);
    const submitButton = screen.getByText(defaultProps.submitLabel);
    const clearButton = screen.getByTitle(defaultProps.clearButtonLabelText);

    expect(clearButton).toBeInTheDocument();
    expect(searchBox).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    fireEvent.click(clearButton);

    expect(searchBox.value).toBe('');
    expect(submitButton).toBeDisabled();
    expect(clearButton).toHaveClass(`${carbon.prefix}--search-close--hidden`);
  });

  it('type search text, that enables submit button, and click submit button, then clear text field', async () => {
    const mockSubmitFn = jest.fn();

    renderComponent({ ...defaultProps, onSubmit: mockSubmitFn });

    const text = 'carbon';
    const searchBox = screen.getByRole('searchbox');
    const submitButton = screen.getByText(defaultProps.submitLabel);
    const clearButton = screen.getByTitle(defaultProps.clearButtonLabelText);

    expect(submitButton).toBeDisabled();

    fireEvent.change(searchBox, { target: { value: text } });

    expect(searchBox.value).toBe(text);
    expect(submitButton).toBeEnabled();
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    expect(mockSubmitFn).toHaveBeenCalled();

    fireEvent.click(clearButton);

    expect(searchBox.value).toBe('');
    expect(submitButton).toBeDisabled();
    expect(clearButton).toHaveClass(`${carbon.prefix}--search-close--hidden`);
  });

  it('renders with scopes multi-select dropdown', async () => {
    renderComponent({
      ...defaultProps,
      scopes,
      scopesTypeLabel,
    });

    const scopesListBox = screen.getByRole('combobox');
    const scopesListBoxLabel = screen.getByText(scopesTypeLabel);

    expect(scopesListBox).toBeInTheDocument();
    expect(scopesListBoxLabel).toBeInTheDocument();
  });

  it('click on scopes dropdown to open first, then close', async () => {
    renderComponent({
      ...defaultProps,
      scopes,
      scopesTypeLabel,
    });

    const scopesListBox = screen.getByRole('combobox');
    fireEvent.click(scopesListBox);

    expect(scopesListBox).toHaveAttribute('aria-expanded', 'true');
    expect(scopesListBox).toHaveAttribute('aria-haspopup', 'listbox');

    // List options in a <ul>
    const listEl = screen.getByRole('listbox');
    // Check <li>s with same length as scopes
    expect(listEl.children).toHaveLength(scopes.length);

    fireEvent.click(scopesListBox);

    expect(scopesListBox).toHaveAttribute('aria-expanded', 'false');
    expect(listEl.children).toHaveLength(0);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();

    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const className = 'search-bar-main';
    renderComponent({ ...defaultProps, className });

    const form = document.getElementsByClassName(className)?.[0];
    expect(form).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    renderComponent({
      ...defaultProps,
      ['data-testid']: dataTestId,
    });

    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();

    renderComponent({ ...defaultProps, ref });

    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderComponent({
      ...defaultProps,
      ['data-testid']: dataTestId,
    });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
