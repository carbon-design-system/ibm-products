//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { RemovalModal } from '.';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/RemovalModal',
  component: RemovalModal,
  parameters: { styles },
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

export const WithOutConfirmation = Template.bind({});
WithOutConfirmation.args = {};

export const WithConfirmation = Template.bind({});
WithConfirmation.args = {
  textConfirmation: true,
};
