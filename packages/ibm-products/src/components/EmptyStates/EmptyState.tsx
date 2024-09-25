/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { ReactNode } from 'react';
import { EmptyStateV2 } from '.';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Link } from '@carbon/react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import '../../global/js/utils/props-helper';
import { pkg } from '../../settings';
import { ButtonProps } from '@carbon/react';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

import { EmptyStateContent } from './EmptyStateContent';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyState';

enum sizes {
  lg = 'lg',
  sm = 'sm',
}

// Default values for props
export const defaults: { position: string; size: sizes } = {
  position: 'top',
  size: sizes.lg,
};

interface EmptyStateProps {
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
   * Empty state illustration, specify the `src` for a provided illustration to be displayed. In the case of requiring a light and dark illustration of your own, simply pass the corresponding illustration based on the current theme of your application.
   * For example: `illustration={appTheme === 'dark' ? darkIllustration : lightIllustration}`
   */
  illustration?: string;

  /**
   * The alt text for empty state svg images. If not provided , title will be used.
   */
  illustrationDescription?: string;

  /**
   * Designates the position of the illustration relative to the content
   */
  illustrationPosition?: 'top' | 'right' | 'bottom' | 'left';

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

  /**
   * Designates which version of the EmptyState component is being used.
   * Refer to V2 documentation separately.
   */
  v2?: boolean;
}

/**
 * The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.
 */
export let EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ v2 = false, ...props }, ref) => {
    // todo: deprecate v1
    if (v2) {
      return <EmptyStateV2 {...props} />;
    }
    const {
      action,
      className,
      illustration,
      illustrationDescription,
      illustrationPosition = defaults.position,
      link,
      size = defaults.size,
      subtitle,
      title,
      ...rest
    } = props;
    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, `${blockClass}-type--default`, className, {
          [`${blockClass}-position--${illustrationPosition}`]: !!illustration,
        })}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {illustration && (
          <img
            src={illustration}
            alt={illustrationDescription}
            className={cx([
              `${blockClass}__illustration`,
              `${blockClass}__illustration--${size}`,
            ])}
          />
        )}
        <EmptyStateContent
          action={action}
          link={link}
          size={size}
          subtitle={subtitle}
          title={title ?? ''}
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EmptyState = pkg.checkComponentEnabled(EmptyState, componentName);

EmptyState.propTypes = {
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
   * Empty state illustration, specify the `src` for a provided illustration to be displayed. In the case of requiring a light and dark illustration of your own, simply pass the corresponding illustration based on the current theme of your application.
   * For example: `illustration={appTheme === 'dark' ? darkIllustration : lightIllustration}`
   */
  illustration: PropTypes.string,

  /**
   * The alt text for custom provided illustrations
   */
  /**@ts-ignore*/
  illustrationDescription: PropTypes.string.isRequired.if(
    ({ illustration }) => illustration
  ),

  /**
   * Designates the position of the illustration relative to the content
   */
  illustrationPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

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
   * Empty state subtext
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Empty state heading
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Designates which version of the EmptyState component is being used.
   * Refer to V2 documentation separately.
   */
  v2: PropTypes.bool,
};

EmptyState.displayName = componentName;
