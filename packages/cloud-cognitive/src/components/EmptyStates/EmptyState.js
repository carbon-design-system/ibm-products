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
import { pkg } from '../../settings';
import { EmptyStateContent } from './EmptyStateContent';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyState';

export let EmptyState = React.forwardRef(
  (
    {
      actionIcon,
      actionText,
      actionType,
      customIllustrationAltText,
      heading,
      illustration,
      illustrationSize,
      linkText,
      linkUrl,
      onActionEvent,
      subtext,
      ...rest
    },
    ref
  ) => {
    const renderIllustration = () => {
      return (
        <img
          src={illustration}
          alt={customIllustrationAltText}
          className={cx([
            `${blockClass}__illustration`,
            `${blockClass}__illustration--${illustrationSize}`,
          ])}
        />
      );
    };

    return (
      <div className={blockClass} ref={ref} {...rest}>
        {illustration && renderIllustration()}
        <EmptyStateContent
          actionText={actionText}
          actionType={actionType}
          actionIcon={actionIcon}
          heading={heading}
          linkText={linkText}
          linkUrl={linkUrl}
          subtext={subtext}
          onActionEvent={onActionEvent}
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EmptyState = pkg.checkComponentEnabled(EmptyState, componentName);

export const EmptyStateProps = {
  /**
   * Empty state action button icon
   */
  actionIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Empty state action button text
   */
  actionText: PropTypes.string,
  /**
   * Empty state action button type
   */
  actionType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * The alt text for custom provided illustrations
   */
  customIllustrationAltText: PropTypes.string,
  /**
   * Empty state heading
   */
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Empty state illustration, specify the `src` of a custom illustration to be displayed.
   */
  illustration: PropTypes.string,
  /**
   * Empty state illustration size
   */
  illustrationSize: PropTypes.oneOf(['lg', 'sm']),
  /**
   * Empty state link text
   */
  linkText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Empty state link url
   */
  linkUrl: PropTypes.string,
  /**
   * Empty state action button handler
   */
  onActionEvent: PropTypes.func,
  /**
   * Empty state subtext
   */
  subtext: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export const EmptyStateDefaultProps = {
  heading: 'Start by adding data assets',
  subtext: 'Click Upload assets to upload your data',
  illustrationSize: 'lg',
};

EmptyState.propTypes = EmptyStateProps;
EmptyState.defaultProps = EmptyStateDefaultProps;
EmptyState.displayName = componentName;
