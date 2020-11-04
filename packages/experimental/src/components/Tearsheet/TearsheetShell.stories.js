//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { TearsheetShell } from './TearsheetShell';

import styles from './_index.scss';

export default {
  title: 'Experimental/TearsheetShell',
  component: TearsheetShell,
  parameters: { styles },
  argTypes: {
    height: {
      control: {
        type: 'select',
        options: {
          'Normal height': 'normal',
          'Lower (extra 40px visible above top of tearsheet)': 'lower',
        },
      },
    },
    size: {
      control: {
        type: 'select',
        options: {
          Wide: 'wide',
          Narrow: 'narrow',
        },
      },
    },
  },
};

const className = 'client-class-1 client-class-2';

const dummyContent = (
  <>
    <div style={{ padding: '50px', height: '400px', background: 'pink' }}>
      Tearsheet content
    </div>
  </>
);

// Template.
const Template = (args) => {
  return (
    <>
      <TearsheetShell className={className} {...args}>
        {dummyContent}
      </TearsheetShell>
    </>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  height: 'normal',
  // onClose: () => false,
  open: true,
  preventCloseOnClickOutside: true,
  size: 'narrow',
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {};
