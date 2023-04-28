/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';

/**
 * This useEffect makes sure that every CreateTearsheetStep/CreateFullPageStep reports back it's
 * title, secondaryLabel, introStep, and shouldIncludeStep data so that it can be sent to the CreateInfluencer.
 * @param {object} useResetCreateComponent
 * @param {object} useResetCreateComponent.stepsContext
 * @param {number} useResetCreateComponent.stepNumber
 * @param {boolean} useResetCreateComponent.introStep
 * @param {boolean} useResetCreateComponent.shouldIncludeStep
 * @param {string} useResetCreateComponent.secondaryLabel
 * @param {string} useResetCreateComponent.title
 */
export const useRetrieveStepData = ({
  stepsContext,
  stepNumber,
  introStep,
  shouldIncludeStep,
  secondaryLabel,
  title,
}) => {
  useEffect(() => {
    if (stepsContext) {
      stepsContext.setStepData((prev) => {
        const stepItem = {
          title,
          secondaryLabel,
          introStep,
          shouldIncludeStep,
        };
        const previousItem = prev[stepNumber - 1];
        if (
          previousItem?.title !== stepItem.title ||
          previousItem?.secondaryLabel !== stepItem.secondaryLabel ||
          previousItem?.introStep !== stepItem.introStep ||
          previousItem?.shouldIncludeStep !== stepItem.shouldIncludeStep
        ) {
          const clone = [...prev];
          clone[stepNumber - 1] = stepItem;
          return clone;
        }
        return prev;
      });
    }
  }, [
    shouldIncludeStep,
    title,
    secondaryLabel,
    introStep,
    stepsContext,
    stepNumber,
  ]);
};
