/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  Children,
  ReactElement,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import { blockClass, CoachmarkV2Context } from './Coachmark-v2';
import { CoachmarkBubble } from './CoachmarkBubble';
import ContentHeader, { ContentHeaderProps } from './ContentHeader';
import ContentBody, { ContentBodyProps } from './ContentBody';
import { NewPopoverAlignment } from '@carbon/react';
import cx from 'classnames';
import { useEffect } from 'storybook/internal/preview-api';

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

export type CoachmarkContentComponent = React.ForwardRefExoticComponent<
  CoachmarkContentProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: React.FC<ContentHeaderProps>;
  Body: React.FC<ContentBodyProps>;
};

const CoachmarkContent = React.forwardRef<
  HTMLDivElement,
  CoachmarkContentProps
>((props, ref) => {
  const { className = '', children, highContrast, dropShadow, ...rest } = props;
  const coachmarkContentBlockClass = `${blockClass}--coachmark-content`;
  const { align, onClose, open, setOpen, triggerRef } =
    useContext(CoachmarkV2Context);
  const [targetId, setTargetId] = useState<string | null>(null);

  // layout effect fires *after* DOM mutations, so ref.current is guaranteed to be set
  useLayoutEffect(() => {
    if (open) {
      const id = triggerRef?.current?.id ?? null;
      setTargetId(id);
    } else {
      setTargetId(null);
    }
  }, [open, triggerRef]);

  return (
    open && (
      <CoachmarkBubble
        className={cx(coachmarkContentBlockClass, className)}
        highContrast={highContrast}
        dropShadow={dropShadow}
        align={align as NewPopoverAlignment}
        open={open}
        target={`#${targetId}`}
      >
        {children}
      </CoachmarkBubble>
    )
  );
}) as CoachmarkContentComponent;

CoachmarkContent.Header = ContentHeader;
CoachmarkContent.Body = ContentBody;

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
