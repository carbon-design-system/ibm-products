/**
 * Copyright IBM Corp. 2024, 2026
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
import { blockClass, CoachmarkContext } from './context';
import { CoachmarkContentHeaderProps } from './CoachmarkContentHeader';
import { CoachmarkContentBodyProps } from './CoachmarkContentBody';
import { PopoverContent } from '@carbon/react';
import { carbon } from '../../../../settings';
import cx from 'classnames';
import { getDevtoolsProps } from '../../../../global/js/utils/devtools';

const componentName = 'CoachmarkContent';

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
   * Accessible label for the coachmark content region.
   */
  'aria-label': string;
}

export type CoachmarkContentComponent = ForwardRefExoticComponent<
  CoachmarkContentProps & RefAttributes<HTMLDivElement>
> & {
  Header: FC<CoachmarkContentHeaderProps>;
  Body: FC<CoachmarkContentBodyProps>;
};

const CoachmarkContent = forwardRef<HTMLDivElement, CoachmarkContentProps>(
  (props, ref) => {
    const {
      className = '',
      children,
      'aria-label': ariaLabel,
      ...rest
    } = props;
    const coachmarkContentBlockClass = `${blockClass}--coachmark-content`;
    const {
      open,
      setContentRef,
      onClose,
      setOpen,
      triggerRef,
      selectorPrimaryFocus,
      contentId,
      labelId,
      triggerPosition,
    } = useContext(CoachmarkContext);

    const handleRef = useRef<HTMLDivElement | null>(null);
    const contentRef = ref || handleRef;

    useEffect(() => {
      if (open && 'current' in contentRef && contentRef.current) {
        // Find the actual popover container (parent of PopoverContent)
        const popoverContent = contentRef.current;
        const popoverContainer = popoverContent?.closest(
          `.${carbon.prefix}--popover-container`
        );
        if (popoverContainer instanceof HTMLElement) {
          setContentRef(popoverContainer);

          // For external trigger, manually position the popover based on trigger position
          if (triggerPosition) {
            console.log('Applying trigger position to popover:', {
              left: triggerPosition.left,
              top: triggerPosition.top,
              bottom: triggerPosition.bottom,
              right: triggerPosition.right,
              width: triggerPosition.width,
              height: triggerPosition.height,
            });

            // Position the popover to align with the trigger
            // Use the trigger's position as the anchor point
            popoverContainer.style.position = 'fixed';
            popoverContainer.style.left = `${triggerPosition.left}px`;
            popoverContainer.style.top = `${triggerPosition.top}px`;
            popoverContainer.style.zIndex = '9999';

            const rect = popoverContainer.getBoundingClientRect();
            console.log('Popover positioned at:', {
              left: rect.left,
              top: rect.top,
              bottom: rect.bottom,
              right: rect.right,
              width: rect.width,
              height: rect.height,
              triggerTop: triggerPosition.top,
              triggerLeft: triggerPosition.left,
            });
          }
        }
      }
      // setContentRef is a stable function from useState and doesn't need to be in dependencies
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, contentRef, triggerPosition]);

    // Handle Escape key to close Coachmark and return focus to trigger
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
          onClose?.();
          setOpen(false);
          // Return focus to the trigger element
          if (triggerRef?.current) {
            triggerRef.current.focus();
          }
        }
      };

      if (open) {
        document.addEventListener('keydown', handleKeyDown);
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [open, onClose, setOpen, triggerRef]);

    // Handle Escape key to close Coachmark
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && open) {
          onClose?.();
          setOpen(false);
        }
      };
      if (open) {
        document.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [open, onClose, setOpen]);

    // Handle focus management with selectorPrimaryFocus or default to close button
    useEffect(() => {
      if (open && selectorPrimaryFocus) {
        // Use setTimeout to ensure DOM is ready and give time for any other focus management
        setTimeout(() => {
          requestAnimationFrame(() => {
            let elementToFocus: HTMLElement | null = null;

            // If selectorPrimaryFocus is provided, use it
            if (selectorPrimaryFocus) {
              elementToFocus =
                document.querySelector<HTMLElement>(selectorPrimaryFocus);
            }

            // If no selectorPrimaryFocus or element not found, default to close button
            if (
              !elementToFocus &&
              contentRef &&
              'current' in contentRef &&
              contentRef.current
            ) {
              elementToFocus = contentRef.current.querySelector<HTMLElement>(
                `.${blockClass}--content-header--close-button`
              );
            }

            if (elementToFocus) {
              elementToFocus.focus();
            }
          });
        }, 100);
      }
    }, [open, selectorPrimaryFocus, contentRef]);

    return (
      <PopoverContent
        id={contentId}
        ref={contentRef}
        aria-labelledby={labelId}
        className={cx(coachmarkContentBlockClass, className) || ''}
        role="region"
        aria-label={ariaLabel}
        {...rest}
        {...getDevtoolsProps(componentName)}
      >
        {children}
      </PopoverContent>
    );
  }
) as CoachmarkContentComponent;

export default CoachmarkContent;

CoachmarkContent.propTypes = {
  /**
   * Accessible label for the coachmark content region.
   */
  'aria-label': PropTypes.string.isRequired,
  /**
   * This is a required callback that has to return the content to render in the body section.
   * It can be a single child or an array of children depending on your need
   */
  children: PropTypes.node,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
