//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
  errorHeader: 'Import failed',
  fetchErrorBody: 'Unable to fetch URL.',
  fileDropLabel: 'Drag and drop files here or click to upload',
  inputButtonText: 'Add file',
  inputHeader: 'Add a file by specifcying a URL',
  inputPlaceholder: 'URL',
  invalidFileTypeErrorBody: 'Invalid file type.',
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

const Template = (args) => {
  return <ImportModal {...defaultProps} {...args} />;
};

/**
 * Simple state manager for modals.
 */
/* eslint-disable react/prop-types */
const ModalStateManager = ({
  renderLauncher: LauncherContent,
  children: ModalContent,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!ModalContent || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
            <ModalContent open={open} setOpen={setOpen} />,
            document.body
          )}
      {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
    </>
  );
};

export const WithStateManager = () => {
  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button onClick={() => setOpen(true)}>Launch modal</Button>
      )}>
      {({ open, setOpen }) => (
        <ImportModal
          {...defaultProps}
          open={open}
          onRequestClose={() => setOpen(false)}
        />
      )}
    </ModalStateManager>
  );
};

export const MinimalSetup = Template.bind({});
MinimalSetup.args = {};
