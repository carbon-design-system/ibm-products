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

import { InlineEdit } from '.';

const blockClass = `${pkg.prefix}--inline-edit`;
const componentName = InlineEdit.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const editDescription = 'Edit';
const id = dataTestId;
const labelText = 'Inline edit';
const cancelDescription = 'Revert';
const saveDescription = 'Save';
const value = 'hello; world';
const requiredProps = { editDescription, cancelDescription, saveDescription };

describe(componentName, () => {
  it('renders a component InlineEdit', () => {
    const { container } = render(<InlineEdit {...requiredProps} />);
    expect(container.firstChild).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <InlineEdit
        {...{
          editDescription,
          id,
          labelText,
          cancelDescription,
          saveDescription,
          value,
        }}
      />
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(
      <InlineEdit className={className} {...requiredProps} />
    );
    expect(container.firstChild).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<InlineEdit data-testid={dataTestId} {...requiredProps} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<InlineEdit ref={ref} {...requiredProps} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<InlineEdit data-testid={dataTestId} {...requiredProps} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
