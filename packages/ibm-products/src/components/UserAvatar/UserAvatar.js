/**
 * Copyright IBM Corp. 2024, 2024
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
import { pkg /*, carbon */ } from '../../settings';

import { Tooltip, usePrefix } from '@carbon/react';
import { TooltipTrigger } from '../TooltipTrigger';
import { User } from '@carbon/react/icons';
// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--user-avatar`;
const componentName = 'UserAvatar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
// const defaults = {
//   /* TODO: add defaults for relevant props if needed */
// };

/**
 * TODO: A description of the component.
 */

const defaults = {
  size: 'md',
  tooltipAlignment: 'bottom',
};

export let UserAvatar = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      backgroundColor,
      className,
      name,
      /* TODO: add other props for UserAvatar, with default values if needed */
      renderIcon: RenderIcon,
      size = defaults.size,
      tooltipText,
      tooltipAlignment = defaults.tooltipAlignment,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const carbonPrefix = usePrefix();
    const iconSize = {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
    };
    const formatInitials = () => {
      const parts = name.split(' ');
      const firstChar = parts[0].charAt(0).toUpperCase();
      if (parts.length === 1) {
        return firstChar;
      }
      const lastChar = parts[parts.length - 1].charAt(0).toUpperCase();
      const initials = [firstChar];
      if (lastChar) {
        initials.push(lastChar);
      }
      return ''.concat(...initials);
    };
    const getItem = () => {
      const iconProps = { size: iconSize[size] };
      if (RenderIcon) {
        return <RenderIcon {...iconProps} />;
      }
      if (name) {
        return formatInitials();
      }
      return <User {...iconProps} />;
    };

    const Avatar = () => (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          `${blockClass}--${backgroundColor}`,
          `${blockClass}--${size}`,
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        ref={ref}
        role="img"
        {...getDevtoolsProps(componentName)}
      >
        {getItem()}
      </div>
    );

    if (tooltipText) {
      return (
        <Tooltip
          align={tooltipAlignment}
          label={tooltipText}
          className={`${blockClass}__tooltip ${carbonPrefix}--icon-tooltip`}
        >
          <TooltipTrigger>
            <Avatar />
          </TooltipTrigger>
        </Tooltip>
      );
    }
    return <Avatar />;
  }
);

// Return a placeholder if not released and not enabled by feature flag
UserAvatar = pkg.checkComponentEnabled(UserAvatar, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
UserAvatar.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
UserAvatar.propTypes = {
  /**
   * Provide the background color need to be set for UserAvatar.
   */
  backgroundColor: PropTypes.oneOf(['light-cyan', 'dark-cyan']),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * When passing the name prop, either send the initials to be used or the user's full name. The first two capital letters of the user's name will be used as the name.
   */
  name: PropTypes.string,
  /**
   * Provide a custom icon to use if you need to use an icon other than the default one
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Set the size of the avatar circle
   */
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
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
  /* TODO: add types and DocGen for all props. */
};
