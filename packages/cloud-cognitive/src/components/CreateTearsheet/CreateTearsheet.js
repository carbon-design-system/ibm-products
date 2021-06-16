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
import {
  ProgressIndicator,
  ProgressStep,
  Toggle,
} from 'carbon-components-react';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell';
import cx from 'classnames';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { TearsheetShell } from '../Tearsheet/TearsheetShell';
import { pkg } from '../../settings';
import { CREATE_TEARSHEET_SECTION, CREATE_TEARSHEET_STEP } from './constants';

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
      includeViewAllToggle,
      label,
      nextButtonText,
      onClose,
      onRequestSubmit,
      open,
      submitButtonText,
      title,
      verticalPosition,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText,
      viewAllToggleOnLabelText,
      ...rest
    },
    ref
  ) => {
    const [createTearsheetActions, setCreateTearsheetActions] = useState([]);
    const [shouldViewAll, setShouldViewAll] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const previousState = usePreviousValue({ currentStep, open });

    // set current step to 1 upon tearsheet opening, in order
    // to get the auto focus on the first step.
    useEffect(() => {
      if (!previousState?.open && open) {
        setCurrentStep(1);
      }
    }, [open, previousState]);

    // Log a warning to the console in the event a create tearsheet is used with only one step
    useEffect(() => {
      const createSteps = getTearsheetSteps();
      const total = createSteps.length;
      if (total === 1) {
        console.warn(
          `${componentName}: CreateTearsheets with one step are not permitted. If you require only one step, please use either the narrow tearsheet, CreateSidePanel, or CreateModal components.`
        );
      }
    }, [getTearsheetSteps]);

    // useEffect to handle multi step logic
    useEffect(() => {
      const onUnmount = () => {
        setCurrentStep(0);
        setIsSubmitting(false);
        setShouldViewAll(false);
        onClose();
      };
      const handleOnRequestSubmit = async () => {
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
        const tearsheetSteps = getTearsheetSteps();
        tearsheetSteps.forEach((child) => {
          step++;
          if (currentStep === step) {
            submitDisabled = child.props.disableSubmit;
          }
        });
        return submitDisabled;
      };
      const handleNext = async () => {
        setIsSubmitting(true);
        const createSteps = getTearsheetSteps();
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
        const createSteps = getTearsheetSteps();
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
      if (getTearsheetSteps()?.length) {
        const createSteps = getTearsheetSteps();
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
          onClick: onUnmount,
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
      shouldViewAll,
    ]);

    const continueToNextStep = () => {
      setIsSubmitting(false);
      setCurrentStep((prev) => prev + 1);
    };

    // returns an array of tearsheet steps
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

    // check if child is a tearsheet section component
    const isTearsheetSection = (child) => {
      if (
        child &&
        child.props &&
        child.props.type === CREATE_TEARSHEET_SECTION
      ) {
        return true;
      }
      return false;
    };

    // renders the step progression components in the left influencer area
    const renderProgressSteps = (childrenElements) => {
      let childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const stepChildren = childrenArray.filter((child) =>
        isTearsheetStep(child)
      );
      let sectionChildElements = [];
      stepChildren.forEach((child) => {
        // we have received an array of children, lets check to see that each child is
        // a CreateTearsheetSection component before adding it to sectionChildElements
        if (child.props.children.length) {
          child.props.children.forEach((stepChild) => {
            if (isTearsheetSection(stepChild)) {
              sectionChildElements.push(stepChild);
            }
          });
        }
        // we have received a single child element, lets check to see that it is
        // a CreateTearsheetSection component before adding it to sectionChildElements
        if (
          typeof child.props.children !== 'undefined' &&
          !child.props.children.length
        ) {
          if (isTearsheetSection(child.props.children)) {
            sectionChildElements.push(child.props.children);
          }
        }
      });
      if (shouldViewAll) {
        return (
          <SideNav expanded isFixedNav>
            <SideNavItems>
              {sectionChildElements?.length &&
                sectionChildElements.map((sectionChild, sectionIndex) => (
                  <SideNavLink
                    href="javascript:void(0)"
                    key={sectionIndex}
                    isActive={activeSectionIndex === sectionIndex}
                    onClick={() => {
                      setActiveSectionIndex(sectionIndex);
                      const scrollTarget = document.querySelector(
                        `#${sectionChild.props.id}`
                      );
                      const scrollContainer = document.querySelector(
                        `.${pkg.prefix}--tearsheet__main`
                      );
                      scrollContainer.scrollTo({
                        top: scrollTarget.offsetTop,
                        behavior: 'smooth',
                      });
                    }}>
                    {sectionChild.props.title}
                  </SideNavLink>
                ))}
            </SideNavItems>
          </SideNav>
        );
      }
      return (
        <ProgressIndicator
          currentIndex={currentStep - 1}
          spaceEqually
          vertical
          className={`${blockClass}__progress-indicator`}>
          {stepChildren.map((child, stepIndex) => (
            <ProgressStep label={child.props.title} key={stepIndex} />
          ))}
        </ProgressIndicator>
      );
    };

    // renders all children (CreateTearsheetSteps and regular children elements)
    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      return (
        <>
          {' '}
          {childrenArray.map((child, stepIndex) => {
            if (!isTearsheetStep(child)) {
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
                  [`${blockClass}__step--first-panel-step`]:
                    !previousState?.open &&
                    open &&
                    previousState?.currentStep === 0 &&
                    stepIndex === 0,
                }),
                key: `key_${stepIndex}`,
              },
              <>
                <p className={`${blockClass}__step--heading`}>
                  {renderStepTitle(stepIndex)}
                </p>
                {/* {child.props.children} */}
                {renderStepChildren(child.props.children)}
              </>
            );
          })}
        </>
      );
    };

    const renderStepChildren = (stepChildren) => {
      const childrenArray = Array.isArray(stepChildren)
        ? stepChildren
        : [stepChildren];
      // console.log(childrenArray);
      return (
        <>
          {childrenArray.map((child, index) => {
            if (!isTearsheetSection(child)) {
              return child;
            }
            return React.cloneElement(child, {
              className: cx(child.props.className, {
                [`${blockClass}__step--hidden-section`]:
                  child.props.viewAllOnly && !shouldViewAll,
                [`${blockClass}__step--visible-section`]:
                  !child.props.viewAllOnly ||
                  (child.props.viewAllOnly && shouldViewAll),
              }),
              key: `key_${index}`,
            });
          })}
        </>
      );
    };

    // renders the individual step title
    const renderStepTitle = (stepIndex) => {
      const tearsheetSteps = getTearsheetSteps();
      const stepTitle =
        (tearsheetSteps && tearsheetSteps[stepIndex]?.props.title) || null;
      return stepTitle;
    };

    // set initial focus when the step changes, if there is not an input to focus
    // the next/create button receives focus
    useEffect(() => {
      if (
        open &&
        previousState?.currentStep !== currentStep &&
        currentStep > 0
      ) {
        const visibleStepInnerContent = document.querySelector(
          `.${blockClass}__step.${blockClass}__step--visible-step`
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
    }, [open, currentStep, getTearsheetSteps, previousState]);

    // returns an array of focusable elements, for use in auto focusing the first input on a step
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

    const handleViewAllToggle = (toggleState) => {
      setShouldViewAll(toggleState);
      setActiveSectionIndex(0);
      // scroll to top of tearsheet page upon toggling view all option
      if (toggleState) {
        const createTearsheetContainer = document.querySelector(
          `.${blockClass}`
        );
        createTearsheetContainer.scrollTop = 0;
      }
    };

    const renderViewAllToggle = () => {
      return (
        <Toggle
          id={`${blockClass}__view-all-toggle`}
          toggled={shouldViewAll}
          labelText={viewAllToggleLabelText}
          labelA={viewAllToggleOffLabelText}
          labelB={viewAllToggleOnLabelText}
          onToggle={(value) => handleViewAllToggle(value)}
          className={`${blockClass}__view-all-toggle`}
        />
      );
    };

    return (
      <TearsheetShell
        {...rest}
        actions={createTearsheetActions}
        className={cx(blockClass, className)}
        closeIconDescription={'Close icon'}
        description={description}
        hasCloseIcon={false}
        influencer={
          <div>
            {renderProgressSteps(children)}
            {includeViewAllToggle && renderViewAllToggle()}
          </div>
        }
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
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: PropTypes.bool,

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

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateTearsheet.defaultProps = {
  verticalPosition: 'normal',
};
