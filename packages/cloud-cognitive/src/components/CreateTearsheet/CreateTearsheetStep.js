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
import { CREATE_TEARSHEET_STEP } from './constants';

const componentName = 'TearsheetStep';
const blockClass = `${pkg.prefix}--tearsheet__step`;

export let CreateTearsheetStep = forwardRef(({ children, className }, ref) => {
  return (
    <div className={cx(blockClass, className)} ref={ref}>
      {children}
    </div>
  );
});

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
   * This will conditionally disable the submit button in the multi step Tearsheet
   */
  disableSubmit: PropTypes.bool,

  /**
   * Sets text for the next button
   */
  nextButtonText: PropTypes.string,

  /**
   * Optional function to be called on a step change.
   * For example, this can be used to validate input fields before proceeding to the next step.
   * This function _must_ return a promise that is either resolved or rejected.
   */
  onNext: PropTypes.func,

  /**
   * Sets the title text for a tearsheet step
   */
  title: PropTypes.node,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateTearsheetStep.defaultProps = {
  type: CREATE_TEARSHEET_STEP,
};
