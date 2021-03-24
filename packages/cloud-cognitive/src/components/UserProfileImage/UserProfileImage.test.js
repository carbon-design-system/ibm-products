/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
//import { TestScheduler } from 'jest';
//import { expPrefix } from '../../global/js/settings';
import { pkg } from '../../settings';

import React from 'react';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

import { UserProfileImage } from '.';
const blockClass = `${pkg.prefix}-user-profile-avatar`;
// const {
//   defaultProps: { backgroundColor, icon, size, theme },
//   name,
// } = UserProfileImage;

const { backgroundColor, icon, size, theme } = UserProfileImage;

describe(name, () => {
  test('should return a circle with background color', () => {
    const { container } = render(
      <UserProfileImage theme="light" backgroundColor="light-blue" />
    );
    const element = container.querySelector(
      `.${pkg.prefix}-user-profile-avatar`
    );

    const hasBackgroundColor = element.className.includes('light-blue');
    expect(hasBackgroundColor).toBeTruthy();
  });

  test('should return an icon for the avatar image', () => {
    const { container } = render(
      <UserProfileImage theme="light" icon="user" />
    );
    const renderedSVG = container.querySelector('svg');
    expect(renderedSVG).toBeTruthy();
  });

  test('should render image for the avatar image', () => {
    const { container } = render(
      <UserProfileImage theme="light" image="path_to_image.jpg" />
    );
    const imagePath = container.querySelector('img').getAttribute('src');
    expect(typeof imagePath).toBe('string');
  });

  test('should return appropriately size circle based on size prop', () => {
    const { container } = render(
      <UserProfileImage theme="light" size="x-large" />
    );
    const element = container.querySelector(
      `.${pkg.prefix}-user-profile-avatar`
    );
    const hasSizeClass = element.className.includes('x-large');
    expect(hasSizeClass).toBeTruthy();
  });

  test('should recognize theme setting', () => {
    const { container } = render(<UserProfileImage theme="light" />);
    const element = container.querySelector(
      `.${pkg.prefix}-user-profile-avatar`
    );
    const hasThemeClass = element.className.includes('light');
    expect(hasThemeClass).toBeTruthy();
  });
});
