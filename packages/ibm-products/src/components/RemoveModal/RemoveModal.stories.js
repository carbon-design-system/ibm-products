//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { RemoveModal } from '.';
import mdx from './RemoveModal.mdx';

export default {
  title: getStoryTitle(RemoveModal.displayName),
  component: RemoveModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const resourceName = 'bx1001';

const defaultProps = {
  body: `Deleting ${resourceName} will permanently delete the configuration. This action cannot be undone.`,
  className: 'remove-modal-test',
  title: 'Confirm delete',
  iconDescription: 'Close',
  inputInvalidText: 'A valid value is required',
  inputLabelText: `Type ${resourceName} to confirm`,
  inputPlaceholderText: 'Name of resourceName',
  onClose: () => false,
  open: true,
  primaryButtonDisabled: false,
  primaryButtonText: 'Delete',
  resourceName,
  secondaryButtonText: 'Cancel',
  label: `Delete ${resourceName}`,
  preventCloseOnClickOutside: true,
};

const Template = (args) => {
  return <RemoveModal {...args} />;
};

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>
  );
};

export const Standard = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
    body: `Removing ${resourceName} will permanently remove the configuration. This action cannot be undone.`,
    title: 'Confirm removal',
    primaryButtonText: 'Remove',
    label: `Remove ${resourceName}`,
  },
});

export const RemovePattern = prepareStory(Template, {
  args: {
    ...defaultProps,
    body: `Removing ${resourceName} will permanently remove the configuration. This action cannot be undone.`,
    title: 'Confirm removal',
    primaryButtonText: 'Remove',
    label: `Remove ${resourceName}`,
  },
});

export const DeletePattern = prepareStory(TemplateWithState, {
  args: {
    ...defaultProps,
    textConfirmation: true,
  },
});
