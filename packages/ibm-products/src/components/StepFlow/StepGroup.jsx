import React, { useEffect } from 'react';
import { useStepContext } from './stepContext';

// container for multiple children, each one representing a step
export function StepGroup({ children }) {
  const { currentStep, setNumSteps } = useStepContext();

  const cleanedChildren = children?.filter(Boolean);
  const childrenCount = React.Children.count(cleanedChildren);

  // set number of steps, based on num of children passed in
  useEffect(() => setNumSteps(childrenCount), [childrenCount, setNumSteps]);

  // get currently selected step
  const currentStepComponent =
    React.Children.toArray(cleanedChildren)[currentStep - 1];

  // and just return that one single current step
  return currentStepComponent;
}
