/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback, useEffect } from 'react';

export const useCreateComponentStepChange = ({
  totalStepCount,
  onNext,
  isSubmitDisabled,
  setCurrentStep,
  setIsSubmitting,
  setShouldViewAll,
  onClose,
  onRequestSubmit,
  componentName,
  currentStep,
  shouldViewAll,
  backButtonText,
  cancelButtonText,
  submitButtonText,
  nextButtonText,
  isSubmitting,
  componentBlockClass,
  setCreateComponentActions,
  setModalIsOpen,
}) => {
  // useEffect to handle multi step logic
  useEffect(() => {
    const onUnmount = () => {
      if (componentName !== 'CreateFullPage') {
        setCurrentStep(0);
      }
      setIsSubmitting(false);
      setShouldViewAll(false);
      onClose();
    };
    const handleOnRequestSubmit = async () => {
      // check if onRequestSubmit returns a promise
      try {
        await onRequestSubmit();
        onUnmount();
      } catch (error) {
        setIsSubmitting(false);
        console.warn(`${componentName} submit error: ${error}`);
      }
    };
    const handleNext = async () => {
      setIsSubmitting(true);
      if (typeof onNext === 'function') {
        try {
          await onNext();
          continueToNextStep();
        } catch (error) {
          setIsSubmitting(false);
          console.warn(`${componentName} onNext error: ${error}`);
        }
      } else {
        continueToNextStep();
      }
    };
    const handleSubmit = async () => {
      setIsSubmitting(true);
      // last step should have onNext as well
      if (typeof onNext === 'function') {
        try {
          await onNext();
          await handleOnRequestSubmit();
        } catch (error) {
          setIsSubmitting(false);
          console.warn(`${componentName} onNext error: ${error}`);
        }
      } else {
        await handleOnRequestSubmit();
      }
    };
    if (totalStepCount > 0) {
      const buttons = [];
      if (totalStepCount > 1 && !shouldViewAll) {
        buttons.push({
          key: 'create-action-button-back',
          label: backButtonText,
          onClick: () => setCurrentStep((prev) => prev - 1),
          kind: 'secondary',
          disabled: currentStep === 1,
        });
      }
      buttons.push({
        key: 'create-action-button-cancel',
        label: cancelButtonText,
        onClick:
          componentName === 'CreateFullPage'
            ? () => setModalIsOpen(true)
            : onUnmount,
        kind: 'ghost',
      });
      buttons.push({
        key: 'create-action-button-submit',
        label: shouldViewAll
          ? submitButtonText
          : currentStep < totalStepCount
          ? nextButtonText
          : submitButtonText,
        onClick: shouldViewAll
          ? handleSubmit
          : currentStep < totalStepCount
          ? handleNext
          : handleSubmit,
        disabled: isSubmitDisabled,
        kind: 'primary',
        loading: isSubmitting,
        className: `${componentBlockClass}__create-button`,
      });
      setCreateComponentActions(buttons);
    }
  }, [
    totalStepCount,
    onNext,
    isSubmitDisabled,
    backButtonText,
    cancelButtonText,
    currentStep,
    onClose,
    nextButtonText,
    submitButtonText,
    onRequestSubmit,
    isSubmitting,
    shouldViewAll,
    componentBlockClass,
    componentName,
    continueToNextStep,
    setCurrentStep,
    setCreateComponentActions,
    setIsSubmitting,
    setShouldViewAll,
    setModalIsOpen,
  ]);

  const continueToNextStep = useCallback(() => {
    setIsSubmitting(false);
    setCurrentStep((prev) => prev + 1);
  }, [setCurrentStep, setIsSubmitting]);
};
