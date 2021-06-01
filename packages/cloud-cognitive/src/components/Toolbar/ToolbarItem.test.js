/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ToolbarItem } from '.';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg, carbon } from '../../settings';

const { click } = fireEvent;

const blockClass = `${pkg.prefix}--action-bar-item`;
const componentName = ToolbarItem.displayName;

const className = `class-${uuidv4()}`;
const content = `This is example content: ${uuidv4()}`;
const dataTestId = uuidv4();

describe(ToolbarItem.displayName, () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<ToolbarItem>{content}</ToolbarItem>);

    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('Renders a page action item which is a Carbon Button that can be clicked', () => {
    const myOnClick = jest.fn();

    // not enough room so should see an overflow.
    render(<ToolbarItem onClick={myOnClick}>{content}</ToolbarItem>);

    const btn = screen.getByText(content);
    expect(btn).toHaveClass(`${carbon.prefix}--btn`);

    click(btn);
    expect(myOnClick).toBeCalled();
  });

  it('adds user classes', () => {
    render(<ToolbarItem className={className}>{content}</ToolbarItem>);
    const btn = screen.getByText(content);
    expect(btn).toHaveClass(blockClass);
    expect(btn).toHaveClass(className);
  });

  it('ignores user size and type settings', () => {
    render(
      <ToolbarItem size="lg" type="submit">
        {content}
      </ToolbarItem>
    );

    const btn = screen.getByText(content);
    expect(btn).not.toHaveClass(`${carbon.prefix}--btn--lg`);
    expect(btn).toHaveClass(`${carbon.prefix}--btn--field`);
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <ToolbarItem data-testid={dataTestId}>{content}</ToolbarItem>
    );

    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to the block element', () => {
    const ref = React.createRef();
    render(<ToolbarItem ref={ref}>{content}</ToolbarItem>);
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });
});
