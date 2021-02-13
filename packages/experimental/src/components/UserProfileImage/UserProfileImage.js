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
  const colors = [
    blue[60],
    cyan[60],
    gray[60],
    green[60],
    magenta[60],
    purple[60],
    teal[60],
    blue[80],
    cyan[80],
    gray[80],
    green[80],
    magenta[80],
    purple[80],
    teal[80],
    blue[40],
    cyan[40],
    gray[40],
    green[40],
    magenta[40],
    purple[40],
    teal[40],
  ];

  // const colors = {dark: [
  //   blue[80], cyan[80], gray[80], green[80], magenta[80], purple[80], teal[80],
  //   blue[60], cyan[60], gray[60], green[60], magenta[60], purple[60], teal[60]
  // ], light: [
  //   blue[40], cyan[40], gray[40], green[40], magenta[40], purple[40], teal[40],
  //   blue[20], cyan[20], gray[20], green[20], magenta[20], purple[20], teal[20]
  // ]}

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

  let divStyle = {
    backgroundColor: backgroundColor,
  };

  const formatInitials = () => {
    if (initials.length === 2) return initials;
    return initials.slice(0, 2);
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
    <div
      style={divStyle}
      className={`${blockClass} ${blockClass}--${theme} ${blockClass}--${size}`}>
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
    blue[60],
    cyan[60],
    gray[60],
    green[60],
    magenta[60],
    purple[60],
    teal[60],
    blue[80],
    cyan[80],
    gray[80],
    green[80],
    magenta[80],
    purple[80],
    teal[80],
    blue[40],
    cyan[40],
    gray[40],
    green[40],
    magenta[80],
    purple[80],
    teal[80],
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
  backgroundColor: '#0f62fe',
  icon: 'user',
  size: 'x-large',
  theme: 'dark',
};
