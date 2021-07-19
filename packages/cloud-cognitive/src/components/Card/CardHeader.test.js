/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { CardHeader } from '.';
import { pkg } from '../../settings';

const { name } = CardHeader;
const blockClass = `${pkg.prefix}--card`;

describe(name, () => {
  it('renders', () => {
    render(<CardHeader />);
  });

  it('renders a caption', () => {
    const { getByText } = render(<CardHeader caption="caption" />);
    expect(getByText('caption')).toBeVisible();
  });

  it('renders a label', () => {
    const { getByText } = render(<CardHeader label="label" />);
    expect(getByText('label')).toBeVisible();
  });

  it('renders a title', () => {
    const { getByText } = render(<CardHeader title="title" />);
    expect(getByText('title')).toBeVisible();
  });

  it('renders a large title', () => {
    const props = {
      title: 'large title',
      titleSize: 'large',
    };
    const { container } = render(<CardHeader {...props} />);
    expect(container.querySelector(`.${blockClass}__title-lg`)).toBeVisible();
  });

  it('renders actions', () => {
    const props = {
      hasActions: true,
      actions: <p key={1}>action 1</p>,
    };
    const { getByText } = render(<CardHeader {...props} />);
    expect(getByText('action 1')).toBeVisible();
  });
});
