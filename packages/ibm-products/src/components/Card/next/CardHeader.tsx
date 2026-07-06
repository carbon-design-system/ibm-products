/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CardHeaderProps } from './Card.types';
import { useCardContext } from './CardContext';
import { pkg } from '../../../settings';

const componentName = 'CardHeader';
const blockClass = `${pkg.prefix}--card-next__header`;

/**
 * CardHeader component - Header section of the card
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    const headerClasses = cx(blockClass, className);

    return (
      <div {...rest} ref={ref} className={headerClasses}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = componentName;

CardHeader.propTypes = {
  /**
   * Header content
   */
  children: PropTypes.node,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};
