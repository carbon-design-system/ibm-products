/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Wikis } from '@carbon/react/icons';
import { ConditionBuilder } from '.';
import mdx from './ConditionBuilder.mdx';

import styles from './_storybook-styles.scss?inline';
import { inputData, inputDataDynamicOptions } from './assets/sampleInput';
import {
  sampleDataStructure_sentence,
  sampleDataStructure_tree,
} from './assets/SampleData';
import uuidv4 from '../../global/js/utils/uuidv4';
import { variants } from './ConditionBuilderContext/DataConfigs';
export default {
  title: 'Experimental/Components/ConditionBuilder',
  component: ConditionBuilder,
  tags: ['autodocs'],

  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    layout: 'fullscreen',
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

const getOptions = async (conditionState, { property }) => {
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
  startConditionLabel: 'Add condition',
  popOverSearchThreshold: 4,
  getConditionState: (rootState) => {
    console.log(rootState);
  },
};

const actions = [
  {
    id: uuidv4(),
    label: 'Add item to cart',
  },
  { id: uuidv4(), label: 'Proceed item to checkout' },
];

const translateWithId = (key) => {
  const translationsObject = {
    ifText: 'if',
    addConditionText: 'Add condition',
    addConditionGroupText: 'Add condition group',
    addSubgroupText: 'Add subgroup',
  };

  return translationsObject[key];
};
/**
 * TODO: Declare template(s) for one or more scenarios.
 */

const ConditionBuilderTemplate = (args) => {
  const ref = useRef();
  return <ConditionBuilder {...args} ref={ref} {...requiredProps} />;
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const conditionBuilder = ConditionBuilderTemplate.bind({});
conditionBuilder.storyName = 'Condition Builder';
conditionBuilder.args = {
  inputConfig: inputData,
  variant: variants[0],
};

export const conditionBuilderDynamicOptions = ConditionBuilderTemplate.bind({});
conditionBuilderDynamicOptions.storyName = 'With dynamic options';
conditionBuilderDynamicOptions.args = {
  inputConfig: inputDataDynamicOptions,
  getOptions: getOptions,
  variant: variants[0],
};

export const conditionBuilderWithInitialState = ConditionBuilderTemplate.bind(
  {}
);
conditionBuilderWithInitialState.storyName = 'With initial state';
conditionBuilderWithInitialState.args = {
  initialState: sampleDataStructure_sentence,
  inputConfig: inputData,
  variant: variants[0],
  translateWithId: translateWithId,
};

export const conditionBuilderWithActions = ConditionBuilderTemplate.bind({});
conditionBuilderWithActions.storyName = 'With Actions';
conditionBuilderWithActions.args = {
  inputConfig: inputData,
  variant: variants[0],
  actions: actions,
  getActionsState: (actionState) => {
    console.log('action state', actionState);
  },
};

export const conditionBuilderTree = ConditionBuilderTemplate.bind({});
conditionBuilderTree.storyName = 'Condition Builder (Hierarchical)';
conditionBuilderTree.args = {
  inputConfig: inputData,
  variant: variants[1],
};
export const conditionBuilderWithInitialStateTree =
  ConditionBuilderTemplate.bind({});
conditionBuilderWithInitialStateTree.storyName =
  'With initial state (Hierarchical)';
conditionBuilderWithInitialStateTree.args = {
  initialState: sampleDataStructure_tree,
  inputConfig: inputData,
  variant: variants[1],
};

export const conditionBuilderWithActionsTree = ConditionBuilderTemplate.bind(
  {}
);
conditionBuilderWithActionsTree.storyName = 'With Actions (Hierarchical)';
conditionBuilderWithActionsTree.args = {
  inputConfig: inputData,
  variant: variants[1],
  actions: actions,
  getActionsState: (actionState) => {},
};
