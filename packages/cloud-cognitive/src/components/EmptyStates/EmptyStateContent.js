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
  actionText,
  actionType,
  actionIcon,
  linkText,
  linkUrl,
  onActionEvent,
  subtitle,
  title,
}) => {
  return (
    <>
      {typeof title !== 'string' ? (
        title
      ) : (
        <h3 className={`${blockClass}__header`}>{title}</h3>
      )}
      {typeof subtitle !== 'string' ? (
        subtitle
      ) : (
        <p className={`${blockClass}__subtext`}>{subtitle}</p>
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
   * Empty state subtitle
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Empty state title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
