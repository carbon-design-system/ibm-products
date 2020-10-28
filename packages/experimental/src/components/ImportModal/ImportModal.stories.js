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

export const Moop = Template.bind({});
Moop.args = {};
