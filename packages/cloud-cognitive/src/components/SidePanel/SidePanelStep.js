/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { SIDE_PANEL_STEP } from './constants';

const componentName = 'SidePanelStep';
const blockClass = `${pkg.prefix}--side-panel__step`;

export let SidePanelStep = forwardRef(({ children, className }, ref) => {
  return (
    <div className={cx(blockClass, className)} ref={ref}>
      {children}
    </div>
  );
});

// Return a placeholder if not released and not enabled by feature flag
SidePanelStep = pkg.checkComponentEnabled(SidePanelStep, componentName);

SidePanelStep.propTypes = {
  /**
   * Content that shows in the side panel step
   */
  children: PropTypes.node,

  /**
   * Sets an optional className to be added to the side panel step
   */
  className: PropTypes.string,

  /**
   * This will conditionally disable the submit button in the SidePanelWizard
   */
  disableSubmit: PropTypes.bool,

  /**
   * Sets text for the next button
   */
  nextButtonLabel: PropTypes.string,

  /**
   * Optional function to be called on a step change.
   * For example, this can be used to validate input fields before proceeding to the next step.
   * This function _must_ return a promise that is either resolved or rejected.
   */
  onNext: PropTypes.func,

  /**
   * Sets the subtitle text for a side panel step
   */
  subtitle: PropTypes.node,

  /**
   * Sets the title text for a side panel step
   */
  title: PropTypes.node,
};

SidePanelStep.defaultProps = {
  type: SIDE_PANEL_STEP,
};
