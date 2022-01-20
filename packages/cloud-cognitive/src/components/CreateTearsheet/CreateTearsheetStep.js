/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, FormGroup, Row } from 'carbon-components-react';
import { StepsContext, StepNumberContext } from './CreateTearsheet';
import { pkg } from '../../settings';
import pconsole from '../../global/js/utils/pconsole';
import { usePreviousValue } from '../../global/js/hooks';

const componentName = 'CreateTearsheetStep';
const blockClass = `${pkg.prefix}--tearsheet-create__step`;

export let CreateTearsheetStep = forwardRef(
  (
    {
      children,
      className,
      subtitle,
      description,
      disableSubmit,
      introStep,
      title,
      hasFieldset,
      fieldsetLegendText,
      onNext,
      onMount,
      secondaryLabel,
    },
    ref
  ) => {
    const steps = useContext(StepsContext);
    const stepNumber = useContext(StepNumberContext);
    const previousState = usePreviousValue({ currentStep: steps?.currentStep });

    // This useEffect reports back the onNext and onMount values so that they can be used
    // in the appropriate custom hooks.
    useEffect(() => {
      if (
        stepNumber === steps?.currentStep &&
        previousState?.currentStep !== steps?.currentStep
      ) {
        steps?.setOnNext(onNext);
        steps?.setOnMount(onMount);
      }
    }, [onMount, onNext, steps, stepNumber, previousState?.currentStep]);

    // This useEffect makes sure that every CreateTearsheetStep reports back it's
    // title, secondaryLabel, and introStep props so that it can be sent to the CreateInfluencer.
    useEffect(() => {
      const stepHasReported = steps?.stepData?.includes(
        (item) => item.title === title
      );
      if (!stepHasReported && steps?.stepData?.length < steps?.totalStepCount) {
        steps?.setStepData((prev) => [
          ...prev,
          {
            title,
            secondaryLabel,
            introStep,
          },
        ]);
      }
    }, [steps, title, secondaryLabel, introStep]);

    // Whenever we are the current step, supply our disableSubmit value to the
    // steps container context so that it can manage the 'Next' button appropriately.
    useEffect(() => {
      if (stepNumber === steps?.currentStep) {
        steps.setIsDisabled(disableSubmit);
      }
    }, [steps, stepNumber, disableSubmit, onNext]);

    return steps ? (
      <div
        className={cx(blockClass, className, {
          [`${blockClass}__step--hidden-step`]:
            stepNumber !== steps?.currentStep,
          [`${blockClass}__step--visible-step`]:
            stepNumber === steps?.currentStep,
        })}
        ref={ref}
      >
        <Row>
          <Column xlg={12} lg={12} md={8} sm={8}>
            <h4 className={`${blockClass}--title`}>{title}</h4>
            {subtitle && (
              <h6 className={`${blockClass}--subtitle`}>{subtitle}</h6>
            )}
            {description && (
              <p className={`${blockClass}--description`}>{description}</p>
            )}
          </Column>
        </Row>
        {hasFieldset ? (
          <FormGroup
            legendText={fieldsetLegendText}
            className={`${blockClass}--fieldset`}
          >
            {children}
          </FormGroup>
        ) : (
          children
        )}
      </div>
    ) : (
      pconsole.warn(
        `You have tried using a ${componentName} component outside of a CreateTearsheet. This is not allowed. ${componentName}s should always be children of the CreateTearsheet`
      )
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateTearsheetStep = pkg.checkComponentEnabled(
  CreateTearsheetStep,
  componentName
);

CreateTearsheetStep.propTypes = {
  /**
   * Content that shows in the tearsheet step
   */
  children: PropTypes.node,

  /**
   * Sets an optional className to be added to the tearsheet step
   */
  className: PropTypes.string,

  /**
   * Sets an optional description on the step component
   */
  description: PropTypes.string,

  /**
   * This will conditionally disable the submit button in the multi step Tearsheet
   */
  disableSubmit: PropTypes.bool,

  /**
   * This is the required legend text that appears above a fieldset html element for accessibility purposes.
   * You can set the `hasFieldset` prop to false if you have multiple fieldset elements or want to control the children of your Full Page's step content.
   * Otherwise, use CSS to hide/remove this label text.
   */
  fieldsetLegendText: PropTypes.string.isRequired.if(
    ({ hasFieldset }) => !!hasFieldset
  ),

  /**
   * This optional prop will render your form content inside of a fieldset html element
   * and is defaulted to true.
   * You can set this prop to `false` if you have multiple fieldset elements or want to control the children of your Full Page's step content.
   */
  hasFieldset: PropTypes.bool,

  /**
   * This prop can be used on the first step to mark it as an intro step, which will not render the progress indicator steps
   */
  introStep: PropTypes.bool,

  /**
   * Optional function to be called on initial mount of a step.
   * For example, this can be used to fetch data that is required on a particular step.
   */
  onMount: PropTypes.func,

  /**
   * Optional function to be called on a step change.
   * For example, this can be used to validate input fields before proceeding to the next step.
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateTearsheet will handle the submitting state of the next button.
   */
  onNext: PropTypes.func,

  /**
   * Sets the optional secondary label on the progress step component
   */
  secondaryLabel: PropTypes.string,

  /**
   * Sets an optional subtitle on the step component
   */
  subtitle: PropTypes.string,

  /**
   * Sets the title text for a tearsheet step
   */
  title: PropTypes.node.isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateTearsheetStep.defaultProps = {
  hasFieldset: true,
};
