//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { ExportModal } from '.';
import { carbon } from '../../settings';

const componentName = ExportModal.displayName;

const defaultProps = {
  body: 'body content',
  className: 'test-class',
  errorMessage: 'an error occurred',
  filename: '',
  inputLabel: 'file name',
  invalidInputText: 'invalid input',
  loadingMessage: 'loading...',
  open: true,
  primaryButtonText: 'primary button',
  secondaryButtonText: 'secondary button',
  successMessage: 'success',
  title: 'header content',
  inputType: 'text',
};

describe(componentName, () => {
  it('renders body', () => {
    render(<ExportModal {...defaultProps} />);
    screen.getByText(defaultProps.body);
  });

  it('renders title', () => {
    render(<ExportModal {...defaultProps} />);
    screen.getByText(defaultProps.title);
  });

  it('renders the loading message', () => {
    render(<ExportModal {...defaultProps} loading />);
    screen.getByText(defaultProps.loadingMessage);
  });

  it('renders the error message', () => {
    render(<ExportModal {...defaultProps} error />);
    screen.getByText(defaultProps.errorMessage);
  });

  it('renders the success message', () => {
    render(<ExportModal {...defaultProps} successful />);
    screen.getByText(defaultProps.successMessage);
  });

  it('submits with valid extension', () => {
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

    const { container } = render(<ExportModal {...props} />);
    const textInput = container.querySelector(`.${carbon.prefix}--text-input`);

    change(textInput, { target: { value: `${props.filename}.pdf` } });
    blur(textInput);
    click(screen.getByText(props.primaryButtonText));
    expect(onRequestSubmit).toBeCalled();
  });

  it('does not submit without text input', () => {
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const props = {
      ...defaultProps,
      onRequestSubmit,
      validExtensions: ['pdf'],
      invalidInputText: 'File must have valid extension .pdf',
    };

    const { container } = render(<ExportModal {...props} />);
    const submitBtn = container.querySelector(
      `.${carbon.prefix}--btn--primary`
    );

    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();
  });

  it('does not submit with invalid extension', () => {
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

    const { container } = render(<ExportModal {...props} />);
    const textInput = container.querySelector(`.${carbon.prefix}--text-input`);

    change(textInput, { target: { value: `${props.filename}` } });
    blur(textInput);
    click(screen.getByText(props.primaryButtonText));
    expect(onRequestSubmit).not.toBeCalled();
    screen.getByText(props.invalidInputText);

    change(textInput, { target: { value: `${props.filename}.mp3` } });
    blur(textInput);
    click(screen.getByText(props.primaryButtonText));
    expect(onRequestSubmit).not.toBeCalled();
    screen.getByText(props.invalidInputText);
  });

  it('renders with preformatted extensions', () => {
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const onClose = fn();
    const props = {
      ...defaultProps,
      onRequestSubmit,
      onClose,
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

    const { getByLabelText } = render(<ExportModal {...props} />);

    screen.getByText(props.preformattedExtensionsLabel);
    click(getByLabelText('BAR (best for integration server)'));
    click(screen.getByText(props.primaryButtonText));
    expect(onRequestSubmit).toBeCalledWith(`${props.filename}.bar`);

    click(screen.getByText(props.secondaryButtonText));
    expect(onClose).toBeCalled();
  });

  it('renders with password field', () => {
    const { container } = render(
      <ExportModal {...defaultProps} inputType="password" />
    );
    expect(
      container.querySelector(`.${carbon.prefix}--text-input`)
    ).toHaveAttribute('type', 'password');
  });

  //@TODO: reinstate this test as soon as https://github.com/carbon-design-system/carbon/issues/10107 is fixed
  it.skip('has no accessibility violations', async () => {
    const { container } = render(<ExportModal {...defaultProps} />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<ExportModal {...defaultProps} />);
    expect(container.firstChild).toHaveClass(defaultProps.className);
  });

  const dataTestId = 'dataTestId';

  it('adds additional properties to the containing node', () => {
    render(<ExportModal {...defaultProps} data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<ExportModal {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<ExportModal {...defaultProps} data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
