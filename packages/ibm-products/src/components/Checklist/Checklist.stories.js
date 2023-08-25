/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getSelectedCarbonTheme,
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { Checklist } from '.';
import mdx from './Checklist.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'checklist-stories';

const taskLists = [
  {
    tasks: [
      {
        kind: 'checked',
        label: 'Register for Sandbox trial',
      },
    ],
  },
  {
    title: 'Investigate a threat',
    tasks: [
      {
        kind: 'checked',
        label: 'Explore an automated investigation',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'checked',
        label: 'Visualize an attack',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'checked',
        label: 'See recommended responses',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
    ],
  },
  {
    title: 'Explore rapid search',
    tasks: [
      {
        kind: 'unchecked',
        label: 'Search from a case',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'unchecked',
        label: 'Run a KQL query',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
    ],
  },
  {
    title: 'Explore threat analytics',
    tasks: [
      {
        kind: 'unchecked',
        label: 'View threat analytics dashboard',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
    ],
  },
  {
    title: 'Manage data ingestion',
    tasks: [
      {
        kind: 'unchecked',
        label: 'Monitor data ingestion',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'unchecked',
        label: 'Register a data ingestion point',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'unchecked',
        label: 'See data source integrations',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
    ],
  },
];

// The flattened list of tasks[] from taskLists
const allTasks = taskLists.map((obj) => obj.tasks).flat();
// Total number of tasks
const numTasks = allTasks.length;
// Count of tasks where checked=true
const numTasksCompleted = allTasks.filter(
  (task) => task.kind === 'checked'
).length;
const chartValue = numTasksCompleted / numTasks;

export default {
  title: getStoryTitle(Checklist.displayName),
  component: Checklist,
  // TODO: Define argTypes for props not represented by standard JS types.
  argTypes: {
    theme: {
      control: { type: null },
    },
  },
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const theme = getSelectedCarbonTheme();

  return (
    <div className={`${storyClass}__viewport`}>
      <Checklist {...args} theme={theme} />
    </div>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const checklist = prepareStory(Template, {
  args: {
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Checklist-args
    onClickViewAll: () => {},
    chartValue: chartValue,
    chartLabel: `${parseInt(chartValue * 100)}% complete`,
    taskLists: taskLists,
    title: 'Get started checklist',
    viewAllLabel: `View all (${numTasks})`,
  },
});
