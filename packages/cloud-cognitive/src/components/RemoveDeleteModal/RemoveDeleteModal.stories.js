//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { RemoveDeleteModal } from '.';
import mdx from './RemoveDeleteModal.mdx';
const storybookPrefix = getStorybookPrefix(pkg, RemoveDeleteModal.displayName);

export default {
  title: `${storybookPrefix}/${RemoveDeleteModal.displayName}`,
  component: RemoveDeleteModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const resource = 'bx1001';

const defaultProps = {
  body: `Deleting ${resource} will permanently delete the configuration. This action cannot be undone.`,
  className: 'remove-modal-test',
  title: 'Confirm delete',
  iconDescription: 'close',
  inputInvalidText: 'A valid value is required',
  inputLabelText: `Type ${resource} to confirm`,
  inputPlaceholderText: 'Name of resource',
  open: true,
  primaryButtonText: 'Delete',
  resource,
  secondaryButtonText: 'Close',
  label: `Delete ${resource}`,
};

const Template = (args) => {
  return <RemoveDeleteModal {...args} />;
};

const TemplateWIthState = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RemoveDeleteModal
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
      />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>
  );
};

export const WithStateManager = TemplateWIthState.bind({});
WithStateManager.args = {
  ...defaultProps,
  textConfirmation: true,
};

export const WithoutConfirmation = Template.bind({});
WithoutConfirmation.args = {
  ...defaultProps,
  body: `Removing ${resource} will permanently remove the configuration. This action cannot be undone.`,
  title: 'Confirm removal',
  primaryButtonText: 'Remove',
  label: `Remove ${resource}`,
};

export const WithConfirmation = Template.bind({});
WithConfirmation.args = {
  ...defaultProps,
  textConfirmation: true,
};
