/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useCallback, useState, forwardRef } from 'react';
import { SidePanel } from './SidePanel';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import cx from 'classnames';
import { SIDE_PANEL_STEP } from './constants';

const componentName = 'SidePanelWizard';
const blockClass = `${pkg.prefix}--side-panel-wizard`;

export let SidePanelWizard = forwardRef(
  (
    {
      actionToolbarButtons,
      animateTitle,
      backButtonLabel,
      cancelButtonLabel,
      children,
      className,
      closeIconDescription,
      condensedActions,
      includeOverlay,
      labelText,
      navigationBackIconDescription,
      nextButtonLabel,
      onNavigationBack,
      onRequestClose,
      onRequestSubmit,
      onUnmount,
      open,
      pageContentSelector,
      placement,
      selectorPrimaryFocus,
      size,
      slideIn,
      submitButtonLabel,
      subtitle,
      title,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [sidePanelWizardActions, setSidePanelWizardActions] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
      const isSubmitDisabled = () => {
        let step = 0;
        let submitDisabled = false;
        const sidePanelSteps = getSidePanelSteps();
        sidePanelSteps.forEach((child) => {
          step++;
          if (currentStep === step) {
            submitDisabled = child.props.disableSubmit;
          }
        });
        return submitDisabled;
      };
      const handleNext = () => {
        setIsSubmitting(true);
        const wizardSteps = getSidePanelSteps();
        if (wizardSteps[currentStep - 1].props.onNext) {
          wizardSteps[currentStep - 1].props
            .onNext()
            .then(() => {
              setIsSubmitting(false);
              setCurrentStep((prev) => prev + 1);
            })
            .catch((error) => {
              setIsSubmitting(false);
              console.warn(`${componentName} onNext error: ${error}`);
            });
        } else {
          setIsSubmitting(false);
          setCurrentStep((prev) => prev + 1);
        }
      };
      const handleSubmit = () => {
        setIsSubmitting(true);
        onRequestSubmit()
          .then(() => {
            setIsSubmitting(false);
            onRequestClose();
          })
          .catch((error) => {
            setIsSubmitting(false);
            console.warn(`${componentName} submit error: ${error}`);
          });
      };
      if (getSidePanelSteps()?.length) {
        const wizardSteps = getSidePanelSteps();
        const total = wizardSteps.length;
        const buttons = [];
        const onFirstStep = currentStep === 1;
        buttons.push({
          label: onFirstStep ? cancelButtonLabel : backButtonLabel,
          onClick: onFirstStep
            ? onRequestClose
            : () => setCurrentStep((prev) => prev - 1),
          kind: 'secondary',
        });
        const currentWizardStep = wizardSteps[currentStep - 1];
        let nextLabel = nextButtonLabel;
        if (
          currentWizardStep &&
          currentWizardStep.props &&
          currentWizardStep.props.nextButtonLabel
        ) {
          nextLabel = currentWizardStep.props.nextButtonLabel;
        }
        buttons.push({
          label: currentStep < total ? nextLabel : submitButtonLabel,
          onClick: currentStep < total ? handleNext : handleSubmit,
          disabled: isSubmitDisabled(),
          kind: 'primary',
          loading: isSubmitting,
        });
        setSidePanelWizardActions(buttons);
      }
    }, [
      getSidePanelSteps,
      children,
      backButtonLabel,
      cancelButtonLabel,
      currentStep,
      onRequestClose,
      nextButtonLabel,
      submitButtonLabel,
      onRequestSubmit,
      isSubmitting,
    ]);

    const getSidePanelSteps = useCallback(() => {
      const steps = [];
      const childrenArray = Array.isArray(children) ? children : [children];
      childrenArray.forEach((child) => {
        if (isSidePanelStep(child)) {
          steps.push(child);
        }
      });
      return steps;
    }, [children]);

    // check if child is a side panel step
    const isSidePanelStep = (child) => {
      if (child && child.props && child.props.type === SIDE_PANEL_STEP) {
        return true;
      }
      return false;
    };

    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      return (
        <>
          {' '}
          {childrenArray.map((child, stepIndex) => {
            if (!isSidePanelStep(child)) return child;
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

    const getTitle = () => {
      const sidePanelSteps = getSidePanelSteps();
      const stepTitle =
        (sidePanelSteps && sidePanelSteps[currentStep - 1]?.props.title) ||
        title;
      return stepTitle;
    };

    const getSubtitle = () => {
      const sidePanelSteps = getSidePanelSteps();
      const stepSubtitle =
        (sidePanelSteps && sidePanelSteps[currentStep - 1]?.props.subtitle) ||
        subtitle;
      return stepSubtitle;
    };

    return (
      <SidePanel
        {...rest}
        className={cx(blockClass, className)}
        animateTitle={animateTitle}
        actions={sidePanelWizardActions}
        actionToolbarButtons={actionToolbarButtons}
        closeIconDescription={closeIconDescription}
        open={open}
        onRequestClose={onRequestClose}
        title={getTitle()}
        subtitle={getSubtitle()}
        condensedActions={condensedActions}
        includeOverlay={includeOverlay}
        labelText={labelText}
        navigationBackIconDescription={navigationBackIconDescription}
        onUnmount={() => {
          if (onUnmount) onUnmount();
          setCurrentStep(1);
        }}
        onNavigationBack={onNavigationBack}
        pageContentSelector={pageContentSelector}
        placement={placement}
        selectorPrimaryFocus={selectorPrimaryFocus}
        size={size}
        slideIn={slideIn}
        isWizard
        ref={ref}>
        {renderChildren(children)}
      </SidePanel>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
SidePanelWizard = pkg.checkComponentEnabled(SidePanelWizard, componentName);

SidePanelWizard.propTypes = {
  /**
   * Sets the action toolbar buttons
   */
  actionToolbarButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      leading: PropTypes.bool,
      icon: PropTypes.object,
      onActionToolbarButtonClick: PropTypes.func,
      kind: PropTypes.oneOf(['ghost', 'tertiary', 'secondary', 'primary']),
    })
  ),

  /**
   * Determines if the title will animate on scroll
   */
  animateTitle: PropTypes.bool,

  /**
   * Sets the text for the cancel button
   */
  backButtonLabel: PropTypes.string,

  /**
   * Sets the text for the cancel button
   */
  cancelButtonLabel: PropTypes.string,

  /**
   * Sets the body content of the side panel
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /**
   * Sets an optional className to be added to the side panel outermost element
   */
  className: PropTypes.string,

  /**
   * Sets the close button icon description
   */
  closeIconDescription: PropTypes.string,

  /**
   * Determines whether the side panel should render the condensed version (affects action buttons primarily)
   */
  condensedActions: PropTypes.bool,

  /**
   * Determines whether the side panel should render with an overlay
   */
  includeOverlay: PropTypes.bool,

  /**
   * Sets the label text which will display above the title text
   */
  labelText: PropTypes.string,

  /**
   * Sets the icon description for the navigation back icon button
   */
  navigationBackIconDescription: PropTypes.string,

  /**
   * Sets text for the next button
   */
  nextButtonLabel: PropTypes.string,

  /**
   * Changes the current side panel page to the previous page
   */
  onNavigationBack: PropTypes.func,

  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Specify a handler for submitting the side panel.
   * This function _must_ return a promise that is either resolved or rejected.
   */
  onRequestSubmit: PropTypes.func.isRequired,

  /**
   * Optional function called when the side panel exit animation is complete.
   * This handler can be used for any state cleanup needed.
   */
  onUnmount: PropTypes.func,

  /**
   * Determines whether the side panel should render or not
   */
  open: PropTypes.bool.isRequired,

  /**
   * This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.
   * This prop is required when using the `slideIn` variant of the side panel.
   */
  pageContentSelector: PropTypes.string,

  /**
   * Determines if the side panel is on the right or left
   */
  placement: PropTypes.oneOf(['left', 'right']),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the side panel opens
   */
  selectorPrimaryFocus: PropTypes.string,

  /**
   * Sets the size of the side panel
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'max']),

  /**
   * Determines if this panel slides in
   */
  slideIn: PropTypes.bool,

  /**
   * Sets the submit button text
   */
  submitButtonLabel: PropTypes.string.isRequired,

  /**
   * Sets the subtitle text
   */
  subtitle: PropTypes.string,

  /**
   * Sets the title text
   */
  title: PropTypes.string,
};

SidePanelWizard.defaultProps = {
  animateTitle: true,
  placement: 'right',
  size: 'md',
  slideIn: false,
  currentStep: 1,
  navigationBackIconDescription: 'Back',
  closeIconDescription: 'Close',
  isWizard: true,
};
