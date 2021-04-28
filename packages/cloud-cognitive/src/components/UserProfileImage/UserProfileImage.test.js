/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

import { UserProfileImage } from '.';

const blockClass = `${pkg.prefix}-user-profile-avatar`;
const dataTestId = uuidv4();

describe(name, () => {
  test('should return a circle with background color', () => {
    const { container } = render(
      <UserProfileImage theme="light" backgroundColor="light-cyan" />
    );
    const element = container.querySelector(
      `.${pkg.prefix}-user-profile-avatar`
    );

    const hasBackgroundColor = element.className.includes('light-cyan');
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
    const { container } = render(<UserProfileImage theme="light" size="xl" />);
    const element = container.querySelector(
      `.${pkg.prefix}-user-profile-avatar`
    );
    const hasSizeClass = element.className.includes('xl');
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

  it('adds additional properties to the containing node', () => {
    render(<UserProfileImage theme="light" data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<UserProfileImage theme="light" ref={ref} />);
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });

  it('applies className to the containing node', () => {
    const customClass = 'test';
    const { container } = render(
      <UserProfileImage theme="light" className={customClass} />
    );
    const element = container.querySelector(`.${blockClass}`);
    expect(element).toHaveClass(customClass);
  });
});
