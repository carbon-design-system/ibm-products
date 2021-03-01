/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, ButtonSet } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';

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
import pic from './charlie_64.jpg';

import { expPrefix } from '../../global/js/settings';
import cx from 'classnames';
import { render } from 'enzyme';
import { blue, cyan, gray, green, magenta, purple, teal } from '@carbon/colors';

const blockClass = `${expPrefix}-user-profile-avatar`;

export const UserProfileImage = ({
  backgroundColor,
  icon,
  initials,
  image,
  size,
  theme,
  ...props
}) => {
  const backgroundColors = {
    'light':{
      'dark-blue': blue[80],
      'light-blue': blue[60],
      'dark-cyan': cyan[80],
      'light-cyan': cyan[60],
      'dark-gray': gray[80],
      'light-gray': gray[60],
      'dark-green': green[80],
      'light-green': green[60],
      'dark-magenta': magenta[80],
      'light-magenta': magenta[60],
      'dark-purple': purple[80],
      'light-purple': purple[60],
      'dark-teal': teal[80],
      'light-teal': teal[60]
    },
    'dark':{
      'dark-blue': blue[40],
      'light-blue': blue[20],
      'dark-cyan': cyan[40],
      'light-cyan': cyan[20],
      'dark-gray': gray[40],
      'light-gray': gray[20],
      'dark-green': green[40],
      'light-green': green[20],
      'dark-magenta': magenta[40],
      'light-magenta': magenta[20],
      'dark-purple': purple[40],
      'light-purple': purple[20],
      'dark-teal': teal[40],
      'light-teal': teal[20]
    }}

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
  console.log('backcolor', backgroundColors[theme][backgroundColor])
  let divStyle = {
    backgroundColor: backgroundColors[theme][backgroundColor],
  };

  const formatInitials = () => {
    if (initials.length === 2) return initials;
    return initials.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
  };

  const renderFillItem = () => {
    if (image) {
      return <img src={pic} className={`${blockClass}-photo--${size}`} />;
    } else {
      if (initials) {
        return formatInitials();
      } else {
        return icons[icon][size];
      }
    }
  };

  return (
    <div className={`${blockClass} ${blockClass}--${size} ${blockClass}--${theme} ${blockClass}--${backgroundColor}`}>
      {renderFillItem()}
    </div>
  );
};

UserProfileImage.propTypes = {
  /**
   *  The background color passed should match one of the background colors in the library documentation:
   *  https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/
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
   * Determine the size of the avatar circle
   */
  size: PropTypes.oneOf(['x-large', 'large', 'medium', 'small', 'x-small']),
  /**
   *
   */
};

UserProfileImage.defaultProps = {
  backgroundColor: 'light-blue',
  icon: 'user',
  size: 'x-large',
  theme: 'dark',
};
