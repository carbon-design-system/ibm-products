/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { ReactNode } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Link } from '@carbon/react';

import { getDevtoolsProps } from '../../../global/js/utils/devtools';
import { pkg } from '../../../settings';

import { EmptyStateContent } from '../EmptyStateContent';
import NoTagsIllustration from '../assets/NoTagsIllustration';
import { defaults } from '../EmptyState';
import { ButtonProps } from '@carbon/react';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'NoTagsEmptyState';

interface NoTagsEmptyStateProps {
  /**
   * Empty state action button
   */
  action?: {
    kind?: 'primary' | 'secondary' | 'tertiary';
    renderIcon?: CarbonIconType;
    onClick?: ButtonProps<React.ElementType>['onClick'];
    text?: string;
  };

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * The alt text for empty state svg images. If not provided , title will be used.
   */
  illustrationDescription?: string;

  /**
   * Designates the position of the illustration relative to the content
   */
  illustrationPosition?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * Empty state illustration theme variations.
   * To ensure you use the correct themed illustrations, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}`
   */
  illustrationTheme?: 'light' | 'dark';

  /**
   * Empty state link object
   */
  link?: {
    text?: string | ReactNode;
    href?: string;
  };

  /**
   * Empty state size
   */
  size?: 'lg' | 'sm';

  /**
   * Empty state subtitle
   */
  subtitle?: string | ReactNode;

  /**
   * Empty state title
   */
  title: string | ReactNode;
}

/**
 * The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.
 */
export let NoTagsEmptyState = React.forwardRef<
  HTMLDivElement,
  NoTagsEmptyStateProps
>(
  (
    {
      // The component props, in alphabetical order (for consistency).

      action,
      className,
      illustrationPosition = defaults.position,
      illustrationTheme,
      illustrationDescription,
      link,
      size = defaults.size,
      subtitle,
      title,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass,
          className,
          `${blockClass}-position--${illustrationPosition}`,
          `${blockClass}-type--noTags`
        )}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        <NoTagsIllustration
          theme={illustrationTheme}
          size={size}
          alt={illustrationDescription || title}
        />
        <EmptyStateContent
          action={action}
          link={link}
          size={size}
          subtitle={subtitle}
          title={(title = '')}
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
NoTagsEmptyState = pkg.checkComponentEnabled(NoTagsEmptyState, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
NoTagsEmptyState.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
NoTagsEmptyState.propTypes = {
  /**
   * Empty state action button
   */
  action: PropTypes.shape({
    /**@ts-ignore*/
    ...Button.propTypes,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    /**@ts-ignore*/
    onClick: Button.propTypes.onClick,
    text: PropTypes.string,
  }),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The alt text for empty state svg images. If not provided , title will be used.
   */
  illustrationDescription: PropTypes.string,

  /**
   * Designates the position of the illustration relative to the content
   */
  illustrationPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Empty state illustration theme variations.
   * To ensure you use the correct themed illustrations, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}`
   */
  illustrationTheme: PropTypes.oneOf(['light', 'dark']),

  /**
   * Empty state link object
   */
  /**@ts-ignore*/
  link: PropTypes.shape({
    ...Link.propTypes,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    href: PropTypes.string,
  }),

  /**
   * Empty state size
   */
  size: PropTypes.oneOf(['lg', 'sm']),

  /**
   * Empty state subtitle
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Empty state title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
