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
  const resource = 'BX1001';
  return (
    <RemovalModal
      {...args}
      body={`Deleting ${resource} cannot be undone.`}
      header="Confirm delete"
      onRequestSubmit={() => console.log('submitted')}
      onRequestClose={() => console.log('cancel')}
      open
      resource={resource}
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
