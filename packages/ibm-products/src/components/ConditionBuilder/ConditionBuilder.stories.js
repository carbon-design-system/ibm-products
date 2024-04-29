/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Wikis } from '@carbon/react/icons';
import { ConditionBuilder } from '.';
import mdx from './ConditionBuilder.mdx';

import styles from './_storybook-styles.scss';
import { inputData, inputDataDynamicOptions } from './assets/sampleInput';
import { sampleDataStructure_sentence } from './assets/SampleData';

export default {
  title: `IBM Products/Components/ConditionBuilder`,
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

const getContinents = () => {
  return [
    {
      label: 'Africa',
      id: 'Africa',
    },
    {
      label: 'Antarctica',
      id: 'Antarctica',
    },
    {
      label: 'Asia',
      id: 'Asia',
    },
    {
      label: 'Australia',
      id: 'Australia',
    },
    {
      label: 'Europe',
      id: 'Europe',
    },
  ];
};

const getRegions = () => {
  return [
    {
      label: 'Afghanistan',
      id: 'AF',
      icon: Wikis,
    },
    {
      label: 'Albania',
      id: 'AL',
      icon: Wikis,
    },
    {
      label: 'Algeria',
      id: 'AG',
      icon: Wikis,
    },
    {
      label: 'Andorra',
      id: 'AN',
      icon: Wikis,
    },
  ];
};

const getColors = () => {
  return [
    {
      label: 'black',
      id: 'black',
    },
    {
      label: 'silver',
      id: 'silver',
    },
    {
      label: 'gray',
      id: 'gray',
    },
    {
      label: 'white',
      id: 'white',
    },
    {
      label: 'maroon',
      id: 'maroon',
    },
    {
      label: 'red',
      id: 'red',
    },
    {
      label: 'purple',
      id: 'purple',
    },
    {
      label: 'fuchsia',
      id: 'fuchsia',
    },
    {
      label: 'green',
      id: 'green',
    },
    {
      label: 'lime',
      id: 'lime',
    },
    {
      label: 'olive',
      id: 'olive',
    },
    {
      label: 'yellow',
      id: 'yellow',
    },
    {
      label: 'navy',
      id: 'navy',
    },
    {
      label: 'blue',
      id: 'blue',
    },
    {
      label: 'teal',
      id: 'teal',
    },
    {
      label: 'aqua',
      id: 'aqua',
    },
  ];
};

const getOptions = async ({ property }) => {
  switch (property) {
    case 'continent':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getContinents());
        }, 2000);
      });
    case 'region':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getRegions());
        }, 2000);
      });
    case 'color':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getColors());
        }, 2000);
      });
    default:
      return [];
  }
};
const requiredProps = {
  startConditionLabel: 'Add Condition',
  popOverSearchThreshold: 4,
  getConditionState: () => {},
};
/**
 * TODO: Declare template(s) for one or more scenarios.
 */

const Template = (args) => {
  const ref = useRef();
  return (
    <ConditionBuilder
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
      ref={ref}
      inputConfig={inputData}
      {...requiredProps}
    />
  );
};

const WithDynamicOptions = ({ ...args }) => {
  const ref = useRef();
  return (
    <ConditionBuilder
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
      ref={ref}
      inputConfig={inputDataDynamicOptions}
      {...requiredProps}
      getOptions={getOptions}
    />
  );
};

const WithInitialState = ({ ...args }) => {
  const ref = useRef();
  return (
    <ConditionBuilder
      // TODO: handle events with action or local handler.
      // onTodo={action('onTodo log action')}
      {...args}
      ref={ref}
      inputConfig={inputData}
      initialState={sampleDataStructure_sentence}
      {...requiredProps}
      getOptions={getOptions}
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

export const conditionBuilderDynamicOptions = WithDynamicOptions.bind({});
conditionBuilderDynamicOptions.storyName = 'With dynamic options';
conditionBuilderDynamicOptions.args = {
  children: 'hello, world',
};

export const conditionBuilderWithInitialState = WithInitialState.bind({});
conditionBuilderWithInitialState.storyName = 'With initial state';
conditionBuilderWithInitialState.args = {
  children: 'hello, world',
};
