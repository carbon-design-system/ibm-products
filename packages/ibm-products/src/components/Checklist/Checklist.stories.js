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

// List of tasks and their headers
const taskListGetStarted = [
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

const taskListShortText = [
  {
    tasks: [
      {
        kind: 'checked',
        label: 'Register for Sandbox trial',
      },
    ],
  },
  {
    title: 'Callback functions defined for each task',
    tasks: [
      {
        kind: 'unchecked',
        label: 'unchecked, action?',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'indeterminate',
        label: 'indeterminate',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'checked',
        label: 'checked',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'disabled',
        label: 'disabled',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
      {
        kind: 'error',
        label: 'error',
        onClick: (task) => {
          console.log('clicked task', task);
        },
      },
    ],
  },
  {
    title: 'No callback functions defined for any task',
    tasks: [
      {
        kind: 'unchecked',
        label: 'unchecked',
      },
      {
        kind: 'indeterminate',
        label: 'indeterminate',
      },
      {
        kind: 'checked',
        label: 'checked',
      },
      {
        kind: 'disabled',
        label: 'disabled',
      },
      {
        kind: 'error',
        label: 'error',
      },
    ],
  },
];

// const taskListLongText = [
//   {
//     tasks: [
//       {
//         kind: 'checked',
//         label:
//           'Register for Sandbox trial,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//     ],
//   },
//   {
//     title:
//       'Callback functions defined for each task, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//     tasks: [
//       {
//         kind: 'unchecked',
//         label:
//           'unchecked, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'indeterminate',
//         label:
//           'indeterminate, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'checked',
//         label:
//           'checked, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'disabled',
//         label:
//           'disabled, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'error',
//         label:
//           'error, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//     ],
//   },
//   {
//     title:
//       'No callback functions defined for any task, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//     tasks: [
//       {
//         kind: 'checked',
//         label:
//           'unchecked, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//       {
//         kind: 'indeterminate',
//         label:
//           'indeterminate, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//       {
//         kind: 'checked',
//         label:
//           'checked, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//       {
//         kind: 'disabled',
//         label:
//           'disabled, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//       {
//         kind: 'error',
//         label:
//           'error, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//     ],
//   },
// ];

// const taskListIntermediateText = [
//   {
//     tasks: [
//       {
//         kind: 'checked',
//         label: 'Register for Sandbox trial',
//       },
//     ],
//   },
//   {
//     title: 'Callback functions defined for each task',
//     tasks: [
//       {
//         kind: 'unchecked',
//         label:
//           'unchecked, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'indeterminate',
//         label: 'indeterminate',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'checked',
//         label:
//           'checked, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'disabled',
//         label: 'disabled',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//       {
//         kind: 'error',
//         label:
//           'error, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//         onClick: (task) => {
//           console.log('clicked task', task);
//         },
//       },
//     ],
//   },
//   {
//     title:
//       'No callback functions defined for any task, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//     tasks: [
//       {
//         kind: 'checked',
//         label: 'unchecked',
//       },
//       {
//         kind: 'indeterminate',
//         label:
//           'indeterminate, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//       {
//         kind: 'checked',
//         label: 'checked',
//       },
//       {
//         kind: 'disabled',
//         label:
//           'disabled, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//       },
//       {
//         kind: 'error',
//         label: 'error',
//       },
//     ],
//   },
// ];

// The flattened list of tasks[] from taskLists
const allTasks = taskListShortText.map((obj) => obj.tasks).flat();
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
    className: '',
    // onToggle: () => {},
    onClickViewAll: () => {},
    // open: false,
    // chartValue: chartValue,
    chartValue: null,
    chartLabel: `${parseInt(chartValue * 100)}% complete`,
    taskLists: taskListGetStarted,
    // theme: 'dark',
    title: 'Get started checklist',
    viewAllLabel: `View all (${numTasks})`,
  },
});

// export const shortText = prepareStory(Template, {
//   args: {
//     // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Checklist-args
//     className: '',
//     onToggle: (isOpen) => {
//       console.log('toggled, open =', isOpen);
//     },
//     onClickViewAll: () => {
//       console.log('clicked "view all" button');
//     },
//     open: true,
//     chartValue: chartValue,
//     chartLabel: `${parseInt(chartValue * 100)}% complete`,
//     taskLists: taskListShortText,
//     // theme: 'dark',
//     title: 'Component title',
//     viewAllLabel: `View all (${numTasks})`,
//   },
// });

// export const intermediateText = prepareStory(Template, {
//   args: {
//     // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Checklist-args
//     className: '',
//     // onToggle: () => {},
//     // onClickViewAll: () => {},
//     chartValue: chartValue,
//     chartLabel: `${parseInt(chartValue * 100)}% complete`,
//     taskLists: taskListIntermediateText,
//     // theme: 'dark',
//     title: 'Component title',
//     viewAllLabel: `View all (${numTasks})`,
//   },
// });

// export const longText = prepareStory(Template, {
//   args: {
//     // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#Checklist-args
//     className: '',
//     // onToggle: () => {},
//     // onClickViewAll: () => {},
//     chartValue: chartValue,
//     chartLabel: `${parseInt(
//       chartValue * 100
//     )}% complete, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!`,
//     taskLists: taskListLongText,
//     // theme: 'dark',
//     title:
//       'Component title, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!',
//     viewAllLabel: `View all (${numTasks}), Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, impedit accusantium. Eaque, aliquam nostrum. Veritatis consequatur harum veniam, laboriosam modi omnis enim facilis deleniti repellat quam fugit quisquam reprehenderit similique!`,
//   },
// });
