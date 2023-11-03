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
    title: 'Section label',
    tasks: [
      {
        kind: 'checked',
        label: 'Task name',
        url: 'https://www.ibm.com/',
        onClick: (task) => {
          action('task')(task);
          // The onClick event returns all of the task's object's properties.
          // E.g. console.log(task) returns:
          // {
          //   kind: 'checked',
          //   label: 'Task name',
          //   onClick: f(),
          //   url: 'https://www.ibm.com/',
          // }
        },
      },
      {
        kind: 'indeterminate',
        label: 'Task name',
        onClick: (task) => {
          action('task')(task);
          // E.g. define your own inline code
          // window.open('https://www.ibm.com/', '_blank').focus();
        },
      },
      {
        kind: 'unchecked',
        label: 'Task name',
        guid: '6B29FC40-CA47-1067-B31D-00DD010662DA',
        onClick: (task) => {
          action('task')(task);
          // E.g. trigger your own callback
          // handleClick(task.guid);
        },
      },
    ],
  },
];

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
    onClickViewAll: () => {
      action('view all')();
    },
    onToggle: (isOpen) => {
      action(`toggle ${isOpen ? 'open' : 'closed'}`)();
    },
    chartValue: 0.15,
    chartLabel: '15% complete',
    taskLists: taskLists,
    title: 'Checklist header',
    viewAllLabel: `View all (10)`,
  },
});

export const taskStates = prepareStory(Template, {
  storyName: 'Task states',
  args: {
    taskLists: [
      {
        title: 'Unchecked state',
        tasks: [
          {
            kind: 'unchecked',
            label: 'Task name',
            onClick: action('task'),
          },
          {
            kind: 'unchecked',
            label: 'Task name',
          },
        ],
      },
      {
        title: 'Indeterminate state',
        tasks: [
          {
            kind: 'indeterminate',
            label: 'Task name',
            onClick: action('task'),
          },
          { kind: 'indeterminate', label: 'Task name' },
        ],
      },
      {
         title: 'Checked state',
        tasks: [
          {
            kind: 'checked',
            label: 'Task name',
            onClick: action('task'),
          },
          { kind: 'checked', label: 'Task name' },
        ],
      },
      {
        title: 'Disabled state',
        tasks: [
          { kind: 'disabled', label: 'Task name' },
          {
            kind: 'disabled',
            label: 'Task name',
            onClick: action('task'),
          },
        ],
      },
      {
        title: 'Error state',
        tasks: [
          { kind: 'error', label: 'Task name' },
          {
            kind: 'error',
            label: 'Task name',
            onClick: action('task'),
          },
        ],
      },
    ],
  },
});
