/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import { Link } from 'carbon-components-react';
import { Canary } from '../_Canary';

/**
 * TODO: @import(s) of carbon components
 */

/**
 * TODO: Add use of Carbon prefix if needed
 */
import { pkg /*, carbon */ } from '../../settings';

const blockClass = `${pkg.prefix}--http-errors`;
const componentName = 'HTTPErrors';

/**
 * TODO: Description.
 */
export const HTTPErrors = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({ className, description, errorCodeLabel, title, links, ...rest }) => {
      return (
        <div className={cx(blockClass, className)} {...rest}>
          <p className={cx(`${blockClass}-error-code-label`)}>
            {errorCodeLabel}
          </p>
          <h1 className={cx(`${blockClass}-title`)}>{title}</h1>
          <p className={cx(`${blockClass}-description`)}>{description}</p>
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

HTTPErrors.defaultProps = {
  className: null,
};
