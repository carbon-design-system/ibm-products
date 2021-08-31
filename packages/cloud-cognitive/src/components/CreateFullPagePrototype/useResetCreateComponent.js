/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';

/**
 * Resets the current step of the create component if it has been closed.
 * @param {object} useResetCreateComponent - Create component that uses this custom hook
 * @param {object} useResetCreateComponent.setAdvancedCurrentStep
 * @param {boolean} useResetCreateComponent.shouldViewAll
 * @param {Function} useResetCreateComponent.setCurrentStep
 * @param {number} useResetCreateComponent.initialStep
 * @param {string} useResetCreateComponent.totalSteps
 */
export const useResetCreateComponent = ({
  shouldViewAll,
  setCurrentStep,
  setAdvancedCurrentStep,
  initialStep,
  totalSteps,
}) => {
  useEffect(() => {
    if (shouldViewAll && Number.isInteger(initialStep) <= totalSteps().length) {
      setAdvancedCurrentStep(initialStep);
    } else {
      setAdvancedCurrentStep(1);
    }
  }, [
    shouldViewAll,
    setCurrentStep,
    initialStep,
    setAdvancedCurrentStep,
    totalSteps,
  ]);
};
