/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InlineEditV2 } from '.';

const componentName = InlineEditV2.displayName;

const defaultProps = {
  cancelLabel: 'Cancel',
  editLabel: 'Edit',
  invalid: false,
  invalidLabel: 'This field is required',
  onCancel: () => {},
  onChange: () => {},
  onSave: () => {},
  // readOnly: false,
  // readOnlyLabel: 'This value is read only',
  saveLabel: 'Save',
  value: 'default',
};

describe(componentName, () => {
  it('renders InlineEditV2', () => {
    render(<InlineEditV2 {...defaultProps} />);
  });

  // it('renders in readOnly mode', () => {
  //   render(<InlineEditV2 {...defaultProps} readOnly />);
  //   const input = screen.getByDisplayValue(defaultProps.value);
  //   expect(input).toHaveAttribute('readOnly');

  //   // for coverage
  //   fireEvent.focus(input);
  //   fireEvent.blur(input);
  // });

  it('renders in invalid mode', () => {
    render(<InlineEditV2 {...defaultProps} invalid />);
    const input = screen.getByDisplayValue(defaultProps.value);
    userEvent.click(input);
    expect(screen.getByText(defaultProps.invalidLabel)).toBeVisible();
  });

  it('focuses the input when the component is clicked', () => {
    render(<InlineEditV2 {...defaultProps} />);
    const input = screen.getByDisplayValue(defaultProps.value);
    userEvent.click(input);
    expect(screen.getByLabelText(defaultProps.cancelLabel)).toBeVisible();
  });

  it('focuses the input when the edit button is clicked', () => {
    render(<InlineEditV2 {...defaultProps} />);
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
    render(<InlineEditV2 {...props} />);
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
    const { rerender } = render(<InlineEditV2 {...props} />);
    rerender(<InlineEditV2 {...props} value="new value" />);
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
    const { rerender } = render(<InlineEditV2 {...props} />);
    rerender(<InlineEditV2 {...props} value="new value" />);
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
    const { rerender } = render(<InlineEditV2 {...props} />);
    rerender(<InlineEditV2 {...props} value="new value" />);
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
    render(<InlineEditV2 {...props} />);
    userEvent.click(screen.getByLabelText(props.editLabel));
    const input = screen.getByDisplayValue(props.value);
    fireEvent.blur(input);
    expect(onCancel).toHaveBeenCalled();
  });

  it('handles keydown', () => {
    render(<InlineEditV2 {...defaultProps} />);
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
    const { rerender } = render(<InlineEditV2 {...props} />);
    const input = screen.getByDisplayValue(props.value);

    // clicks escape without making changes
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(onCancel).toHaveBeenCalled();

    // clicks escape with new value
    rerender(<InlineEditV2 {...props} value="new value" />);
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
    const { rerender } = render(<InlineEditV2 {...props} />);
    const input = screen.getByDisplayValue(props.value);

    // clicks enter without making changes
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSave).not.toHaveBeenCalled();

    // clicks enter with new value
    rerender(<InlineEditV2 {...props} value="new value" />);
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSave).toHaveBeenCalled();
  });
});
