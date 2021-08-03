/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import { ProductiveCard } from '.';

const { name } = ProductiveCard;

describe(name, () => {
  it('renders', () => {
    render(<ProductiveCard />);
  });

  it('applies className to the containing node', () => {
    const { container } = render(<ProductiveCard className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('adds additional properties to the containing node', () => {
    render(<ProductiveCard data-test-id="test-id" />);
    screen.getByTestId('test-id');
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<ProductiveCard ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
