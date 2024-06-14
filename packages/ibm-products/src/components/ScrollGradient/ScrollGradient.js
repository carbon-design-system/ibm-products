/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useRef, useEffect, useCallback } from 'react';
// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg, carbon } from '../../settings';
import { throttle } from 'lodash';
import {
  ScrollDirection,
  ScrollStates,
  getScrollState,
  useIsOverflow,
} from './constants';
const blockClass = `${pkg.prefix}--scroll-gradient`;
const componentName = 'ScrollGradient';

// Default values for props
const defaults = {
  color: `var(--${carbon.prefix}-layer-01)`,
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
      children,
      className,
      color = defaults.color,
      onScroll = defaults.onScroll,
      scrollElementClassName,
      getScrollElementRef = defaults.getScrollElementRef,
      hideStartGradient = defaults.hideStartGradient,
      ...rest
    },
    ref
  ) => {
    const [verticalPosition, setVerticalPosition] = useState(ScrollStates.NONE);
    const [horizontalPosition, setHorizontalPosition] = useState(
      ScrollStates.NONE
    );
    const scrollContainer = useRef();
    const contentChildrenContainer = useRef();

    const updateScrollState = throttle(() => {
      const updatedVerticalVal = getScrollState(
        scrollContainer.current,
        ScrollDirection.Y
      );
      const updatedHorizontalVal = getScrollState(
        scrollContainer.current,
        ScrollDirection.X
      );
      setVerticalPosition(updatedVerticalVal);
      setHorizontalPosition(updatedHorizontalVal);
    }, 150);

    const scrollHandler = useCallback(
      (event) => {
        onScroll(event);
        updateScrollState();
      },
      [onScroll, updateScrollState]
    );

    const setRefs = (element) => {
      scrollContainer.current = element;
      getScrollElementRef(element);
    };

    useEffect(() => {
      scrollHandler();
    }, [scrollHandler]);

    const { xScrollable, yScrollable } = useIsOverflow(scrollContainer);

    const gradientRight =
      yScrollable && scrollContainer.current && contentChildrenContainer.current
        ? scrollContainer.current.offsetWidth -
          contentChildrenContainer.current.offsetWidth
        : 0;
    const gradientBottom =
      xScrollable && scrollContainer.current && contentChildrenContainer.current
        ? scrollContainer.current.offsetHeight -
          contentChildrenContainer.current.offsetHeight
        : 0;

    return (
      <div
        {...rest}
        className={cx(
          blockClass,
          `${blockClass}--x-${horizontalPosition.toLowerCase()}`,
          `${blockClass}--y-${verticalPosition.toLowerCase()}`,
          {
            [`${blockClass}--x-scrollable`]: xScrollable,
            [`${blockClass}--y-scrollable`]: yScrollable,
          },
          className
        )}
        ref={ref}
        role="presentation"
        {...getDevtoolsProps(componentName)}
      >
        {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
        <div
          onScroll={scrollHandler}
          ref={setRefs}
          className={cx(`${blockClass}__content`, scrollElementClassName)}
          tabIndex={0}
        >
          <div
            ref={contentChildrenContainer}
            className={`${blockClass}__content-children`}
          >
            {children}
          </div>
        </div>

        {/* Gradient elements */}
        {!hideStartGradient && (
          <>
            <div
              className={`${blockClass}__start-vertical`}
              style={{
                right: gradientRight,
                backgroundImage: `linear-gradient(0deg, transparent, ${color} 90%)`,
              }}
              role="presentation"
              aria-hidden
            />
            <div
              className={`${blockClass}__start-horizontal`}
              style={{
                backgroundImage: `linear-gradient(-90deg, transparent, ${color} 90%)`,
                bottom: gradientBottom,
              }}
              role="presentation"
              aria-hidden
            />
          </>
        )}
        <div
          className={`${blockClass}__end-vertical`}
          style={{
            right: gradientRight,
            bottom: gradientBottom,
            backgroundImage: `linear-gradient(0deg, ${color} 10%, transparent)`,
          }}
          role="presentation"
          aria-hidden
        />
        <div
          className={`${blockClass}__end-horizontal`}
          style={{
            right: gradientRight,
            bottom: gradientBottom,
            backgroundImage: `linear-gradient(-90deg, ${color} 10%, transparent)`,
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
  color: PropTypes.string,

  /** @type {(element: HTMLElement) => {}} Optional function to get reference to scrollable DOM element */
  getScrollElementRef: PropTypes.func,

  /** @type {boolean} Set to true if you want to hide gradient on the start side (top or left) of scrollable element. */
  hideStartGradient: PropTypes.bool,

  /** @type {Function} Optional scroll handler */
  onScroll: PropTypes.func,

  /** @type {string} Optional classname for scroll element. */
  scrollElementClassName: PropTypes.string,
};
