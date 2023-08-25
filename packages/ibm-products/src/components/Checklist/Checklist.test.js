/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { Checklist } from '.';

const blockClass = `${pkg.prefix}--checklist`;
const componentName = Checklist.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
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
// calculate some values based on taskLists
const allTasks = taskLists.map((obj) => obj.tasks).flat();
const numTasks = allTasks.length;
const numTasksCompleted = allTasks.filter(
  (task) => task.kind === 'checked'
).length;
// std properties to use
const chartValue = numTasksCompleted / numTasks;
const chartLabel = `${parseInt(chartValue * 100)}% complete`;
const title = 'Get started checklist';
const viewAllLabel = `View all (${numTasks})`;

// render a Checklist with default values and any other required props
const renderComponent = ({ ...rest } = {}) =>
  render(<Checklist {...{ taskLists, ...rest }} />);

describe(componentName, () => {
  it('renders a component Checklist', () => {
    renderComponent();
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('renders a title', () => {
    renderComponent({ title });
    screen.getByText(title);
  });

  it('renders the chart and chart label if `chartLabel` and `chartValue` are both defined', () => {
    renderComponent({ chartLabel, chartValue });
    expect(screen.getByRole('img')).toHaveClass(`${blockClass}__chart`);
    screen.getByText(chartLabel);
  });

  it('renders a toggle', () => {
    renderComponent({ showToggle: true, title });
    expect(screen.getByRole('switch')).toBeDefined();
  });

  it('renders a "view all" button', () => {
    renderComponent({ viewAllLabel, title });
    screen.getByText(viewAllLabel);
  });

  it.skip('has no accessibility violations', async () => {
    const { container } = renderComponent({});
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    renderComponent({ className });
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    renderComponent({ ['data-testid']: dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderComponent({ ['data-testid']: dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
