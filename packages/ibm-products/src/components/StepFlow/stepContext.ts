import { useContext, createContext } from 'react';
import { StepContextType } from '../Tearsheet/TearsheetShell_v2';

export const StepContext = createContext<StepContextType>({
  formState: {},
  setFormState: () => {},
  numSteps: 0,
  setNumSteps: () => {},
  currentStep: 0,
  handleGoToStep: () => {},
  handleNext: () => {},
  handlePrev: () => {},
});

// helper function to get context
export function useStepContext() {
  return useContext(StepContext);
}
