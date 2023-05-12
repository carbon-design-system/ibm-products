/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditInPlace } from '.';

const componentName = EditInPlace.displayName;

const defaultProps = {
  cancelLabel: 'Cancel',
  className: 'edit-in-place-test',
  editLabel: 'Edit',
  id: 'test-id',
  invalid: false,
  invalidLabel: 'This field is required',
  labelText: 'test label',
  onCancel: () => {},
  onChange: () => {},
  onSave: () => {},
  // readOnly: false,
  // readOnlyLabel: 'This value is read only',
  saveLabel: 'Save',
  value: 'default',
};

describe(componentName, () => {
  it('renders EditInPlace', () => {
    render(<EditInPlace {...defaultProps} />);
  });

  // it('renders in readOnly mode', () => {
  //   render(<EditInPlace {...defaultProps} readOnly />);
  //   const input = screen.getByDisplayValue(defaultProps.value);
  //   expect(input).toHaveAttribute('readOnly');

  //   // for coverage
  //   fireEvent.focus(input);
  //   fireEvent.blur(input);
  // });

  it('renders in invalid mode', () => {
    render(<EditInPlace {...defaultProps} invalid />);
    const input = screen.getByDisplayValue(defaultProps.value);
    userEvent.click(input);
    expect(screen.getByText(defaultProps.invalidLabel)).toBeVisible();
  });

  it('focuses the input when the component is clicked', () => {
    render(<EditInPlace {...defaultProps} />);
    const input = screen.getByDisplayValue(defaultProps.value);
    userEvent.click(input);
    expect(screen.getByLabelText(defaultProps.cancelLabel)).toBeVisible();
  });

  it('focuses the input when the edit button is clicked', () => {
    render(<EditInPlace {...defaultProps} />);
    const editBtn = screen.getByLabelText(defaultProps.editLabel);
    userEvent.click(editBtn);
    expect(screen.getByLabelText(defaultProps.cancelLabel)).toBeVisible();
  });

  it('handles onChange', () => {
    const onChange = jest.fn();
    const props = {
      ...defaultProps,
      onChange,
    };
    render(<EditInPlace {...props} />);
    const input = screen.getByDisplayValue(props.value);
    fireEvent.change(input, {
      target: { value: 'new value' },
    });
    expect(onChange).toHaveBeenCalledWith('new value');

    // for coverage- dirtyInput check in onChangeHandler
    fireEvent.change(input, {
      target: { value: 'new value 2' },
    });
  });

  it('handles onSave', async () => {
    const onSave = jest.fn();
    const props = {
      ...defaultProps,
      onSave,
    };
    const { rerender } = render(<EditInPlace {...props} />);
    rerender(<EditInPlace {...props} value="new value" />);
    userEvent.click(screen.getByLabelText(props.editLabel));
    userEvent.click(screen.getByLabelText(props.saveLabel));
    expect(onSave).toHaveBeenCalled();
  });

  it('handles onCancel', () => {
    const onCancel = jest.fn();
    const props = {
      ...defaultProps,
      onCancel,
    };
    const { rerender } = render(<EditInPlace {...props} />);
    rerender(<EditInPlace {...props} value="new value" />);
    userEvent.click(screen.getByLabelText(props.editLabel));
    userEvent.click(screen.getByLabelText(props.cancelLabel));
    expect(onCancel).toHaveBeenCalled();
  });

  it('handles blur save', () => {
    const onSave = jest.fn();
    const props = {
      ...defaultProps,
      onSave,
    };
    const { rerender } = render(<EditInPlace {...props} />);
    rerender(<EditInPlace {...props} value="new value" />);
    userEvent.click(screen.getByLabelText(props.editLabel));
    const input = screen.getByDisplayValue('new value');
    fireEvent.blur(input);
    expect(onSave).toHaveBeenCalled();
  });

  it('handles blur cancel', () => {
    const onCancel = jest.fn();
    const props = {
      ...defaultProps,
      onCancel,
    };
    render(<EditInPlace {...props} />);
    userEvent.click(screen.getByLabelText(props.editLabel));
    const input = screen.getByDisplayValue(props.value);
    fireEvent.blur(input);
    expect(onCancel).toHaveBeenCalled();
  });

  it('handles keydown', () => {
    render(<EditInPlace {...defaultProps} />);
    const input = screen.getByDisplayValue(defaultProps.value);

    // for coverage- default switch statement case
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'M' });
  });

  it('handles escape key', () => {
    const onCancel = jest.fn();
    const props = {
      ...defaultProps,
      onCancel,
    };
    const { rerender } = render(<EditInPlace {...props} />);
    const input = screen.getByDisplayValue(props.value);

    // clicks escape without making changes
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(onCancel).toHaveBeenCalled();

    // clicks escape with new value
    rerender(<EditInPlace {...props} value="new value" />);
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(onCancel).toHaveBeenCalled();
  });

  it('handles enter key', () => {
    const onSave = jest.fn();
    const props = {
      ...defaultProps,
      onSave,
    };
    const { rerender } = render(<EditInPlace {...props} />);
    const input = screen.getByDisplayValue(props.value);

    // clicks enter without making changes
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSave).not.toHaveBeenCalled();

    // clicks enter with new value
    rerender(<EditInPlace {...props} value="new value" />);
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSave).toHaveBeenCalled();
  });

  xit('has no accessibility violations', async () => {
    const { container } = render(
      <main>
        <EditInPlace {...defaultProps} />
      </main>
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<EditInPlace {...defaultProps} />);
    expect(container.firstChild).toHaveClass(defaultProps.className);
  });

  const dataTestId = 'data-testid';

  it('adds additional properties to the containing node', () => {
    render(<EditInPlace {...defaultProps} data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<EditInPlace {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<EditInPlace {...defaultProps} data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
