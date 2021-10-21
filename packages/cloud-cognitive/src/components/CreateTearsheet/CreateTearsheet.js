/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Grid, Form } from 'carbon-components-react';
import wrapFocus from '../../global/js/utils/wrapFocus';
import { TearsheetShell } from '../Tearsheet/TearsheetShell';
import { CreateInfluencer } from '../CreateInfluencer';
import { pkg } from '../../settings';
import { CREATE_TEARSHEET_SECTION, CREATE_TEARSHEET_STEP } from './constants';
import {
  usePreviousValue,
  useValidCreateStepCount,
  useResetCreateComponent,
  useCreateComponentFocus,
  useCreateComponentStepChange,
} from '../../global/js/hooks';
import {
  hasValidChildrenType,
  hasValidChildType,
  getExtractedSteps,
} from '../../global/js/utils/hasValidType';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

const componentName = 'CreateTearsheet';
const blockClass = `${pkg.prefix}--tearsheet-create`;

export let CreateTearsheet = forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      description,
      includeViewAllToggle,
      influencerWidth,
      initialStep,
      label,
      nextButtonText,
      onClose,
      onRequestSubmit,
      open,
      sideNavAriaLabel,
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
    const contentRef = useRef();

    // returns an array of tearsheet steps
    const getTearsheetSteps = useCallback(() => {
      const childrenArray = Array.isArray(children) ? children : [children];
      const steps = getExtractedSteps(childrenArray, CREATE_TEARSHEET_STEP);
      return steps;
    }, [children]);

    useCreateComponentFocus(
      previousState,
      currentStep,
      getTearsheetSteps,
      blockClass
    );
    useValidCreateStepCount(getTearsheetSteps, componentName);
    useResetCreateComponent({
      previousState,
      open,
      setCurrentStep,
      initialStep,
      totalSteps: getTearsheetSteps().length,
      componentName,
    });
    useCreateComponentStepChange({
      setCurrentStep,
      setIsSubmitting,
      setShouldViewAll,
      onClose,
      onRequestSubmit,
      componentName,
      getComponentSteps: getTearsheetSteps,
      currentStep,
      shouldViewAll,
      backButtonText,
      cancelButtonText,
      submitButtonText,
      nextButtonText,
      isSubmitting,
      componentBlockClass: blockClass,
      setCreateComponentActions: setCreateTearsheetActions,
    });

    const getTearsheetComponents = (childrenElements) => {
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const tearsheetStepComponents = getExtractedSteps(
        childrenArray,
        CREATE_TEARSHEET_STEP
      );
      const tearsheetSectionComponents = [];
      tearsheetStepComponents.forEach((child) => {
        // we have received an array of children, lets check to see that each child is
        // a CreateTearsheetSection component before adding it to tearsheetSectionComponents
        if (
          shouldViewAll &&
          child?.props?.children?.length &&
          typeof child.props.children !== 'string'
        ) {
          child.props.children.forEach((stepChild) => {
            if (
              hasValidChildType({
                child: stepChild,
                type: CREATE_TEARSHEET_SECTION,
              })
            ) {
              tearsheetSectionComponents.push(stepChild);
            }
          });
        }
        // we have received a single child element, lets check to see that it is
        // a CreateTearsheetSection component before adding it to tearsheetSectionComponents
        if (
          shouldViewAll &&
          typeof child.props.children !== 'undefined' &&
          !child.props.children.length
        ) {
          if (
            hasValidChildType({
              child: child.props.children,
              type: CREATE_TEARSHEET_SECTION,
            })
          ) {
            tearsheetSectionComponents.push(child.props.children);
          }
        }
      });
      return {
        sections: tearsheetSectionComponents,
        steps: tearsheetStepComponents,
      };
    };

    // renders all children (CreateTearsheetSteps)
    const renderChildren = (childrenElements) => {
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const extractedSteps = getExtractedSteps(
        childrenArray,
        CREATE_TEARSHEET_STEP
      );

      return (
        <>
          {extractedSteps.map((child, stepIndex) => {
            return React.cloneElement(child, {
              className: cx(child.props.className, {
                [`${blockClass}__step--hidden-step`]:
                  !shouldViewAll && currentStep !== stepIndex + 1,
                [`${blockClass}__step--visible-step`]:
                  currentStep === stepIndex + 1,
              }),
              key: `key_${stepIndex}`,
            });
          })}
        </>
      );
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
      if (open && visibleStepInnerContent) {
        wrapFocus({
          bodyNode: visibleStepInnerContent,
          currentActiveNode,
          oldActiveNode,
        });
      }
    };

    return (
      <TearsheetShell
        {...rest}
        {...getDevtoolsProps(componentName)}
        actions={createTearsheetActions}
        className={cx(blockClass, className)}
        description={description}
        hasCloseIcon={false}
        influencer={
          <CreateInfluencer
            activeSectionIndex={activeSectionIndex}
            componentBlockClass={blockClass}
            createComponentName={componentName}
            currentStep={currentStep}
            createComponents={getTearsheetComponents(children)}
            includeViewAllToggle={includeViewAllToggle}
            handleToggleState={(toggleState) => setShouldViewAll(toggleState)}
            handleActiveSectionIndex={(index) => setActiveSectionIndex(index)}
            open={open}
            previousState={previousState}
            sideNavAriaLabel={sideNavAriaLabel}
            toggleState={shouldViewAll}
            viewAllToggleLabelText={viewAllToggleLabelText}
            viewAllToggleOffLabelText={viewAllToggleOffLabelText}
            viewAllToggleOnLabelText={viewAllToggleOnLabelText}
          />
        }
        influencerPosition="left"
        influencerWidth={influencerWidth}
        label={label}
        onClose={onClose}
        open={open}
        size="wide"
        title={title}
        verticalPosition={verticalPosition}
        ref={ref}
      >
        <div
          className={`${blockClass}__content`}
          onBlur={handleBlur}
          ref={contentRef}
        >
          <Grid>
            <Form>{renderChildren(children)}</Form>
          </Grid>
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
  children: hasValidChildrenType({
    componentName,
    childType: CREATE_TEARSHEET_STEP,
  }),

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * @ignore
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: PropTypes.bool,

  /**
   * Used to set the size of the influencer
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * This can be used to open the component to a step other than the first step.
   * For example, a create flow was previously in progress, data was saved, and
   * is now being completed.
   */
  initialStep: PropTypes.number,

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
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle
  ),

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
   * @ignore
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),

  /**
   * @ignore
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),

  /**
   * @ignore
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateTearsheet.defaultProps = {
  verticalPosition: 'normal',
  includeViewAllToggle: false,
  influencerWidth: 'narrow',
};
