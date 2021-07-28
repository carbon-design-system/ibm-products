import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

import { CREATE_FULL_PAGE_SECTION } from './constants';

const componentName = 'CreateFullPageSection';
const blockClass = `${pkg.prefix}--create-full-page__section`;

export let CreateFullPageSection = forwardRef(
  ({ children, className, id }, ref) => {
    return (
      <div className={cx(blockClass, className)} ref={ref} id={id}>
        {children}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateFullPageSection = pkg.checkComponentEnabled(
  CreateFullPageSection,
  componentName
);

CreateFullPageSection.propTypes = {
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
   * This will conditionally render a 1px gray divider span. This is defaulted to true
   */
  hasDivider: PropTypes.bool,

  /**
   * This will conditionally render form content below the step condition. This is defaulted to true
   */
  hasForm: PropTypes.bool,

  /**
   * Sets the id of the CreateTearsheetSection outermost element
   */
  id: PropTypes.string.isRequired,

  /**
   * Sets the subtitle text for a create full page step
   */
  subtitle: PropTypes.node,

  /**
   * Sets the title text for a CreateFullPage step
   */
  title: PropTypes.node.isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateFullPageSection.defaultProps = {
  type: CREATE_FULL_PAGE_SECTION,
};
