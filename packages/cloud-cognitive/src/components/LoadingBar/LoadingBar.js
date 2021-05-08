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
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--loading-bar`;
const componentName = 'LoadingBar';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * TODO: A description of the component.
 */
export let LoadingBar = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      children /* TODO: remove if not needed. */,
      className,
      kind,
      size,
      /* TODO: add other props for LoadingBar */
      active,
      small,
      percentage,
      showPercentageIndicator,
      percentageIndicatorText,
      ariaLabel,
      id,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const { current: instanceId } = useRef(id ? id : null);

    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => { // Store current value in ref
        ref.current = value;
      }, [value]); // Only re-run if value changes
      // Return previous value (happens before update in useEffect above)
      return ref.current;
    }
    const prevActive = usePrevious(active);

    const isDeterminate = percentage !== undefined;
    const percProgress = isDeterminate ? percentage + '%' : 0;
    const showPercIndicator = isDeterminate && showPercentageIndicator;
    const loadingWrapper = cx({[`${blockClass}__preload`]: !prevActive && !active});
    const loadingClassName = cx(className, {
      [`${blockClass}`]: true,
      [`${blockClass}__small`]: small,
      [`${blockClass}__linear-stop`]: !active && isDeterminate,
      [`${blockClass}__indefinite-stop`]: !active && !isDeterminate,
    });
    const animationClassName = cx({
      [`${blockClass}__linear-progress`]: isDeterminate,
      [`${blockClass}__stop-progress`]: !active && !isDeterminate,
      [`${blockClass}__indefinite-progress`]:
        active && !isDeterminate,
    });
    const loadingId = `loading-bar-id-${instanceId}`;

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            [`${blockClass}__here-if-small`]: size === 'small',
            [`${blockClass}__here-if-field`]: size === 'field',
          }
        )}
        ref={ref}
        role="main">
        <div className={loadingWrapper}>
          <div
            {...rest}
            id={loadingId}
            aria-label={ariaLabel}
            aria-atomic="true"
            aria-labelledby={loadingId}
            aria-live={active ? 'assertive' : 'off'}
            className={loadingClassName}>
            <div
              {...(isDeterminate && { style: { width: percProgress } })}
              className={`${blockClass}__progress`}>
              <div className={animationClassName} />
            </div>
          </div>
          {showPercIndicator && (
            <div className={`${blockClass}__indicator-wrapper`}>
              <div className={`${blockClass}__indicator`}>
                {active && percentageIndicatorText}
              </div>
            </div>
          )}
        </div>
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
   * Provide the contents of the LoadingBar.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /* TODO: add types and DocGen for all props. */
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
LoadingBar.defaultProps = {
  /* TODO: add defaults for relevant props. */
};
