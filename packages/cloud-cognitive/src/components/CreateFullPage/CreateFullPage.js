/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useState, createContext } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
import {
  ModalFooter,
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
} from '@carbon/react';
import { CreateInfluencer } from '../CreateInfluencer';
import { ActionSet } from '../ActionSet';
import {
  usePreviousValue,
  useValidCreateStepCount,
  useCreateComponentFocus,
  useCreateComponentStepChange,
} from '../../global/js/hooks';
import { lastIndexInArray } from '../../global/js/utils/lastIndexInArray';

const blockClass = `${pkg.prefix}--create-full-page`;
const componentName = 'CreateFullPage';

// This is a general context for the steps container
// containing information about the state of the container
// and providing some callback methods for steps to use
export const StepsContext = createContext(null);

// This is a context supplied separately to each step in the container
// to let it know what number it is in the sequence of steps
export const StepNumberContext = createContext(-1);

export let CreateFullPage = React.forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      modalDangerButtonText,
      modalDescription,
      modalSecondaryButtonText,
      modalTitle,
      nextButtonText,
      onClose,
      onRequestSubmit,
      firstFocusElement,
      submitButtonText,
      ...rest
    },
    ref
  ) => {
    const [createFullPageActions, setCreateFullPageActions] = useState([]);
    const [shouldViewAll, setShouldViewAll] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const previousState = usePreviousValue({ currentStep, open });
    const [isDisabled, setIsDisabled] = useState(false);
    const [onNext, setOnNext] = useState();
    const [onMount, setOnMount] = useState();
    const [stepData, setStepData] = useState([]);
    const [firstIncludedStep, setFirstIncludedStep] = useState(1);
    const [lastIncludedStep, setLastIncludedStep] = useState(null);

    useEffect(() => {
      const firstItem =
        stepData.findIndex((item) => item?.shouldIncludeStep) + 1;
      const lastItem = lastIndexInArray(stepData, 'shouldIncludeStep', true);
      if (firstItem !== firstIncludedStep) {
        setFirstIncludedStep(firstItem);
      }
      if (lastItem !== lastIncludedStep) {
        setLastIncludedStep(lastItem);
      }
    }, [stepData, firstIncludedStep, lastIncludedStep]);

    useCreateComponentFocus({
      previousState,
      currentStep,
      blockClass,
      onMount,
      firstFocusElement,
    });
    useValidCreateStepCount(stepData.length, componentName);
    useCreateComponentStepChange({
      firstIncludedStep,
      lastIncludedStep,
      stepData,
      onNext,
      isSubmitDisabled: isDisabled,
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
      componentBlockClass: blockClass,
      setCreateComponentActions: setCreateFullPageActions,
      setModalIsOpen,
    });

    // currently, we are not supporting the use of 'view all' toggle state
    /* istanbul ignore next */
    return (
      <div
        {...rest}
        ref={ref}
        className={cx(blockClass, className)}
        {...getDevtoolsProps(componentName)}
      >
        <div className={`${blockClass}__influencer`}>
          <CreateInfluencer stepData={stepData} currentStep={currentStep} />
        </div>
        <div className={`${blockClass}__body`}>
          <div className={`${blockClass}__main`}>
            <div className={`${blockClass}__content`}>
              <Form className={`${blockClass}__form`}>
                <StepsContext.Provider
                  value={{
                    currentStep,
                    setIsDisabled,
                    setOnNext: (fn) => setOnNext(() => fn),
                    setOnMount: (fn) => setOnMount(() => fn),
                    setStepData,
                    stepData,
                  }}
                >
                  {React.Children.map(children, (child, index) => (
                    <StepNumberContext.Provider value={index + 1}>
                      {child}
                    </StepNumberContext.Provider>
                  ))}
                </StepsContext.Provider>
              </Form>
            </div>
            <ActionSet
              className={`${blockClass}__buttons`}
              actions={createFullPageActions}
              size="2xl"
            />
          </div>
        </div>
        <ComposedModal
          className={`${blockClass}__modal`}
          size="sm"
          open={modalIsOpen}
          aria-label={modalTitle}
          onClose={() => {
            setModalIsOpen(false);
          }}
        >
          <ModalHeader title={modalTitle} />
          <ModalBody>
            <p>{modalDescription}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              kind="secondary"
              onClick={() => {
                setModalIsOpen(!modalIsOpen);
              }}
            >
              {modalSecondaryButtonText}
            </Button>
            <Button type="button" kind="danger" onClick={onClose}>
              {modalDangerButtonText}
            </Button>
          </ModalFooter>
        </ComposedModal>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag.
CreateFullPage = pkg.checkComponentEnabled(CreateFullPage, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateFullPage.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CreateFullPage.propTypes = {
  /**
   * The back button text
   */
  backButtonText: PropTypes.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the full page
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Specifies elements to focus on first on render.
   */
  firstFocusElement: PropTypes.string,

  /**
   * The primary 'danger' button text in the modal
   */
  modalDangerButtonText: PropTypes.string.isRequired,

  /**
   * The description located below the title in the modal
   */
  modalDescription: PropTypes.string,

  /**
   * The secondary button text in the modal
   */
  modalSecondaryButtonText: PropTypes.string.isRequired,

  /**
   * The title located in the header of the modal
   */
  modalTitle: PropTypes.string.isRequired,

  /**
   * The next button text
   */
  nextButtonText: PropTypes.string.isRequired,

  /**
   * An optional handler that is called when the user closes the full page (by
   * clicking the secondary button, located in the modal, which triggers after
   * clicking the ghost button in the modal
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for submitting the multi step full page (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the create button.
   */
  onRequestSubmit: PropTypes.func.isRequired,

  /**
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string,

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the full page, displayed in the header area.
   */
  title: PropTypes.node,
};
