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

import { Add } from '@carbon/react/icons';
import { IconButtonBar, IconButtonBarItem } from '.';

const blockClass = `${pkg.prefix}--icon-button-bar`;
const componentName = IconButtonBar.displayName;

// values to use
const children = (
  <IconButtonBarItem label="Add">
    <Add size={16} />
  </IconButtonBarItem>
);
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component IconButtonBar', async () => {
    render(<IconButtonBar>{children}</IconButtonBar>);
    expect(screen.getByRole('toolbar')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<IconButtonBar>{children}</IconButtonBar>);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    render(<IconButtonBar>{children}</IconButtonBar>);
    screen.getByRole('button');
  });

  it('applies className to the containing node', async () => {
    render(<IconButtonBar className={className}>{children}</IconButtonBar>);
    expect(screen.getByRole('toolbar')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(<IconButtonBar data-testid={dataTestId}>{children}</IconButtonBar>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<IconButtonBar ref={ref}>{children}</IconButtonBar>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(<IconButtonBar data-testid={dataTestId}>{children}</IconButtonBar>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
