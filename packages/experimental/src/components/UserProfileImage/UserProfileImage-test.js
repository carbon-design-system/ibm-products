/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestScheduler } from 'jest';
import { expPrefix } from '../../global/js/settings';

import React from 'react';

import { UserProfileImage } from '.';

const {
  defaultProps: { backgroundColor, icon, size },
  name,
} = UserProfileImage;

jest.setTimeout(15000);

describe(name, () => {
  test('should return appropriately size circle based on size prop', () => {
    const { container } = render(<UserProfileImage size="x-large" />);
    const element = container.querySelector(
      `.${expPrefix}-user-profile-avatar`
    );
    const hasSizeClass = element.className.includes('x-large');
    expect(hasSizeClass).toBeTruthy();
  });

  test('should return an icon for the avatar image', () => {
    const { container } = render(<UserProfileImage icon="user" />);
    const renderedSVG = container.querySelector('svg');
    expect(renderedSVG).toBeTruthy();
  });

  test('should return a circle with background color', () => {
    const { container } = render(
      <UserProfileImage backgroundColor="#0f62fe" />
    );
    const element = container.querySelector(
      `.${expPrefix}-user-profile-avatar`
    );
    const hasBackgroundColor = element.style.backgroundColor;
    expect(hasBackgroundColor).toBeTruthy();
  });
});
