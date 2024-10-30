import { useContext, createContext } from 'react';

export const StepContext = createContext();

// helper function to get context
export function useStepContext() {
  return useContext(StepContext);
}
