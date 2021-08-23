/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback, useEffect } from 'react';

export const useCreateComponentStepChange = ({
  setCurrentStep,
  setIsSubmitting,
  setShouldViewAll,
  onClose,
  onRequestSubmit,
  componentName,
  getComponentSteps,
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
    const isSubmitDisabled = () => {
      let step = 0;
      let submitDisabled = false;
      let viewAllSubmitDisabled = false;
      const createComponentSteps = getComponentSteps();
      createComponentSteps.forEach((child) => {
        step++;
        if (currentStep === step) {
          submitDisabled = child.props.disableSubmit;
        }
        if (shouldViewAll && child.props.disableSubmit) {
          viewAllSubmitDisabled = true;
        }
      });
      if (!shouldViewAll) {
        return submitDisabled;
      }
      return viewAllSubmitDisabled;
    };
    const handleNext = async () => {
      setIsSubmitting(true);
      const createSteps = getComponentSteps();
      if (createSteps[currentStep - 1].props.onNext) {
        try {
          await createSteps[currentStep - 1].props.onNext();
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
      const createSteps = getComponentSteps();
      // last step should have onNext as well
      if (createSteps[currentStep - 1].props.onNext) {
        try {
          await createSteps[currentStep - 1].props.onNext();
          await handleOnRequestSubmit();
        } catch (error) {
          setIsSubmitting(false);
          console.warn(`${componentName} onNext error: ${error}`);
        }
      } else {
        await handleOnRequestSubmit();
      }
    };
    if (getComponentSteps()?.length) {
      const createSteps = getComponentSteps();
      const total = createSteps.length;
      const buttons = [];
      buttons.push({
        key: 'create-action-button-back',
        label: backButtonText,
        onClick: () => setCurrentStep((prev) => prev - 1),
        kind: 'secondary',
        disabled: currentStep === 1,
      });
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
        label: currentStep < total ? nextButtonText : submitButtonText,
        onClick: currentStep < total ? handleNext : handleSubmit,
        disabled: isSubmitDisabled(),
        kind: 'primary',
        loading: isSubmitting,
        className: `${componentBlockClass}__create-button`,
      });
      setCreateComponentActions(buttons);
    }
  }, [
    getComponentSteps,
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
