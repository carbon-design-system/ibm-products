/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';

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
      },
      {
        kind: 'checked',
        label: 'Visualize an attack',
      },
      {
        kind: 'checked',
        label: 'See recommended responses',
      },
    ],
  },
  {
    title: 'Explore rapid search',
    tasks: [
      {
        kind: 'indeterminate',
        label: 'Search from a case',
        onClick: action('task'),
      },
      {
        kind: 'unchecked',
        label: 'Run a KQL query',
        onClick: action('task'),
      },
    ],
  },
  {
    title: 'Explore threat analytics',
    tasks: [
      {
        kind: 'unchecked',
        label: 'View threat analytics dashboard',
        onClick: action('task'),
      },
    ],
  },
  {
    title: 'Manage data ingestion',
    tasks: [
      {
        kind: 'unchecked',
        label: 'Monitor data ingestion',
      },
      {
        kind: 'error',
        label: 'Register a data ingestion point',
        onClick: (task) => {
          action('task')(task);
          window.open(task.url, '_blank').focus();
        },
        url: 'https://www.ibm.com/',
      },
      {
        kind: 'disabled',
        label: 'See data source integrations',
      },
    ],
  },
];

// The flattened list of all tasks[] from taskLists.
const allTasks = taskLists.map((obj) => obj.tasks).flat();
// Total number of tasks.
const numTasks = allTasks.length;
// Count of tasks where 'kind'=checked.
const numTasksCompleted = allTasks.filter(
  (task) => task.kind === 'checked'
).length;
// chartValue as a percentage.
const chartValue = numTasksCompleted / numTasks;

export default {
  title: getStoryTitle(Checklist.displayName),
  component: Checklist,
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
    onClickViewAll: action('view all'),
    onToggle: action('toggle'),
    chartValue: chartValue,
    chartLabel: `${parseInt(chartValue * 100)}% complete`,
    taskLists: taskLists,
    title: 'Get started checklist',
    viewAllLabel: `View all (${numTasks})`,
  },
});

export const itemStates = prepareStory(Template, {
  args: {
    taskLists: [
      {
        title: 'Unchecked state',
        tasks: [
          {
            kind: 'unchecked',
            label:
              'A task with a callback function will render a clickable label.',
            onClick: action('task'),
          },
          {
            kind: 'unchecked',
            label: 'A task without a callback function will render plain text.',
          },
        ],
      },
      {
        title: 'Indeterminate',
        tasks: [
          {
            kind: 'indeterminate',
            label: 'Indeterminate',
            onClick: action('task'),
          },
          { kind: 'indeterminate', label: 'Indeterminate' },
        ],
      },
      {
        title: 'Checked',
        tasks: [
          {
            kind: 'checked',
            label: 'Checked',
            onClick: action('task'),
          },
          { kind: 'checked', label: 'Checked' },
        ],
      },
      {
        title: 'Disabled',
        tasks: [
          {
            kind: 'disabled',
            label: 'Disabled label',
            onClick: action('task'),
          },
          { kind: 'disabled', label: 'Disabled label' },
        ],
      },
      {
        title: 'Error',
        tasks: [
          {
            kind: 'error',
            label: 'Error label',
            onClick: action('task'),
          },
          { kind: 'error', label: 'Error label' },
        ],
      },
    ],
  },
});
