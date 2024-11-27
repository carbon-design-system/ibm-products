/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { Coachmark } from '.';
import {
  CoachmarkBeacon,
  CoachmarkOverlayElement,
  CoachmarkOverlayElements,
} from '..';
import { BEACON_KIND } from './utils/enums';
import { CoachmarkDragbar } from './CoachmarkDragbar';
const blockClass = `${pkg.prefix}--coachmark`;
const componentName = Coachmark.displayName;

const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const childDataTestId = `child-element-${uuidv4()}`;

// values to use

const childrenContent = (
  <CoachmarkOverlayElements
    data-testid={childDataTestId}
    closeButtonLabel="Done"
  >
    <CoachmarkOverlayElement
      title="Hello World"
      description="this is a description test"
    />
  </CoachmarkOverlayElements>
);

const renderCoachmark = ({ ...rest } = {}, children = childrenContent) =>
  render(
    <Coachmark
      theme={'dark'}
      align={'bottom'}
      positionTune={{ x: 0, y: 0 }}
      target={
        <CoachmarkBeacon label="Show information" kind={BEACON_KIND.DEFAULT} />
      }
      {...rest}
    >
      {children}
    </Coachmark>
  );

describe(componentName, () => {
  it('renders a component Coachmark', () => {
    renderCoachmark({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderCoachmark();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    const user = userEvent.setup();
    renderCoachmark({ children: childrenContent });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    screen.getByTestId(childDataTestId);
  });

  it('applies className to the containing node', () => {
    renderCoachmark({
      className,
      'data-testid': dataTestId,
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    renderCoachmark({
      'data-testid': dataTestId,
    });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderCoachmark({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderCoachmark({
      'data-testid': dataTestId,
    });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('renders the closeIconDescription text ', async () => {
    const a11yKeyboardHandler = jest.fn();
    const onClose = jest.fn();
    const closeIconDescription = 'Close';
    render(
      <CoachmarkDragbar
        a11yKeyboardHandler={a11yKeyboardHandler}
        closeIconDescription={closeIconDescription}
        onClose={onClose}
        showCloseButton
      />
    );

    const tooltip = screen.getByText(closeIconDescription);

    expect(tooltip).toBeInTheDocument();
  });

  it('calls the onClose prop when close is clicked', async () => {
    const a11yKeyboardHandler = jest.fn();
    const onClose = jest.fn();
    render(
      <CoachmarkDragbar
        a11yKeyboardHandler={a11yKeyboardHandler}
        onClose={onClose}
      />
    );

    const closeButton = screen.getAllByRole('button')[1];

    expect(closeButton).toBeInTheDocument();
    await waitFor(() => userEvent.click(closeButton));
    expect(onClose).toHaveBeenCalled();
  });

  it('showCloseButton prop works as expected', async () => {
    const a11yKeyboardHandler = jest.fn();

    const { rerender } = render(
      <CoachmarkDragbar
        a11yKeyboardHandler={a11yKeyboardHandler}
        showCloseButton
      />
    );

    expect(screen.queryAllByRole('button').length).toBe(2);

    rerender(
      <CoachmarkDragbar
        a11yKeyboardHandler={a11yKeyboardHandler}
        showCloseButton={false}
      />
    );

    expect(screen.queryAllByRole('button').length).toBe(1);
  });

  it('calls the onDrag prop', async () => {
    const a11yKeyboardHandler = jest.fn();
    const onDrag = jest.fn();

    render(
      <CoachmarkDragbar
        a11yKeyboardHandler={a11yKeyboardHandler}
        showCloseButton={false}
        onDrag={onDrag}
      />
    );

    const dragbar = screen.getByRole('button');

    await waitFor(() => {
      fireEvent.mouseDown(dragbar, { clientX: 0, clientY: 0 });
      fireEvent.mouseMove(dragbar, { clientX: 100, clientY: 100 });
      fireEvent.mouseUp(dragbar);
    });

    expect(onDrag).toHaveBeenCalled();
  });

  it('renders the theme prop', async () => {
    renderCoachmark({
      'data-testid': dataTestId,
      theme: 'dark',
    });

    await expect(screen.getByTestId(dataTestId)).toHaveClass(
      `${pkg.prefix}--coachmark__dark`
    );
  });
});
