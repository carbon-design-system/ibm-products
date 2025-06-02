//cspell: disable
/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import cx from 'classnames';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 100;
/** Primary UI component for user interaction */

interface ResizerProps {
  orientation: 'horizontal' | 'vertical';
  onResize?: (event: MouseEvent | KeyboardEvent, delta: number) => void;
  onResizeEnd?: (
    event: MouseEvent | KeyboardEvent,
    ref: React.RefObject<HTMLDivElement>
  ) => void;
  onDoubleClick?: (event: MouseEvent) => string | void;

  // Any other additional props
  [key: string]: any;
}

export const Resizer = ({
  orientation,
  onResize,
  onResizeEnd,
  onDoubleClick,
  ...rest
}: ResizerProps) => {
  const prefix = 'clabs';
  const blockClass = `${prefix}--resizer`;

  const ref = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  // Sizes of the previous and next siblings, gets modified during resizing
  const sizes = useRef({
    prevSiblingSize: { width: 0, height: 0 },
    nextSiblingSize: { width: 0, height: 0 },
  });
  // Initial sizes of the previous and next siblings, a static reference
  const initialSizes = useRef({
    prevSiblingSize: { width: 0, height: 0 },
    nextSiblingSize: { width: 0, height: 0 },
  });

  // Debounced function to handle resize end events
  // This is used to prevent multiple calls during a resize operation especially from keyboard when the key is held down
  // It will only call the onResizeEnd after the user has stopped resizing
  const debouncedResizeEnd = useRef(
    debounce((event) => {
      if (ref.current && onResizeEnd) {
        if (ref.current) {
          onResizeEnd(event, ref as React.RefObject<HTMLDivElement>);
        }
      }
    }, DEBOUNCE_DELAY)
  );

  // Initialize sizes of the previous and next siblings
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const prevSibling = ref.current.previousElementSibling as HTMLElement;
    const nextSibling = ref.current.nextElementSibling as HTMLElement;
    const rect = (el: Element) => el?.getBoundingClientRect();

    initialSizes.current = {
      prevSiblingSize: prevSibling
        ? { width: rect(prevSibling).width, height: rect(prevSibling).height }
        : { width: 0, height: 0 },
      nextSiblingSize: nextSibling
        ? { width: rect(nextSibling).width, height: rect(nextSibling).height }
        : { width: 0, height: 0 },
    };
  }, []);

  const updateSizes = useCallback(
    (event, delta: number) => {
      if (!ref.current) {
        return;
      }

      if (onResize) {
        onResize(event, delta);
        return;
      }

      const prevSibling = ref.current.previousElementSibling as HTMLElement;
      const nextSibling = ref.current.nextElementSibling as HTMLElement;
      const prop = orientation === 'horizontal' ? 'height' : 'width';

      if (prevSibling) {
        const newSize = sizes.current.prevSiblingSize[prop] + delta;
        prevSibling.style[prop] = `${newSize}px`;
      }
      if (nextSibling) {
        const newSize = sizes.current.nextSiblingSize[prop] - delta;
        nextSibling.style[prop] = `${newSize}px`;
      }
    },
    [onResize, orientation]
  );

  const handleMouseMove = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      const delta =
        orientation === 'horizontal'
          ? event.clientY - startPos.current.y
          : event.clientX - startPos.current.x;
      updateSizes(event, delta);
    },
    [orientation, updateSizes]
  );

  const handleMouseUp = useCallback(
    (event) => {
      if (!ref.current) {
        return;
      }
      setIsResizing(false);
      if (onResizeEnd) {
        if (ref.current) {
          onResizeEnd(event, ref as React.RefObject<HTMLDivElement>);
        }
      }
      const prevSibling = ref.current.previousElementSibling as HTMLElement;
      const nextSibling = ref.current.nextElementSibling as HTMLElement;
      if (prevSibling) {
        prevSibling.style.transition = '';
      }
      if (nextSibling) {
        nextSibling.style.transition = '';
      }
    },
    [onResizeEnd]
  );

  // Effect to add/remove mousemove and mouseup listeners during resizing
  useEffect(() => {
    if (!isResizing) {
      return;
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  const handleMouseDown = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!ref.current) {
      return;
    }

    const prevSibling = ref.current.previousElementSibling as HTMLElement;
    const nextSibling = ref.current.nextElementSibling as HTMLElement;
    const rect = (el: Element) => el?.getBoundingClientRect();
    prevSibling && (prevSibling.style.transition = 'none');
    nextSibling && (nextSibling.style.transition = 'none');

    setIsResizing(true);
    startPos.current = { x: event.clientX, y: event.clientY };
    sizes.current = {
      prevSiblingSize: prevSibling
        ? { width: rect(prevSibling).width, height: rect(prevSibling).height }
        : { width: 0, height: 0 },
      nextSiblingSize: nextSibling
        ? { width: rect(nextSibling).width, height: rect(nextSibling).height }
        : { width: 0, height: 0 },
    };
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      const navigationKeys = [
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'Home',
        'End',
      ];

      if (![...navigationKeys, 'PageUp', 'PageDown'].includes(event.key)) {
        return;
      }
      if (!ref.current) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const prevSibling = ref.current.previousElementSibling as HTMLElement;
      const nextSibling = ref.current.nextElementSibling as HTMLElement;

      const getSize = (el: Element | null) => {
        const rect = el?.getBoundingClientRect();
        return {
          width: rect?.width || 0,
          height: rect?.height || 0,
        };
      };

      sizes.current = {
        prevSiblingSize: getSize(prevSibling),
        nextSiblingSize: getSize(nextSibling),
      };

      const step = event.shiftKey ? 25 : 5;
      let delta = 0;

      const isHorizontal = orientation === 'horizontal';

      const keyMap: Record<string, () => void> = {
        ArrowUp: () => (isHorizontal ? (delta = -step) : null),
        ArrowDown: () => (isHorizontal ? (delta = step) : null),
        ArrowLeft: () => (!isHorizontal ? (delta = -step) : null),
        ArrowRight: () => (!isHorizontal ? (delta = step) : null),
        Home: () =>
          (delta = isHorizontal
            ? -sizes.current.prevSiblingSize.height
            : -sizes.current.prevSiblingSize.width),
        End: () =>
          (delta = isHorizontal
            ? sizes.current.nextSiblingSize.height
            : sizes.current.nextSiblingSize.width),
      };

      keyMap[event.key]?.();

      updateSizes(event, delta);
      debouncedResizeEnd?.current(event);
    },
    [orientation, updateSizes, debouncedResizeEnd]
  );

  const handleDoubleClick = useCallback(
    (event) => {
      event.preventDefault();
      if (!ref.current) {
        return;
      }

      const prevSibling = ref.current.previousElementSibling as HTMLElement;
      const nextSibling = ref.current.nextElementSibling as HTMLElement;

      if (onDoubleClick) {
        onDoubleClick(event);
      } else {
        const prop = orientation === 'horizontal' ? 'height' : 'width';
        if (prevSibling) {
          prevSibling.style[prop] =
            `${initialSizes.current.prevSiblingSize[prop]}px`;
        }
        if (nextSibling) {
          nextSibling.style[prop] =
            `${initialSizes.current.nextSiblingSize[prop]}px`;
        }
      }
    },
    [onDoubleClick, orientation]
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      {...rest}
      ref={rest.ref || ref}
      role="separator"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      aria-orientation={
        orientation === 'horizontal' ? 'horizontal' : 'vertical'
      }
      aria-live="assertive"
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      className={cx([
        blockClass,
        `${blockClass}--${orientation}`,
        rest.className,
      ])}
    >
      <span className="sr-only">
        Use arrow keys to resize, hold Shift for larger steps. Double-click to
        reset.
      </span>
    </div>
  );
};
