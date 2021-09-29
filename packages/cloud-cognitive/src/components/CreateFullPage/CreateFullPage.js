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

import { getDevtoolsProps } from '../../global/js/utils/devtools';
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
import {
  usePreviousValue,
  useValidCreateStepCount,
  useCreateComponentFocus,
  useCreateComponentStepChange,
} from '../../global/js/hooks';
import { hasValidChildrenType } from '../../global/js/utils/hasValidType';

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

    useCreateComponentFocus(
      previousState,
      currentStep,
      getFullPageSteps,
      blockClass
    );
    useValidCreateStepCount(getFullPageSteps, componentName);
    useCreateComponentStepChange({
      setCurrentStep,
      setIsSubmitting,
      setShouldViewAll,
      onClose,
      onRequestSubmit,
      componentName,
      getComponentSteps: getFullPageSteps,
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

    // Log a warning to the console in the event there are no CreateFullPageSection components
    // inside of the CreateFullPageSteps when the viewAll toggle is provided and turned on.
    // currently, we are not supporting the use of FullPageSections -- this may be a future feature
    /* istanbul ignore next */
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
    // currently, we are not supporting the use of FullPageSections -- this may be a future feature
    /* istanbul ignore next */
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
        // currently, we are not supporting the use of FullPageSections -- this may be a future feature
        /* istanbul ignore next */
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
          // currently, we are not supporting the use of FullPageSections -- this may be a future feature
          /* istanbul ignore next */
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
            // currently, we are not supporting the use of FullPageSections -- this may be a future feature
            /* istanbul ignore next */
            const isLastSectionOfLastStep =
              isLastFullPageStep && fullPageStepComponents.length - 1 === index;
            /* istanbul ignore next */
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
    // currently, we are not supporting the use of 'view all' toggle state or CreateFullPageSection -- this may be a future feature
    /* istanbul ignore next */
    return (
      <div
        {...rest}
        ref={ref}
        className={cx(blockClass, className)}
        {...getDevtoolsProps(componentName)}
      >
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
            previousState={previousState}
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
        <ComposedModal
          className={`${blockClass}__modal`}
          size="sm"
          open={modalIsOpen}
          aria-label={modalTitle}
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
  children: hasValidChildrenType({
    componentName,
    childType: CREATE_FULL_PAGE_STEP,
  }),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * @ignore
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

  /**
   * @ignore
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string,

  /**
   * @ignore
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string,

  /**
   * @ignore
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string,
};

CreateFullPage.defaultProps = {
  includeViewAllToggle: false,
};
