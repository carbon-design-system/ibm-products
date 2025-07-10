/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { HTMLProps } from 'react';
import cx from 'classnames';
import { pkg } from '../../../settings';

interface BubbleHeaderProps extends HTMLProps<HTMLElement> {
  children: React.ReactNode;
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
