/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionBarItem } from '.';
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';

const { click } = fireEvent;

const carbonPrefix = 'cds';
const blockClass = `${pkg.prefix}--action-bar-item`;
const componentName = ActionBarItem.displayName;

const className = `class-${uuidv4()}`;
const content = `This is example content: ${uuidv4()}`;
const dataTestId = uuidv4();
const testLabel = 'Test label';

describe(ActionBarItem.displayName, () => {
  it.skip('has no accessibility violations', async () => {
    const { container } = render(
      <main>
        <ActionBarItem label={testLabel}>{content}</ActionBarItem>
      </main>
    );
    userEvent.tab();
    expect(screen.getByText(content)).toHaveFocus();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('Renders a page action item which is a Carbon Button that can be clicked', () => {
    const myOnClick = jest.fn();

    // not enough room so should see an overflow.
    render(
      <ActionBarItem label={testLabel} onClick={myOnClick}>
        {content}
      </ActionBarItem>
    );

    const btn = screen.getByText(content);
    expect(btn).toHaveClass(`${carbonPrefix}--btn`);

    click(btn);
    expect(myOnClick).toBeCalled();
  });

  it('adds user classes', () => {
    render(
      <ActionBarItem label={testLabel} className={className}>
        {content}
      </ActionBarItem>
    );
    const btn = screen.getByText(content);
    expect(btn).toHaveClass(blockClass);
    expect(btn).toHaveClass(className);
  });

  it('ignores user size and type settings', () => {
    render(
      <ActionBarItem label={testLabel} size="lg" type="submit">
        {content}
      </ActionBarItem>
    );

    const btn = screen.getByText(content);
    expect(btn).not.toHaveClass(`${carbonPrefix}--btn--lg`);
    expect(btn).toHaveClass(`${carbonPrefix}--btn--md`);
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <ActionBarItem label={testLabel} data-testid={dataTestId}>
        {content}
      </ActionBarItem>
    );

    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to the block element', () => {
    const ref = React.createRef();
    render(
      <ActionBarItem label={testLabel} ref={ref}>
        {content}
      </ActionBarItem>
    );
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });
});
