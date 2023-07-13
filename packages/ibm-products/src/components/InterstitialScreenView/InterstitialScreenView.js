/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Grid, Row } from 'carbon-components-react';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--interstitial-screen-view`;
const componentName = 'InterstitialScreenView';

/**
 * A Novice to Pro component intended to be used as the child elements of the InterstitialScreen component.
 */
export let InterstitialScreenView = React.forwardRef(
  (
    {
      title,
      description,
      className,
      stepTitle,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <div
        aria-label={stepTitle}
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
        <Grid>
          <Row>
            {/* Because modal and full screen view have different layout rules, the width is being handled via CSS */}
            <Column>
              {title && <h1 className={`${blockClass}--heading`}>{title}</h1>}
              {description && (
                <p className={`${blockClass}--body`}>{description}</p>
              )}
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
InterstitialScreenView = pkg.checkComponentEnabled(
  InterstitialScreenView,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
InterstitialScreenView.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
InterstitialScreenView.propTypes = {
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,
  /**
   * The description of this component.
   */
  description: PropTypes.string.isRequired,
  /**
   * The label to pass to the ProgressStep component.
   */
  stepTitle: PropTypes.string.isRequired,
  /**
   * The title of this component.
   */
  title: PropTypes.string.isRequired,
};
