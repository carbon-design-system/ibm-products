/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
/* @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--loading-bar`;
const componentName = 'LoadingBar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The LoadingBar component provides a way to communicate the loading state to users.
 * It is intended to fill the space of where it's used, and should persist until the
 * loading action is complete. Once complete, the active prop may be set to false to
 * hide the LoadingBar.
 * The LoadingBar has two modes of operation: Indeterminate and Determinate.
 * If no percentage is provided to the component, the LoadingBar behaves in indeterminate
 * mode, with the bar moving from side to side, to indicate loading in progress.
 * If a percentage prop is provided, the determinate mode of operation is used and the
 * loading bar fills until the specified percentage to indicate current progress to
 * the user.
 */
export let LoadingBar = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      active,
      ariaLabel,
      className,
      id,
      percentage,
      percentageIndicatorText,
      showPercentageIndicator,
      small,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        // Store current value in ref
        ref.current = value;
      }, [value]); // Only re-run if value changes
      // Return previous value (happens before update in useEffect above)
      return ref.current;
    }
    const prevActive = usePrevious(active);

    const isDeterminate = percentage !== undefined;
    const percentProgress = isDeterminate
      ? percentage > 100
        ? `100%`
        : percentage + '%'
      : 0;
    const actuallyShowPercentageIndicator =
      isDeterminate && showPercentageIndicator;
    // switch classes dependant on props
    const loadingWrapper = cx({
      [`${blockClass}__preload`]: !prevActive && !active,
    });
    const loadingClassName = cx({
      [`${blockClass}__inner`]: true,
      [`${blockClass}__small`]: small,
      [`${blockClass}__linear-stop`]: !active && isDeterminate,
      [`${blockClass}__indefinite-stop`]: !active && !isDeterminate,
    });
    const animationClassName = cx({
      [`${blockClass}__linear-progress`]: isDeterminate,
      [`${blockClass}__stop-progress`]: !active && !isDeterminate,
      [`${blockClass}__indefinite-progress`]: active && !isDeterminate,
    });
    const loadingId = id && `loading-bar-id-${id}`;

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          loadingWrapper,
          // Apply any supplied class names to the main HTML element.
          className,
          blockClass
        )}
        ref={ref}
        role="progressbar"
        aria-label={ariaLabel}
        aria-atomic="true"
        aria-labelledby={loadingId}
        aria-live={active ? 'assertive' : 'off'}
        id={loadingId}
      >
        <div className={loadingClassName}>
          <div
            {...(isDeterminate && { style: { width: percentProgress } })}
            className={`${blockClass}__progress`}
          >
            <div className={animationClassName} />
          </div>
        </div>
        {actuallyShowPercentageIndicator && (
          <div className={`${blockClass}__indicator-wrapper`}>
            <div className={`${blockClass}__indicator`}>
              {active && percentageIndicatorText}
            </div>
          </div>
        )}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
LoadingBar = pkg.checkComponentEnabled(LoadingBar, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
LoadingBar.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
LoadingBar.propTypes = {
  /**
   * Specify whether you want the loading bar indicator to be active or not
   */
  active: PropTypes.bool.isRequired,

  /**
   * Specify a ariaLabel that would be used to best describe the active loading state
   */
  ariaLabel: PropTypes.string,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * ID for loading bar
   */
  id: PropTypes.string,

  /**
   * Leave undefined for indeterminate duration or specify percentage complete that the determinate bar should indicate (0-100).
   */
  percentage: PropTypes.number,

  /**
   * In determinate mode, provide text to be shown on percentage indicator
   */
  percentageIndicatorText: PropTypes.string,

  /**
   * In determinate mode, specify whether to show the percentage indicator.
   */
  showPercentageIndicator: PropTypes.bool,

  /**
   * Specify whether you would like the small variant of this component
   */
  small: PropTypes.bool,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
LoadingBar.defaultProps = {
  /* add defaults for relevant props. */
  active: true,
  small: false,
  percentage: undefined,
  showPercentageIndicator: false,
  percentageIndicatorText: undefined,
  ariaLabel: 'Active loading indicator',
};
