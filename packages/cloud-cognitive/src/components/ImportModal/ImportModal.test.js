/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { ImportModal } from '.';

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
  maxFileSize: 500,
  maxFileSizeErrorBody: '500kb max file size. Select a new file and try again.',
  modalBody:
    'You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB; .jpg and .jpeg file extensions only.)',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: 'Import file',
  secondaryButtonText: 'Cancel',
  modalHeading: 'Import',
  validFileTypes: ['image/jpeg'],
  fileUploadLabel: 'files uploaded',
};

describe(name, () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders with successful fetch file upload and submit', async () => {
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

    change(textInput, { target: { value: 'test.jpeg' } });
    expect(addFileBtn.classList.contains('bx--btn--disabled')).not.toBe(true);
    click(addFileBtn);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    click(submitBtn);
    expect(onRequestSubmit).toBeCalled();
  });

  it('should display the network error message when the fetch is rejected', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('fetch failed'));
    const { click, change } = fireEvent;

    const { getByText, container } = render(<ImportModal {...defaultProps} />);

    const addFileBtn = getByText('Add file');
    const textInput = container.querySelector('.bx--text-input');

    change(textInput, { target: { value: 'test.jpeg' } });
    click(addFileBtn);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(getByText(defaultProps.fetchErrorBody)).toBeVisible();
  });

  it('should display the network error message when the fetch isnt a 200 response', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );
    const { click, change } = fireEvent;

    const { getByText, container } = render(<ImportModal {...defaultProps} />);

    const addFileBtn = getByText('Add file');
    const textInput = container.querySelector('.bx--text-input');

    change(textInput, { target: { value: 'test.jpeg' } });
    click(addFileBtn);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(getByText(defaultProps.fetchErrorBody)).toBeVisible();
  });

  it('should display the invalid file type error message when an incorrect file type is uploaded', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        blob: () => Promise.resolve({ type: 'pdf' }),
      })
    );

    const { click, change } = fireEvent;
    const { getByText, container } = render(<ImportModal {...defaultProps} />);

    const addFileBtn = getByText('Add file');
    const textInput = container.querySelector('.bx--text-input');

    change(textInput, { target: { value: 'test.jpeg' } });
    click(addFileBtn);
    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(getByText(defaultProps.invalidFileTypeErrorBody)).toBeVisible();
  });

  it('should successfully use the drag and drop component to upload a file and then remove the file', () => {
    const { change, click } = fireEvent;
    const { getByText, container } = render(<ImportModal {...defaultProps} />);
    const files = [new File(['foo'], 'foo.jpeg', { type: 'image/jpeg' })];

    change(container.querySelector('.bx--file-input'), { target: { files } });
    expect(getByText('foo.jpeg')).toBeVisible();

    click(container.querySelector('.bx--file-close'));
    expect(container.querySelector('.bx--file-filename')).toBeNull();
  });
});
