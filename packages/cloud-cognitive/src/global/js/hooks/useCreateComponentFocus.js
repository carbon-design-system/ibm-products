/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';
import { getFocusableElements } from '../utils/getFocusableElements';

/**
 * Returns the previous state values included in the param
 * @param {object} previousState
 * @param {number} currentStep
 * @param {Function} getCreateComponentSteps
 * @param {string} componentBlockClass
 */
export const useCreateComponentFocus = (
  previousState,
  currentStep,
  getCreateComponentSteps,
  componentBlockClass
) => {
  useEffect(() => {
    if (previousState?.currentStep !== currentStep && currentStep > 0) {
      const visibleStepInnerContent = document.querySelector(
        `.${componentBlockClass}__step.${componentBlockClass}__step--visible-step`
      );
      const fullPageSteps = getCreateComponentSteps();
      const focusableStepElements =
        fullPageSteps &&
        fullPageSteps.length &&
        getFocusableElements(visibleStepInnerContent);
      const activeStepComponent =
        fullPageSteps && fullPageSteps.length && fullPageSteps[currentStep - 1];
      if (activeStepComponent && activeStepComponent.props.onMount) {
        activeStepComponent.props.onMount();
      }
      if (focusableStepElements && focusableStepElements.length) {
        focusableStepElements[0].focus();
      } else {
        const nextButton = document.querySelector(
          `.${componentBlockClass}__create-button`
        );
        nextButton?.focus();
      }
    }
  }, [
    currentStep,
    getCreateComponentSteps,
    previousState,
    componentBlockClass,
  ]);
};
