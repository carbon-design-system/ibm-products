/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ import { Button } from '@carbon/react';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass, CoachmarkV2Context } from './Coachmark-v2';
import { CoachmarkBubbleHeader } from './CoachmarkBubble';
import { Close, Draggable } from '@carbon/react/icons';
import { makeDraggable } from '../../global/js/utils/makeDraggable';

export interface ContentHeaderProps {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription?: string;
}

export type EnrichedChildren = {
  children: React.ReactNode;
};

const ContentHeader = React.forwardRef<HTMLDivElement, ContentHeaderProps>(
  (props, ref) => {
    const { className = '', closeIconDescription, ...rest } = props;
    const { open, setOpen, onClose, contentRef, isFloating } =
      React.useContext(CoachmarkV2Context);
    const headerRef = useRef<HTMLHeadingElement | null>(null);
    const dragRef = useRef<HTMLButtonElement | null>(null);
    const handleRef = ref || headerRef;
    const contentHeaderBlockClass = `${blockClass}--content-header`;
    useEffect(() => {
      const close = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setOpen(false);
        }
      };
      window.addEventListener('keydown', close);
      return () => window.removeEventListener('keydown', close);
    }, [onClose, setOpen]);

    const closeBubble = () => {
      onClose?.();
      setOpen(false);
    };
    useEffect(() => {
      if (
        isFloating &&
        contentRef &&
        typeof handleRef === 'object' &&
        handleRef !== null &&
        'current' in handleRef &&
        handleRef.current &&
        dragRef.current
      ) {
        makeDraggable(contentRef, handleRef.current, dragRef.current);
      }
    });

    return (
      <CoachmarkBubbleHeader
        ref={handleRef}
        className={cx(contentHeaderBlockClass, className)}
      >
        {isFloating && (
          <Button
            kind="ghost"
            size="sm"
            ref={dragRef}
            renderIcon={Draggable}
            iconDescription={'Drag'}
            hasIconOnly
            className={`${contentHeaderBlockClass}--drag-icon`}
          />
        )}
        <Button
          kind="ghost"
          size="sm"
          renderIcon={Close}
          iconDescription={closeIconDescription ?? 'Close'}
          hasIconOnly
          onClick={closeBubble}
        />
      </CoachmarkBubbleHeader>
    );
  }
);

export default ContentHeader;

ContentHeader.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Tooltip text and aria label for the Close button icon.
   */
  closeIconDescription: PropTypes.string,
};
