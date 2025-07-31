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
import { blockClass, CoachmarkContext } from './Coachmark';
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
}

export type EnrichedChildren = {
  children: ReactNode;
};

const ContentHeader = forwardRef<HTMLDivElement, ContentHeaderProps>(
  (props, ref) => {
    const {
      className = '',
      closeIconDescription,
      dragIconDescription,
      ...rest
    } = props;
    const { setOpen, onClose, contentRef, floating } =
      useContext(CoachmarkContext);
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
          handle: handleRef.current,
          focusableInHandle: dragRef.current,
        });
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
  /**
   * Tooltip text and aria label for the Drag button icon.
   */
  dragIconDescription: PropTypes.string,
};
