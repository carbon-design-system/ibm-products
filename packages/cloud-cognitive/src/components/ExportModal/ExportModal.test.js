/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
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
  it('default render with with extension validation', async () => {
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

    change(textInput, { target: { value: 'test.mp3' } });
    blur(textInput);
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
});
