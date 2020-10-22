//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'carbon-components-react';
import { RemovalModal } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './RemovalModal.mdx';

export default {
  title: 'Experimental/RemovalModal',
  component: RemovalModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  const resource = 'bx1001';
  return (
    <RemovalModal
      {...args}
      body={`Deleting ${resource} cannot be undone.`}
      className="remove-modal-test"
      header="Confirm delete"
      iconDescription="close"
      inputInvalidText="A valid value is required"
      inputLabelText={`Type ${resource} to confirm`}
      inputPlaceholderText="Name of resource"
      onRequestSubmit={() => console.log('submitted')}
      onRequestClose={() => console.log('cancel')}
      open
      primaryButtonText="Delete"
      resource={resource}
      secondaryButtonText="Close"
      subheader={`Delete ${resource}`}
    />
  );
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
  const resource = 'bx1001';
  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button onClick={() => setOpen(true)}>Launch modal</Button>
      )}>
      {({ open, setOpen }) => (
        <RemovalModal
          body={`Deleting ${resource} cannot be undone.`}
          className="remove-modal-test"
          header="Confirm delete"
          iconDescription="close"
          inputInvalidText="A valid value is required"
          inputLabelText={`Type ${resource} to confirm`}
          inputPlaceholderText="Name of resource"
          onRequestSubmit={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}
          open={open}
          primaryButtonText="Delete"
          resource={resource}
          secondaryButtonText="Close"
          subheader={`Delete ${resource}`}
          textConfirmation
        />
      )}
    </ModalStateManager>
  );
};

export const WithoutConfirmation = Template.bind({});
WithoutConfirmation.args = {};

export const WithConfirmation = Template.bind({});
WithConfirmation.args = {
  textConfirmation: true,
};
