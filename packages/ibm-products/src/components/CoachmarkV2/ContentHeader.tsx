/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ import { Button, usePrefix } from '@carbon/react';
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass, CoachmarkV2Context } from './Coachmark-v2';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { CoachmarkBubbleHeader } from './CoachmarkBubble';
import { Close } from '@carbon/react/icons';

export interface ContentHeaderProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children?: React.ReactNode;

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
    const { className = '', closeIconDescription, children, ...rest } = props;
    const { open, setOpen, onClose } = React.useContext(CoachmarkV2Context);
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

    return (
      <CoachmarkBubbleHeader className={cx(contentHeaderBlockClass, className)}>
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
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
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
};
