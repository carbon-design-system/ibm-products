/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonMenuItem } from '.';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--button-menu`;

it('renders component to screen', () => {
  render(<ButtonMenuItem />);
  expect(screen.getByRole('button')).toHaveClass(`${blockClass}__item-button`);
});

it('renders danger menu item', () => {
  render(<ButtonMenuItem kind="danger" />);
  expect(screen.getByRole('button')).toHaveClass(`${blockClass}__item--danger`);
});
