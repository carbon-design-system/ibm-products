/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CardBodyProps } from './Card.types';
import { useCardContext } from './CardContext';
import { pkg } from '../../../settings';

const componentName = 'CardBody';
const blockClass = `${pkg.prefix}--card-next__body`;

/**
 * CardBody component - Body section of the card for free-form content
 */
export let CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...rest }, ref) => {
    const bodyClasses = cx(blockClass, className);

    return (
      <div {...rest} ref={ref} className={bodyClasses}>
        {children}
      </div>
    );
  }
);

CardBody.propTypes = {
  /**
   * Body content
   */
  children: PropTypes.node,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

CardBody = pkg.checkComponentEnabled(CardBody, componentName);
CardBody.displayName = componentName;
