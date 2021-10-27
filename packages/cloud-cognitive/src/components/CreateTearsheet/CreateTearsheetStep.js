/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, FormGroup, Row } from 'carbon-components-react';
import { pkg } from '../../settings';
import { CREATE_TEARSHEET_STEP } from './constants';

const componentName = 'CreateTearsheetStep';
const blockClass = `${pkg.prefix}--tearsheet-create__step`;

export let CreateTearsheetStep = forwardRef(
  (
    {
      children,
      className,
      subtitle,
      description,
      title,
      hasFieldset,
      fieldsetLegendText,
      isViewingAllStepsTogether,
    },
    ref
  ) => {
    return (
      <div className={cx(blockClass, className)} ref={ref}>
        <Row>
          <Column xlg={12} lg={12} md={8} sm={8}>
            {!isViewingAllStepsTogether && (
              <h4 className={`${blockClass}--title`}>{title}</h4>
            )}
            {!isViewingAllStepsTogether && subtitle && (
              <h6 className={`${blockClass}--subtitle`}>{subtitle}</h6>
            )}
            {!isViewingAllStepsTogether && description && (
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
    ({ hasFieldset }) => hasFieldset === true
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
   * @ignore
   * The is an internal prop set in CreateTearsheet so the step knows when to render it's title
   */
  isViewingAllStepsTogether: PropTypes.bool,

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
  type: CREATE_TEARSHEET_STEP,
  hasFieldset: true,
};
