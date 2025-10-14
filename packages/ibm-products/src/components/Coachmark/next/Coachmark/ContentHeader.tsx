/**
 * Copyright IBM Corp. 2024, 2025
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
import { CoachmarkBubbleHeader } from './CoachmarkBubble';
import { Close, Draggable } from '@carbon/react/icons';
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

    const closeBubble = () => {
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
        makeDraggable({
          el: contentRef,
          dragHandle: handleRef.current,
          focusableDragHandle: dragRef.current,
        });

        const onDragStart = () => {
          if (contentRef) {
            contentRef.classList.add(`${contentHeaderBlockClass}--is-dragging`);
            contentRef.setAttribute('aria-label', 'Coachmark is being dragged');
          }
        };

        const onDragEnd = () => {
          if (contentRef) {
            contentRef.classList.remove(
              `${contentHeaderBlockClass}--is-dragging`
            );
            contentRef.removeAttribute('aria-label');
          }
        };

        contentRef.addEventListener('dragstart', onDragStart);
        contentRef.addEventListener('dragend', onDragEnd);
      }
    });

    return (
      <CoachmarkBubbleHeader
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
      </CoachmarkBubbleHeader>
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
