/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import {
  NewPopoverAlignment,
  useTheme,
  usePrefix as useCarbonPrefix,
} from '@carbon/react';
import React, { forwardRef, HTMLProps, RefObject, useRef } from 'react';
import {
  autoUpdate,
  computePosition,
  flip,
  shift,
  offset,
  arrow,
} from '@floating-ui/react';
import { pkg } from '../../../../../settings';
import { useIsomorphicEffect } from '../../../../../global/js/hooks';

interface BubbleProps extends Omit<HTMLProps<HTMLDivElement>, 'target'> {
  /**
   * 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-end' | 'left-start' | 'right-end' | 'right-start';
   **/
  align?: NewPopoverAlignment;
  /**
   * Values can range from an Element, a ref of an Element, a string which will use query selector to select an Element.
   **/
  target: Element | RefObject<Element> | string | null | undefined;
  /**
   * Specify whether the component should be rendered on high-contrast.
   */
  highContrast?: boolean;
  /**
   * Specify whether a drop shadow should be rendered on the popover.
   */
  dropShadow?: boolean;
  /**
   * Specifies whether the component is currently open.
   */
  open: boolean;
  /**
   * Specify whether a caret should be rendered.
   */
  caret?: boolean;
}

const CoachmarkBubble = forwardRef<HTMLDivElement, BubbleProps>(
  (props, ref) => {
    const {
      children,
      align,
      target,
      className,
      dropShadow = true,
      highContrast = false,
      caret = false,
      open,
      ...rest
    } = props;
    const { theme } = useTheme();
    const carbonPrefix = useCarbonPrefix();
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef<Element | null>(null);

    useIsomorphicEffect(() => {
      if (target) {
        if (typeof target === 'string') {
          if (target === '#' || target.trim() === '') {
            return;
          }
          targetRef.current = document.querySelector(target);
        } else if ('current' in target) {
          targetRef.current = target.current;
        } else {
          targetRef.current = target;
        }

        if (
          targetRef.current &&
          tooltipRef.current &&
          arrowRef.current &&
          open
        ) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });

          const middlewares = [
            offset(10),
            flip(),
            shift({ padding: 5 }),
            arrow({ element: arrowRef.current }),
          ];

          const cleanup = autoUpdate(
            targetRef.current,
            tooltipRef.current,
            () => {
              if (targetRef.current && tooltipRef.current) {
                computePosition(targetRef.current, tooltipRef.current, {
                  placement: align,
                  strategy: 'fixed',
                  middleware: middlewares,
                }).then(({ x, y, placement, middlewareData }) => {
                  if (tooltipRef.current) {
                    Object.assign(tooltipRef.current.style, {
                      left: `${x}px`,
                      top: `${y}px`,
                    });
                  }

                  const arrowX = middlewareData.arrow?.x;
                  const arrowY = middlewareData.arrow?.y;

                  const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                  }[placement.split('-')[0]];

                  if (staticSide && arrowRef.current) {
                    Object.assign(arrowRef.current.style, {
                      left: arrowX != null ? `${arrowX}px` : '',
                      top: arrowY != null ? `${arrowY}px` : '',
                      right: '',
                      bottom: '',
                      [staticSide]: '-4px',
                    });
                  }
                });
              }
            },
            { animationFrame: true }
          );

          return () => {
            cleanup();
          };
        }
      }
    }, [target, open, align]);

    if (!target) {
      return null;
    }

    const mergedRefs = (node) => {
      tooltipRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <div
        {...rest}
        ref={mergedRefs}
        className={cx(
          {
            [`${carbonPrefix}--g100`]:
              (theme === 'white' && highContrast) ||
              (theme === 'g100' && !highContrast),
            [`${carbonPrefix}--g90`]:
              (theme === 'g10' && highContrast) ||
              (theme === 'g90' && !highContrast),
            [`${carbonPrefix}--g10`]:
              (theme === 'g90' && highContrast) ||
              (theme === 'g10' && !highContrast),
            [`${carbonPrefix}--white`]:
              (theme === 'g100' && highContrast) ||
              (theme === 'white' && !highContrast),
            [`${pkg.prefix}__bubble`]: true,
            [`${pkg.prefix}__bubble-open`]: open,
            [`${pkg.prefix}__bubble-drop-shadow`]: dropShadow,
            [`${pkg.prefix}__bubble-high-contrast`]: highContrast,
            [`${pkg.prefix}__bubble-hidden`]: !targetRef.current,
          },
          className
        )}
      >
        <div
          ref={arrowRef}
          className={!caret ? `${pkg.prefix}__bubble__arrow` : ''}
        ></div>
        {children}
      </div>
    );
  }
);

CoachmarkBubble.displayName = 'CoachmarkBubble';

export { CoachmarkBubble };
