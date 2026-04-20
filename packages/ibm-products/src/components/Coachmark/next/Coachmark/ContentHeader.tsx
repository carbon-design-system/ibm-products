/**
 * Copyright IBM Corp. 2024, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ import { Button } from '@carbon/react';
import React, {
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass, CoachmarkContext } from './context';
import { Close, Draggable } from '@carbon/react/icons';
import { carbon } from '../../../../settings';
import { makeDraggable } from '../../../../global/js/utils/makeDraggable';

export interface ContentHeaderProps {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription?: string;
  /**
   * Tooltip text and aria label for the Drag button icon.
   */
  dragIconDescription?: string;
  /**
   * Optional contents of the Coachmark Header.
   */
  children?: string;
}

export const ContentHeader = forwardRef<HTMLDivElement, ContentHeaderProps>(
  (props, ref) => {
    const {
      className = '',
      closeIconDescription,
      dragIconDescription,
      children,
      ...rest
    } = props;
    const { setOpen, onClose, contentRef, floating } =
      useContext(CoachmarkContext);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const dragRef = useRef<HTMLButtonElement | null>(null);
    const handleRef = ref || headerRef;
    const contentHeaderBlockClass = `${blockClass}--content-header`;

    const closeBubble = (e?: React.MouseEvent) => {
      e?.stopPropagation();
      onClose?.();
      setOpen(false);
    };
    useEffect(() => {
      if (
        floating &&
        contentRef &&
        typeof handleRef === 'object' &&
        handleRef !== null &&
        'current' in handleRef &&
        handleRef.current &&
        dragRef.current
      ) {
        // Find the popover-content element for styling during drag
        const dragStyleContainer = contentRef.querySelector(
          `${carbon.prefix}--popover-content`
        );

        // Reset positioning styles on the drag container
        contentRef.style.transform = 'none';
        contentRef.style.left = '0px';
        contentRef.style.top = '0px';

        const draggable = makeDraggable({
          el: contentRef,
          dragHandle: handleRef.current,
          focusableDragHandle: dragRef.current,
        });

        const onDragStart = () => {
          if (dragStyleContainer) {
            dragStyleContainer.classList.add(
              `${contentHeaderBlockClass}--is-dragging`
            );
            dragStyleContainer.setAttribute(
              'aria-label',
              'Coachmark is being dragged'
            );
          }
        };

        const onDragEnd = () => {
          if (dragStyleContainer) {
            dragStyleContainer.classList.remove(
              `${contentHeaderBlockClass}--is-dragging`
            );
            dragStyleContainer.removeAttribute('aria-label');
          }
        };

        contentRef.addEventListener('dragstart', onDragStart);
        contentRef.addEventListener('dragend', onDragEnd);

        // Cleanup function
        return () => {
          contentRef.removeEventListener('dragstart', onDragStart);
          contentRef.removeEventListener('dragend', onDragEnd);
          draggable.cleanup();
        };
      }
    }, [floating, contentRef, handleRef, dragRef, contentHeaderBlockClass]);

    return (
      <div
        ref={handleRef}
        className={cx(contentHeaderBlockClass, className)}
        {...rest}
      >
        {floating && (
          <Button
            kind="ghost"
            size="sm"
            ref={dragRef}
            renderIcon={Draggable}
            iconDescription={dragIconDescription}
            hasIconOnly
            className={`${contentHeaderBlockClass}--drag-icon`}
          />
        )}
        {children}
        <Button
          kind="ghost"
          size="sm"
          renderIcon={Close}
          iconDescription={closeIconDescription}
          hasIconOnly
          onClick={closeBubble}
        />
      </div>
    );
  }
);

ContentHeader.propTypes = {
  /**
   * Optional contents of the Coachmark Header.
   */
  children: PropTypes.node,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,
  /**
   * Tooltip text and aria label for the Drag button icon.
   */
  dragIconDescription: PropTypes.string,
};
