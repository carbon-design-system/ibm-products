/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { ExportModal } from '.';

const componentName = ExportModal.displayName;
const defaultProps = {
  body: 'body content',
  className: 'test-class',
  errorMessage: 'an error occured',
  filename: '',
  inputLabel: 'file name',
  invalidInputText: 'invalid input',
  loadingMessage: 'loading...',
  open: true,
  primaryButtonText: 'primary button',
  secondaryButtonText: 'secondary button',
  successMessage: 'success',
  title: 'header content',
};

describe(componentName, () => {
  it('default render with with extension validation', () => {
    const { change, blur } = fireEvent;
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const props = {
      ...defaultProps,
      onRequestSubmit,
      validExtensions: ['pdf'],
      invalidInputText: 'File must have valid extension .pdf',
    };

    const { container, rerender, getByText } = render(
      <ExportModal {...props} />
    );

    const submitBtn = container.querySelector('.bx--btn--primary');
    const textInput = container.querySelector('.bx--text-input');

    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: `${props.filename}` } });
    blur(textInput);
    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: `${props.filename}.mp3` } });
    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: `${props.filename}.pdf` } });
    click(submitBtn);
    expect(onRequestSubmit).toBeCalled();

    rerender(<ExportModal {...props} loading />);
    expect(getByText(props.loadingMessage)).toBeVisible();

    rerender(<ExportModal {...props} error />);
    expect(getByText(props.errorMessage)).toBeVisible();

    rerender(<ExportModal {...props} successful />);
    expect(getByText(props.successMessage)).toBeVisible();
  });

  it('with preformatted extensions', () => {
    const { click } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const props = {
      ...defaultProps,
      onRequestSubmit,
      filename: 'test',
      preformattedExtensions: [
        {
          extension: 'YAML',
          description: 'best for IBM managed cloud',
        },
        {
          extension: 'BAR',
          description: 'best for integration server',
        },
      ],
      preformattedExtensionsLabel: 'Choose an export format',
    };

    const { container, getByText, getByLabelText } = render(
      <ExportModal {...props} />
    );
    const submitBtn = container.querySelector('.bx--btn--primary');

    expect(getByText(props.preformattedExtensionsLabel)).toBeVisible();
    click(getByLabelText('BAR (best for integration server)'));
    click(submitBtn);
    expect(onRequestSubmit).toBeCalled();
    expect(onRequestSubmit).toBeCalledWith(`${props.filename}.bar`);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ExportModal {...defaultProps} />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<ExportModal {...defaultProps} />);
    expect(container.firstChild).toHaveClass(defaultProps.className);
  });

  it('adds additional properties to the containing node', () => {
    render(<ExportModal {...defaultProps} data-testid="test-id" />);
    screen.getByTestId('test-id');
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<ExportModal {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
