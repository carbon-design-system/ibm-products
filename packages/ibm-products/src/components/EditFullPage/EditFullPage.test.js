/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { EditFullPage } from '.';

const blockClass = `${pkg.prefix}--edit-full-page`;
const componentName = EditFullPage.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component EditFullPage', async () => {
    await render(<EditFullPage> </EditFullPage>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = await render(<EditFullPage> </EditFullPage>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    await render(<EditFullPage>{children}</EditFullPage>);
    screen.getByText(children);
  });

  it('applies className to the containing node', async () => {
    await render(<EditFullPage className={className}> </EditFullPage>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    await render(<EditFullPage data-testid={dataTestId}> </EditFullPage>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    await render(<EditFullPage ref={ref}> </EditFullPage>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    await render(<EditFullPage data-testid={dataTestId}> </EditFullPage>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
