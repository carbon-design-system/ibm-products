//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';

import { ExampleComponent } from '.';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/ExampleComponent',
  component: ExampleComponent,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: { styles },
};

const Template = (args) => {
  const [count, setCount] = useState(0);

  const handlePrimaryClick = () => {
    setCount(count + 1);
    console.log('Primary was clicked');
  };

  const handleSecondaryClick = () => {
    setCount(count - 1);
    console.log('Secondary was clicked');
  };

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <ExampleComponent
          {...args}
          onPrimaryClick={handlePrimaryClick}
          onSecondaryClick={handleSecondaryClick}
        />
      </div>
    </div>
  );
};

export const BoxedSet = Template.bind({});
BoxedSet.args = {
  borderColor: '#141414',
  boxedBorder: true,
  disabled: false,
};

export const ShadowSet = Template.bind({});
ShadowSet.args = {
  borderColor: '#141414',
  boxedBorder: false,
  disabled: false,
};
