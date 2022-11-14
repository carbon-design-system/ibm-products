/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { OptionsTile } from '.';

const blockClass = `${pkg.prefix}--options-tile`;
const componentName = OptionsTile.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

// common props
const props = {
  title: `title-${uuidv4()}`,
  'data-testid': dataTestId,
  children,
};

describe(componentName, () => {
  it('renders a component OptionsTile', () => {
    render(<OptionsTile {...props} />);
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <main>
        <OptionsTile {...props} />
      </main>
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<OptionsTile {...props} />);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<OptionsTile {...props} className={className} />);
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<OptionsTile {...props} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<OptionsTile {...props} ref={ref} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<OptionsTile {...props} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('renders a summary if provided', () => {
    const summary = uuidv4();
    render(<OptionsTile {...props} summary={summary} />);

    expect(screen.getByRole('heading').nextSibling.textContent).toBe(summary);
  });

  it('renders a toggle if props.enabled is set', () => {
    render(<OptionsTile {...props} enabled />);

    // TODO: update to role "switch" for Carbon v11
    expect(screen.getByRole('checkbox'));
  });

  it('renders as static variant if no children are provided', () => {
    const { container } = render(<OptionsTile title="Static variant" />);

    expect(container.querySelector('details')).toBeFalsy();
  });

  it('renders invalid state when passed', () => {
    const invalidText = 'invalid explanation';

    // also pass props.warn and props.locked to verify props.invalid has the highest priority
    render(
      <OptionsTile {...props} invalid invalidText={invalidText} warn locked />
    );

    const summary = screen.getByRole('heading').nextSibling;

    expect(summary.textContent).toBe(invalidText);
    expect(summary).toHaveClass(`${blockClass}__summary--invalid`);
  });

  it('renders warning state when passed', () => {
    const warnText = 'warning explanation';

    // also pass props.locked to verify props.warn has the higher priority
    render(<OptionsTile {...props} warn warnText={warnText} locked />);

    const summary = screen.getByRole('heading').nextSibling;

    expect(summary.textContent).toBe(warnText);
    expect(summary).toHaveClass(`${blockClass}__summary--warn`);
  });

  it('renders locked state when passed', () => {
    const summaryText = 'summary of content';
    const lockedText = 'locked explanation';

    render(
      <OptionsTile
        {...props}
        summary={summaryText}
        locked
        lockedText={lockedText}
      />
    );

    const summary = screen.getByRole('heading').nextSibling;

    expect(summary.textContent).toBe(summaryText);
    expect(summary).toHaveClass(`${blockClass}__summary--locked`);
  });

  it('renders lockedText when locked and no summary is set', () => {
    const lockedText = 'locked explanation';

    render(<OptionsTile {...props} locked lockedText={lockedText} />);

    const summary = screen.getByRole('heading').nextSibling;

    expect(summary.textContent).toBe(lockedText);
  });

  it('hides the summary when props.enabled = false', () => {
    const summaryText = 'hidden summary';
    render(<OptionsTile {...props} summary={summaryText} enabled={false} />);

    const summary = screen.getByRole('heading').nextSibling;
    expect(summary.textContent).toBe(summaryText);
    expect(summary.getAttribute('aria-hidden')).toBe('true');
  });

  it('can be controlled by setting props.open', () => {
    const { container, rerender } = render(
      <OptionsTile {...props} open={false} />
    );
    expect(container.querySelector('details').open).toBe(false);

    rerender(<OptionsTile {...props} open={true} />);
    expect(container.querySelector('details').open).toBe(true);

    rerender(<OptionsTile {...props} open={false} />);
    expect(container.querySelector('details').open).toBe(false);
  });

  it('supports "lg" size', () => {
    render(<OptionsTile {...props} size="lg" />);
    expect(screen.getByTestId(dataTestId)).toHaveClass(`${blockClass}--lg`);
  });

  it('uses props.titleId as the title id and as the aria-labelledby attribute of the toggle', () => {
    const titleId = uuidv4();

    render(<OptionsTile {...props} titleId={titleId} enabled />);

    expect(screen.getByRole('heading').id).toBe(titleId);
    // TODO: update to role "switch" for Carbon v11
    expect(screen.getByRole('checkbox')).toHaveAccessibleName(props.title);
  });

  it('expands and collapses on click', () => {
    const { container } = render(<OptionsTile {...props} />);

    expect(container.querySelector('details').open).toBe(false);
    fireEvent.click(container.querySelector('summary'));
    expect(container.querySelector('details').open).toBe(true);
    fireEvent.click(container.querySelector('summary'));
    expect(container.querySelector('details').open).toBe(false);
  });

  it('emits onToggle', () => {
    const onToggle = jest.fn();
    render(<OptionsTile {...props} enabled onToggle={onToggle} />);

    expect(onToggle).not.toBeCalled();
    // TODO: update to role "switch" for Carbon v11
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toBeCalled();
  });

  it('should call the onChange prop if provided when option tile is opened or closed', () => {
    const onChangeFn = jest.fn();
    const { container } = render(
      <OptionsTile onChange={onChangeFn} {...props} />
    );
    fireEvent.click(container.querySelector('summary'));
    expect(onChangeFn).toHaveBeenCalledTimes(1);
    fireEvent.click(container.querySelector('summary'));
    expect(onChangeFn).toHaveBeenCalledTimes(2);
  });
});
