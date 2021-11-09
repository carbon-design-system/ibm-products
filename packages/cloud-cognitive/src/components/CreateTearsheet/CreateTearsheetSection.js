/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Row } from 'carbon-components-react';
import { pkg } from '../../settings';
import { CREATE_TEARSHEET_SECTION } from './constants';

const componentName = 'CreateTearsheetSection';
const blockClass = `${pkg.prefix}--tearsheet-create__section`;

export let CreateTearsheetSection = forwardRef(
  (
    {
      id,
      children,
      className,
      subtitle,
      description,
      title,
      isViewingAllStepsTogether,
    },
    ref
  ) => {
    return (
      <div className={cx(blockClass, className)} ref={ref} id={id}>
        <Row>
          <Column xlg={12} lg={12} md={8} sm={8}>
            {isViewingAllStepsTogether && (
              <h4 className={`${blockClass}--title`}>{title}</h4>
            )}
            {isViewingAllStepsTogether && subtitle && (
              <h6 className={`${blockClass}--subtitle`}>{subtitle}</h6>
            )}
            {isViewingAllStepsTogether && description && (
              <p className={`${blockClass}--description`}>{description}</p>
            )}
          </Column>
        </Row>
        {children}
      </div>
    );
  }
);

CreateTearsheetSection.displayName = componentName;

CreateTearsheetSection.propTypes = {
  /**
   * Content that shows in the tearsheet step
   */
  children: PropTypes.node,

  /**
   * Sets an optional className to be added to the tearsheet step
   */
  className: PropTypes.string,

  /**
   * Sets an optional description on the section component
   */
  description: PropTypes.string,

  /**
   * Sets the id of the CreateTearsheetSection outermost element
   */
  id: PropTypes.string.isRequired,

  /**
   * The is an internal prop set in CreateTearsheet so the section knows when to render it's title
   */
  isViewingAllStepsTogether: PropTypes.bool,

  /**
   * Sets an optional subtitle on the section component
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
CreateTearsheetSection.defaultProps = {
  type: CREATE_TEARSHEET_SECTION,
};
