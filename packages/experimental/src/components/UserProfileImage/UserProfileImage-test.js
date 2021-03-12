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

// const {
//   defaultProps: { backgroundColor, icon, size, theme },
//   name,
// } = UserProfileImage;

const { backgroundColor, icon, size, theme } = UserProfileImage;

jest.setTimeout(15000);

describe(name, () => {
  test('should return a circle with background color', () => {
    const { container } = render(
      <UserProfileImage backgroundColor="light-blue" />
    );
    const element = container.querySelector(
      `.${expPrefix}-user-profile-avatar`
    );
    const hasBackgroundColor = element.className.includes('light-blue');
    expect(hasBackgroundColor).toBeTruthy();
  });

  test('should return an icon for the avatar image', () => {
    const { container } = render(<UserProfileImage icon="user" />);
    const renderedSVG = container.querySelector('svg');
    expect(renderedSVG).toBeTruthy();
  });

  test('should render image for the avatar image', () => {
    const { container } = render(<UserProfileImage image="path_to_image.jpg" />);
    const imagePath = container.querySelector('img').getAttribute('src');
    expect(typeof imagePath).toBe('string');
  });

  test('should return appropriately size circle based on size prop', () => {
    const { container } = render(<UserProfileImage size="x-large" />);
    const element = container.querySelector(
      `.${expPrefix}-user-profile-avatar`
    );
    const hasSizeClass = element.className.includes('x-large');
    expect(hasSizeClass).toBeTruthy();
  });

  test('should recognize theme setting', () => {
    const { container } = render(<UserProfileImage theme="light" />);
    const element = container.querySelector(
      `.${expPrefix}-user-profile-avatar`
    );
    const hasThemeClass = element.className.includes('light');
    expect(hasThemeClass).toBeTruthy();
  });
});
