/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

// Other standard imports.
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { CarouselItem } from './CarouselItem';
import { clamp, useIsOverflow, useWindowEvent } from './utils';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--carousel`;
const componentName = 'Carousel';

// Default values for props
const defaults = {
  disableArrowScroll: false,
  scrollTune: 0,
  theme: 'light',
};

/**
 * DO NOT USE. This component is for the exclusive use
 * of other Novice to Pro components.
 */
export let Carousel = React.forwardRef(
  (
    {
      children,
      className,
      disableArrowScroll = defaults.disableArrowScroll,
      fadedEdgeColor,
      scrollableChange,
      scrollTune = defaults.scrollTune,
      theme = defaults.theme,
      ...rest
    },
    ref
  ) => {
    const carouselScrollPromiseDelay = 700;
    const totalViews = React.Children.count(children) || 1;
    const leftFadedEdgeColor = fadedEdgeColor?.left || fadedEdgeColor;
    const rightFadedEdgeColor = fadedEdgeColor?.right || fadedEdgeColor;
    const [currentViewID, _setCurrentViewID] = useState(0);
    const currentViewIDRef = useRef(currentViewID);
    const scrollRef = useRef();
    const carouselRef = useRef();
    const isScrollable = useIsOverflow(scrollRef);
    // Scrolling has no complete callback, nor does it return a promise.
    // Since there is no way to tell when a scroll is finished we can set a timeout.
    // Chrome appears to be the slowest implementation.
    // Here is the spec: https://drafts.csswg.org/cssom-view/#concept-smooth-scroll
    // found issue: https://github.com/w3c/csswg-drafts/issues/3744

    const scrollNext = useCallback(() => {
      return scrollToView(currentViewID + 1);
    }, [currentViewID, scrollToView]);

    const scrollPrev = useCallback(() => {
      return scrollToView(currentViewID - 1);
    }, [currentViewID, scrollToView]);

    const scrollToView = useCallback(
      (viewID) => {
        if (!isScrolling) {
          const targetViewID = clamp(viewID, 0, totalViews - 1);
          setCurrentViewID(targetViewID);
          setIsScrolling(true);
          scrollRef.current.scrollLeft =
            scrollRef.current?.offsetWidth * targetViewID + scrollTune;
          return scrollPromise();
        }
        return new Promise((resolve) => resolveScroll(resolve));
      },
      [isScrolling, resolveScroll, scrollPromise, scrollTune, totalViews]
    );

    const scrollPromise = useCallback(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolveScroll(resolve), carouselScrollPromiseDelay);
      });
    }, [resolveScroll]);

    const resolveScroll = useCallback((resolve) => {
      setIsScrolling(false);
      const percentage = scrollPosition() / maxScroll();
      return resolve(parseFloat(percentage.toFixed(2)));
    }, []);

    const scrollPosition = () => {
      return scrollRef.current?.scrollLeft;
    };
    const maxScroll = () => {
      return scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth;
    };

    const handleResize = debounce(() => {
      scrollToView(currentViewIDRef.current);
    }, 200);

    const setCurrentViewID = (val) => {
      currentViewIDRef.current = val;
      _setCurrentViewID(val);
    };
    const [isScrolling, setIsScrolling] = useState(false);

    // EFFECTS
    useWindowEvent('resize', handleResize);

    useEffect(() => {
      if (scrollableChange) {
        scrollableChange(isScrollable);
      }
    }, [isScrollable, scrollableChange]);

    useEffect(() => {
      function updateScrollPosition(event) {
        // update the scroll position
        event.stopPropagation();
        event.preventDefault();
        event.cancelBubble = false;
      }
      const scrollDiv = scrollRef.current;
      if (scrollDiv) {
        scrollDiv.addEventListener('wheel', updateScrollPosition, {
          passive: false,
        });
        return () => {
          scrollDiv.removeEventListener('wheel', updateScrollPosition, {
            passive: false,
          });
        };
      }
    }, []);

    useEffect(() => {
      function keypress(event) {
        const { key } = event;

        if (
          (key === 'ArrowLeft' || key === 'ArrowRight') &&
          disableArrowScroll
        ) {
          event.stopPropagation();
          event.preventDefault();
          event.cancelBubble = false;
        }
      }
      const outerDiv = carouselRef.current;
      if (outerDiv) {
        outerDiv.addEventListener('keydown', keypress);
        return () => outerDiv.removeEventListener('keydown', keypress);
      }
    }, [disableArrowScroll]);

    useImperativeHandle(
      ref,
      () => ({
        scrollNext,
        scrollPrev,
        scrollToView,
        maxScroll,
      }),
      [scrollNext, scrollPrev, scrollToView]
    );

    const isScrolled = scrollPosition() > 0;
    const isScrollMax = maxScroll() === scrollPosition();

    return (
      <div
        {...rest}
        tabIndex={-1}
        className={cx(blockClass, className, `${blockClass}__${theme}`)}
        ref={carouselRef}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        <div className={cx(`${blockClass}__elements-container`)}>
          <div className={`${blockClass}__elements`} ref={scrollRef}>
            {React.Children.map(children, (child) => {
              return <CarouselItem>{child}</CarouselItem>;
            })}
          </div>

          {leftFadedEdgeColor && isScrolled && (
            <div
              className={`${blockClass}__elements-container--scrolled`}
              style={{
                background: `linear-gradient(90deg, ${leftFadedEdgeColor}, transparent)`,
              }}
            ></div>
          )}

          {rightFadedEdgeColor && !isScrollMax && (
            <div
              className={`${blockClass}__elements-container--scroll-max`}
              style={{
                background: `linear-gradient(270deg, ${rightFadedEdgeColor}, transparent)`,
              }}
            ></div>
          )}
        </div>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
Carousel = pkg.checkComponentEnabled(Carousel, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Carousel.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Carousel.propTypes = {
  /**
   * Provide the contents of the Carousel.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Disables the ability of the Carousel to scroll
   * use a keyboard's left and right arrow keys.
   */
  disableArrowScroll: PropTypes.bool,
  /**
   * Enables the edges of the component to have faded styling.
   *
   * Pass a single string to specify the same color for left and right.
   *
   * Pass `{ left: $color1, right: $color2 }` to specify different colors.
   */
  fadedEdgeColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ left: PropTypes.string, right: PropTypes.string }),
  ]),
  /**
   * Determines how much of the Carousel moves into view on rotation.
   */
  scrollTune: PropTypes.number,
  /**
   * An optional callback function that returns `true`
   * when the carousel has completed scrolling a single item.
   */
  scrollableChange: PropTypes.func,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};