/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button, ButtonSet } from 'carbon-components-react';
import PropTypes from 'prop-types';
import React from 'react';
import { blue, cyan, gray, green, magenta, purple, teal } from '@carbon/colors';

import { User16, User20, User24, User32, Group16, Group20, Group24, Group32 } from '@carbon/icons-react';
import pic from './charlie_64.jpg';

import { expPrefix } from '../../global/js/settings';
import cx from 'classnames';
import { render } from 'enzyme';

const blockClass = `${expPrefix}-user-profile-avatar`;

// import './example-component.scss'; // Do not import SCSS directly it will be rolled up separately.
// Component here { size } { background[renderBackground()] }
export const UserProfileImage = ({
  fill,
  size, 
  backgroundColor, 
  icon,
  initials,
  image,
  ...props
}) => {
  const colors = [
    blue[60], cyan[60], gray[60], green[60], magenta[60], purple[60], teal[60],
    blue[80], cyan[80], gray[80], green[80], magenta[80], purple[80], teal[80],
    blue[40], cyan[40], gray[40], green[40], magenta[40], purple[40], teal[40]
  ]

  const icons = {
    user: {'x-small': <User16 />, 'small': <User16 />, 'medium': <User20 />, 'large': <User24 />, 'x-large': <User32 /> },
    group: {'x-small': <Group16 />, 'small': <Group16 />, 'medium': <Group20 />, 'large': <Group24 />, 'x-large': <Group32 /> }
  }

  let divStyle = {
    backgroundColor: backgroundColor
  }

  const formatInitials = () => {
    if ( initials.length === 2 ) return initials
    return initials.slice(0,2)
  }

  const renderFillItem = () => {
    if ( image ) {
      //show the image
      console.log('show image')
      return <img src={pic} className={`${blockClass}-photo--${size}`} />
      //return <img src={pic} className="test" />
    } else {
      if ( initials ) {
        return formatInitials()
      } else {
        return icons[icon][size]
      }
    }
  }

  return (
    <div style={divStyle} className={`${blockClass} ${blockClass}--${size}`}>
        { renderFillItem() }
    </div>
  );
};

UserProfileImage.propTypes = {
  /**
   *  Make sure color matches one of colors in library
   */
  backgroundColor: PropTypes.oneOf([blue[60], cyan[60], gray[60], green[60], magenta[60], purple[60], teal[60],
    blue[80], cyan[80], gray[80], green[80], magenta[80], purple[80], teal[80],
    blue[40], cyan[40], gray[40], green[40], magenta[80], purple[80], teal[80]]),
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * Is the border a box or a shadow
   */
  boxedBorder: PropTypes.bool,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * Which icon to use user or group
   */
  icon: PropTypes.oneOf(['user', 'group']),
  /**
   * File path to image to display
   */
  image: PropTypes.string,
  /**
   * 2 Initials to be displayed in circle
   */
  initials: PropTypes.string,

  /**
   * Optional primary click handler
   */
  onPrimaryClick: PropTypes.func,
  /**
   * Optional secondary click handler
   */
  onSecondaryClick: PropTypes.func,
  /**
   * Primary button label
   */
  primaryButtonLabel: PropTypes.string.isRequired,
  /**
   * What is the primary kind
   */
  primaryKind: PropTypes.oneOf(['primary', 'danger']),
  /**
   * Secondary button label
   */
  secondaryButtonLabel: PropTypes.string.isRequired,
  /**
   * What is the secondary kind
   */
  secondaryKind: PropTypes.oneOf(['secondary', 'tertiary']),
  /**
   * How large should the buttons be?
   */
  size: PropTypes.oneOf(['default', 'small', 'field']),
};

UserProfileImage.defaultProps = {
  size: 'x-large',
  backgroundColor: blue[60],
  primaryButtonLabel: 'Primary',
  secondaryButtonLabel: 'Secondary',
  primaryKind: 'primary',
  secondaryKind: 'secondary',
  onPrimaryClick: undefined,
  onSecondaryClick: undefined,
};
