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

import { Guidebanner, GuidebannerElement } from '.';

const blockClass = `${pkg.prefix}--guidebanner`;
const componentName = Guidebanner.displayName;

// values to use
// const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const defaultProps = {
  title: 'Guidebanner title',
};
const guidebannerElementDefaultProps = {
  description: 'GuidebannerElement description',
};

const renderComponent = (customProps = {}) => {
  // The Guidebanner must have at least one GuidebannerElement as a child.
  return render(
    <Guidebanner {...defaultProps} {...customProps}>
      <GuidebannerElement description="GuidebannerElement description"></GuidebannerElement>
    </Guidebanner>
  );
};

describe(componentName, () => {
  // The Carousel component uses IntersectionObserver.
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: () => null,
      unobserve: () => null,
    }));
  });

  it('renders a component Guidebanner', () => {
    const { container } = renderComponent();
    const guidebanner = container.getElementsByClassName(blockClass);

    expect(guidebanner.length).toBe(1);
  });

  it.skip('has no accessibility violations', async () => {
    const { container } = renderComponent();

    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    renderComponent();

    screen.getByText(guidebannerElementDefaultProps.description);
  });

  it('applies className to the containing node', () => {
    const { container } = renderComponent({ className });
    const guidebanner = container.getElementsByClassName(blockClass)[0];

    expect(guidebanner).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });

    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });

    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});