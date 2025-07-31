/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { HTMLProps, ReactNode } from 'react';
import cx from 'classnames';
import { pkg } from '../../../../../settings';

interface BubbleHeaderProps extends HTMLProps<HTMLElement> {
  /**
   * Provide the contents of the Bubble header
   */
  children: ReactNode;
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
}

const CoachmarkBubbleHeader = ({
  children,
  className,
  ...rest
}: BubbleHeaderProps) => {
  return (
    <header
      {...rest}
      className={cx(`${pkg.prefix}__bubble__header`, className)}
    >
      {children}
    </header>
  );
};

CoachmarkBubbleHeader.displayName = 'CoachmarkBubbleHeader';

export { CoachmarkBubbleHeader };
