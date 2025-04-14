/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--resize-bar`;

const ResizeBar = ({
  orientation,
  defaultSiblingSize,
  onResize,
  onResizeEnd,
  onDoubleClick,
  ...rest
}: {
  orientation: 'horizontal' | 'vertical';
  defaultSiblingSize?: number | [];
  onResize?: (delta: number) => void;
  onResizeEnd?: () => void;
  onDoubleClick?: () => void;
  [key: string]: any;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [initialPosition, setInitialPosition] = React.useState<{
    x: number;
    y: number;
  } | null>(null);
  const [previousElement, setPreviousElement] = React.useState({
    initialSize: {
      width: 0,
      height: 0,
    },
  });
  const [nextElement, setNextElement] = React.useState({
    initialSize: {
      width: 0,
      height: 0,
    },
  });
  const [isResizing, setIsResizing] = React.useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isResizing && initialPosition) {
        const deltaX = e.clientX - initialPosition.x;
        const deltaY = e.clientY - initialPosition.y;

        if (onResize) {
          onResize(orientation === 'horizontal' ? deltaY : deltaX);
        } else {
          if (
            ref.current?.previousElementSibling &&
            ref.current?.nextElementSibling
          ) {
            const prev = ref.current.previousElementSibling as HTMLElement;
            const next = ref.current.nextElementSibling as HTMLElement;
            if (orientation === 'horizontal') {
              prev.style.blockSize = `${previousElement.initialSize.height - (initialPosition.y - e.clientY)}px`;
              next.style.blockSize = `${nextElement.initialSize.height + (initialPosition.y - e.clientY)}px`;
            } else {
              prev.style.inlineSize = `${previousElement.initialSize.width - (initialPosition.x - e.clientX)}px`;
              next.style.inlineSize = `${nextElement.initialSize.width + (initialPosition.x - e.clientX)}px`;
            }
          } else if (ref.current?.previousElementSibling) {
            const prev = ref.current.previousElementSibling as HTMLElement;
            if (orientation === 'horizontal') {
              prev.style.blockSize = `${previousElement.initialSize.height - (initialPosition.y - e.clientY)}px`;
            } else {
              prev.style.inlineSize = `${previousElement.initialSize.width - (initialPosition.x - e.clientX)}px`;
            }
          } else if (ref.current?.nextElementSibling) {
            const next = ref.current.nextElementSibling as HTMLElement;
            if (orientation === 'horizontal') {
              next.style.blockSize = `${nextElement.initialSize.height + (initialPosition.y - e.clientY)}px`;
            } else {
              next.style.inlineSize = `${nextElement.initialSize.width + (initialPosition.x - e.clientX)}px`;
            }
          }
        }
      }
    };

    // yet to be implemented
    // const handleKeyboardControl = (e: KeyboardEvent) => {
    //   if (onResize) {
    //     onResize(orientation === 'horizontal' ? deltaY : deltaX);
    //   }
    // };

    const handleMouseUp = (e) => {
      if (onResizeEnd) {
        onResizeEnd();
      }
      setIsResizing(false);
      setInitialPosition(null);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, orientation]); // eslint-disable-line

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setInitialPosition({
          x: e.clientX,
          y: e.clientY,
        });
        if (currentRef.previousElementSibling) {
          setPreviousElement({
            initialSize: {
              width:
                currentRef.previousElementSibling.getBoundingClientRect().width,
              height:
                currentRef.previousElementSibling.getBoundingClientRect()
                  .height,
            },
          });
        }
        if (currentRef.nextElementSibling) {
          setNextElement({
            initialSize: {
              width:
                currentRef.nextElementSibling.getBoundingClientRect().width,
              height:
                currentRef.nextElementSibling.getBoundingClientRect().height,
            },
          });
        }
        setIsResizing(true);
      };
      const handleDblClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (onDoubleClick) {
          onDoubleClick();
          return;
        }
        console.log('internal double click', defaultSiblingSize);
        if (
          currentRef.previousElementSibling &&
          currentRef.nextElementSibling
        ) {
          const prev = currentRef.previousElementSibling as HTMLElement;
          const next = currentRef.nextElementSibling as HTMLElement;
          if (orientation === 'horizontal') {
            // @ts-ignore
            prev.style.blockSize = `${defaultSiblingSize[0]}px`;
            // @ts-ignore
            next.style.blockSize = `${defaultSiblingSize[1]}px`;
          } else {
            // @ts-ignore
            prev.style.inlineSize = `${defaultSiblingSize[0]}px`;
            // @ts-ignore
            next.style.inlineSize = `${defaultSiblingSize[1]}px`;
          }
        } else if (currentRef.previousElementSibling) {
          const prev = currentRef.previousElementSibling as HTMLElement;
          if (orientation === 'horizontal') {
            prev.style.blockSize = `${defaultSiblingSize}px`;
          } else {
            prev.style.inlineSize = `${defaultSiblingSize}px`;
          }
        } else if (currentRef.nextElementSibling) {
          const next = currentRef.nextElementSibling as HTMLElement;
          if (orientation === 'horizontal') {
            next.style.blockSize = `${defaultSiblingSize}px`;
          } else {
            next.style.inlineSize = `${defaultSiblingSize}px`;
          }
        }
      };
      currentRef.addEventListener('dblclick', handleDblClick);
      currentRef.addEventListener('mousedown', handleMouseDown);
      return () => {
        currentRef.removeEventListener('mousedown', handleMouseDown);
        currentRef.removeEventListener('dblclick', handleDblClick);
      };
    }
  }, []); // eslint-disable-line

  return (
    <div
      {...rest}
      ref={rest.ref || ref}
      role="separator"
      tabIndex={0} // eslint-disable-line
      className={cx([
        blockClass,
        `${blockClass}--${orientation}`,
        rest.className,
      ])}
    ></div>
  );
};

export default ResizeBar;
