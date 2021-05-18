/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ExportModal } from '.';

const { name } = ExportModal;
const defaultProps = {
  filename: '',
  inputLabel: 'File name',
  modalHeading: 'Export',
  open: true,
  primaryButtonText: 'Export',
  secondaryButtonText: 'Cancel',
  validExtensions: ['pdf'],
  invalidInputText: 'File must have valid extension .pdf',
  successMessage: 'Success',
  errorMessage: 'Error',
  loadingMessage: 'Loading',
};

describe(name, () => {
  it('default render with with extension validation', () => {
    const { click, change, blur } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const props = {
      ...defaultProps,
      onRequestSubmit,
    };

    const { container, rerender, getByText } = render(
      <ExportModal {...props} />
    );

    const submitBtn = container.querySelector('.bx--btn--primary');
    const textInput = container.querySelector('.bx--text-input');

    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: 'test' } });
    blur(textInput);
    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: 'test.mp3' } });
    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: 'test.pdf' } });
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
    expect(onRequestSubmit).toBeCalledWith('test.bar');
  });
});
