import React from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../../settings';
import { EmptyStateContent } from '../EmptyStateContent';
import NotFoundIllustration from '../assets/NotFound';
import { EmptyStateDefaultProps } from '../EmptyState';

const componentName = 'NotFoundEmptyState';

export let NotFoundEmptyState = ({
  actionText,
  actionType,
  actionIcon,
  heading,
  illustrationSize,
  illustrationTheme,
  linkText,
  linkUrl,
  subtext,
  onActionEvent,
}) => {
  return (
    <div className={`${pkg.prefix}-empty-state`}>
      <NotFoundIllustration theme={illustrationTheme} size={illustrationSize} />
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

// Return a placeholder if not released and not enabled by feature flag
NotFoundEmptyState = pkg.checkComponentEnabled(
  NotFoundEmptyState,
  componentName
);

NotFoundEmptyState.propTypes = {
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
   * Empty state illustration size
   */
  illustrationSize: PropTypes.oneOf(['lg', 'sm']),
  /**
   * Empty state illustration theme variations.
   * To ensure you use the correct themed illustrations, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}`
   */
  illustrationTheme: PropTypes.oneOf(['light', 'dark']),
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
NotFoundEmptyState.defaultProps = EmptyStateDefaultProps;
NotFoundEmptyState.displayName = componentName;
