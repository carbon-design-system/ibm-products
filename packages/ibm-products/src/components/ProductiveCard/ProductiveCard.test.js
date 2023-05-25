/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import { ProductiveCard } from '.';

const componentName = ProductiveCard.displayName;

describe(componentName, () => {
  it('renders', () => {
    render(<ProductiveCard />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ProductiveCard />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<ProductiveCard className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  const dataTestId = 'data-testid';

  it('adds additional properties to the containing node', () => {
    render(<ProductiveCard data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<ProductiveCard ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<ProductiveCard data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
