/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Dispatch, SetStateAction } from 'react';

export type StepContextType = StepState;

interface formStateType {
  [key: string]: any;
}

export interface StepState {
  formState: formStateType;
  setFormState: Dispatch<SetStateAction<formStateType>>;
  numSteps: number | undefined;
  setNumSteps: Dispatch<SetStateAction<number | undefined>>;
  currentStep: number;
  handleGoToStep: (a: number) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}
