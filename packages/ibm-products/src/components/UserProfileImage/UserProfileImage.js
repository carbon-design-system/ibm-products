/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import '../../global/js/utils/props-helper';
import { pkg, carbon } from '../../settings';

// Carbon and package components we use.
import { User, Group } from '@carbon/react/icons';

import { Button, Tooltip } from '@carbon/react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--user-profile-image`;
const componentName = 'UserProfileImage';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The user profile avatar allows for an image of the user to be displayed by passing in the image prop. By default the component will display a user icon on a blue background.
 */
export let UserProfileImage = React.forwardRef(
  (
    {
      backgroundColor,
      className,
      kind,
      icon,
      initials,
      image,
      imageDescription,
      size,
      theme,
      tooltipText,
      tooltipAlignment,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const icons = {
      user: {
        sm: (props) => <User size={12} {...props} />,
        md: (props) => <User size={16} {...props} />,
        lg: (props) => <User size={24} {...props} />,
        xl: (props) => <User size={32} {...props} />,
      },
      group: {
        sm: (props) => <Group size={12} {...props} />,
        md: (props) => <Group size={16} {...props} />,
        lg: (props) => <Group size={24} {...props} />,
        xl: (props) => <Group size={32} {...props} />,
      },
    };

    const formatInitials = () => {
      if (initials.length === 2) {
        return initials;
      }
      // RegEx takes in the display name and returns the first and last initials. Thomas Watson and Thomas J. Watson
      // both return JW.
      return initials
        .match(/(^\S\S?|\b\S)?/g)
        .join('')
        .match(/(^\S|\S$)?/g)
        .join('')
        .toUpperCase();
    };

    const getFillItem = () => {
      if (image) {
        return () => (
          <img
            alt={imageDescription}
            src={image}
            className={`${blockClass}__photo ${blockClass}__photo--${size}`}
          />
        );
      }
      if (initials) {
        return formatInitials;
      }
      if (kind && size) {
        return icons[kind][size];
      }
      return icon;
    };

    // if user doesn't provide a color just generate a random one
    const getRandomColor = () => {
      const colors = [
        'light-cyan',
        'dark-cyan',
        'light-gray',
        'dark-gray',
        'light-green',
        'dark-green',
        'light-magenta',
        'dark-magenta',
        'light-purple',
        'dark-purple',
        'light-teal',
        'dark-teal',
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const FillItem = getFillItem();

    const renderUserProfileImage = () => (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        ref={ref}
        className={cx([
          blockClass,
          className,
          `${blockClass}--${size}`,
          `${blockClass}--${theme}`,
          `${blockClass}--${backgroundColor || getRandomColor()}`,
        ])}
        {...getDevtoolsProps(componentName)}
      >
        <FillItem />
      </div>
    );

    return (
      FillItem &&
      (tooltipText ? (
        <Tooltip
          align={tooltipAlignment}
          className={cx(
            `${carbon.prefix}--icon-tooltip`,
            `${blockClass}__tooltip`
          )}
          label={tooltipText}
        >
          <Button
            {...rest}
            kind="ghost"
            ref={ref}
            size={size}
            className={cx(
              `${carbon.prefix}--btn--icon-only`,
              `${blockClass}__tooltip-trigger`
            )}
          >
            {renderUserProfileImage()}
          </Button>
        </Tooltip>
      ) : (
        renderUserProfileImage()
      ))
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
UserProfileImage = pkg.checkComponentEnabled(UserProfileImage, componentName);

UserProfileImage.displayName = componentName;

UserProfileImage.propTypes = {
  /**
   * The background color passed should match one of the background colors in the library documentation:
   * https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/
   */
  backgroundColor: PropTypes.oneOf([
    'light-cyan',
    'dark-cyan',
    'light-gray',
    'dark-gray',
    'light-green',
    'dark-green',
    'light-magenta',
    'dark-magenta',
    'light-purple',
    'dark-purple',
    'light-teal',
    'dark-teal',
  ]),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Provide a custom icon to use if you need to use an icon other than the included ones
   */
  icon: PropTypes.func,

  /**
   * When passing the image prop, supply a full path to the image to be displayed.
   */
  image: PropTypes.string,

  /**
   * When passing the image prop use the imageDescription prop to describe the image for screen reader.
   */
  imageDescription: PropTypes.string.isRequired.if(({ image }) => !!image),

  /**
   * When passing the initials prop, either send the initials to be used or the user's display name. The first two capital letters of the display name will be used as the initials.
   */
  initials: PropTypes.string,

  /**
   * When passing the kind prop, use either "user" or "group". The values match up to the Carbon Library icons.
   */
  kind: PropTypes.oneOf(['user', 'group']),

  /**
   * Set the size of the avatar circle
   */
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']).isRequired,

  /**
   * Set theme in which the component will be rendered
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,

  /**
   * Specify how the trigger should align with the tooltip
   */
  tooltipAlignment: PropTypes.oneOf([
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'right',
  ]),

  /**
   * Pass in the display name to have it shown on hover
   */
  tooltipText: PropTypes.string,
};
