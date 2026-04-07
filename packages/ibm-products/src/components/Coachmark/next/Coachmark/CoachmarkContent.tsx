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
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { blockClass, CoachmarkContext } from './context';
import { ContentHeaderProps } from './ContentHeader';
import { ContentBodyProps } from './ContentBody';
import { PopoverContent } from '@carbon/react';
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
    const { className = '', children, ...rest } = props;
    const coachmarkContentBlockClass = `${blockClass}--coachmark-content`;
    const contentBodyClass = `${blockClass}--content-body`;
    const { open, setContentRef } = useContext(CoachmarkContext);

    const [contentId] = useState(
      () => `coachmark-content-${Math.random().toString(36).substr(2, 9)}`
    );
    const [labelId] = useState(
      () => `coachmark-label-${Math.random().toString(36).substr(2, 9)}`
    );
    const handleRef = useRef<HTMLDivElement | null>(null);
    const contentRef = ref || handleRef;

    useEffect(() => {
      if (open && 'current' in contentRef && contentRef.current) {
        requestAnimationFrame(() => {
          const contentBody = contentRef.current?.querySelector(
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
      if (open && 'current' in contentRef && contentRef.current) {
        // Find the actual popover container (parent of PopoverContent)
        const popoverContent = contentRef.current;
        const popoverContainer = popoverContent?.closest('.cds--popover');
        if (popoverContainer instanceof HTMLElement) {
          setContentRef(popoverContainer);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, contentRef]);

    return (
      <PopoverContent
        ref={contentRef}
        id={contentId}
        className={cx(coachmarkContentBlockClass, className) || ''}
        {...rest}
      >
        {children}
      </PopoverContent>
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
