//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
import { ExportModal } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './ExportModal.mdx';

export default {
  title: 'Experimental/ExportModal',
  component: ExportModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  filename: 'Sample02.pdf',
  inputLabel: 'File name',
  modalHeading: 'Export',
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
  primaryButtonText: 'Export',
  secondaryButtonText: 'Cancel',
};

const Template = (args) => {
  return <ExportModal {...args} />;
};

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const onSubmitHandler = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));

    if (args.exportSuccessful) setSuccessful(true);
    else setError(true);

    setLoading(false);
  };

  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };

  return (
    <>
      <ExportModal
        {...args}
        open={open}
        onRequestClose={onCloseHandler}
        onRequestSubmit={onSubmitHandler}
        loading={loading}
        successful={successful}
        loadingMessage="Exporting file..."
        successMessage="The file has been exported."
        error={error}
        errorMessage="Server error 500"
      />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>
  );
};

export const WithSuccessMessage = TemplateWithState.bind({});
WithSuccessMessage.args = {
  ...defaultProps,
  exportSuccessful: true,
};

export const WithErrorMessage = TemplateWithState.bind({});
WithErrorMessage.args = {
  ...defaultProps,
  exportSuccessful: false,
};

export const Standard = Template.bind({});
Standard.args = {
  ...defaultProps,
};

export const WithExtensionValidation = Template.bind({});
WithExtensionValidation.args = {
  ...defaultProps,
  validExtensions: ['pdf'],
  filename: '',
  invalidInputText: 'File must have valid extension .pdf',
  modalBody: 'File must be exported in a PDF format.',
};

export const WithPreformattedExtensions = Template.bind({});
WithPreformattedExtensions.args = {
  ...defaultProps,
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
