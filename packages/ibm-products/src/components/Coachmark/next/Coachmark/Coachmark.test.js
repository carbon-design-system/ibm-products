/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { pkg } from '../../../../settings';
import uuidv4 from '../../../../global/js/utils/uuidv4';

import { Coachmark } from '.';
import { Button } from '@carbon/react';
import { CoachmarkBeacon } from './CoachmarkBeacon';
import CoachmarkContent from './CoachmarkContent';

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
        <CoachmarkContent.Header></CoachmarkContent.Header>
        <CoachmarkContent.Body>
          <h2>Hello World</h2>
          <p>this is a description test</p>
          <Button size="sm">Done</Button>
        </CoachmarkContent.Body>
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
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
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
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = createRef();
    renderCoachmark({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });
});
