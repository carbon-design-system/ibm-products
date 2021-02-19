import React from 'react';
import PropTypes from 'prop-types';
import { pkgPrefix } from '../../../global/js/settings';
import { EmptyStateContent } from '../EmptyStateContent';
import UnauthorizedIllustration from '../assets/Unauthorized';
import { EmptyStateDefaultProps } from '../EmptyState';

export const UnauthorizedEmptyState = ({
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
    <div className={`${pkgPrefix}-empty-state`}>
      <UnauthorizedIllustration
        theme={illustrationTheme}
        size={illustrationSize}
      />
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

UnauthorizedEmptyState.propTypes = {
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
UnauthorizedEmptyState.defaultProps = EmptyStateDefaultProps;
