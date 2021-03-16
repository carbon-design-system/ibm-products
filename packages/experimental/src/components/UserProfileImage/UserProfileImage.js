/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Canary } from '../_Canary';
import { pkg } from '../../settings';
const componentName = 'UserProfileImage';

import {
  User16,
  User20,
  User24,
  User32,
  Group16,
  Group20,
  Group24,
  Group32,
} from '@carbon/icons-react';

//import { expPrefix } from '../../global/js/settings';
import cx from 'classnames';

const blockClass = `${pkg.prefix}-user-profile-avatar`;

export const UserProfileImage = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  :({
  backgroundColor,
  icon = 'user',
  initials,
  image,
  size = 'x-large',
  theme
}) => {

  const icons = {
    user: {
      'x-small': <User16 />,
      small: <User16 />,
      medium: <User20 />,
      large: <User24 />,
      'x-large': <User32 />,
    },
    group: {
      'x-small': <Group16 />,
      small: <Group16 />,
      medium: <Group20 />,
      large: <Group24 />,
      'x-large': <Group32 />,
    },
  };

  const formatInitials = () => {
    if (initials.length === 2) return initials;
    return initials.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
  };

  const renderFillItem = () => {
    if (image) {
      return <img src={image} className={`${blockClass}-photo ${blockClass}-photo--${size}`} />;
    } else {
      if (initials) {
        return formatInitials();
      } else {
        return icons[icon][size];
      }
    }
  };

  return (
    <div className={cx([
      `${blockClass}`, 
      `${blockClass}--${size}`, 
      `${blockClass}--${theme}`,
      `${blockClass}--${backgroundColor}`]) }>
        {renderFillItem()}
    </div>
  );
};

UserProfileImage.propTypes = {
  /**
   * The background color passed should match one of the background colors in the library documentation:
   * https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/
   */
  backgroundColor: PropTypes.oneOf([
    'light-blue',
    'dark-blue',
    'light-cyan',
    'dark-cyan',
    'light-gray',
    'dark-gray',
    'light-green',
    'dark-green',
    'light-magenta',
    'dark-magenta',
    'light-purple',
    'dark-purlpe',
    'light-teal',
    'dark-teal'
  ]),
  /**
   * When passing the icon prop, use either "user" or "group". The values match up to the Carbon Library icons.
   */
  icon: PropTypes.oneOf(['user', 'group']),
  /**
   * When passing the image prop, supply a full path to the image to be displayed.
   */
  image: PropTypes.string,
  /**
   * When passing the initials prop, either send the initials to be used or the user's display name. The first two capital letters of the display name will be used as the initials.
   */
  initials: PropTypes.string,
  /**
   * Set the size of the avatar circle
   */
  size: PropTypes.oneOf(['x-large', 'large', 'medium', 'small', 'x-small']),
  /**
   * Set theme in which the component will be rendered
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};