/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Link } from '@carbon/react';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import '../../global/js/utils/props-helper';
import { pkg } from '../../settings';
import EmptyStateIllustration from './EmptyStateIllustration';

const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyStateV2';

/**
 * This is the V2 version of the `EmptyState` component. To use you must pass the `v2` prop to the V1 version of the component `EmptyState` and use the props below.
 * In order to avoid breaking changes in the future `EmptyStateV2` is not actually directly importable.
 */

export let EmptyStateV2 = React.forwardRef((props, ref) => {
  const {
    action,
    className,
    illustration: customIllustration,
    illustrationDescription,
    illustrationPosition = 'top',
    illustrationTheme,
    link,
    size = 'lg',
    subtitle,
    title,
    variant,
    ...rest
  } = props;

  const illustrationProps = {
    size,
    theme: illustrationTheme,
    title: illustrationDescription,
    variant,
  };

  return (
    <div
      {...rest}
      className={cx([
        blockClass,
        className,
        `${blockClass}-position--${illustrationPosition}`,
        {
          [`${blockClass}-type--${variant}`]: variant,
        },
      ])}
      ref={ref}
      {...getDevtoolsProps(componentName)}
    >
      {customIllustration && (
        <img
          src={customIllustration}
          alt={illustrationDescription}
          className={cx([
            `${blockClass}__illustration`,
            `${blockClass}__illustration--${size}`,
          ])}
        />
      )}
      {!customIllustration && variant && (
        <EmptyStateIllustration {...illustrationProps} />
      )}
      <div className={`${blockClass}__content`}>
        <h3
          className={cx(`${blockClass}__header`, {
            [`${blockClass}__header--small`]: size === 'sm',
          })}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className={cx(`${blockClass}__subtitle`, {
              [`${blockClass}__subtitle--small`]: size === 'sm',
            })}
          >
            {subtitle}
          </p>
        )}
        {action && (
          <Button
            {...action}
            className={`${blockClass}__action-button`}
            size="sm"
          >
            {action.text}
          </Button>
        )}
        {link && (
          <Link {...link} className={`${blockClass}__link`}>
            {link.text}
          </Link>
        )}
      </div>
    </div>
  );
});

// Return a placeholder if not released and not enabled by feature flag
EmptyStateV2 = pkg.checkComponentEnabled(EmptyStateV2, componentName);

EmptyStateV2.propTypes = {
  /**
   * Props for the action button. Refer to the Carbon Components button documentation for full list of props.
   */
  action: PropTypes.PropTypes.shape({
    text: PropTypes.string,
  }),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Source for the illustration image if you choose to use your own custom image. Passing an illustration prop will supersede the variant option.
   */
  illustration: PropTypes.string,

  /**
   * The alt text for the illustration
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
   * Props for the link. Refer to the Carbon Components link documentation for full list of props.
   */
  link: PropTypes.shape({
    text: PropTypes.string,
  }),

  /**
   * Empty state size
   */
  size: PropTypes.oneOf(['sm', 'lg']),

  /**
   * Empty state subtext
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Empty state heading
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Determines which predefined illustration will be displayed
   */
  variant: PropTypes.oneOf([
    'error',
    'noData',
    'noTags',
    'notFound',
    'notifications',
    'unauthorized',
  ]),
};

EmptyStateV2.displayName = componentName;
