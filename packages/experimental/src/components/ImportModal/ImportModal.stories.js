//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { ImportModal } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
// import mdx from './ImportModal.mdx';

export default {
  title: 'Experimental/ImportModal',
  component: ImportModal,
  parameters: {
    styles,
  },
};

const Template = (args) => {
  return <ImportModal {...args} />;
};

export const MinimalSetup = Template.bind({});

MinimalSetup.args = {
  defaultErrorBody: 'Select a new file and try again.',
  errorHeader: 'Import failed',
  fetchErrorBody: 'Unable to fetch URL.',
  inputButtonText: 'Add file',
  inputHeader: 'Add a file by specifcying a URL',
  inputPlaceholder: 'URL',
  invalidFileTypeErrorBody: 'Invalid file type.',
  labelText: 'Drag and drop files here or click to upload',
  maxFileSize: 500000,
  maxFileSizeErrorBody: '500kb max file size. Select a new file and try again.',
  onRequestClose: () => console.log('closed'),
  onRequestSubmit: (file) => console.log('file contents', file),
  open: true,
  primaryButtonText: 'Import',
  secondaryButtonText: 'Cancel',
  modalHeading: 'Import',
  validFileTypes: ['image/jpeg', 'image/png'],
};
