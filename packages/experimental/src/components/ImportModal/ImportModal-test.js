/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import { ImportModal } from '.';

import uuidv4 from '../../global/js/utils/uuidv4';
jest.mock('../../global/js/utils/uuidv4');

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    blob: () => Promise.resolve({ type: 'image/jpeg' }),
  })
);

const { name } = ImportModal;
const defaultProps = {
  defaultErrorBody: 'Select a new file and try again.',
  errorHeader: 'Import failed',
  fetchErrorBody: 'Unable to fetch URL.',
  fileDropHeader: 'Add files using drag and drop',
  fileDropLabel: 'Drag and drop files here or click to upload',
  inputButtonText: 'Add file',
  inputHeader: 'Add a file by specifying a URL',
  inputPlaceholder: 'URL',
  invalidFileTypeErrorBody: 'Invalid file type.',
  maxFileSize: 500000,
  maxFileSizeErrorBody: '500kb max file size. Select a new file and try again.',
  modalBody:
    'You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB; .jpg and .png file extensions only.)',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: 'Import file',
  secondaryButtonText: 'Cancel',
  modalHeading: 'Import',
  validFileTypes: ['image/jpeg', 'image/png'],
};

describe(name, () => {
  beforeAll(() => {
    uuidv4.mockImplementation(() => 'testid');
  });

  test('should render', async () => {
    const { click, change } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();

    const { getByText, container } = render(
      <ImportModal {...defaultProps} onRequestSubmit={onRequestSubmit} />
    );

    const submitBtn = getByText('Import file');
    const addFileBtn = getByText('Add file');
    const textInput = container.querySelector('.bx--text-input');

    expect(addFileBtn.classList.contains('bx--btn--disabled')).toBe(true);
    click(submitBtn);
    expect(onRequestSubmit).not.toBeCalled();

    change(textInput, { target: { value: 'test.png' } });
    expect(addFileBtn.classList.contains('bx--btn--disabled')).not.toBe(true);
    click(addFileBtn);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    click(submitBtn);
    expect(onRequestSubmit).toBeCalled();
  });
});
