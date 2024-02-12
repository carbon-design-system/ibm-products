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
import { Grid, Column } from '@carbon/react';
import { ErrorGenericSVG } from './assets/ErrorGenericSVG';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
import { Error404SVG } from './assets/Error404SVG';
import { Error403SVG } from './assets/Error403SVG';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--full-page-error`;
const componentName = 'FullPageError';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  kind: 'custom',
};

/**
 * TODO: A description of the component.
 */
export let FullPageError = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children /* TODO: remove if not needed. */,
      className,
      description,
      errorLabel,
      kind = defaults.kind,
      title,
      /* TODO: add other props for FullPageError, with default values if needed */

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const errorData = {
      403: {
        title: 'Access denied',
        description:
          'You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.',
        svg: (
          <Error403SVG
            className={cx(
              `${blockClass}__error-svg`,
              `${blockClass}__error-403`
            )}
          />
        ),
      },
      404: {
        title: 'Page not found',
        description:
          'The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.',
        svg: (
          <Error404SVG
            className={cx(
              `${blockClass}__error-svg`,
              `${blockClass}__error-404`
            )}
          />
        ),
      },
      custom: {
        title: title,
        description: description,
        svg: (
          <ErrorGenericSVG
            className={cx(
              `${blockClass}__error-svg`,
              `${blockClass}__error-custom`
            )}
          />
        ),
      },
    };
    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <div className={`${blockClass}__error-container`}>
          <Grid className={`${blockClass}__error-grid`}>
            <Column
              sm={4}
              md={3}
              lg={6}
              className={`${blockClass}__error-column`}
            >
              <h1 className={`${blockClass}__error-title`}>
                <span className={`${blockClass}__error-label`}>
                  ↳ {kind === 'custom' ? errorLabel : `Error ${kind}`}
                </span>
                <span>{errorData[kind].title}</span>
              </h1>
              <p className={`${blockClass}__description`}>
                {description || errorData[kind].description}
              </p>
              {children}
            </Column>
            <Column sm={4} md={5} lg={10}>
              <div className={`${blockClass}__error-svg-container`}>
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
   * String that will describe the error that occurred
   */
  errorLabel: PropTypes.string.isRequired,
  /**
   * The kind of error page to be displayed, default is custom
   */
  kind: PropTypes.oneOf(['custom', '403', '404']),
  /**
   * This will be for the main title of the FullPageError component
   */
  title: PropTypes.string.isRequired,

  /* TODO: add types and DocGen for all props. */
};
