import React from 'react';

import { ExampleComponent } from '../components';

export default {
  title: 'Example/ExampleComponent',
  component: ExampleComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <ExampleComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ExampleComponent',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ExampleComponent',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ExampleComponent',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ExampleComponent',
};
