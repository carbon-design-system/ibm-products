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
import { CREATE_FULL_PAGE_SECTION, CREATE_FULL_PAGE_STEP } from './constants';

// Carbon and package components we use.
import {
  Grid,
  ModalFooter,
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
} from 'carbon-components-react';
import { CreateInfluencer } from '../CreateInfluencer';
import { ActionSet } from '../ActionSet';
import { usePreviousValue } from '../../global/js/use/usePreviousValue';
import { useValidCreateStepCount } from '../../global/js/use/useValidCreateStepCount';
import { useCreateComponentStepChange } from '../../global/js/use/useCreateComponentStepChange';

const blockClass = `${pkg.prefix}--create-full-page`;
const componentName = 'CreateFullPage';

export let CreateFullPage = React.forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      includeViewAllToggle,
      modalDangerButtonText,
      modalDescription,
      modalSecondaryButtonText,
      modalTitle,
      nextButtonText,
      onClose,
      onRequestSubmit,
      sideNavAriaLabel,
      submitButtonText,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText,
      viewAllToggleOnLabelText,
      ...rest
    },
    ref
  ) => {
    const [createFullPageActions, setCreateFullPageActions] = useState([]);
    const [shouldViewAll, setShouldViewAll] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const previousState = usePreviousValue({ currentStep, open });

    // returns an array of full page steps
    const getFullPageSteps = useCallback(() => {
      const steps = [];
      const childrenArray = Array.isArray(children) ? children : [children];
      const extractedChildren =
        childrenArray && childrenArray[0]?.type === React.Fragment
          ? childrenArray[0].props.children
          : childrenArray;
      extractedChildren.forEach((child) => {
        if (isFullPageStep(child)) {
          steps.push(child);
        }
      });
      return steps;
    }, [children]);

    useCreateComponentStepChange(
      previousState,
      currentStep,
      getFullPageSteps,
      blockClass
    );
    useValidCreateStepCount(getFullPageSteps, componentName);

    useEffect(() => {
      const onUnmount = () => {
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
        const createFullPageSteps = getFullPageSteps();
        createFullPageSteps.forEach((child) => {
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
        if (total > 1 && !shouldViewAll) {
          buttons.push({
            label: backButtonText,
            onClick: () => setCurrentStep((prev) => prev - 1),
            kind: 'secondary',
            disabled: currentStep === 1,
          });
        }
        buttons.push({
          label: cancelButtonText,
          onClick: () => {
            setModalIsOpen(true);
          },
          kind: 'ghost',
        });
        buttons.push({
          label: shouldViewAll
            ? submitButtonText
            : currentStep < total
            ? nextButtonText
            : submitButtonText,
          onClick: shouldViewAll
            ? handleSubmit
            : currentStep < total
            ? handleNext
            : handleSubmit,
          disabled: isSubmitDisabled(),
          kind: 'primary',
          loading: isSubmitting,
          className: `${blockClass}__create-button`,
        });
        setCreateFullPageActions(buttons);
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
      shouldViewAll,
    ]);

    const continueToNextStep = () => {
      setIsSubmitting(false);
      setCurrentStep((prev) => prev + 1);
    };

    // Log a warning to the console in the event there are no CreateFullPageSection components
    // inside of the CreateFullPageSteps when the viewAll toggle is provided and turned on.
    useEffect(() => {
      if (includeViewAllToggle && shouldViewAll) {
        let childrenArray = Array.isArray(children) ? children : [children];
        const fullPageStepComponents = childrenArray.filter((child) =>
          isFullPageStep(child)
        );
        let fullPageSectionComponents = [];
        fullPageStepComponents.forEach((child, index) => {
          // We have received children for a FullPageStep
          if (shouldViewAll && typeof child.props.children !== 'undefined') {
            // Only a string was provided as children of CreateFullPageStep, this is not permitted when using view all toggle
            if (typeof child.props.children === 'string') {
              console.warn(
                `${componentName}: You must have at least one CreateFullPageSection component in a CreateFullPageStep when using the 'includeViewAllToggle' prop.`
              );
            } else {
              // The FullPageStep has an array of children, lets check each one to see if it is a FullPageSection
              if (child.props.children.length) {
                child.props.children.forEach((stepChild) => {
                  if (isFullPageSection(stepChild)) {
                    fullPageSectionComponents.push(stepChild);
                  }
                });
              } else {
                // The FullPageStep only has a single React element as a child, lets check to see if it is a FullPageSection
                if (isFullPageSection(child.props.children)) {
                  fullPageSectionComponents.push(child.props.children);
                }
              }
            }
          }
          // If there are fewer CreateFullPageSection components than CreateFullPageStep components
          // it means that each CreateFullPageStep does not have at least one CreateFullPageSection
          // this is not permitted when using view all toggle
          if (
            fullPageSectionComponents.length < fullPageStepComponents.length &&
            index === fullPageStepComponents.length - 1 // wait until we've finished checking each FullPageStep before giving a warning
          ) {
            console.warn(
              `${componentName}: You must have at least one CreateFullPageSection component in a CreateFullPageStep when using the 'includeViewAllToggle' prop.`
            );
          }
          // We have received a single child element, lets check to see that it is
          // a CreateFullPageSection component, if it is not we should add a console
          // warning, as each CreateFullPageStep required at least one CreateFullPageSection,
          // when using the view all toggle
          if (
            shouldViewAll &&
            typeof child.props.children !== 'undefined' &&
            !child.props.children.length
          ) {
            if (!isFullPageSection(child.props.children)) {
              console.warn(
                `${componentName}: You must have at least one CreateFullPageSection component in a CreateFullPageStep when using the 'includeViewAllToggle' prop.`
              );
            }
          }
        });
      }
    }, [includeViewAllToggle, shouldViewAll, children]);

    // check if child is a full page step component
    const isFullPageStep = (child) => {
      if (child && child.props && child.props.type === CREATE_FULL_PAGE_STEP) {
        return true;
      }
      return false;
    };

    // check if child is a full page section component
    const isFullPageSection = (child) => {
      if (
        child &&
        child.props &&
        child.props.type === CREATE_FULL_PAGE_SECTION
      ) {
        return true;
      }
      return false;
    };

    // renders the step progression components in the left influencer area
    const getFullPageComponents = (childrenElements) => {
      let childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const fullPageStepComponents = childrenArray.filter((child) =>
        isFullPageStep(child)
      );
      let sectionChildElements = [];
      fullPageStepComponents.forEach((child) => {
        // we have received an array of children, lets check to see that each child is
        // a FullPageSection component before adding it to sectionChildElements
        if (shouldViewAll && child.props.children.length) {
          child.props.children.forEach((stepChild) => {
            if (isFullPageSection(stepChild)) {
              sectionChildElements.push(stepChild);
            }
          });
        }
        // we have received a single child element, lets check to see that it is
        // a CreateFullPageSection component before adding it to sectionChildElements
        if (
          shouldViewAll &&
          typeof child.props.children !== 'undefined' &&
          !child.props.children.length
        ) {
          if (isFullPageSection(child.props.children)) {
            sectionChildElements.push(child.props.children);
          }
        }
      });
      return {
        sections: sectionChildElements,
        steps: fullPageStepComponents,
      };
    };

    // renders all children (CreateFullPageSteps and regular children elements)
    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const indexOfLastFullPageStep = childrenArray
        .map((el) => el?.props?.type)
        .lastIndexOf(CREATE_FULL_PAGE_STEP);
      return (
        <>
          {childrenArray.map((child, stepIndex) => {
            if (!isFullPageStep(child)) {
              return child;
            }
            step++;
            return React.cloneElement(
              child,
              {
                className: cx(child.props.className, {
                  [`${blockClass}__step--hidden-step`]:
                    !shouldViewAll && currentStep !== step,
                  [`${blockClass}__step--visible-step`]: currentStep === step,
                }),
                key: `key_${stepIndex}`,
              },
              <>
                {renderStepChildren(
                  child.props.children,
                  indexOfLastFullPageStep === step - 1
                )}
              </>
            );
          })}
        </>
      );
    };

    const renderStepChildren = (fullPageStepComponent, isLastFullPageStep) => {
      const fullPageStepComponents = Array.isArray(fullPageStepComponent)
        ? fullPageStepComponent
        : [fullPageStepComponent];
      return (
        <>
          {fullPageStepComponents.map((child, index) => {
            if (!isFullPageSection(child)) {
              return child;
            }
            // Needed to be able to not render the divider
            // line on the last section of the last step
            const isLastSectionOfLastStep =
              isLastFullPageStep && fullPageStepComponents.length - 1 === index;
            return React.cloneElement(
              child,
              {
                className: cx(child.props.className, {
                  [`${blockClass}__step--hidden-section`]:
                    child.props.viewAllOnly && !shouldViewAll,
                  [`${blockClass}__step--visible-section`]:
                    !child.props.viewAllOnly ||
                    (child.props.viewAllOnly && shouldViewAll),
                }),
                key: `key_${index}`,
              },
              <>
                {shouldViewAll && (
                  <h4 className={`${blockClass}__step-title`}>
                    {child.props.title}
                  </h4>
                )}
                {child}
                {shouldViewAll && !isLastSectionOfLastStep && (
                  <span className={`${blockClass}__section-divider`} />
                )}
              </>
            );
          })}
        </>
      );
    };

    // track scrolling/intersection of create sections so that we know
    // which section is active (updates the SideNavItems `isActive` prop)
    useEffect(() => {
      if (shouldViewAll) {
        const fullPageMainContent = document.querySelector(
          `.${blockClass}__content`
        );
        let options = {
          root: fullPageMainContent,
          rootMargin: '0px',
          threshold: 0,
        };
        // Convert NodeList to array so we can find the index
        // of the section that should be marked as `active`.
        const viewAllSections = Array.from(
          document.querySelectorAll(
            `.${blockClass}__section.${blockClass}__step--visible-section`
          )
        );
        const observer = new IntersectionObserver((entries) => {
          // isIntersecting is true when element and viewport/options.root are overlapping
          // isIntersecting is false when element and viewport/options.root don't overlap
          if (entries[0].isIntersecting) {
            // DOM element that is intersecting
            const visibleTarget = entries[0].target;
            // Get visible element index
            const visibleTargetIndex = viewAllSections.findIndex(
              (item) => item.id === visibleTarget.id
            );
            setActiveSectionIndex(visibleTargetIndex);
          }
        }, options);
        viewAllSections.forEach((section) => {
          observer.observe(section);
        });
      }
    }, [shouldViewAll]);

    return (
      <div {...rest} ref={ref} className={cx(blockClass, className)}>
        <div className={`${blockClass}__influencer`}>
          <CreateInfluencer
            activeSectionIndex={activeSectionIndex}
            componentBlockClass={blockClass}
            createComponentName={componentName}
            currentStep={currentStep}
            createComponents={getFullPageComponents(children)}
            includeViewAllToggle={includeViewAllToggle}
            handleToggleState={(toggleState) => setShouldViewAll(toggleState)}
            handleActiveSectionIndex={(index) => setActiveSectionIndex(index)}
            sideNavAriaLabel={sideNavAriaLabel}
            toggleState={shouldViewAll}
            viewAllToggleLabelText={viewAllToggleLabelText}
            viewAllToggleOffLabelText={viewAllToggleOffLabelText}
            viewAllToggleOnLabelText={viewAllToggleOnLabelText}
          />
        </div>
        <div className={`${blockClass}__body`}>
          <div className={`${blockClass}__main`}>
            <div className={`${blockClass}__content`}>
              <Grid>
                <Form className={`${blockClass}__form`}>
                  {renderChildren(children)}
                </Form>
              </Grid>
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
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * An optional prop that provides a toggle element in the left side influencer panel
   */
  includeViewAllToggle: PropTypes.bool,

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

  /**
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string,

  /**
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string,

  /**
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string,
};

CreateFullPage.defaultProps = {
  includeViewAllToggle: false,
};
