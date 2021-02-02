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
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: 'Export',
  secondaryButtonText: 'Cancel',
  validExtensions: ['pdf'],
  invalidInputText: 'File must have valid extension .pdf',
};

describe(name, () => {
  test('should render', async () => {
    const { click, change } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();

    const { container } = render(
      <ExportModal {...defaultProps} onRequestSubmit={onRequestSubmit} />
    );

    const submitBtn = container.querySelector('.bx--btn--primary');
    const textInput = container.querySelector('.bx--text-input');

    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: 'test.pdf' } });
    click(submitBtn);
    expect(onRequestSubmit).toBeCalled();
  });
});
