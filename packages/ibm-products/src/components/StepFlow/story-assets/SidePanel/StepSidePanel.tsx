/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Layer } from '@carbon/react';
import { SidePanel } from '../../../SidePanel';

import { StepContextType, StepState, StepContext } from '../..';

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

interface StepStateType extends StepContextType {
  formState: {
    email?: string;
  };
  setFormState: Dispatch<SetStateAction<StepStateType['formState']>>;
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
  const [numSteps, setNumSteps] = useState<number>();
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({});

  const context: StepStateType = {
    formState,
    setFormState,
    numSteps,
    setNumSteps,
    currentStep,
    handleGoToStep: (step) => setCurrentStep(step),
    handleNext: () => setCurrentStep((step) => step + 1),
    handlePrevious: () => setCurrentStep((step) => step - 1),
  };

  const subtitleContent = subtitle?.(context) || null;

  return (
    <StepContext.Provider value={context}>
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
    </StepContext.Provider>
  );
};
