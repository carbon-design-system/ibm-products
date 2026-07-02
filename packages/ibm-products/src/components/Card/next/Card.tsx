/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CardProps } from './Card.types';
import { CardContext } from './CardContext';
import { pkg } from '../../../settings';

// Import separated child components
import { CardHeader } from './CardHeader';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

const componentName = 'Card';
const blockClass = `${pkg.prefix}--card-next`;

/**
 * Card component - Root container for composable card
 */
const CardComponent = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      clickable = false,
      onClick,
      onKeyDown,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    // Create context value
    const contextValue = useMemo(
      () => ({
        clickable,
        disabled,
      }),
      [clickable, disabled]
    );

    // Handle keyboard interaction for clickable cards
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        clickable &&
        !disabled &&
        (event.key === 'Enter' || event.key === ' ')
      ) {
        event.preventDefault();
        onClick?.(event as unknown as React.MouseEvent<HTMLDivElement>);
      }
      onKeyDown?.(event);
    };

    // Handle click for clickable cards
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        onClick?.(event);
      }
    };

    const cardClasses = cx(blockClass, className, {
      [`${blockClass}--clickable`]: clickable && !disabled,
      [`${blockClass}--disabled`]: disabled,
    });

    const cardProps = {
      ...rest,
      ref,
      className: cardClasses,
      ...(clickable && {
        role: 'button',
        tabIndex: disabled ? -1 : 0,
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        'aria-disabled': disabled,
      }),
    };

    return (
      <CardContext.Provider value={contextValue}>
        <div {...cardProps}>{children}</div>
      </CardContext.Provider>
    );
  }
);

CardComponent.displayName = componentName;

CardComponent.propTypes = {
  /**
   * Card content
   */
  children: PropTypes.node,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
  /**
   * Makes the entire card clickable
   */
  clickable: PropTypes.bool,
  /**
   * Disables the card and all interactive elements
   */
  disabled: PropTypes.bool,
  /**
   * Click handler for clickable cards
   */
  onClick: PropTypes.func,
  /**
   * Keyboard event handler for clickable cards
   */
  onKeyDown: PropTypes.func,
};

export const Card = CardComponent;

/**
 * -------
 * Exports
 * -------
 */
const Root = Card;
Root.displayName = 'Card.Root';

const Header = CardHeader;
Header.displayName = 'Card.Header';

const Body = CardBody;
Body.displayName = 'Card.Body';

const Footer = CardFooter;
Footer.displayName = 'Card.Footer';

export {
  // direct exports
  Card as default,
  CardHeader,
  CardBody,
  CardFooter,
  // namespaced
  Root,
  Header,
  Body,
  Footer,
};

export type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from './Card.types';
