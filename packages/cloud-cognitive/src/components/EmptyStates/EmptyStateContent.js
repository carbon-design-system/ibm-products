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
import cx from 'classnames';

// Carbon and package components we use.
import { Button, Link } from '@carbon/react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--empty-state`;
const componentName = 'EmptyStateContent';

export const EmptyStateContent = ({ action, link, size, subtitle, title }) => {
  return (
    <>
      <h3
        className={cx(`${blockClass}__header`, {
          [`${blockClass}__header--small`]: size === 'sm',
        })}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={cx(`${blockClass}__subtitle`, {
            [`${blockClass}__subtitle--small`]: size === 'sm',
          })}
        >
          {subtitle}
        </p>
      )}
      {action?.text && action?.onClick && (
        <Button
          {...action}
          className={`${blockClass}__action-button`}
          kind={action.kind || 'tertiary'}
          onClick={action.onClick}
          renderIcon={action.renderIcon || null}
        >
          {action.text}
        </Button>
      )}
      {link?.text && link?.href && (
        <Link {...link} className={`${blockClass}__link`} href={link.href}>
          {link.text}
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
   * Empty state action button
   */
  action: PropTypes.shape({
    ...Button.propTypes,
    iconDescription: PropTypes.string,
    kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    onClick: Button.propTypes.onClick,
    text: PropTypes.string,
  }),
  /**
   * Empty state link object
   */
  link: PropTypes.shape({
    ...Link.propTypes,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    href: PropTypes.string,
  }),
  /**
   * Empty state size
   */
  size: PropTypes.oneOf(['lg', 'sm']),
  /**
   * Empty state subtitle
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Empty state title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
