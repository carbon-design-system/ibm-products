/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Link } from 'carbon-components-react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import '../../global/js/utils/props-helper';
import { pkg } from '../../settings';

import { EmptyStateContent } from './EmptyStateContent';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyState';

export let EmptyState = React.forwardRef(
  (
    {
      action,
      className,
      illustration,
      illustrationDescription,
      link,
      size,
      subtitle,
      title,
      ...rest
    },
    ref
  ) => {
    const renderIllustration = () => {
      return (
        <img
          src={illustration}
          alt={illustrationDescription}
          className={cx([
            `${blockClass}__illustration`,
            `${blockClass}__illustration--${size}`,
          ])}
        />
      );
    };

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {illustration && renderIllustration()}
        <EmptyStateContent
          action={action}
          link={link}
          size={size}
          subtitle={subtitle}
          title={title}
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EmptyState = pkg.checkComponentEnabled(EmptyState, componentName);

export const EmptyStateDefaultProps = {
  size: 'lg',
};

EmptyState.propTypes = {
  /**
   * Empty state action button
   */
  action: PropTypes.shape({
    ...Button.propTypes,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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
  illustrationDescription: PropTypes.string.isRequired.if(
    ({ illustration }) => illustration
  ),

  /**
   * Empty state link object
   */
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
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Empty state heading
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

EmptyState.defaultProps = EmptyStateDefaultProps;
EmptyState.displayName = componentName;
