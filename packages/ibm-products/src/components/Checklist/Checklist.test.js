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
    title: 'List 1 title',
    tasks: [
      {
        kind: 'checked',
        label: 'Checked task with callback',
        onClick: () => {},
      },
      {
        kind: 'checked',
        label: 'Checked task without callback',
      },
    ],
  },
  {
    title: 'List 2 title',
    tasks: [
      {
        kind: 'unchecked',
        label: 'Unchecked task with callback',
        onClick: () => {},
      },
      {
        kind: 'unchecked',
        label: 'Unchecked task without callback',
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
    // <aside> elements have an *implicit* role, and do not req. an *assigned* role.
    renderComponent();
    expect(document.querySelector('aside')).toHaveClass(blockClass);
  });

  it('renders a title', () => {
    renderComponent({ title });
    screen.getByText(title);
  });

  it('does not render the chart and chart label if `chartLabel` is defined and `chartValue` is not', () => {
    renderComponent({ chartLabel });
    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.queryByText(chartLabel)).toBeNull();
  });

  it('does not render the chart and chart label if `chartValue` is defined and `chartLabel` is not', () => {
    renderComponent({ chartValue });
    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.queryByText(chartLabel)).toBeNull();
  });

  it('renders the chart and chart label if `chartLabel` and `chartValue` are both defined', () => {
    renderComponent({ chartLabel, chartValue });
    expect(screen.getByRole('img')).toHaveClass(`${blockClass}__chart`);
    screen.getByText(chartLabel);
  });

  it('renders a toggle', () => {
    renderComponent({ showToggle: true, title });
    expect(screen.getByLabelText('Checklist toggle')).toBeDefined();
  });

  it('renders a "view all" button', () => {
    renderComponent({ viewAllLabel });
    screen.getByText(viewAllLabel);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    renderComponent({ className });
    expect(document.querySelector('aside')).toHaveClass(className);
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
