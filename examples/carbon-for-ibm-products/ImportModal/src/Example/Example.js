import React, { useState } from 'react';
import { ImportModal } from '@carbon/ibm-products';
import { Button } from '@carbon/react';

export const Example = () => {
  const [open, setOpen] = useState(true);
  const props = {
    accept: ['image/jpeg', 'image/png'],
    className: 'test-class',
    defaultErrorBody: 'Select a new file and try again.',
    defaultErrorHeader: 'Import failed',
    description:
      'You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB; .jpg and .png file extensions only.)',
    fetchErrorBody: 'Unable to fetch URL.',
    fetchErrorHeader: 'Import failed',
    fileDropHeader: 'Add files using drag and drop',
    fileDropLabel: 'Drag and drop files here or click to upload',
    fileUploadLabel: 'files uploaded',
    inputButtonText: 'Add file',
    inputId: 'test-id',
    inputLabel: 'Add a file by specifying a URL',
    inputPlaceholder: 'URL',
    invalidFileTypeErrorBody: 'Invalid file type.',
    invalidFileTypeErrorHeader: 'Import failed',
    invalidIconDescription: 'Delete',
    maxFileSize: 500000,
    maxFileSizeErrorBody:
      '500kb max file size. Select a new file and try again.',
    maxFileSizeErrorHeader: 'Import failed',
    onClose: () => setOpen(false),
    onRequestSubmit: () => {},
    open,
    primaryButtonText: 'Import',
    secondaryButtonText: 'Cancel',
    title: 'Import',
  };

  return (
    <>
      <ImportModal {...props} />
      <Button onClick={() => setOpen(true)}>Open modal</Button>
    </>
  );
};
