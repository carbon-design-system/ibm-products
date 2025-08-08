/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext, createContext } from 'react';
import { StepContextType } from './types';

export const StepContext = createContext<StepContextType | undefined>(
  undefined
);

export const useStepContext = (): StepContextType => {
  const context = useContext<StepContextType | undefined>(StepContext);

  if (context === undefined) {
    throw new Error('Context hook used outside of Step provider');
  }
  return context;
};
