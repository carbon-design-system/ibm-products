/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import {
  CREATE_FULL_PAGE_STEP,
  CREATE_FULL_PAGE_SECTION,
} from './constants.js';

const componentName = 'CreateFullPageStep';
const blockClass = `${pkg.prefix}--create-full-page__step`;

import { Row, Column, Form } from 'carbon-components-react';

export let CreateFullPageStep = forwardRef(
  (
    { children, className, title, subtitle, description, hasForm = true },
    ref
  ) => {
    const [section, setSections] = useState('');
    const isFullPageSection = (child) => {
      if (
        child &&
        child.props &&
        child.props.type === CREATE_FULL_PAGE_SECTION
      ) {
        return true;
      }
      return false;
    };

    return (
      <div className={cx(blockClass, className)} ref={ref}>
        <Row>
          <Column>
            {hasForm ? (
              <Form className={`${blockClass}-form`}>{children}</Form>
            ) : (
              { children }
            )}
          </Column>
        </Row>
      </div>
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
   * Sets an optional description for a create full page step
   */
  description: PropTypes.node,

  /**
   * This will conditionally disable the submit button in the multi step CreateFullPage
   */
  disableSubmit: PropTypes.bool,

  /**
   * This will conditionally render form content below the step condition. This is defaulted to true
   */
  hasForm: PropTypes.bool,

  /**
   * Optional function to be called on a step change.
   * For example, this can be used to validate input fields before proceeding to the next step.
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the next button.
   */
  onNext: PropTypes.func,

  /**
   * Sets the subtitle text for a create full page step
   */
  subtitle: PropTypes.node,

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
