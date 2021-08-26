//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

import { CREATE_FULL_PAGE_SECTION } from './constants';

const blockClass = `${pkg.prefix}--create-full-page__section`;

export let CreateFullPageSection = forwardRef(
  // currently, we are not supporting the use of FullPageSections -- this may be a future feature
  /* istanbul ignore next */
  ({ children, className, id }, ref) => {
    return (
      <div className={cx(blockClass, className)} ref={ref} id={id}>
        {children}
      </div>
    );
  }
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
CreateFullPageSection.defaultProps = {
  type: CREATE_FULL_PAGE_SECTION,
};
