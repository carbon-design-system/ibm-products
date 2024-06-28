/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import PropTypes from 'prop-types';
import { CarouselItem } from './CarouselItem';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

export interface CarouselProps {
  /**
   * Provide the contents of the Carousel.
   */
  children: ReactNode;
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * Disables the ability of the Carousel to scroll
   * use a keyboard's left and right arrow keys.
   */
  disableArrowScroll?: boolean;
  /**
   * Enables the edges of the component to have faded styling.
   *
   * Pass a single string (`$color`) to specify the same color for left and right.
   *
   * Or pass an object (`{ left: $color1, right: $color2 }`) to specify different colors.
   */
  fadedEdgeColor?: string | { left: string; right: string };
  /**
   * An optional callback function that returns `true`
   * when the carousel has enough content to be scrollable,
   * and `false` when there is not enough content.
   */
  onChangeIsScrollable?: (isScrollable: boolean) => void;
  /**
   * An optional callback function that returns the scroll position as
   * a value between 0 and 1.
   */
  onScroll?: (scrollPercent: number) => void;
  /**
   * Additional props passed to the component.
   */
  [key: string]: any;
}

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
 * The Carousel acts as a scaffold for other Onboarding content.
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
const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
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
    const carouselRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    // Array of refs used to reference this component's children DOM elements
    const childElementsRef = useRef(
      Array(React.Children.count(children)).fill(useRef(null))
    );
    const leftFadedEdgeColor =
      typeof fadedEdgeColor === 'object'
        ? fadedEdgeColor?.left
        : fadedEdgeColor;
    const rightFadedEdgeColor =
      typeof fadedEdgeColor === 'object'
        ? fadedEdgeColor?.right
        : fadedEdgeColor;

    // Trigger callbacks to report state of the carousel
    const handleOnScroll = useCallback(() => {
      if (!scrollRef.current) {
        return;
      }

      // viewport's width
      const clientWidth = scrollRef.current?.clientWidth;
      // scroll position
      const scrollLeft = parseInt(`${scrollRef.current?.scrollLeft}`, 10);
      // scrollable width
      const scrollWidth = scrollRef.current?.scrollWidth;

      // The maximum scrollLeft achievable is the scrollable width - the viewport width.
      const scrollLeftMax = scrollWidth - clientWidth;
      // if isNaN(scrollLeft / scrollLeftMax), then set to zero
      const scrollPercent =
        parseFloat((scrollLeft / scrollLeftMax).toFixed(2)) || 0;

      // Callback 1: Does the carousel have enough content to enable scrolling?
      onChangeIsScrollable(scrollWidth > clientWidth);

      // Callback 2: Return the percentage of current scroll, between 0 and 1.
      onScroll(scrollPercent);
    }, [onChangeIsScrollable, onScroll]);

    // Check if an individual child element is visible in the container
    const getElementInView = useCallback((containerRect, elementRect) => {
      // Is the element's left greater than or equal to the containers left
      const elementLeftIsRightOfContainerLeft =
        elementRect.left >= containerRect.left;
      // Is the element's right less than or equal to the containers right
      const elementRightIsLeftOfContainerRight =
        elementRect.right <= containerRect.right;

      return (
        elementLeftIsRightOfContainerLeft && elementRightIsLeftOfContainerRight
      );
    }, []);

    // Get all elements that are visible in the container.
    const getElementsInView = useCallback(() => {
      const containerRect = scrollRef?.current?.getBoundingClientRect();
      const inViewElements = childElementsRef.current.filter((el) =>
        getElementInView(containerRect, el.getBoundingClientRect())
      );
      return inViewElements;
    }, [getElementInView]);

    // Return container's and children's rect data
    const getContainerAndChildRectData = useCallback(() => {
      // Get the rect of the container
      const containerRect = scrollRef?.current?.getBoundingClientRect();
      // Get all child elements that are in view of the container, and return their bounding rects.
      const elementRectsInView = getElementsInView().map((el) =>
        el.getBoundingClientRect()
      );

      // What is the overall width of the visible elements in the container
      // Note: may end up being 0 if the container's width is less than the child's width
      const visibleWidth = elementRectsInView.reduce(
        (accumulator, currentValue) => accumulator + currentValue.width,
        0
      );

      return { containerRect, elementRectsInView, visibleWidth };
    }, [getElementsInView]);

    const handleScrollNext = useCallback(() => {
      if (!scrollRef.current) {
        return;
      }
      const { containerRect, visibleWidth } = getContainerAndChildRectData();
      // Set the scrollValue to the visibleWidth, but if the visibleWidth value is 0, set it to the container's width
      const scrollValue =
        visibleWidth > 0 ? visibleWidth : containerRect?.width;
      // Increment the scrollLeft of the container
      scrollRef.current.scrollLeft += scrollValue;
    }, [getContainerAndChildRectData]);

    const handleScrollPrev = useCallback(() => {
      if (!scrollRef.current) {
        return;
      }
      const { containerRect, elementRectsInView, visibleWidth } =
        getContainerAndChildRectData();
      // Set the scrollValue to the visibleWidth minus the first child's left value,
      // but if the visibleWidth value is 0, set it to the container's width plus the container's left value
      const scrollValue =
        visibleWidth > 0
          ? visibleWidth - elementRectsInView[0].left
          : (containerRect?.width ?? 0) + (containerRect?.left ?? 0);

      // Decrement the scrollLeft of the container
      scrollRef.current.scrollLeft -= scrollValue;
    }, [getContainerAndChildRectData]);

    const handleScrollReset = useCallback(() => {
      if (!scrollRef.current) {
        return;
      }
      // This doesn't trigger "scrollend"...
      scrollRef.current.scrollLeft = 0;
      // ...so trigger a callback manually.
      handleOnScroll();
    }, [handleOnScroll]);

    const handleScrollToView = useCallback((itemNumber) => {
      childElementsRef.current[itemNumber].scrollIntoView();
    }, []);

    // Trigger a callback after first render (and applied CSS).
    useEffect(() => {
      // Normally, we can trigger a callback "immediately after first
      // render", because we will be doing more "logical" work (update
      // a state, show / hide a feature, etc.), and the final, applied
      // CSS can "catch up" asynchronously without breaking anything.
      setTimeout(() => {
        // But, because we are making calculations based on the final,
        // applied CSS, we must wait for one more "tick".
        handleOnScroll();
      }, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // On window.resize, reset carousel to zero.
    useEffect(() => {
      const handleWindowResize = () => {
        if (!scrollRef.current) {
          return;
        }
        scrollRef.current.scrollLeft = 0;
        handleOnScroll();
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleOnScroll]);

    // On scrollRef.scrollend, trigger a callback.
    useEffect(() => {
      const handleScrollend = () => {
        handleOnScroll();
      };

      const scrollDiv = scrollRef.current;
      scrollDiv?.addEventListener('scrollend', handleScrollend);
      return () => scrollDiv?.removeEventListener('scrollend', handleScrollend);
    }, [handleOnScroll]);

    // Disable wheel scrolling
    useEffect(() => {
      function handleWheel(event) {
        // update the scroll position
        if (event.shiftKey) {
          event.stopPropagation();
          event.preventDefault();
          event.cancelBubble = false;
        }
      }
      const scrollDiv = scrollRef.current;
      if (scrollDiv) {
        scrollDiv.addEventListener('wheel', handleWheel, {
          passive: false,
        });
        return () => {
          scrollDiv.removeEventListener('wheel', handleWheel);
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
      ref as React.RefObject<void>,
      () => ({
        scrollNext() {
          handleScrollNext();
        },
        scrollPrev() {
          handleScrollPrev();
        },
        scrollReset() {
          handleScrollReset();
        },
        scrollToView(itemNumber) {
          handleScrollToView(itemNumber);
        },
      }),
      [
        handleScrollNext,
        handleScrollPrev,
        handleScrollReset,
        handleScrollToView,
      ]
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
            {React.Children.map(children, (child, index) => {
              return (
                <CarouselItem
                  key={index}
                  ref={(element) => (childElementsRef.current[index] = element)}
                >
                  {child}
                </CarouselItem>
              );
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
  /**@ts-ignore*/
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

export { Carousel };
