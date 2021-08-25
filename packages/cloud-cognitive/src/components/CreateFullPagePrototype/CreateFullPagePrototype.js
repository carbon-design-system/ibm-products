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
import {
  CREATE_FULL_PAGE_SECTION_PROTOTYPE,
  CREATE_FULL_PAGE_STEP_PROTOTYPE,
} from './constants';

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
import { CreateInfluencerPrototype } from '../CreateInfluencerPrototype';
import { ActionSet } from '../ActionSet';
import {
  usePreviousValue,
  useValidCreateStepCount,
  useCreateComponentFocus,
} from '../../global/js/hooks';
import { useCreateComponentStepChange } from './useCreateComponentStepChange';
import { hasValidChildType } from '../../global/js/utils/hasValidChildType';

const blockClass = `${pkg.prefix}--create-full-page`;
const componentName = 'CreateFullPagePrototype';

export let CreateFullPagePrototype = React.forwardRef(
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
      setShouldViewAll: shouldViewAll,
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

    // check if child is a full page step component
    const isFullPageStep = (child) => {
      if (
        child &&
        child.props &&
        child.props.type === CREATE_FULL_PAGE_STEP_PROTOTYPE
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
      return {
        steps: fullPageStepComponents,
      };
    };

    // renders all children (CreateFullPageSteps and regular children elements)
    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const fullPageStepComponents = shouldViewAll
        ? childrenArray.filter((child) => isFullPageStep(child))
        : childrenArray.filter(
            (child) => isFullPageStep(child) && !child.props.viewAllOnly
          );
      return (
        <>
          {fullPageStepComponents.map((child, stepIndex) => {
            if (!isFullPageStep(child)) {
              return child;
            }
            step++;
            return React.cloneElement(child, {
              className: cx(child.props.className, {
                [`${blockClass}__step--hidden-step`]: currentStep !== step,
                [`${blockClass}__step--visible-step`]: currentStep === step,
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
          <CreateInfluencerPrototype
            activeSectionIndex={activeSectionIndex}
            componentBlockClass={blockClass}
            createComponentName={componentName}
            currentStep={currentStep}
            // getCreateComponents={getFullPage}
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
          aria-label={modalTitle}>
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
CreateFullPagePrototype = pkg.checkComponentEnabled(
  CreateFullPagePrototype,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateFullPagePrototype.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CreateFullPagePrototype.propTypes = {
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
  children: hasValidChildType({
    componentName,
    childType: CREATE_FULL_PAGE_STEP_PROTOTYPE,
  }),

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
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPagePrototype will handle the submitting state of the create button.
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

CreateFullPagePrototype.defaultProps = {
  includeViewAllToggle: false,
};
