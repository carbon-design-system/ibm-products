//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import cx from 'classnames';
import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
} from '@carbon/react';
import PropTypes from 'prop-types';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';
import { pkg } from '../../settings';
const componentName = 'Card';

// Default values for props
const defaults = {
  actionIcons: Object.freeze([]),
  actionsPlacement: 'bottom',
  clickZone: 'one',
  mediaPosition: 'top',
  overflowActions: Object.freeze([]),
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
  titleSize: 'default',
};

export let Card = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      actionIcons = defaults.actionIcons,
      actionsPlacement = defaults.actionsPlacement,
      children,
      className,
      clickZone = defaults.clickZone,
      description,
      label,
      media,
      mediaPosition = defaults.mediaPosition,
      onClick,
      onKeyDown,
      onPrimaryButtonClick,
      overflowActions = defaults.overflowActions,
      onSecondaryButtonClick,
      pictogram: Pictogram,
      primaryButtonHref,
      primaryButtonIcon,
      primaryButtonKind = defaults.primaryButtonKind,
      primaryButtonText,
      productive = defaults.productive,
      secondaryButtonHref,
      secondaryButtonIcon,
      secondaryButtonKind = defaults.secondaryButtonKind,
      secondaryButtonText,
      title,
      titleSize = defaults.titleSize,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const blockClass = `${pkg.prefix}--card`;
    const hasActions = actionIcons.length > 0 || overflowActions.length > 0;
    const hasFooterActions = hasActions && actionsPlacement === 'bottom';
    const hasFooterButton = !!secondaryButtonText || !!primaryButtonText;
    const hasBottomBar = hasFooterActions || hasFooterButton;
    const hasClickEvent = !!onClick || !!onKeyDown;
    const clickableProps = {
      onClick,
      onKeyDown,
      role: 'button',
      tabIndex: '0',
    };

    // actions can either be an overflow menu or series of icons
    const getActions = () => {
      if (overflowActions.length > 0) {
        const pos = actionsPlacement === 'top' ? 'bottom' : 'top';
        const size = actionsPlacement === 'top' ? 'sm' : 'xl';
        return (
          <OverflowMenu size={size} direction={pos} flipped>
            {overflowActions.map(({ id, ...rest }) => (
              <OverflowMenuItem key={id} {...rest} />
            ))}
          </OverflowMenu>
        );
      }

      const icons = actionIcons.map(
        ({
          id,
          icon: Icon,
          onClick,
          iconDescription,
          onKeyDown,
          href,
          ...rest
        }) => {
          if (productive) {
            return (
              <Button
                {...rest}
                key={id}
                renderIcon={Icon}
                hasIconOnly
                onClick={onClick}
                size={actionsPlacement === 'top' ? 'sm' : 'field'}
                iconDescription={iconDescription}
                kind="ghost"
                href={href}
              />
            );
          }
          if (href) {
            return (
              <a
                key={id}
                className={`${blockClass}__icon`}
                href={href}
                onClick={onClick}
              >
                <Icon aria-label={iconDescription} />
              </a>
            );
          }
          return (
            <div
              key={id}
              className={`${blockClass}__icon`}
              onClick={onClick}
              onKeyDown={onKeyDown}
              role="button"
              tabIndex="0"
            >
              <Icon aria-label={iconDescription} />
            </div>
          );
        }
      );

      return icons;
    };

    const getCardProps = () => {
      const clickable =
        (hasClickEvent && !productive) ||
        (hasClickEvent && productive && clickZone === 'one');
      const cardProps = {
        ...rest,
        ref,
        className: cx(
          blockClass,
          {
            [`${blockClass}__productive`]: productive,
            [`${blockClass}__clickable`]: clickable,
            [`${blockClass}__media-left`]: mediaPosition === 'left',
          },
          className
        ),
        ...(clickable && clickableProps),
      };

      return cardProps;
    };

    // the only reason this is necessary is for click zone 2
    const getHeaderBodyProps = () => {
      const clickable = hasClickEvent && clickZone === 'two';
      const headerBodyProps = {
        className: cx(`${blockClass}__header-body-container`, {
          [`${blockClass}__clickable`]: clickable,
        }),
        ...(clickable && clickableProps),
      };

      return headerBodyProps;
    };

    const getHeaderProps = () => ({
      actions: getActions(),
      actionsPlacement,
      description,
      hasActions: hasActions && actionsPlacement === 'top',
      label,
      title,
      titleSize,
    });

    const getBodyProps = () => {
      const clickable = hasClickEvent && clickZone === 'three';
      const bodyProps = {
        className: cx(`${blockClass}__body`, {
          [`${blockClass}__clickable`]: clickable,
        }),
        ...(clickable && clickableProps),
      };

      return bodyProps;
    };

    const getFooterProps = () => ({
      actions: getActions(),
      actionsPlacement,
      hasActions: hasFooterActions,
      hasButton: hasFooterButton,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      primaryButtonHref,
      primaryButtonIcon,
      primaryButtonKind,
      primaryButtonText,
      productive,
      secondaryButtonHref,
      secondaryButtonIcon,
      secondaryButtonKind,
      secondaryButtonText,
    });

    return (
      <div {...getCardProps()}>
        {media && <div className={`${blockClass}__media`}>{media}</div>}
        {Pictogram && (
          <div className={`${blockClass}__pictogram`}>
            <Pictogram />
          </div>
        )}
        <div className={`${blockClass}__content-container`}>
          <div {...getHeaderBodyProps()}>
            <CardHeader {...getHeaderProps()} />
            <div {...getBodyProps()}>{children}</div>
          </div>
          {hasBottomBar && <CardFooter {...getFooterProps()} />}
        </div>
      </div>
    );
  }
);

Card.propTypes = {
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      onKeyDown: PropTypes.func,
      onClick: PropTypes.func,
      iconDescription: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  actionsPlacement: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node,
  className: PropTypes.string,
  clickZone: PropTypes.oneOf(['one', 'two', 'three']),
  description: PropTypes.string,
  label: PropTypes.string,
  media: PropTypes.node,
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  overflowActions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      itemText: PropTypes.string,
      onClick: PropTypes.func,
      onKeyDown: PropTypes.func,
    })
  ),
  pictogram: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonHref: PropTypes.string,
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.node,
  productive: PropTypes.bool,
  secondaryButtonHref: PropTypes.string,
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['default', 'large']),
};

Card.displayName = componentName;
