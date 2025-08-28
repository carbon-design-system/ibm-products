/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { act, createRef } from 'react';
import { render, screen, waitFor } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { pkg } from '../../../../settings';
import uuidv4 from '../../../../global/js/utils/uuidv4';

import { Coachmark } from '.';
import { Button } from '@carbon/react';
import { CoachmarkBeacon } from './CoachmarkBeacon';
import userEvent from '@testing-library/user-event';
import { Crossroads } from '@carbon/react/icons';

const blockClass = `${pkg.prefix}--coachmark__next`;
const componentName = Coachmark.displayName;

const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const renderCoachmark = ({ ...rest } = {}) =>
  render(
    <Coachmark {...rest}>
      <CoachmarkBeacon
        id="CoachmarkBtn"
        label="Show information"
      ></CoachmarkBeacon>
      <Coachmark.Content highContrast={true}>
        <Coachmark.Content.Header
          closeIconDescription="Close"
          dragIconDescription="Drag"
        ></Coachmark.Content.Header>
        <Coachmark.Content.Body>
          <h2>Hello World</h2>
          <p>this is a description test</p>
          <Button size="sm">Done</Button>
        </Coachmark.Content.Body>
      </Coachmark.Content>
    </Coachmark>
  );

const renderCoachmarkFloating = ({ ...rest } = {}) =>
  render(
    <Coachmark {...rest}>
      <Button
        id="CoachmarkBtn"
        kind="tertiary"
        size="md"
        label="Show information"
        renderIcon={Crossroads}
      >
        Show information
      </Button>
      <Coachmark.Content highContrast={true}>
        <Coachmark.Content.Header
          closeIconDescription="Close"
          dragIconDescription="Drag"
        ></Coachmark.Content.Header>
        <Coachmark.Content.Body>
          <h2>Hello World</h2>
          <p>this is a description test</p>
          <Button size="sm">Done</Button>
        </Coachmark.Content.Body>
      </Coachmark.Content>
    </Coachmark>
  );

const isCoachmarkVisible = () => {
  const coachmarkContainer = screen.getByTestId(dataTestId);
  const coachmarkButton = coachmarkContainer.getElementsByTagName('button')[0];
  const ariaExpanded = coachmarkButton.getAttribute('aria-expanded');
  return ariaExpanded === 'true';
};

describe(componentName, () => {
  const originalRAF = global.requestAnimationFrame;
  beforeEach(() => {
    global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    global.requestAnimationFrame = originalRAF;
  });
  it('renders a component Coachmark', () => {
    renderCoachmark({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
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
    expect(screen.getByTestId(dataTestId)).toBeTruthy();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = createRef();
    renderCoachmark({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderCoachmark();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderCoachmark({
      'data-testid': dataTestId,
    });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('Check coachmark can be open by default', () => {
    renderCoachmark({
      'data-testid': dataTestId,
      open: true,
    });
    expect(isCoachmarkVisible()).toBeTruthy();
  });

  it('renders the closeIconDescription text ', async () => {
    renderCoachmark({ open: true });
    const closeIconDescription = 'Close';
    const tooltip = screen.getByText(closeIconDescription);
    expect(tooltip).toBeInTheDocument();
  });

  it('calls the onClose prop when close is clicked', async () => {
    const onCloseMock = jest.fn();
    renderCoachmark({ open: true, onClose: onCloseMock });
    const closeIconDescription = 'Close';
    const tooltip = screen.getByText(closeIconDescription);
    expect(tooltip).toBeInTheDocument();
    const closeButton = screen.getByRole('button', {
      name: closeIconDescription,
    });
    expect(closeButton).toBeInTheDocument();
    await act(() => userEvent.click(closeButton));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('changes the beacon position while using position prop ', async () => {
    renderCoachmark({
      'data-testid': dataTestId,
      open: true,
      position: { x: 151, y: 155 },
    });
    const element = screen.getByTestId(dataTestId);
    expect(element).toBeTruthy();
    await waitFor(() => {
      expect(element.style.transform).toBe('translate(151px, 155px)');
    });
  });

  it('renders the Drag Icon and DragIconDescription in floating variant', async () => {
    renderCoachmarkFloating({
      'data-testid': dataTestId,
      open: true,
      floating: true,
    });
    expect(isCoachmarkVisible()).toBeTruthy();
    const dragIconDescription = 'Drag';
    const dragTooltip = screen.getByText(dragIconDescription);
    expect(dragTooltip).toBeInTheDocument();
    const dragButton = screen.getByRole('button', {
      name: dragIconDescription,
    });
    expect(dragButton).toBeInTheDocument();
  });
});
