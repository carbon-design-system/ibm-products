/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Ref, ReactSVGElement } from 'react';
import {
  CheckmarkFilled,
  CheckmarkOutline,
  ErrorFilled,
  InProgress,
  InformationSquareFilled,
  Misuse,
  Pending,
  UndefinedFilled,
  UnknownFilled,
  WarningAltFilled,
  WarningAltInvertedFilled,
} from '@carbon/react/icons';

export type StatusIconKind =
  | 'fatal'
  | 'critical'
  | 'major-warning'
  | 'minor-warning'
  | 'undefined'
  | 'unknown'
  | 'normal'
  | 'info'
  | 'in-progress'
  | 'running'
  | 'pending';

export type StatusIconSize = 'sm' | 'md' | 'lg' | 'xl';
export type StatusIconTheme = 'light' | 'dark';

export interface StatusIconProps {
  /** Optional extra class name applied to the containing SVG element. */
  className?: string;
  /**
   * Provides a `<title>` element inside the SVG for screen readers.
   */
  iconDescription: string;
  /** The status kind — drives which icon and color are rendered. */
  kind: StatusIconKind;
  /**
   * The size of the icon.
   */
  size: StatusIconSize;
  /**
   * The color theme of the icon.
   */
  theme: StatusIconTheme;
}

const sizeValues = { sm: 16, md: 20, lg: 24, xl: 32 } as const;

const iconMap: Record<StatusIconKind, React.ElementType> = {
  fatal: Misuse,
  critical: ErrorFilled,
  'major-warning': WarningAltInvertedFilled,
  'minor-warning': WarningAltFilled,
  undefined: UndefinedFilled,
  unknown: UnknownFilled,
  normal: CheckmarkFilled,
  info: InformationSquareFilled,
  'in-progress': InProgress,
  running: CheckmarkOutline,
  pending: Pending,
};

const blockClass = 'status-icon';

export const StatusIcon = forwardRef<ReactSVGElement | null, StatusIconProps>(
  ({ className, iconDescription, kind, size, theme, ...rest }, ref) => {
    const IconComponent = iconMap[kind];
    const iconSize = sizeValues[size];

    if (!IconComponent) {
      return null;
    }

    const classNames = [
      className,
      blockClass,
      `${blockClass}--${theme}`,
      kind ? `${blockClass}--${theme}-${kind}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <IconComponent
        {...rest}
        size={iconSize}
        ref={ref as Ref<ReactSVGElement>}
        className={classNames}
      >
        <title>{iconDescription}</title>
      </IconComponent>
    );
  }
);

StatusIcon.displayName = 'StatusIcon';
