/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from 'carbon-components-react';

import { expPrefix } from '../../global/js/settings';

export const EmptyState = ({
  actionText,
  actionType,
  actionIcon,
  heading,
  linkText,
  linkUrl,
  subtext,
  illustration,
  illustrationSize,
  illustrationTheme,
  onActionEvent,
}) => {
  return (
    <div className={`${expPrefix}-empty-state`}>
      {illustration && typeof illustration === 'string' && (
        <img
          src={require(`./EmptyStateIllustrations/${illustrationTheme}/${illustration}.svg`)}
          alt=""
          className={[
            `${expPrefix}-empty-state-illustration`,
            `${expPrefix}-empty-state-illustration--${illustrationSize}`,
          ].join(' ')}
        />
      )}
      <h3 className={`${expPrefix}-header`}>{heading}</h3>
      {typeof subtext !== 'string' ? (
        subtext
      ) : (
        <p className={`${expPrefix}-subtext`}>{subtext}</p>
      )}
      {actionText && onActionEvent && (
        <Button
          className={`${expPrefix}-empty-state-action-button`}
          kind={actionType || 'tertiary'}
          onClick={onActionEvent}
          renderIcon={actionIcon || null}>
          {actionText}
        </Button>
      )}
      {linkText && linkUrl && (
        <Link className={`${expPrefix}-empty-state-link`} href={linkUrl}>
          {linkText}
        </Link>
      )}
    </div>
  );
};

EmptyState.propTypes = {
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
   * Empty state illustration
   */
  illustration: PropTypes.oneOf([
    'nodata',
    'error',
    'unauthorized',
    'notags',
    'notfound',
    'notifications',
  ]),
  /**
   * Empty state illustration size
   */
  illustrationSize: PropTypes.oneOf(['lg', 'sm']),
  /**
   * Empty state illustration theme variations
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

EmptyState.defaultProps = {
  heading: 'Start by adding data assets',
  subtext: 'Click Upload assets to upload your data',
  illustrationTheme: 'light',
  illustrationSize: 'lg',
};
