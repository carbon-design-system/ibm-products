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

// Import header primitive components
import { CardHeaderMedia } from './CardHeaderMedia';
import { CardMedia } from './CardMedia';
import { CardLabel } from './CardLabel';
import { CardTitle } from './CardTitle';
import { CardTitleMedia } from './CardTitleMedia';
import { CardCaption } from './CardCaption';
import { CardActions } from './CardActions';
import { CardAction } from './CardAction';

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
      density = 'productive',
      decorator,
      horizontal = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    // Detect if decorator is AILabel
    const hasAILabel = decorator?.['type']?.displayName === 'AILabel';

    // Normalize AILabel size to 'xs' (following SidePanel pattern)
    const normalizedDecorator = useMemo(() => {
      if (hasAILabel && React.isValidElement(decorator)) {
        return React.cloneElement(decorator as React.ReactElement<any>, {
          size: 'xs',
        });
      }
      return decorator;
    }, [decorator, hasAILabel]);

    // Create context value
    const contextValue = useMemo(
      () => ({
        clickable,
        disabled,
        decorator: normalizedDecorator,
        horizontal,
      }),
      [clickable, disabled, normalizedDecorator, horizontal]
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
      [`${blockClass}--${density}`]: density,
      [`${blockClass}--has-ai-label`]: hasAILabel,
      [`${blockClass}--horizontal`]: horizontal,
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

    // In horizontal mode, split children into media and content, then order
    // them by the position of Card.Media in the JSX — media before content
    // children = left, media after content children = right.
    let renderedChildren: React.ReactNode = children;
    if (horizontal) {
      const childArray = React.Children.toArray(children);

      const isMedia = (child: React.ReactNode) =>
        React.isValidElement(child) &&
        (child.type === CardMedia ||
          (child.type as React.ComponentType)?.displayName === 'Card.Media');

      const mediaChildren = childArray.filter(isMedia);
      const contentChildren = childArray.filter((c) => !isMedia(c));

      // Detect JSX order: is media placed before the first content child?
      const firstMediaIndex = childArray.findIndex(isMedia);
      const firstContentIndex = childArray.findIndex((c) => !isMedia(c));
      const mediaIsFirst = firstMediaIndex < firstContentIndex;

      const contentWrapper = (
        <div className={`${blockClass}__content`}>{contentChildren}</div>
      );

      renderedChildren = mediaIsFirst ? (
        <>
          {mediaChildren}
          {contentWrapper}
        </>
      ) : (
        <>
          {contentWrapper}
          {mediaChildren}
        </>
      );
    }

    return (
      <CardContext.Provider value={contextValue}>
        <div {...cardProps}>{renderedChildren}</div>
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
   * Optional decorator component (typically AILabel from Carbon)
   */
  decorator: PropTypes.node,
  /**
   * Density variant: productive uses heading-compact-02, expressive uses heading-03
   */
  density: PropTypes.oneOf(['productive', 'expressive']),
  /**
   * Disables the card and all interactive elements
   */
  disabled: PropTypes.bool,
  /**
   * When true, renders media on the left and content (header/body/footer) on the right
   */
  horizontal: PropTypes.bool,
  /**
   * Click handler for clickable cards
   */
  onClick: PropTypes.func,
  /**
   * Keyboard event handler for clickable cards
   */
  onKeyDown: PropTypes.func,
};

/**
 * -------
 * Exports
 * -------
 */

// Create namespaced child components
const Header = CardHeader;
Header.displayName = 'Card.Header';

const Body = CardBody;
Body.displayName = 'Card.Body';

const Footer = CardFooter;
Footer.displayName = 'Card.Footer';

const HeaderMedia = CardHeaderMedia;
HeaderMedia.displayName = 'Card.HeaderMedia';

const Media = CardMedia;
Media.displayName = 'Card.Media';

const Label = CardLabel;
Label.displayName = 'Card.Label';

const Title = CardTitle;
Title.displayName = 'Card.Title';

const TitleMedia = CardTitleMedia;
TitleMedia.displayName = 'Card.TitleMedia';

const Caption = CardCaption;
Caption.displayName = 'Card.Caption';

const Actions = CardActions;
Actions.displayName = 'Card.Actions';

const Action = CardAction;
Action.displayName = 'Card.Action';

// Attach child components to Card for namespaced usage (Card.Header, Card.Body, etc.)
export const Card = Object.assign(CardComponent, {
  Header,
  Body,
  Footer,
  HeaderMedia,
  Media,
  Label,
  Title,
  TitleMedia,
  Caption,
  Actions,
  Action,
});

export {
  Card as default,
  CardHeader,
  CardBody,
  CardFooter,
  CardHeaderMedia,
  CardMedia,
  CardLabel,
  CardTitle,
  CardTitleMedia,
  CardCaption,
  CardActions,
  CardAction,
};

export type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from './Card.types';

// Export primitive component prop types
export type { CardHeaderMediaProps } from './CardHeaderMedia';
export type { CardMediaProps } from './CardMedia';
export type { CardLabelProps } from './CardLabel';
export type { CardTitleProps } from './CardTitle';
export type { CardTitleMediaProps } from './CardTitleMedia';
export type { CardCaptionProps } from './CardCaption';
export type { CardActionsProps } from './CardActions';
export type { CardActionProps } from './CardAction';
