/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useCallback, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { CREATE_FULL_PAGE_STEP } from './constants';
import uuidv4 from '../../global/js/utils/uuidv4';

// Carbon and package components we use.
import {
  Grid,
  ModalFooter,
  ProgressIndicator,
  ProgressStep,
  Toggle,
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button,
} from 'carbon-components-react';
import { ActionSet } from '../ActionSet';
const blockClass = `${pkg.prefix}--create-full-page`;
const componentName = 'CreateFullPage';

// Custom PropType validator which checks and ensures that the children property has no more than 4 nodes
const isValidChildren =
  () =>
  ({ children }) => {
    children.length > 1 &&
      children.map((child) => {
        if (
          child &&
          child.props &&
          child.props.type !== CREATE_FULL_PAGE_STEP
        ) {
          throw new Error(
            'Each child of Create Full Page is required to be a `CreateFullPageStep`. Please remove the HTML element, or wrap it around the `CreateFullPageStep` component.'
          );
        }
        return;
      });
  };

export let CreateFullPage = React.forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      hasToggle,
      modalDangerButtonText,
      modalDescription,
      modalSecondaryButtonText,
      modalTitle,
      nextButtonText,
      onClose,
      onRequestSubmit,
      submitButtonText,
      toggleAriaLabel,
      toggleLabelText,
      ...rest
    },
    ref
  ) => {
    const [createFullPageActions, setCreateFullPageActions] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
      const onUnmount = () => {
        setIsSubmitting(false);
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
        const createFullPageSteps = getFullPageSteps();
        createFullPageSteps.forEach((child) => {
          step++;
          if (currentStep === step) {
            submitDisabled = child.props.disableSubmit;
          }
        });
        return submitDisabled;
      };
      const handleNext = async () => {
        setIsSubmitting(true);
        const createSteps = getFullPageSteps();
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
        const createSteps = getFullPageSteps();
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
      if (getFullPageSteps()?.length) {
        const createSteps = getFullPageSteps();
        const total = createSteps.length;
        const buttons = [];
        if (total > 1) {
          buttons.push({
            label: backButtonText,
            onClick: () => setCurrentStep((prev) => prev - 1),
            kind: 'secondary',
            disabled: currentStep === 1,
          });
          buttons.push({
            label: cancelButtonText,
            onClick: () => {
              setModalIsOpen(true);
            },
            kind: 'ghost',
          });
          buttons.push({
            label: currentStep < total ? nextButtonText : submitButtonText,
            onClick: currentStep < total ? handleNext : handleSubmit,
            disabled: isSubmitDisabled(),
            kind: 'primary',
            loading: isSubmitting,
            className: `${blockClass}__create-button`,
          });
          setCreateFullPageActions(buttons);
        }
      }
    }, [
      getFullPageSteps,
      children,
      backButtonText,
      cancelButtonText,
      currentStep,
      onClose,
      nextButtonText,
      submitButtonText,
      onRequestSubmit,
      isSubmitting,
      modalIsOpen,
    ]);

    useEffect(() => {
      const createSteps = getFullPageSteps();
      const total = createSteps.length;
      if (total === 1) {
        console.warn(
          `${componentName}: CreateFullPages with one step are not permitted. If you require only one step, please use either the CreateTearsheet, CreateSidePanel, or CreateModal components.`
        );
      }
    }, [getFullPageSteps]);

    const continueToNextStep = () => {
      setIsSubmitting(false);
      setCurrentStep((prev) => prev + 1);
    };

    // returns an array of full page steps
    const getFullPageSteps = useCallback(() => {
      const steps = [];
      const childrenArray = Array.isArray(children) ? children : [children];
      childrenArray.forEach((child) => {
        if (isFullPageStep(child)) {
          steps.push(child);
        }
      });
      return steps;
    }, [children]);

    // check if child is a full page step component
    const isFullPageStep = (child) => {
      if (child && child.props && child.props.type === CREATE_FULL_PAGE_STEP) {
        return true;
      }
      return false;
    };

    const renderProgressSteps = (childrenElements) => {
      let childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      childrenArray = childrenArray.filter((child) => isFullPageStep(child));
      return (
        <ProgressIndicator
          currentIndex={currentStep - 1}
          spaceEqually
          vertical
          className={`${blockClass}__progress-indicator`}>
          {childrenArray.map((child, stepIndex) => (
            <ProgressStep
              label={child.props.title ? child.props.title : ''}
              key={stepIndex}
            />
          ))}
        </ProgressIndicator>
      );
    };

    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      return (
        <>
          {childrenArray.map((child, stepIndex) => {
            if (!isFullPageStep(child)) {
              return child;
            }
            step++;
            return React.cloneElement(child, {
              className: cx(child.props.className, {
                [`${blockClass}__step--hidden-section`]: currentStep !== step,
                [`${blockClass}__step--visible-section`]: currentStep === step,
              }),
              key: `key_${stepIndex}`,
            });
          })}
        </>
      );
    };

    return (
      <div {...rest} ref={ref} className={cx(blockClass, className)}>
        <div className={`${blockClass}__influencer`}>
          {renderProgressSteps(children)}
          {hasToggle && (
            <Toggle
              className={`${blockClass}__influencer-toggle`}
              aria-label={toggleAriaLabel}
              id={`toggle-${uuidv4()}`}
              labelText={toggleLabelText}
            />
          )}
        </div>
        <div className={`${blockClass}__body`}>
          <div className={`${blockClass}__main`}>
            <div className={`${blockClass}__content`}>
              <Grid>{renderChildren(children)}</Grid>
            </div>
            <ActionSet
              className={`${blockClass}__buttons`}
              actions={createFullPageActions}
              size="max"
            />
          </div>
        </div>
        <ComposedModal size="sm" open={modalIsOpen}>
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
              }}>
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
  children: isValidChildren(),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * An optional prop that provides a toggle element in the left side influencer panel
   */
  hasToggle: PropTypes.bool,

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
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the full page, displayed in the header area.
   */
  // title: isTitleRequired(),

  /**
   * The aria label applied to toggle element for accessibility purposes
   */
  toggleAriaLabel: PropTypes.string,

  /**
   * The text that will appear above the toggle element
   */
  toggleLabelText: PropTypes.string,
};
