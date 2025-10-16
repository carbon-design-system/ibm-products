/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  ReactNode,
  RefAttributes,
  useContext,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../../../settings';
import { blockClass, CoachmarkContext } from './context';
import { CoachmarkBubble } from './CoachmarkBubble';
import { ContentHeaderProps } from './ContentHeader';
import { ContentBodyProps } from './ContentBody';
import { NewPopoverAlignment } from '@carbon/react';
import cx from 'classnames';

export interface CoachmarkContentProps {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * This is a required callback that has to return the content to render in the body section.
   * It can be a single child or an array of children depending on your need
   */
  children: ReactElement | ReactNode;
  /**
   * Specify whether the component should be rendered on high-contrast.
   */
  highContrast?: boolean;
  /**
   * Specify whether a drop shadow should be rendered on the popover.
   */
  dropShadow?: boolean;
}

export type CoachmarkContentComponent = ForwardRefExoticComponent<
  CoachmarkContentProps & RefAttributes<HTMLDivElement>
> & {
  Header: FC<ContentHeaderProps>;
  Body: FC<ContentBodyProps>;
};

const CoachmarkContent = forwardRef<HTMLDivElement, CoachmarkContentProps>(
  (props, ref) => {
    const {
      className = '',
      children,
      highContrast,
      dropShadow,
      ...rest
    } = props;
    const coachmarkContentBlockClass = `${blockClass}--coachmark-content`;
    const contentBodyClass = `${blockClass}--content-body`;
    const { align, open, setOpen, triggerRef, setContentRef, floating } =
      useContext(CoachmarkContext);

    const targetId = open ? triggerRef?.current?.id : null;

    const handleRef = useRef<HTMLDivElement | null>(null);
    const bubbleRef = ref || handleRef;

    useEffect(() => {
      if (open && 'current' in bubbleRef && bubbleRef.current) {
        requestAnimationFrame(() => {
          const contentBody = bubbleRef.current?.querySelector(
            `.${contentBodyClass}`
          );

          if (contentBody) {
            const firstFocusable = Array.from(
              contentBody.querySelectorAll<HTMLElement>('*')
            ).find((el) => el.tabIndex >= 0);
            firstFocusable?.focus();
          }
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        const targetElement = document.getElementById(targetId || '');
        const bubbleElement =
          bubbleRef && 'current' in bubbleRef ? bubbleRef.current : null;

        if (
          bubbleElement &&
          !bubbleElement.contains(event.target as Node) &&
          targetElement &&
          !targetElement.contains(event.target as Node)
        ) {
          setOpen?.(false);
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setOpen?.(false);
        }
      };

      if (open) {
        document.addEventListener('click', handleOutsideClick);
        window.addEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.removeEventListener('click', handleOutsideClick);
        window.removeEventListener('keydown', handleKeyDown);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, targetId, setOpen]);

    useEffect(() => {
      if (open && 'current' in bubbleRef && bubbleRef.current) {
        const dragContainer = bubbleRef.current.querySelector(
          `.${pkg.prefix}__bubble`
        );
        if (dragContainer instanceof HTMLElement) {
          setContentRef(dragContainer);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, bubbleRef]);

    return (
      open && (
        <div ref={bubbleRef}>
          <CoachmarkBubble
            className={cx(coachmarkContentBlockClass, className)}
            highContrast={highContrast}
            dropShadow={dropShadow}
            align={align as NewPopoverAlignment}
            open={open}
            target={`#${targetId}`}
            caret={floating}
            {...rest}
          >
            {children}
          </CoachmarkBubble>
        </div>
      )
    );
  }
) as CoachmarkContentComponent;

export default CoachmarkContent;

CoachmarkContent.propTypes = {
  /**
   * This is a required callback that has to return the content to render in the body section.
   * It can be a single child or an array of children depending on your need
   */
  children: PropTypes.node,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Specify whether a drop shadow should be rendered on the popover.
   */
  dropShadow: PropTypes.bool,
  /**
   * Specify whether the component should be rendered on high-contrast.
   */
  highContrast: PropTypes.bool,
};
