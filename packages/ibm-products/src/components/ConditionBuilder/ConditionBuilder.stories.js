/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import { ConditionBuilder } from '.';
import mdx from './ConditionBuilder.mdx';

import styles from './_storybook-styles.scss';
import { inputData } from './assets/sampleInput';

export default {
  title: 'IBM Products/Components/ConditionBuilder',
  component: ConditionBuilder,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <ConditionBuilder
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
      inputConfig={inputData}
      startConditionLabel={'Add Condition'}
      popOverSearchThreshold={4}
    />
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const conditionBuilder = Template.bind({});
conditionBuilder.args = {
  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#ConditionBuilder-args
  children: 'hello, world',
};
