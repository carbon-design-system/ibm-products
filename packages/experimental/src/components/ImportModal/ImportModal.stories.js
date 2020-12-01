//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
import { ImportModal } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './ImportModal.mdx';

export default {
  title: 'Experimental/ImportModal',
  component: ImportModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  defaultErrorBody: 'Select a new file and try again.',
  dropHeader: 'Add files using drag and drop',
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
  onRequestClose: () => console.log('closed'),
  onRequestSubmit: (file) => console.log('file contents', file),
  open: true,
  primaryButtonText: 'Import',
  secondaryButtonText: 'Cancel',
  modalHeading: 'Import',
  validFileTypes: ['image/jpeg', 'image/png'],
};

const Template = (args) => {
  return <ImportModal {...args} />;
};

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ImportModal
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
      />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>
  );
};

export const WithStateManager = TemplateWithState.bind({});
WithStateManager.args = {
  ...defaultProps,
};

export const Standard = Template.bind({});
Standard.args = {
  ...defaultProps,
};
