/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Link } from 'carbon-components-react';

import { expPrefix as prefix } from '../../global/js/settings';

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
  const requestImageFile = require.context('./assets', true, /.svg$/);
  const defaultIllustrationOptions = [
    'nodata',
    'error',
    'unauthorized',
    'notags',
    'notfound',
    'notifications',
  ];
  const illustrationSrc =
    typeof illustration === 'string' &&
    defaultIllustrationOptions.includes(illustration)
      ? requestImageFile(`./${illustrationTheme}/${illustration}.svg`)
      : illustration;
  const illustrationClasses = cx([
    `${prefix}-empty-state-illustration`,
    `${prefix}-empty-state-illustration--${illustrationSize}`,
  ]);

  return (
    <div className={`${prefix}-empty-state`}>
      {illustration && (
        <img
          src={illustrationSrc}
          alt="Empty state illustration"
          className={illustrationClasses}
        />
      )}
      {typeof heading !== 'string' ? (
        heading
      ) : (
        <h3 className={`${prefix}-header`}>{heading}</h3>
      )}
      {typeof subtext !== 'string' ? (
        subtext
      ) : (
        <p className={`${prefix}-subtext`}>{subtext}</p>
      )}
      {actionText && onActionEvent && (
        <Button
          className={`${prefix}-empty-state-action-button`}
          kind={actionType || 'tertiary'}
          onClick={onActionEvent}
          renderIcon={actionIcon || null}>
          {actionText}
        </Button>
      )}
      {linkText && linkUrl && (
        <Link className={`${prefix}-empty-state-link`} href={linkUrl}>
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
   * Empty state illustration, either pass one of the default options
   * or specify the src of a custom illustration to be displayed.
   * To ensure you have a light and dark theme, you can conditionally specify light or dark
   * based on your app's current theme value. Example:
   * `illustration={appTheme === ('carbon--g100' || 'carbon--g90') ? myCustomDarkIllustration : myCustomLightIllustration}`
   */
  illustration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      'nodata',
      'error',
      'unauthorized',
      'notags',
      'notfound',
      'notifications',
    ]),
  ]),
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

EmptyState.defaultProps = {
  heading: 'Start by adding data assets',
  subtext: 'Click Upload assets to upload your data',
  illustrationTheme: 'light',
  illustrationSize: 'lg',
};
