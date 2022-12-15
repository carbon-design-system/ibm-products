/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';

import { pkg, carbon } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';

import { Add16 } from '@carbon/icons-react';

import { ButtonMenu, ButtonMenuItem } from '.';

const blockClass = `${pkg.prefix}--button-menu`;
const componentName = ButtonMenu.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const icon = Add16;
const iconDescription = `Icon ${uuidv4()}`;
const itemText = `Option ${uuidv4()}`;
const label = `Button ${uuidv4()}`;
const ariaLabel = `aria ${label} label`;

const renderMenu = (menuProps = {}, itemProps = {}) => {
  const container = render(
    <ButtonMenu {...{ ariaLabel, label }} {...menuProps}>
      <ButtonMenuItem itemText="Option 1" />
      <ButtonMenuItem {...{ itemText }} {...itemProps} />
      <ButtonMenuItem itemText="Option 3" />
    </ButtonMenu>
  );
  userEvent.click(screen.getByRole('button'));
  return container;
};

describe(componentName, () => {
  it('renders a component ButtonMenu', () => {
    renderMenu();
    expect(screen.getByRole('button', { name: ariaLabel })).toHaveClass(
      blockClass
    );
  });

  xit('has no accessibility violations', async () => {
    const { container } = renderMenu();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    renderMenu();
    screen.getByText(itemText);
  });

  it('applies className to the containing node', () => {
    renderMenu({ className });
    expect(screen.getByRole('button', { name: ariaLabel })).toHaveClass(
      className
    );
  });

  it('renders icon and description', () => {
    renderMenu({ iconDescription, renderIcon: icon });
    const svg = screen
      .getByRole('button', { name: ariaLabel })
      .querySelector('svg');
    expect(svg).toHaveClass(`${carbon.prefix}--btn__icon`);
  });

  it('renders label prop', () => {
    renderMenu({ label });
    screen.getByText(label);
  });

  it('renders size prop', () => {
    renderMenu({ size: 'lg' });
    expect(screen.getByText(label)).toHaveClass(`${carbon.prefix}--btn--lg`);
  });

  it('adds additional props to the containing node', () => {
    renderMenu({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderMenu({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });
});
