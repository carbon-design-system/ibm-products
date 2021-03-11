/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from 'carbon-components-react';

import { Canary } from '../_Canary';
import { pkg } from '../../settings';
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
      illustrationTheme,
      onActionEvent,
    }) => {
      const defaultIllustrationOptions = [
        'nodata',
        'error',
        'unauthorized',
        'notags',
        'notfound',
        'notifications',
      ];
      return (
        <div className={`${pkg.prefix}-empty-state`}>
          {illustration && (
            <img
              src={
                typeof illustration === 'string' &&
                defaultIllustrationOptions.includes(illustration)
                  ? import(`./assets/${illustrationTheme}/${illustration}.svg`)
                  : illustration
              }
              alt="Empty state illustration"
              className={[
                `${pkg.prefix}-empty-state-illustration`,
                `${pkg.prefix}-empty-state-illustration--${illustrationSize}`,
              ].join(' ')}
            />
          )}
          {typeof heading !== 'string' ? (
            heading
          ) : (
            <h3 className={`${pkg.prefix}-header`}>{heading}</h3>
          )}
          {typeof subtext !== 'string' ? (
            subtext
          ) : (
            <p className={`${pkg.prefix}-subtext`}>{subtext}</p>
          )}
          {actionText && onActionEvent && (
            <Button
              className={`${pkg.prefix}-empty-state-action-button`}
              kind={actionType || 'tertiary'}
              onClick={onActionEvent}
              renderIcon={actionIcon || null}>
              {actionText}
            </Button>
          )}
          {linkText && linkUrl && (
            <Link className={`${pkg.prefix}-empty-state-link`} href={linkUrl}>
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

EmptyState.displayName = componentName;
