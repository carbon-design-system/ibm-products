/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { EditSidePanel } from '.';

const { devtoolsAttribute, getDevtoolsId, prefix } = pkg;

const blockClass = `${prefix}--edit-side-panel`;
const componentName = EditSidePanel.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component EditSidePanel', () => {
    render(<EditSidePanel> </EditSidePanel>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<EditSidePanel> </EditSidePanel>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<EditSidePanel>{children}</EditSidePanel>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(<EditSidePanel className={className}> </EditSidePanel>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<EditSidePanel data-testid={dataTestId}> </EditSidePanel>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<EditSidePanel ref={ref}> </EditSidePanel>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<EditSidePanel data-testid={dataTestId}> </EditSidePanel>);

    expect(screen.getByTestId(dataTestId)).toHaveAttribute(
      devtoolsAttribute,
      getDevtoolsId(componentName)
    );
  });
});
