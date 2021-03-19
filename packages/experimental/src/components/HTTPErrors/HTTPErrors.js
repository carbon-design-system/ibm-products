/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'carbon-components-react';
import { pkg /*, carbon */ } from '../../settings';

const blockClass = `${pkg.prefix}--http-errors`;
const componentName = 'HTTPErrors';

export let HTTPErrors = ({
  className,
  description,
  errorCodeLabel,
  title,
  links,
}) => {
  return (
    <div
      className={cx(blockClass, `${blockClass}-content`, {
        [className]: className,
      })}>
      {errorCodeLabel && (
        <p className={cx(`${blockClass}-error-code-label`)}>{errorCodeLabel}</p>
      )}
      {title && <h1 className={cx(`${blockClass}-title`)}>{title}</h1>}
      {description && (
        <p className={cx(`${blockClass}-description`)}>{description}</p>
      )}
      {links && links.length
        ? links.map((link) => (
            <Link
              url={link.url}
              key={link.text}
              className={cx(`${blockClass}-link`)}>
              {link.text}
            </Link>
          ))
        : null}
    </div>
  );
};

// Return a placeholder if not released and not enabled by feature flag
HTTPErrors = pkg.checkComponentEnabled(HTTPErrors, componentName);

HTTPErrors.displayName = componentName; // displayName is used in preference to function.name by React

HTTPErrors.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: string,
  /**
   * String that will provide the description for the HTTP error code
   */
  description: string,
  /**
   * String that will describe the error that occurred
   */
  errorCodeLabel: string,
  /**
   * Links that will display for extra context when receiving particular errors
   */
  links: arrayOf(
    shape({
      /**
       * The text to display for the link
       */
      text: string.isRequired,
      /**
       * The link's destination
       */
      url: string.isRequired,
    })
  ),
  /**
   * This will be for the main title of the HTTP error component
   */
  title: string,
};
