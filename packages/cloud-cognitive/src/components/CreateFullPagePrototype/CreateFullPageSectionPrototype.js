import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

import { CREATE_FULL_PAGE_SECTION_PROTOTYPE } from './constants';

const componentName = 'CreateFullPageSectionPrototype';
const blockClass = `${pkg.prefix}--create-full-page__section`;

export let CreateFullPageSectionPrototype = forwardRef(
  ({ children, className, id }, ref) => {
    return (
      <div className={cx(blockClass, className)} ref={ref} id={id}>
        {children}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CreateFullPageSectionPrototype = pkg.checkComponentEnabled(
  CreateFullPageSectionPrototype,
  componentName
);

CreateFullPageSectionPrototype.propTypes = {
  /**
   * Content that shows in the CreateFullPage step
   */
  children: PropTypes.node,

  /**
   * Sets an optional className to be added to the CreateFullPage step
   */
  className: PropTypes.string,

  /**
   * Sets the id of the CreateTearsheetSection outermost element
   */
  id: PropTypes.string.isRequired,

  /**
   * Sets the title text for a CreateFullPage step
   */
  title: PropTypes.node.isRequired,
};

// Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.
CreateFullPageSectionPrototype.defaultProps = {
  type: CREATE_FULL_PAGE_SECTION_PROTOTYPE,
};
