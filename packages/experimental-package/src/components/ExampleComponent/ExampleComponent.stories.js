import React from 'react';

import { ExampleComponent } from '.';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Example/ExampleComponent',
  component: ExampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: { styles },
};

const Template = (args) => <ExampleComponent {...args} />;

// const parameters = { styles };

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ExampleComponent',
  // parameters,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ExampleComponent',
  // parameters,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ExampleComponent',
  // parameters,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ExampleComponent',
  // parameters,
};
