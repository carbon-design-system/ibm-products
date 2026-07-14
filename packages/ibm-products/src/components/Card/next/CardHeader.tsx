/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, Children, isValidElement, ReactNode } from 'react';
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
    const context = useCardContext();
    const cardBlockClass = `${pkg.prefix}--card-next`;

    // Check if children contain CardTitleMedia using displayName
    // This follows the pattern used in SidePanel, Tearsheet, and other components
    const childrenArray = Children.toArray(children);

    const hasTitleMedia = childrenArray.some((child) => {
      return (
        isValidElement(child) &&
        child.type?.['displayName'] === 'Card.TitleMedia'
      );
    });

    // Separate CardTitleMedia, CardMedia, and other content
    const titleMediaElements: ReactNode[] = [];
    const mediaElements: ReactNode[] = [];
    const otherContent: ReactNode[] = [];

    if (hasTitleMedia) {
      Children.forEach(children, (child) => {
        if (
          isValidElement(child) &&
          child.type?.['displayName'] === 'Card.TitleMedia'
        ) {
          titleMediaElements.push(child);
        } else if (
          isValidElement(child) &&
          child.type?.['displayName'] === 'Card.Media'
        ) {
          // When TitleMedia is present, CardMedia should be outside __title-content
          mediaElements.push(child);
        } else {
          otherContent.push(child);
        }
      });
    }

    const headerClasses = cx(blockClass, className);

    return (
      <div {...rest} ref={ref} className={headerClasses}>
        {hasTitleMedia ? (
          <>
            {mediaElements}
            <div className={`${cardBlockClass}__header-content`}>
              {titleMediaElements}
              <div className={`${cardBlockClass}__title-content`}>
                {otherContent}
              </div>
            </div>
          </>
        ) : (
          children
        )}
        {context.decorator && (
          <div
            className={`${cardBlockClass}__decorator`}
            role="presentation"
            onClick={(e) => {
              // Stop propagation to prevent card click when clicking AILabel
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              // Stop propagation for keyboard events too
              e.stopPropagation();
            }}
          >
            {context.decorator}
          </div>
        )}
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
