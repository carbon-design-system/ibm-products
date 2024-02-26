/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { layer01 } from '@carbon/themes';
// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
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
  color: layer01,
  direction: ScrollDirection.Y,
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
      direction = defaults.direction,
      color = defaults.color,
      onScroll = defaults.onScroll,
      scrollElementClassName,
      getScrollElementRef = defaults.getScrollElementRef,
      hideStartGradient = defaults.hideStartGradient,
      ...rest
    },
    ref
  ) => {
    // const gradientRotation = direction === ScrollDirection.X ? -90 : 0;
    //const [scrollPosition, setScrollPosition] = useState(0);
    const [position, setPosition] = useState(ScrollStates.NONE);
    const scrollContainer = useRef();

    const updateScrollState = throttle(() => {
      const updatedVal = getScrollState(scrollContainer.current, direction);
      //console.log('updatedVal: ', updatedVal);
      setPosition(updatedVal);
    }, 150);

    // const handleContainerResize = () => {
    //   console.log('RESIZING... ');
    //   //scrollContainer.current
    // };

    // const getScrollPosition = () => {
    //   if (!scrollContainer.current) {
    //     return 0;
    //   }
    //   if (direction === ScrollDirection.Y) {
    //     return scrollContainer.current.scrollTop;
    //   }
    //   return scrollContainer.current.scrollLeft;
    // };

    const scrollHandler = useCallback(
      (event) => {
        //console.log('Looking for scroll position: ', getScrollPosition());
        //setScrollPosition(scrollContainer.current)
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
      if (color) {
        document.documentElement.style.setProperty(
          `--${blockClass}--gradient-color`,
          color
        );
      }
    }, [color]);

    useEffect(() => {
      scrollHandler();
    }, [scrollHandler]);

    const { xScrollable, yScrollable } = useIsOverflow(scrollContainer);
    console.log('Scrollable? ', xScrollable);

    return (
      <div
        {...rest}
        className={cx(
          blockClass,
          `${blockClass}--${position.toLowerCase()}`,
          `${blockClass}--${direction.toLowerCase()}`,
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
        {!hideStartGradient && (
          <div
            className={cx(`${blockClass}__before`, `${blockClass}__start`)}
            // style={{
            //   backgroundImage: `linear-gradient(${gradientRotation}deg, rgba(0,0,0,0), ${color} 90%)`,
            // }}
            role="presentation"
            aria-hidden
          />
        )}
        <div
          onScroll={scrollHandler}
          ref={setRefs}
          className={cx(`${blockClass}__content`, scrollElementClassName)}
        >
          {children}
        </div>
        <div
          className={cx(`${blockClass}__after`, `${blockClass}__end`)}
          // style={{
          //   backgroundImage: `linear-gradient(${gradientRotation}deg, ${color} 10%, rgba(0,0,0,0))`,
          // }}
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
  direction: PropTypes.oneOf(Object.values(ScrollDirection)),

  /** @type {(element: HTMLElement) => {}} Optional function to get reference to scrollable DOM element */
  getScrollElementRef: PropTypes.func,

  /** @type {boolean} Set to true if you want to hide gradient on the start side (top or left) of scrollable element. */
  hideStartGradient: PropTypes.bool,

  /** @type {Function} Optional scroll handler */
  onScroll: PropTypes.func,

  /** @type {string} Optional classname for scroll element. */
  scrollElementClassName: PropTypes.string,
};
