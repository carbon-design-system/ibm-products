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
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Button, Link } from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyStateContent';

export const EmptyStateContent = ({
  heading,
  subtext,
  actionText,
  onActionEvent,
  actionType,
  actionIcon,
  linkText,
  linkUrl,
}) => {
  return (
    <>
      {typeof heading !== 'string' ? (
        heading
      ) : (
        <h3 className={`${blockClass}__header`}>{heading}</h3>
      )}
      {typeof subtext !== 'string' ? (
        subtext
      ) : (
        <p className={`${blockClass}__subtext`}>{subtext}</p>
      )}
      {actionText && onActionEvent && (
        <Button
          className={`${blockClass}__action-button`}
          kind={actionType || 'tertiary'}
          onClick={onActionEvent}
          renderIcon={actionIcon || null}>
          {actionText}
        </Button>
      )}
      {linkText && linkUrl && (
        <Link className={`${blockClass}__link`} href={linkUrl}>
          {linkText}
        </Link>
      )}
    </>
  );
};

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
EmptyStateContent.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
EmptyStateContent.propTypes = {
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
