/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg, carbon } from '../../settings';
import { SearchBar } from '.';

const blockClass = `${pkg.prefix}--search-bar`;
const componentName = SearchBar.displayName;
const ref = React.createRef();
const defaultProps = {
  clearButtonLabelText: 'Clear',
  placeHolderText: 'Search...',
  submitLabel: 'Search',
};

const renderComponent = (props = defaultProps) => {
  render(<SearchBar {...props} ref={ref} />);
};

describe(componentName, () => {
  it('renders SearchBar with default props', async () => {
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

  it('user types search text, submit button is enabled, and clicks on submit button, then clear the input field', async () => {
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

  // it('has no accessibility violations', async () => {
  //   const { container } = render(<SearchBar> </SearchBar>);
  //   expect(container).toBeAccessible(componentName);
  //   expect(container).toHaveNoAxeViolations();
  // });

  // it(`renders children`, async () => {
  //   render(<SearchBar>{children}</SearchBar>);
  //   screen.getByText(children);
  // });

  // it('applies className to the containing node', async () => {
  //   render(<SearchBar className={className}> </SearchBar>);
  //   expect(screen.getByRole('main')).toHaveClass(className);
  // });

  // it('adds additional props to the containing node', async () => {
  //   render(<SearchBar data-testid={dataTestId}> </SearchBar>);
  //   screen.getByTestId(dataTestId);
  // });

  // it('forwards a ref to an appropriate node', async () => {
  //   const ref = React.createRef();
  //   render(<SearchBar ref={ref}> </SearchBar>);
  //   expect(ref.current).toHaveClass(blockClass);
  // });

  // it('adds the Devtools attribute to the containing node', async () => {
  //   render(<SearchBar data-testid={dataTestId}> </SearchBar>);

  //   expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
  //     componentName
  //   );
  // });
});
