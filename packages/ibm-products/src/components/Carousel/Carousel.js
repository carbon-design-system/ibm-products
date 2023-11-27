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
  // useState,
} from 'react';

import PropTypes from 'prop-types';
import { CarouselItem } from './CarouselItem';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--carousel`;
const componentName = 'Carousel';

// Default values for props
const defaults = {
  disableArrowScroll: false,
  onScroll: () => {},
  onChangeIsScrollable: () => {},
};

/**
 * The Carousel acts as a scaffold for other Novice to Pro content.
 *
 * This component is not intended for general use.
 *
 * Expected scrolling behavior.
 * 1. Scroll the maximum number of visible items at a time.
 * 2. The left-most item should always be left-aligned in the viewport.
 *
 * Exception.
 * 1. After scrolling to the last (right-most) item,
 *      if some of its content remains hidden,
 *      then nudge it to the right until it is right-aligned.
 * 2. From the right-aligned position, when scrolling left,
 *      the left-most item should again be left-aligned.
 */
export let Carousel = React.forwardRef(
  (
    {
      children,
      className,
      disableArrowScroll = defaults.disableArrowScroll,
      fadedEdgeColor,
      onChangeIsScrollable = defaults.onChangeIsScrollable,
      onScroll = defaults.onScroll,
      ...rest
    },
    ref
  ) => {
    const carouselRef = useRef();
    const scrollRef = useRef();
    const leftFadedEdgeColor = fadedEdgeColor?.left || fadedEdgeColor;
    const rightFadedEdgeColor = fadedEdgeColor?.right || fadedEdgeColor;

    // Return the current state of the carousel.
    const getWidths = useCallback(() => {
      const ref = scrollRef.current;
      // carousel items (DOM)
      const items = ref.querySelectorAll(`.${blockClass}__item`);
      // viewport's width
      const clientWidth = ref.clientWidth;
      // scroll position
      const scrollLeft = parseInt(ref.scrollLeft, 10);
      // scrollable width
      const scrollWidth = ref.scrollWidth;

      let itemWidths = [];
      items.forEach((item) => itemWidths.push(item.clientWidth));

      return {
        clientWidth,
        itemWidths,
        scrollLeft,
        scrollWidth,
      };
    }, []);

    // Trigger callbacks to report state of the carousel
    const handleScroll = useCallback(() => {
      const { clientWidth, scrollLeft, scrollWidth } = getWidths();
      // The maximum scrollLeft achievable is the scrollable width - the viewport width.
      const scrollLeftMax = scrollWidth - clientWidth;
      // if isNaN(scrollLeft / scrollLeftMax), then set to zero
      const scrollPercent =
        parseFloat((scrollLeft / scrollLeftMax).toFixed(2)) || 0;

      if (!scrollRef.current) {
        return;
      }

      // Callback 1: Does the carousel have enough content to enable scrolling?
      onChangeIsScrollable(scrollWidth > clientWidth);

      // Callback 2: Return the percentage of current scroll, between 0 and 1.
      onScroll(scrollPercent);
    }, [getWidths, onChangeIsScrollable, onScroll]);

    const handleNext = useCallback(() => {
      const { clientWidth, itemWidths, scrollLeft } = getWidths();
      let newScrollLeft = 0;
      const maxScrollLeft = scrollLeft + clientWidth;

      // Cycle through all items, from the beginning.
      for (let index = 0; index < itemWidths.length - 1; index++) {
        const itemWidth = itemWidths[index];
        if (newScrollLeft + itemWidth < maxScrollLeft) {
          newScrollLeft += itemWidth;
        } else {
          break;
        }
      }

      console.log(
        'clientWidth, itemWidths, scrollLeft,',
        clientWidth,
        itemWidths,
        scrollLeft
      );

      scrollRef.current.scrollLeft = parseInt(newScrollLeft, 10);

      handleScroll();
    }, [getWidths, handleScroll]);

    const handlePrev = useCallback(() => {
      const { clientWidth, itemWidths, scrollLeft, scrollWidth } = getWidths();
      let newScrollLeft = scrollWidth;
      let maxScrollLeft;

      // Exception; if already scrolled all the way to the left,
      // then skip this action.
      if (scrollLeft === 0) {
        return;
      }

      if (scrollLeft + clientWidth < scrollWidth) {
        // Default: the carousel's scroll is not all the way to the right.
        // The default max scroll is (the current scroll - the viewport's width)
        maxScrollLeft = scrollLeft - clientWidth;
      } else {
        // Exception: if scrolled all the way to the right, then the items are right-aligned with the component.
        // Set the initial target scroll to (the max scrollable width - the viewport's width)...
        maxScrollLeft = scrollWidth - clientWidth;
        // ...and starting from the last item, find the maximum scroll that can be left-aligned.
        // Cycle through all items, from the end.
        for (let index = itemWidths.length - 1; index >= 0; index--) {
          if (scrollLeft - clientWidth + itemWidths[index] < maxScrollLeft) {
            maxScrollLeft -= itemWidths[index];
          } else {
            break;
          }
        }
      }

      // Calculate exact scroll.
      // Cycle through all items, from the end.
      for (let index = itemWidths.length - 1; index >= 0; index--) {
        const itemWidth = itemWidths[index];
        if (newScrollLeft - itemWidth >= maxScrollLeft) {
          newScrollLeft -= itemWidth;
        } else {
          break;
        }
      }

      scrollRef.current.scrollLeft = parseInt(newScrollLeft, 10);

      handleScroll();
    }, [getWidths, handleScroll]);

    const handleReset = useCallback(() => {
      scrollRef.current.scrollLeft = 0;
    }, []);

    // Trigger a callback after first render (and applied CSS).
    useEffect(() => {
      // Normally, we can trigger a callback "immediately after first
      // render", because we will be doing more "logical" work (update
      // a state, show / hide a feature, etc.), and the final, applied
      // CSS,can "catch up" asynchronously without breaking anything.
      setTimeout(() => {
        // Because we are making calculations based on the final,
        // applied CSS, we must wait for one more "tick".
        handleScroll();
      }, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // On window.resize, reset carousel to zero.
    useEffect(() => {
      const handleWindowResize = () => {
        scrollRef.current.scrollLeft = 0;
        handleScroll();
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleScroll]);

    // On scrollRef.scrollend, trigger a callback.
    useEffect(() => {
      const handleScrollend = () => {
        handleScroll();
      };

      const scrollDiv = scrollRef.current;
      scrollDiv.addEventListener('scrollend', handleScrollend);
      return () => scrollDiv.removeEventListener('scrollend', handleScrollend);
    }, [handleScroll]);

    // Disable wheel scrolling
    useEffect(() => {
      function handleWheel(event) {
        // update the scroll position
        event.stopPropagation();
        event.preventDefault();
        event.cancelBubble = false;
      }
      const scrollDiv = scrollRef.current;
      if (scrollDiv) {
        scrollDiv.addEventListener('wheel', handleWheel, {
          passive: false,
        });
        return () => {
          scrollDiv.removeEventListener('wheel', handleWheel, {
            passive: false,
          });
        };
      }
    }, []);

    // Enable arrow scrolling from within the carousel
    useEffect(() => {
      function handleKeydown(event) {
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

      const carouselDiv = carouselRef.current;
      if (carouselDiv) {
        carouselDiv.addEventListener('keydown', handleKeydown);
        return () => carouselDiv.removeEventListener('keydown', handleKeydown);
      }
    }, [disableArrowScroll]);

    // Enable external function calls
    useImperativeHandle(
      ref,
      () => ({
        scrollNext() {
          handleNext();
        },
        scrollPrev() {
          handlePrev();
        },
        scrollReset() {
          handleReset();
        },
      }),
      [handleNext, handlePrev, handleReset]
    );

    return (
      <div
        {...rest}
        tabIndex={-1}
        className={cx(blockClass, className)}
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

          {leftFadedEdgeColor && (
            <div
              className={`${blockClass}__elements-container--scrolled`}
              style={{
                background: `linear-gradient(90deg, ${leftFadedEdgeColor}, transparent)`,
              }}
            ></div>
          )}

          {rightFadedEdgeColor && (
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
   * Pass a single string (`$color`) to specify the same color for left and right.
   *
   * Or pass an object (`{ left: $color1, right: $color2 }`) to specify different colors.
   */
  fadedEdgeColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ left: PropTypes.string, right: PropTypes.string }),
  ]),
  /**
   * An optional callback function that returns `true`
   * when the carousel has enough content to be scrollable,
   * and `false` when there is not enough content.
   */
  onChangeIsScrollable: PropTypes.func,
  /**
   * An optional callback function that returns the scroll position as
   * a value between 0 and 1.
   */
  onScroll: PropTypes.func,
};
