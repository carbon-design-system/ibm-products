/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { Button } from '@carbon/react';
import { Edit } from '@carbon/react/icons';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { BigNumbers } from '.';
import { BigNumbersSize } from './utils';

const blockClass = `${pkg.prefix}--big-numbers`;
const skeletonBlockClass = `${pkg.prefix}--big-numbers-skeleton`;
const componentName = BigNumbers.displayName;

// values to use
const iconButtonClassName = `iconButtonClass-${uuidv4()}`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const renderBigNumbers = ({ ...rest } = {}) =>
  render(
    <BigNumbers
      label="Label"
      value={12345}
      total={55555}
      percentage={false}
      size={BigNumbersSize.Default}
      forceShowTotal={false}
      trending={false}
      truncate={true}
      locale="en-US"
      {...rest}
    />
  );

describe(componentName, () => {
  it('renders a component BigNumbers', async () => {
    renderBigNumbers({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = renderBigNumbers();
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    renderBigNumbers({ className, 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    renderBigNumbers({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    renderBigNumbers({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('forwards a ref to an appropriate node when loading', async () => {
    const ref = React.createRef();
    renderBigNumbers({ loading: true, ref });
    expect(ref.current).toHaveClass(skeletonBlockClass);
  });

  it('renders an icon button', async () => {
    renderBigNumbers({
      iconButton: (
        <Button
          className={iconButtonClassName}
          renderIcon={Edit}
          iconDescription="Icon Description"
          kind="ghost"
          size={'sm'}
          hasIconOnly
          onClick={() => console.log('clicked icon')}
          data-testid={dataTestId}
        />
      ),
    });
    expect(screen.getByTestId(dataTestId)).toHaveClass(iconButtonClassName);
  });

  it('should render en dash when `value` is `null`', async () => {
    renderBigNumbers({ value: null });
    expect(screen.queryByText('–')).toBeVisible();
  });

  it('should render a large value with no decimal if even', async () => {
    renderBigNumbers({ value: 1000000 });
    expect(screen.queryByText('1M')).toBeVisible();
  });

  it('should render a large value with a single decimal by default if rounded', async () => {
    renderBigNumbers({ value: 1234567 });
    expect(screen.queryByText('1.2M')).toBeVisible();
  });

  it('should render a large value with a decimal places set by fractionDigits if rounded', async () => {
    renderBigNumbers({ value: 123456789, fractionDigits: 3 });
    expect(screen.queryByText('123.457M')).toBeVisible();
  });

  it('should not display the total if the total is less than the value', async () => {
    renderBigNumbers({ value: 1234, total: 678 });
    expect(screen.queryByText('678')).toBeNull();
  });

  it('should display the total if the total is less than the value if forceShowTotal is true', async () => {
    renderBigNumbers({ forceShowTotal: true, value: 1234, total: 678 });
    expect(screen.getByLabelText('Total')).toBeVisible();
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderBigNumbers({ 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('adds the Devtools attribute to the containing node when loading', async () => {
    renderBigNumbers({ loading: true, 'data-testid': dataTestId });
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
