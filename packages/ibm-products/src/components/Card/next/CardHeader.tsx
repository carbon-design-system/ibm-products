/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CardHeaderProps } from './Card.types';
import { useCardContext } from './CardContext';
import { pkg } from '../../../settings';

const componentName = 'CardHeader';
const blockClass = `${pkg.prefix}--card-next__header`;

/**
 * CardHeader component - Header section of the card.
 * Layout is handled entirely by CSS Grid on __header:
 *   - CardHeaderMedia spans both columns (full-width row above the title area)
 *   - CardTitleMedia occupies column 1 (left icon slot)
 *   - CardTitle occupies column 2 (right text slot), or spans full width when
 *     CardTitleMedia is absent — detected by the :has selector in SCSS.
 * No child-scanning or wrapper injection is needed.
 */
export let CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    const context = useCardContext();
    const cardBlockClass = `${pkg.prefix}--card-next`;

    const handleDecoratorClick = useCallback(
      (e: React.MouseEvent) => e.stopPropagation(),
      []
    );

    const handleDecoratorKeyDown = useCallback(
      (e: React.KeyboardEvent) => e.stopPropagation(),
      []
    );

    return (
      <div {...rest} ref={ref} className={cx(blockClass, className)}>
        {children}
        {context.decorator && (
          <div
            className={`${cardBlockClass}__decorator`}
            role="presentation"
            onClick={handleDecoratorClick}
            onKeyDown={handleDecoratorKeyDown}
          >
            {context.decorator}
          </div>
        )}
      </div>
    );
  }
);

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

CardHeader = pkg.checkComponentEnabled(CardHeader, componentName);
CardHeader.displayName = componentName;
