/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { Nav, NavItem, NavList } from '.';

const blockClass = `${pkg.prefix}--nav`;
const componentName = Nav.displayName;
const navListBlockClass = `${pkg.prefix}--nav-list`;

const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const navLabel = `label (${uuidv4()})`;

const renderComponent = ({ ...rest } = {}) =>
  render(
    <Nav className={className} heading={navLabel} label={navLabel} {...rest}>
      <NavList title="Nav list 1">
        <NavItem href="#1-1">Nav item 1-1</NavItem>
      </NavList>
      <NavList title="Nav list 2">
        <NavItem href="#2-1">Nav item 2-1</NavItem>
      </NavList>
    </Nav>
  );

describe(componentName, () => {
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

  it('renders children', async () => {
    renderComponent();
    const foundText = screen.getAllByText(`Nav item 1-1`);
    expect(foundText.length).toBeGreaterThanOrEqual(1);
  });

  it('applies className to the containing node', async () => {
    const { container } = renderComponent({ className });
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    renderComponent({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
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

  it('renders heading', async () => {
    const headingText = `heading (${uuidv4()})`;
    renderComponent({ heading: headingText });
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });

  it('adds aria-label to the component', async () => {
    renderComponent();
    expect(screen.getByRole('navigation')).toHaveAccessibleName(navLabel);
    expect(screen.getByText(navLabel)).toBeInTheDocument();
  });

  it('expands NavList when clicked', async () => {
    renderComponent();

    expect(document.querySelector(`.${navListBlockClass}`)).not.toHaveClass(
      `${pkg.prefix}--nav-item--expanded`
    );

    const menu = document.querySelector(`.${navListBlockClass}`);
    fireEvent.click(menu);

    expect(document.querySelector(`.${navListBlockClass}`)).toHaveClass(
      `${pkg.prefix}--nav-item--expanded`
    );
  });
});
