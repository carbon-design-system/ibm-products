/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import { ErrorGenericSVG } from './assets/ErrorGenericSVG';
import { Error404SVG } from './assets/Error404SVG';
import { Error403SVG } from './assets/Error403SVG';

// Carbon and package components we use.
import { Grid, Column } from '@carbon/react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--full-page-error`;
const componentName = 'FullPageError';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  kind: 'custom',
};

/**
 * Display a full-page error when the requested page is unavailable to the user.
 * This is typically caused by issues with the requested URL or access permissions.
 */
export let FullPageError = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      children,
      className,
      description,
      label,
      kind = defaults.kind,
      title,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const errorData = {
      403: {
        svg: (
          <Error403SVG className={`${blockClass}__svg ${blockClass}__403`} />
        ),
      },
      404: {
        svg: (
          <Error404SVG className={`${blockClass}__svg ${blockClass}__404`} />
        ),
      },
      custom: {
        svg: (
          <ErrorGenericSVG
            className={`${blockClass}__svg ${blockClass}__custom`}
          />
        ),
      },
    };
    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <div className={`${blockClass}__container`}>
          <Grid className={`${blockClass}__grid`}>
            <Column sm={4} md={3} lg={6} className={`${blockClass}__column`}>
              <h1 className={`${blockClass}__title`}>
                <span className={`${blockClass}__label`}>↳ {label}</span>
                <span>{title}</span>
              </h1>
              <p className={`${blockClass}__description`}>{description}</p>
              <div className={`${blockClass}__body`}>{children}</div>
            </Column>
            <Column sm={4} md={5} lg={10}>
              <div className={`${blockClass}__svg-container`}>
                {errorData[kind].svg}
              </div>
            </Column>
          </Grid>
        </div>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
FullPageError = pkg.checkComponentEnabled(FullPageError, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
FullPageError.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
FullPageError.propTypes = {
  /**
   * Provide the contents of the FullPageError.
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * String that will provide the description for the error code. <br/>
   * This is optional for 403 and 404 kinds, and passing this would override their default descriptions.
   */
  description: PropTypes.string.isRequired,
  /**
   * The kind of error page to be displayed, default is custom
   */
  kind: PropTypes.oneOf(['custom', '403', '404']),
  /**
   * String that will describe the error that occurred
   */
  label: PropTypes.string.isRequired,
  /**
   * This will be for the main title of the FullPageError component
   */
  title: PropTypes.string.isRequired,
};
