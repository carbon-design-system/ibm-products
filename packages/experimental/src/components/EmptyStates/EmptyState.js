/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import setIllustrationClass from './assets/setIllustrationClass';

import { Canary } from '../_Canary';
import { pkg } from '../../settings';
import { EmptyStateContent } from './EmptyStateContent';
const componentName = 'EmptyState';

export const EmptyState = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({
      actionText,
      actionType,
      actionIcon,
      heading,
      linkText,
      linkUrl,
      subtext,
      illustration,
      illustrationSize,
      onActionEvent,
    }) => {
      const renderIllustration = () => {
        return (
          <img
            src={illustration}
            alt="Empty state illustration"
            className={setIllustrationClass(illustrationSize)}
          />
        );
      };

      return (
        <div className={`${pkg.prefix}-empty-state`}>
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
    };

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
  illustrationTheme: 'light',
  illustrationSize: 'lg',
};

EmptyState.propTypes = EmptyStateProps;
EmptyState.defaultProps = EmptyStateDefaultProps;
EmptyState.displayName = componentName;
