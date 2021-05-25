/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { ProgressIndicator, ProgressStep } from 'carbon-components-react';
import cx from 'classnames';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { TearsheetShell } from '../Tearsheet/TearsheetShell';
import { pkg } from '../../settings';
import { CREATE_TEARSHEET_STEP } from './constants';

const componentName = 'CreateTearsheet';
const blockClass = `${pkg.prefix}--tearsheet-create`;

const usePreviousValue = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export let CreateTearsheet = forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      description,
      label,
      nextButtonText,
      onClose,
      onRequestSubmit,
      open,
      submitButtonText,
      title,
      verticalPosition,
    },
    ref
  ) => {
    const [createTearsheetActions, setCreateTearsheetActions] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const previousStep = usePreviousValue({ currentStep });

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
      const handleOnRequestSubmit = () => {
        // check if onRequestSubmit returns a promise
        const onRequestSubmitFn = onRequestSubmit();
        if (onRequestSubmitFn instanceof Promise) {
          onRequestSubmitFn
            .then(() => {
              setIsSubmitting(false);
              onClose();
              setCurrentStep(1);
            })
            .catch((error) => {
              setIsSubmitting(false);
              console.warn(`${componentName} submit error: ${error}`);
            });
        } else {
          onClose();
          setCurrentStep(1);
        }
      };
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
          // check if onNext returns a promise
          const onNextFn = createSteps[currentStep - 1].props.onNext();
          if (onNextFn instanceof Promise) {
            onNextFn
              .then(() => continueToNextStep())
              .catch((error) => {
                setIsSubmitting(false);
                console.warn(`${componentName} onNext error: ${error}`);
              });
          } else {
            continueToNextStep();
          }
        } else {
          continueToNextStep();
        }
      };
      const handleSubmit = () => {
        setIsSubmitting(true);
        const createSteps = getTearsheetSteps();
        // last step should have onNext as well
        if (createSteps[currentStep - 1].props.onNext) {
          const onNextFn = createSteps[currentStep - 1].props.onNext();
          if (onNextFn instanceof Promise) {
            onNextFn
              .then(() => handleOnRequestSubmit())
              .catch((error) => {
                setIsSubmitting(false);
                console.warn(`${componentName} onNext error: ${error}`);
              });
          } else {
            handleOnRequestSubmit();
          }
        } else handleOnRequestSubmit();
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
        buttons.push({
          label: currentStep < total ? nextButtonText : submitButtonText,
          onClick: currentStep < total ? handleNext : handleSubmit,
          disabled: isSubmitDisabled(),
          kind: 'primary',
          loading: isSubmitting,
          className: `${blockClass}__create-button`,
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

    const continueToNextStep = () => {
      setIsSubmitting(false);
      setCurrentStep((prev) => prev + 1);
    };

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
          {childrenArray.map((child, stepIndex) => (
            <ProgressStep label={child.props.title} key={stepIndex} />
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

    // set initial focus when the step changes
    useEffect(() => {
      if (open && previousStep.currentStep !== currentStep) {
        const visibleStepInnerContent = document.querySelector(
          `.${pkg.prefix}--tearsheet__step.${pkg.prefix}--tearsheet-create__step--visible-section`
        );
        const tearsheetSteps = getTearsheetSteps();
        const focusableStepElements =
          tearsheetSteps &&
          tearsheetSteps.length &&
          getFocusableElements(visibleStepInnerContent);
        if (focusableStepElements && focusableStepElements.length) {
          focusableStepElements[0].focus();
        } else {
          const nextButton = document.querySelector(
            `.${blockClass}__create-button`
          );
          nextButton?.focus();
        }
      }
    }, [open, currentStep, getTearsheetSteps, previousStep]);

    const getFocusableElements = (element) => {
      return [
        ...element.querySelectorAll(
          'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        ),
      ].filter((e) => !e.hasAttribute('disabled'));
    };

    // adds focus trap functionality
    /* istanbul ignore next */
    const handleBlur = ({
      target: oldActiveNode,
      relatedTarget: currentActiveNode,
    }) => {
      const visibleStepInnerContent = document.querySelector(
        `.${pkg.prefix}--tearsheet__body`
      );
      let visibleStepStartMarker;
      let visibleStepEndMarker;
      if (open && visibleStepInnerContent) {
        wrapFocus({
          bodyNode: visibleStepInnerContent,
          visibleStepStartMarker,
          visibleStepEndMarker,
          currentActiveNode,
          oldActiveNode,
        });
      }
    };

    return (
      <TearsheetShell
        actions={createTearsheetActions}
        className={cx(blockClass, className)}
        closeIconDescription={'Close icon'}
        description={description}
        hasCloseIcon={false}
        influencer={renderProgressSteps(children)}
        influencerPosition="left"
        influencerWidth="narrow"
        label={label}
        onClose={onClose}
        open={open}
        size="wide"
        title={title}
        verticalPosition={verticalPosition}
        ref={ref}>
        <div
          className={`${blockClass}__multi-step-panel-content`}
          onBlur={handleBlur}>
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
   * The back button text
   */
  backButtonText: PropTypes.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the tearsheet
   */
  children: PropTypes.node,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * The next button text
   */
  nextButtonText: PropTypes.string.isRequired,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for submitting the multi step tearsheet (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateTearsheet will handle the submitting state of the create button.
   */
  onRequestSubmit: PropTypes.func.isRequired,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

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
  verticalPosition: 'normal',
};
