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
  return (
    <>
      <ExportModal
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

export const WithExtensionValidation = Template.bind({});
WithExtensionValidation.args = {
  ...defaultProps,
  validExtensions: ['pdf'],
  filename: 'name',
  invalidInputText: 'File must have valid extension .pdf',
};
