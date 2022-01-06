/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
import {
  InlineLoading,
  Loading,
  //Unstable_ProgressBar,
} from 'carbon-components-react';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--progressive-loading`;
const componentName = 'ProgressiveLoading';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * A component to provide progressive loading bar/spinner behaviors.
 */
export let ProgressiveLoading = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      description,
      kind,
      percentage,
      progressLabel,
      size,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [label, setLabel] = useState(null);
    const isIndeterminate = typeof percentage !== 'number';
    const isActive = !isIndeterminate && percentage < 100;
    const isFinished = !isIndeterminate && !isActive;
    const classes = cx(blockClass, `${blockClass}--${kind}`, {
      [`${blockClass}--indeterminate`]: isIndeterminate,
      [`${blockClass}--active`]: isActive,
      [`${blockClass}--finished`]: isFinished,
    });

    // compute the progress label
    useEffect(() => {
      setLabel(
        typeof progressLabel === 'function'
          ? progressLabel(percentage)
          : progressLabel
      );
    }, [percentage, progressLabel]);

    if (kind === 'spinner') {
      if (size === 'sm') {
        return (
          <InlineLoading
            className={classes}
            iconDescription={description}
            description={label}
          />
        );
      } else {
        return <Loading withOverlay={false} description={description} />;
      }
    } else {
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
        />
      );
    }
  }
);

// Return a placeholder if not released and not enabled by feature flag
ProgressiveLoading = pkg.checkComponentEnabled(
  ProgressiveLoading,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
ProgressiveLoading.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
ProgressiveLoading.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * An optional description. This is displayed above the progress bar, or used as title text for a spinner.
   */
  description: PropTypes.string,

  /**
   * The kind of progressive loading display to use: 'bar' presents a linear progress bar, while 'spinner' presents
   * a rotating spinner using the Carbon Loading or InlineLoading components. The default value is 'bar'.
   */
  kind: PropTypes.oneOf(['bar', 'spinner']),

  /**
   * The percentage is a number from 0 to 100, or can be null for an 'indeterminate' presentation. For a bar, a
   * numerical percentage will determine the bar length and percentage display, while for a spinner a numerical
   * percentage will determine the percentage display and render an animated spinner if the percentage is less
   * than 100 and a full stationary spinner otherwise. Note that values below 0 will be treated as 0, and values
   * above 100 will be treated as 100. If this prop is omitted, the 'indeterminate' presentation is used.
   */
  percentage: PropTypes.number,

  /**
   * The label text to show as a progress display. If a function is supplied, the function will be called with
   * the current percentage value as its only argument and should return the string which will be used as the
   * label, or null if no label is to be shown. For example, a function something like this could be used:
   *   (pc) => pc ? `Loading: ${pc}%` : 'Loading...'
   */
  progressLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * The size of display to present. Small ('sm') will select a narrow progress bar or small inline spinner with
   * percentage displayed alongside, while large ('lg') will select a wide progress bar or full-size spinner with
   * percentage displayed inside. The default value is 'lg'.
   */
  size: PropTypes.oneOf(['sm', 'lg']),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
ProgressiveLoading.defaultProps = {
  kind: 'bar',
  size: 'lg',
};
