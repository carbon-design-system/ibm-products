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
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--scroll-gradient`;
const componentName = 'ScrollGradient';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const scrollDirection = { X: 'X', Y: 'Y' };

// Default values for props
const defaults = {
  direction: scrollDirection.Y,
  hideStartGradient: false,
  onScroll: () => {},
  getScrollElementRef: () => {},
};

/**
 * TODO: A description of the component.
 */
export let ScrollGradient = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children /* TODO: remove if not needed. */,
      className,
      direction = defaults.direction,
      color,
      onScroll = defaults.onScroll,
      scrollElementClassName,
      getScrollElementRef = defaults.getScrollElementRef,
      hideStartGradient = defaults.hideStartGradient,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const gradientRotation =
      direction === ScrollGradient.ScrollDirection.X ? -90 : 0;

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          `${blockClass}--${position.toLowerCase()}`,
          `${blockClass}--${direction.toLowerCase()}`,
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        ref={ref}
        role="presentation"
        {...getDevtoolsProps(componentName)}
      >
        {!hideStartGradient && (
          <div
            className={`${blockClass}__before`}
            style={{
              backgroundImage: `linear-gradient(${gradientRotation}deg, rgba(0,0,0,0), ${color} 90%)`,
            }}
            role="presentation"
            aria-hidden
          />
        )}
        <div
          onScroll={this.scrollHandler}
          ref={this.setRefs}
          className={cx(`${blockClass}__content`, scrollElementClassName)}
        >
          {children}
        </div>
        <div
          className={`${blockClass}__after`}
          style={{
            backgroundImage: `linear-gradient(${gradientRotation}deg, ${color} 10%, rgba(0,0,0,0))`,
          }}
          role="presentation"
          aria-hidden
        />
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
ScrollGradient = pkg.checkComponentEnabled(ScrollGradient, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
ScrollGradient.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
ScrollGradient.propTypes = {
  /**
   * Provide the contents of the ScrollGradient.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /** @type {string} Fade out color. Any valid CSS color value works */
  color: PropTypes.string.isRequired,

  /** @type {string} Scroll direction */
  direction: PropTypes.oneOf(['X', 'Y']),

  /** @type {(element: HTMLElement) => {}} Optional function to get reference to scrollable DOM element */
  getScrollElementRef: PropTypes.func,

  /** @type {boolean} Set to true if you want to hide gradient on the start side (top or left) of scrollable element. */
  hideStartGradient: PropTypes.bool,

  /** @type {Function} Optional scroll handler */
  onScroll: PropTypes.func,

  /** @type {string} Optional classname for scroll element. */
  scrollElementClassName: PropTypes.string,
};
