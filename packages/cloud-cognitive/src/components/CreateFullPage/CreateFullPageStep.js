/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { CREATE_FULL_PAGE_STEP } from './constants.js';
import { FormGroup } from 'carbon-components-react';

const componentName = 'CreateFullPageStep';
const blockClass = `${pkg.prefix}--create-full-page__step`;

export let CreateFullPageStep = forwardRef(
  (
    {
      children,
      className,
      subtitle,
      description,
      title,
      hasFieldset,
      fieldsetLegendText,
    },
    ref
  ) => {
    return (
      <section className={cx(blockClass, className)} ref={ref}>
        <h5 className={`${blockClass}-title`}>{title}</h5>
        {subtitle && <h6 className={`${blockClass}-subtitle`}>{subtitle}</h6>}
        {description && (
          <p className={`${blockClass}-description`}>{description}</p>
        )}
        {hasFieldset ? (
          <FormGroup
            legendText={fieldsetLegendText}
            className={`${blockClass}-fieldset`}
          >
            {children}
          </FormGroup>
        ) : (
          children
        )}
      </section>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateFullPageStep = pkg.checkComponentEnabled(
  CreateFullPageStep,
  componentName
);

CreateFullPageStep.propTypes = {
  /**
   * Content that shows in the CreateFullPage step
   */
  children: PropTypes.node,

  /**
   * Sets an optional className to be added to the CreateFullPage step
   */
  className: PropTypes.string,

  /**
   * Sets an optional description on the progress step component
   */
  description: PropTypes.string,

  /**
   * This will conditionally disable the submit button in the multi step CreateFullPage
   */
  disableSubmit: PropTypes.bool,

  /**
   * This is the legend text that appears above a fieldset html element for accessibility purposes. It is required when the optional `hasFieldset` prop is provided to a FullPageStep.
   */
  fieldsetLegendText: PropTypes.string.isRequired.if(
    ({ hasFieldset }) => hasFieldset === true
  ),

  /**
   * This optional prop will render your form content inside of a fieldset html element
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
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the next button.
   */
  onNext: PropTypes.func,

  /**
   * Sets the optional secondary label on the progress step component
   */
  secondaryLabel: PropTypes.string,

  /**
   * Sets an optional subtitle on the progress step component
   */
  subtitle: PropTypes.string,

  /**
   * Sets the title text for a create full page step
   */
  title: PropTypes.node.isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateFullPageStep.defaultProps = {
  type: CREATE_FULL_PAGE_STEP,
};
