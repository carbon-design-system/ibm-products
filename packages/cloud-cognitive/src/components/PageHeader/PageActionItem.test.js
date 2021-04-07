/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { PageActionItem } from '.';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg, carbon } from '../../settings';

const { click } = fireEvent;

const blockClass = `${pkg.prefix}--page-action-item`;
const componentName = PageActionItem.displayName;

const className = `class-${uuidv4()}`;
const content = `This is example content: ${uuidv4()}`;
const dataTestId = uuidv4();

describe(PageActionItem.displayName, () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<PageActionItem>{content}</PageActionItem>);

    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('Renders a page action item which is a Carbon Button that can be clicked', () => {
    const myOnClick = jest.fn();

    // not enough room so should see an overflow.
    render(<PageActionItem onClick={myOnClick}>{content}</PageActionItem>);

    const btn = screen.getByText(content);
    expect(btn).toHaveClass(`${carbon.prefix}--btn`);

    click(btn);
    expect(myOnClick).toBeCalled();
  });

  it('adds user classes', () => {
    render(<PageActionItem className={className}>{content}</PageActionItem>);
    const btn = screen.getByText(content);
    expect(btn).toHaveClass(blockClass);
    expect(btn).toHaveClass(className);
  });

  it('ignores user size and type settings', () => {
    render(
      <PageActionItem size="lg" type="submit">
        {content}
      </PageActionItem>
    );

    const btn = screen.getByText(content);
    expect(btn).not.toHaveClass(`${carbon.prefix}--btn--lg`);
    expect(btn).toHaveClass(`${carbon.prefix}--btn--field`);
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <PageActionItem data-testid={dataTestId}>{content}</PageActionItem>
    );

    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to the block element', () => {
    const ref = React.createRef();
    render(<PageActionItem ref={ref}>{content}</PageActionItem>);
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });
});
