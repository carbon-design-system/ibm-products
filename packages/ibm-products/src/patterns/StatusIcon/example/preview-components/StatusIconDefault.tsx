/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  StatusIcon,
  StatusIconKind,
  StatusIconSize,
  StatusIconTheme,
} from '../components/StatusIcon';

interface StatusIconDefaultProps {
  kind?: StatusIconKind;
  size?: StatusIconSize;
  theme?: StatusIconTheme;
  iconDescription?: string;
}

export const StatusIconDefault = ({
  kind = 'fatal',
  size = 'sm',
  theme = 'light',
  iconDescription = 'Fatal',
}: StatusIconDefaultProps) => {
  return (
    <StatusIcon
      kind={kind}
      size={size}
      theme={theme}
      iconDescription={iconDescription}
    />
  );
};
