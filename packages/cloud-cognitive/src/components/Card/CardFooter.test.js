/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { CardFooter } from '.';
import { carbon } from '../../settings';

const { name } = CardFooter;

describe(name, () => {
  it('renders', () => {
    render(<CardFooter />);
  });

  it('renders actions', () => {
    const props = {
      hasActions: true,
      actions: <p>action 1</p>,
    };
    const { getByText } = render(<CardFooter {...props} />);
    expect(getByText('action 1')).toBeVisible();
  });

  it('renders primary button', () => {
    const props = {
      hasButton: true,
      primaryButtonText: 'primary button',
    };
    const { getByText } = render(<CardFooter {...props} />);
    expect(getByText(props.primaryButtonText)).toBeVisible();
  });

  it('renders secondary button', () => {
    const props = {
      hasButton: true,
      secondaryButtonText: 'primary button',
    };
    const { getByText } = render(<CardFooter {...props} />);
    expect(getByText(props.secondaryButtonText)).toBeVisible();
  });

  it('renders productive', () => {
    const props = {
      hasButton: true,
      primaryButtonText: 'primary button',
      productive: true,
    };
    const { getByText, container } = render(<CardFooter {...props} />);
    expect(getByText(props.primaryButtonText)).toBeVisible();
    expect(
      container.querySelector(`.${carbon.prefix}--btn--ghost`)
    ).toBeVisible();
  });
});
