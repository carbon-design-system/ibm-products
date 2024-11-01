/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { useStepContext } from '.';

// container for multiple children, each one representing a step
export const StepGroup = ({ children }) => {
  const stepState = useStepContext();

  const cleanedChildren = children?.filter(Boolean);
  const childrenCount = React.Children.count(cleanedChildren);

  // set number of steps, based on num of children passed in
  useEffect(() => {
    if (!stepState) {
      return;
    }
    const { setNumSteps } = stepState;
    setNumSteps(childrenCount), [childrenCount, setNumSteps];
  });

  // get currently selected step
  const { currentStep } = stepState || {};
  const currentStepComponent = currentStep
    ? React.Children.toArray(cleanedChildren)[currentStep - 1]
    : 1;

  // and just return that one single current step
  return currentStepComponent;
};
