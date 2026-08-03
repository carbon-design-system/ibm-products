/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CardFooterProps } from './Card.types';
import { pkg } from '../../../settings';

const componentName = 'CardFooter';
const blockClass = `${pkg.prefix}--card-next__footer`;

/**
 * CardFooter component - Footer section of the card
 */
export let CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...rest }, ref) => {
    const footerClasses = cx(blockClass, className);

    return (
      <div {...rest} ref={ref} className={footerClasses}>
        {children}
      </div>
    );
  }
);

CardFooter.propTypes = {
  /**
   * Footer content
   */
  children: PropTypes.node,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

CardFooter = pkg.checkComponentEnabled(CardFooter, componentName);
CardFooter.displayName = componentName;
