//cspell: disable
/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useRef, useEffect } from 'react';
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
  const isResizing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const currentSizes = useRef({
    prev: { width: 0, height: 0 },
    next: { width: 0, height: 0 },
  });
  const initialSizes = useRef({
    prev: { width: 0, height: 0 },
    next: { width: 0, height: 0 },
  });

  const debouncedResizeEnd = useRef(
    debounce((event) => {
      if (ref.current && onResizeEnd) {
        if (ref.current) {
          onResizeEnd(event, ref as React.RefObject<HTMLDivElement>);
        }
      }
    }, DEBOUNCE_DELAY)
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const prev = ref.current.previousElementSibling as HTMLElement;
    const next = ref.current.nextElementSibling as HTMLElement;
    const rect = (el: Element) => el?.getBoundingClientRect();

    initialSizes.current = {
      prev: prev
        ? { width: rect(prev).width, height: rect(prev).height }
        : { width: 0, height: 0 },
      next: next
        ? { width: rect(next).width, height: rect(next).height }
        : { width: 0, height: 0 },
    };
  }, []);

  const updateSizes = (event, delta: number) => {
    if (!ref.current) {
      return;
    }

    if (onResize) {
      onResize(event, delta);
      return;
    }

    const prev = ref.current.previousElementSibling as HTMLElement;
    const next = ref.current.nextElementSibling as HTMLElement;
    const prop = orientation === 'horizontal' ? 'height' : 'width';

    if (prev) {
      const newSize = currentSizes.current.prev[prop] + delta;
      prev.style[prop] = `${newSize}px`;
    }
    if (next) {
      const newSize = currentSizes.current.next[prop] - delta;
      next.style[prop] = `${newSize}px`;
    }
  };

  const handleMouseMove = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isResizing.current) {
      return;
    }

    const delta =
      orientation === 'horizontal'
        ? event.clientY - startPos.current.y
        : event.clientX - startPos.current.x;
    updateSizes(event, delta);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!ref.current) {
      return;
    }

    const prev = ref.current.previousElementSibling as HTMLElement;
    const next = ref.current.nextElementSibling as HTMLElement;
    const rect = (el: Element) => el?.getBoundingClientRect();
    prev && (prev.style.transition = 'none');
    next && (next.style.transition = 'none');

    isResizing.current = true;
    startPos.current = { x: event.clientX, y: event.clientY };
    currentSizes.current = {
      prev: prev
        ? { width: rect(prev).width, height: rect(prev).height }
        : { width: 0, height: 0 },
      next: next
        ? { width: rect(next).width, height: rect(next).height }
        : { width: 0, height: 0 },
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = (event) => {
    if (!ref.current) {
      return;
    }
    isResizing.current = false;
    if (onResizeEnd) {
      if (ref.current) {
        onResizeEnd(event, ref as React.RefObject<HTMLDivElement>);
      }
    }
    const prev = ref.current.previousElementSibling as HTMLElement;
    const next = ref.current.nextElementSibling as HTMLElement;
    if (prev) {
      prev.style.transition = '';
    }
    if (next) {
      next.style.transition = '';
    }
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleKeyDown = (event) => {
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

    const prev = ref.current.previousElementSibling as HTMLElement;
    const next = ref.current.nextElementSibling as HTMLElement;

    const getSize = (el: Element | null) => {
      const rect = el?.getBoundingClientRect();
      return {
        width: rect?.width || 0,
        height: rect?.height || 0,
      };
    };

    currentSizes.current = {
      prev: getSize(prev),
      next: getSize(next),
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
          ? -currentSizes.current.prev.height
          : -currentSizes.current.prev.width),
      End: () =>
        (delta = isHorizontal
          ? currentSizes.current.next.height
          : currentSizes.current.next.width),
    };

    keyMap[event.key]?.();

    updateSizes(event, delta);
    debouncedResizeEnd?.current(event);
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();
    if (!ref.current) {
      return;
    }

    const prev = ref.current.previousElementSibling as HTMLElement;
    const next = ref.current.nextElementSibling as HTMLElement;

    if (onDoubleClick) {
      onDoubleClick(event);
    } else {
      const prop = orientation === 'horizontal' ? 'height' : 'width';
      if (prev) {
        prev.style[prop] = `${initialSizes.current.prev[prop]}px`;
      }
      if (next) {
        next.style[prop] = `${initialSizes.current.next[prop]}px`;
      }
    }
  };

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
