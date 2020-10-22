/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';

import { expPrefix } from '../../global/js/settings';

export const EmptyState = ({
  actionText,
  actionType,
  actionIcon,
  actionHandler,
  heading,
  subtext,
  illustration,
  illustrationSize,
  illustrationTheme,
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
      {actionText && actionHandler && (
        <Button
          className={`${expPrefix}-empty-state-action-button`}
          kind={actionType || 'tertiary'}
          onClick={actionHandler}
          renderIcon={actionIcon || null}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

EmptyState.propTypes = {
  /**
   * Empty state action button handler
   */
  actionHandler: PropTypes.func,
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
    'default',
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
