/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { BEACON_KIND } from '../Coachmark/utils/enums';
import { Coachmark, CoachmarkBeacon, CoachmarkOverlayElement } from '..';
import { CoachmarkOverlayElements } from '.';

const blockClass = `${pkg.prefix}--coachmark-overlay-elements`;
const componentName = CoachmarkOverlayElements.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const dataTestId = uuidv4();
const className = `class-${uuidv4()}`;

const childrenContent = (
  <CoachmarkOverlayElement
    title="Hello World"
    description="this is a description test"
  />
);

const renderCoachmarkWithOverlayElements = (
  { ...rest } = {},
  children = childrenContent
) =>
  render(
    <Coachmark
      theme={'dark'}
      align={'bottom'}
      positionTune={{ x: 0, y: 0 }}
      target={
        <CoachmarkBeacon label="Show information" kind={BEACON_KIND.DEFAULT} />
      }
    >
      <CoachmarkOverlayElements {...rest}>{children}</CoachmarkOverlayElements>
    </Coachmark>
  );

describe(componentName, () => {
  it('renders a component CoachmarkOverlayElements', async () => {
    const user = userEvent.setup();
    renderCoachmarkWithOverlayElements({ 'data-testid': dataTestId });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const user = userEvent.setup();
    const { container } = renderCoachmarkWithOverlayElements({
      'data-testid': dataTestId,
    });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    screen.getByTestId(dataTestId);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    const user = userEvent.setup();
    renderCoachmarkWithOverlayElements({
      'data-testid': dataTestId,
      children,
    });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    screen.getByTestId(dataTestId);
  });

  it('applies className to the containing node', async () => {
    const user = userEvent.setup();
    renderCoachmarkWithOverlayElements({
      'data-testid': dataTestId,
      className,
    });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    const user = userEvent.setup();
    const tmpTestID = `coachmarkOverlayElement-${uuidv4()}`;
    renderCoachmarkWithOverlayElements({
      'data-testid': tmpTestID,
      className,
    });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    screen.getByTestId(tmpTestID);
  });

  it('forwards a ref to an appropriate node', async () => {
    const user = userEvent.setup();
    const ref = React.createRef();
    renderCoachmarkWithOverlayElements({
      'data-testid': dataTestId,
      ref,
    });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    const user = userEvent.setup();
    renderCoachmarkWithOverlayElements({
      'data-testid': dataTestId,
    });
    const beaconOrButton = screen.getByRole('button', {
      name: 'Show information',
    });
    await act(() => user.click(beaconOrButton));

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
