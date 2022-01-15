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

import { CancelableTextEdit } from '.';

const blockClass = `${pkg.prefix}--cancelable-text-edit`;
const componentName = CancelableTextEdit.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const labelText = 'Test label';
const saveLabel = 'Save label';
const revertLabel = 'Revert label';

const requiredProps = {
  id: dataTestId,
  labelText,
  revertLabel,
  saveLabel,
  onChange: () => {},
};

describe(componentName, () => {
  it('renders a component CancelableTextEdit', () => {
    render(<CancelableTextEdit {...requiredProps} />);
    expect(screen.getByRole('textbox')).toHaveClass(`${blockClass}__input`);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<CancelableTextEdit {...requiredProps} />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(
      <CancelableTextEdit className={className} {...requiredProps} />
    );

    expect(container.childNodes[0]).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<CancelableTextEdit data-testid={dataTestId} {...requiredProps} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<CancelableTextEdit ref={ref} {...requiredProps} />);
    expect(ref.current).toHaveClass(`${blockClass}__input`);
  });

  it('adds the Devtools attribute to an appropriate node', () => {
    render(<CancelableTextEdit data-testid={dataTestId} {...requiredProps} />);

    expect(screen.getByTestId(dataTestId)).toHaveClass(`${blockClass}__input`);
  });
});
