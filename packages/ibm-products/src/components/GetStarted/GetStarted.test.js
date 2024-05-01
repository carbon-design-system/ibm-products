/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import uuidv4 from '../../global/js/utils/uuidv4';

import { GetStarted } from '.';

const componentName = GetStarted.displayName;

const dataTestId = uuidv4();

const defaultProps = {
  onClick: () => {},
};

describe(componentName, () => {
  it('renders ', async () => {
    render(<GetStarted {...defaultProps}> </GetStarted>);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<GetStarted {...defaultProps}> </GetStarted>);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const { container } = render(
      <GetStarted className="test-class" {...defaultProps}>
        {' '}
      </GetStarted>
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('adds additional props to the containing node', async () => {
    render(
      <GetStarted data-testid={dataTestId} {...defaultProps}>
        {' '}
      </GetStarted>
    );
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(
      <GetStarted ref={ref} {...defaultProps}>
        {' '}
      </GetStarted>
    );
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(
      <GetStarted data-testid={dataTestId} {...defaultProps}>
        {' '}
      </GetStarted>
    );

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
