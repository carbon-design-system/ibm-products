/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { Nav } from '.';
import { NavList } from '.';
import { NavItem } from '.';

const blockClass = `${pkg.prefix}--nav`;
const componentName = Nav.displayName;

// values to use
// const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const labelText = `label (${uuidv4()})`;

const renderComponent = ({ ...rest } = {}) =>
  render(<Nav {...rest} label={labelText} />);

// Skip for now
xdescribe(componentName, () => {
  it('renders a component Nav', async () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  // it(`renders children`, async () => {
  //   render(<Nav label="label">{children}</Nav>);
  //   screen.getByText(children);
  // });

  it('applies className to the containing node', async () => {
    const { container } = renderComponent({ className });
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    renderComponent({ ref: ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it(`renders heading`, async () => {
    const headingText = `heading (${uuidv4()})`;
    renderComponent({ heading: headingText });
    screen.getByText(headingText);
  });

  it('adds aria-label to the component', async () => {
    renderComponent();
    expect(screen.getByRole('navigation')).toHaveAccessibleName(labelText);
    screen.getByLabelText(labelText);
  });

  describe(NavList.displayName, () => {});
  describe(NavItem.displayName, () => {});
});
