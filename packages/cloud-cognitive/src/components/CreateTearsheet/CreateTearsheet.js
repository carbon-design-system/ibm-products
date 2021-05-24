/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ProgressIndicator,
  ProgressStep,
} from 'carbon-components-react';
import cx from 'classnames';
import { ActionSet } from '../ActionSet';
import { TearsheetShell } from '../Tearsheet/TearsheetShell';
import { pkg } from '../../settings';
import { CREATE_TEARSHEET_STEP } from './constants';

const componentName = 'CreateTearsheet';
const blockClass = `${pkg.prefix}--tearsheet-create`;

export let CreateTearsheet = forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      closeIconDescription,
      description,
      influencerPosition,
      influencerWidth,
      label,
      navigation,
      nextButtonText,
      onClose,
      onRequestSubmit,
      open,
      preventCloseOnClickOutside,
      selectorPrimaryFocus,
      submitButtonText,
      title,
      verticalPosition,
    },
    ref
  ) => {
    const [createTearsheetActions, setCreateTearsheetActions] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
      const createSteps = getTearsheetSteps();
      const total = createSteps.length;
      if (total === 1) {
        console.warn(
          `${componentName}: CreateTearsheets with one step are not permitted. If you require only one step, please use either the narrow tearsheet, CreateSidePanel, or CreateModal components.`
        );
      }
    }, [getTearsheetSteps]);

    useEffect(() => {
      const isSubmitDisabled = () => {
        let step = 0;
        let submitDisabled = false;
        const tearsheetSteps = getTearsheetSteps();
        tearsheetSteps.forEach((child) => {
          step++;
          if (currentStep === step) {
            submitDisabled = child.props.disableSubmit;
          }
        });
        return submitDisabled;
      };
      const handleNext = () => {
        setIsSubmitting(true);
        const createSteps = getTearsheetSteps();
        if (createSteps[currentStep - 1].props.onNext) {
          createSteps[currentStep - 1].props
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
            onClose();
            setCurrentStep(1);
          })
          .catch((error) => {
            setIsSubmitting(false);
            console.warn(`${componentName} submit error: ${error}`);
          });
      };
      if (getTearsheetSteps()?.length) {
        const createSteps = getTearsheetSteps();
        const total = createSteps.length;
        const buttons = [];
        if (total > 1)
          buttons.push({
            label: backButtonText,
            onClick: () => setCurrentStep((prev) => prev - 1),
            kind: 'secondary',
            disabled: currentStep === 1,
          });
        buttons.push({
          label: cancelButtonText,
          onClick: () => {
            setCurrentStep(1);
            onClose();
          },
          kind: 'ghost',
        });
        const currentCreateStep = createSteps[currentStep - 1];
        let nextLabel = nextButtonText;
        if (currentCreateStep?.props?.nextButtonText) {
          nextLabel = currentCreateStep.props.nextButtonText;
        }
        buttons.push({
          label: currentStep < total ? nextLabel : submitButtonText,
          onClick: currentStep < total ? handleNext : handleSubmit,
          disabled: isSubmitDisabled(),
          kind: 'primary',
          loading: isSubmitting,
        });
        setCreateTearsheetActions(buttons);
      }
    }, [
      getTearsheetSteps,
      children,
      backButtonText,
      cancelButtonText,
      currentStep,
      onClose,
      nextButtonText,
      submitButtonText,
      onRequestSubmit,
      isSubmitting,
    ]);

    const getTearsheetSteps = useCallback(() => {
      const steps = [];
      const childrenArray = Array.isArray(children) ? children : [children];
      childrenArray.forEach((child) => {
        if (isTearsheetStep(child)) {
          steps.push(child);
        }
      });
      return steps;
    }, [children]);

    // check if child is a tearsheet step component
    const isTearsheetStep = (child) => {
      if (child && child.props && child.props.type === CREATE_TEARSHEET_STEP) {
        return true;
      }
      return false;
    };

    const renderProgressSteps = (childrenElements) => {
      let childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      childrenArray = childrenArray.filter((child) => isTearsheetStep(child));
      return (
        <ProgressIndicator
          currentIndex={currentStep - 1}
          spaceEqually
          vertical
          className={`${blockClass}__progress-indicator`}>
          {childrenArray.map((child, stepIndex) => {
            return <ProgressStep label={child.props.title} key={stepIndex} />;
          })}
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
          {' '}
          {childrenArray.map((child, stepIndex) => {
            if (!isTearsheetStep(child)) return child;
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

    const renderStepTitle = () => {
      const tearsheetSteps = getTearsheetSteps();
      const stepTitle =
        (tearsheetSteps && tearsheetSteps[currentStep - 1]?.props.title) ||
        null;
      return stepTitle;
    };

    return (
      <TearsheetShell
        actions={createTearsheetActions}
        className={cx(blockClass, className)}
        closeIconDescription={closeIconDescription}
        description={description}
        hasCloseIcon={false}
        influencer={renderProgressSteps(children)}
        influencerPosition={influencerPosition}
        influencerWidth={influencerWidth}
        label={label}
        navigation={navigation}
        onClose={onClose}
        open={open}
        preventCloseOnClickOutside={preventCloseOnClickOutside}
        selectorPrimaryFocus={selectorPrimaryFocus}
        size="wide"
        title={title}
        verticalPosition={verticalPosition}
        ref={ref}>
        <div className={`${blockClass}__multi-step-panel-content`}>
          <p className={`${blockClass}__step--heading`}>{renderStepTitle()}</p>
          {renderChildren(children)}
        </div>
      </TearsheetShell>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateTearsheet = pkg.checkComponentEnabled(CreateTearsheet, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateTearsheet.displayName = componentName;

// Note that the descriptions here should be kept in sync with those for the
// corresponding props for TearsheetNarrow and TearsheetShell components.
CreateTearsheet.propTypes = {
  /**
   * The navigation actions to be shown as buttons in the action area at the
   * bottom of the tearsheet. Each action is specified as an object with
   * optional fields: 'label' to supply the button label, 'kind' to select the
   * button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
   * display a loading indicator, and 'onClick' to receive notifications when
   * the button is clicked. Additional fields in the object will be passed to
   * the Button component, and these can include 'disabled', 'ref', 'className',
   * and any other Button props. Any other fields in the object will be passed
   * through to the button element as HTML attributes.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  actions: PropTypes.oneOfType([
    ActionSet.validateActions(() => 'max'),
    PropTypes.arrayOf(
      PropTypes.shape({
        ...Button.propTypes,
        kind: PropTypes.oneOf(['ghost', 'secondary', 'primary']),
        label: PropTypes.string,
        loading: PropTypes.bool,
        // we duplicate this Button prop to improve the DocGen here
        onClick: Button.propTypes.onClick,
      })
    ),
  ]),

  /**
   * The back button text
   */
  backButtonText: PropTypes.string,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string,

  /**
   * The main content of the tearsheet
   */
  children: PropTypes.node,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon (if shown).
   */
  closeIconDescription: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * The content for the influencer section of the tearsheet, displayed
   * alongside the main content. This is typically a menu, or filter, or
   * progress indicator, or similar.
   */
  influencer: PropTypes.element,

  /**
   * The position of the influencer section, 'left' or 'right'.
   */
  influencerPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * The width of the influencer: 'narrow' (the default) is 256px, and 'wide'
   * is 320px.
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * Navigation content, such as a set of tabs, to be displayed at the bottom
   * of the header area of the tearsheet.
   */
  navigation: PropTypes.element,

  /**
   * The next button text
   */
  nextButtonText: PropTypes.string,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for submitting the multi step tearsheet.
   * This function _must_ return a promise that is either resolved or rejected.
   */
  onRequestSubmit: PropTypes.func.isRequired,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * Prevent the tearsheet from automatically closing (triggering onClose, if
   * provided, which can be cancelled by returning 'false') if the user clicks
   * outside it.
   */
  preventCloseOnClickOutside: PropTypes.bool,

  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: PropTypes.node,

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateTearsheet.defaultProps = {
  closeIconDescription: 'Close',
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  verticalPosition: 'normal',
};
