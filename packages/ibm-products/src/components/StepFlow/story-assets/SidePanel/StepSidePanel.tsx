/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import { Layer } from '@carbon/react';
import { SidePanel } from '../../../SidePanel';

import { StepState, useStepContext } from '../..';

interface Props {
  children?: ReactNode;
  subtitle?: ((a: StepState) => ReactNode) | null;
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  hasCloseIcon?: boolean;
  closeIconDescription?: string;
  selectorPrimaryFocus?: string;
}

export const StepSidePanel = ({
  subtitle,
  children,
  open,
  onClose,
  title,
  selectorPrimaryFocus,
  ...rest
}: Props) => {
  const state = useStepContext();
  const subtitleContent = subtitle?.(state) || null;

  return (
    <SidePanel
      open={open}
      onRequestClose={onClose}
      title={title}
      selectorPrimaryFocus={selectorPrimaryFocus}
      subtitle={subtitleContent}
      {...rest}
    >
      <Layer>{children}</Layer>
    </SidePanel>
  );
};
