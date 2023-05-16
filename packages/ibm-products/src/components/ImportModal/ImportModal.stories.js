//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
import { action } from '@storybook/addon-actions';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ImportModal } from '.';
import mdx from './ImportModal.mdx';

export default {
  title: getStoryTitle(ImportModal.displayName),
  component: ImportModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
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
  inputButtonIcon: false,
  inputButtonText: 'Add file',
  inputId: 'test-id',
  inputLabel: 'Add a file by specifying a URL',
  inputPlaceholder: 'URL',
  invalidFileTypeErrorBody: 'Invalid file type.',
  invalidFileTypeErrorHeader: 'Import failed',
  invalidIconDescription: 'Delete',
  maxFileSize: 500000,
  maxFileSizeErrorBody: '500kb max file size. Select a new file and try again.',
  maxFileSizeErrorHeader: 'Import failed',
  onClose: action('onClose event'),
  onRequestSubmit: (file) => console.log('file contents', file),
  open: true,
  primaryButtonText: 'Import',
  secondaryButtonText: 'Cancel',
  title: 'Import',
};

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ImportModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>
  );
};

export const Standard = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
  },
});
