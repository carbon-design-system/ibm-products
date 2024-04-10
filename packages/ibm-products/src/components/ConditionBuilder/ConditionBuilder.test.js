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

import { ConditionBuilder } from '.';
import cx from 'classnames';

const blockClass = `${pkg.prefix}--condition-builder`;
const componentName = ConditionBuilder.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component ConditionBuilder', async () => {
    render(<ConditionBuilder inputConfig={{}}> </ConditionBuilder>);
    expect(screen.getByRole('main')).toHaveClass(cx(blockClass));
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ConditionBuilder inputConfig={{}}> </ConditionBuilder>
    );
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  // it(`renders children`, async () => {
  //   render(<ConditionBuilder>{children}</ConditionBuilder>);
  //   screen.getByText(children);
  // });

  it('applies className to the containing node', async () => {
    render(
      <ConditionBuilder className={className} inputConfig={{}}>
        {' '}
      </ConditionBuilder>
    );
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(
      <ConditionBuilder data-testid={dataTestId} inputConfig={{}}>
        {' '}
      </ConditionBuilder>
    );
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(
      <ConditionBuilder ref={ref} inputConfig={{}}>
        {' '}
      </ConditionBuilder>
    );
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(
      <ConditionBuilder data-testid={dataTestId} inputConfig={{}}>
        {' '}
      </ConditionBuilder>
    );

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
