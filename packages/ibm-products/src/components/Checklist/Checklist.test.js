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

import { Checklist } from '.';

const blockClass = `${pkg.prefix}--checklist`;
const componentName = Checklist.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component Checklist', () => {
    render(<Checklist> </Checklist>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Checklist> </Checklist>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<Checklist>{children}</Checklist>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<Checklist className={className}> </Checklist>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<Checklist data-testid={dataTestId}> </Checklist>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<Checklist ref={ref}> </Checklist>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<Checklist data-testid={dataTestId}> </Checklist>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
