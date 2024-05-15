//
// Copyright IBM Corp. 2020, 2023
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import cx from 'classnames';
import {
  Button,
  IconButton,
  OverflowMenu,
  OverflowMenuItem,
  Layer,
} from '@carbon/react';
import { CheckmarkOutline, Incomplete } from '@carbon/react/icons';
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
  primaryButtonPlacement: 'bottom',
  productive: false,
  secondaryButtonKind: 'secondary',
  secondaryButtonPlacement: 'bottom',
  titleSize: 'default',
};

export let Card = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      actionIcons = defaults.actionIcons,
      actionsPlacement = defaults.actionsPlacement,
      metadata = defaults.actionIcons,
      children,
      className,
      clickZone = defaults.clickZone,
      description,
      disabled,
      footerActionIcon,
      getStarted,
      label,
      media,
      mediaPosition = defaults.mediaPosition,
      onClick,
      onKeyDown,
      onPrimaryButtonClick,
      overflowActions = defaults.overflowActions,
      overflowAriaLabel,
      onSecondaryButtonClick,
      pictogram: Pictogram,
      primaryButtonDisabled,
      primaryButtonHref,
      primaryButtonIcon,
      primaryButtonKind = defaults.primaryButtonKind,
      primaryButtonPlacement = defaults.primaryButtonPlacement,
      primaryButtonText,
      productive = defaults.productive,
      secondaryButtonDisabled,
      secondaryButtonHref,
      secondaryButtonIcon,
      secondaryButtonKind = defaults.secondaryButtonKind,
      secondaryButtonPlacement = defaults.secondaryButtonPlacement,
      secondaryButtonText,
      slug,
      status,
      sequence,
      title,
      titleSize = defaults.titleSize,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    getStarted ? (actionIcons = metadata) : '';
    const blockClass = `${pkg.prefix}--card`;
    const hasActions =
      actionIcons.length > 0 ||
      overflowActions.length > 0 ||
      (!!primaryButtonText && primaryButtonPlacement === 'top');
    const hasFooterActions = hasActions && actionsPlacement === 'bottom';
    const hasFooterButton =
      !!secondaryButtonText ||
      (!!primaryButtonText && primaryButtonPlacement === 'bottom');
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
        const size = actionsPlacement === 'top' ? 'sm' : 'md';
        return (
          <Layer level={2}>
            <OverflowMenu
              size={size}
              direction={pos}
              flipped
              aria-label={overflowAriaLabel}
            >
              {overflowActions.map(({ id, ...rest }) => (
                <OverflowMenuItem key={id} {...rest} />
              ))}
            </OverflowMenu>
          </Layer>
        );
      }

      const icons = actionIcons.map(
        ({ id, icon: Icon, onClick, iconDescription, href, ...rest }) => {
          if (getStarted) {
            return (
              <span key={id} className={`${blockClass}__icon`}>
                <Icon aria-label={iconDescription} />
                {iconDescription}
              </span>
            );
          }
          if (productive) {
            return (
              <Button
                {...rest}
                key={id}
                renderIcon={Icon}
                hasIconOnly
                onClick={onClick}
                size={actionsPlacement === 'top' ? 'sm' : 'md'}
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
            <IconButton
              key={id}
              label={iconDescription}
              className={`${blockClass}__icon`}
              onClick={onClick}
              kind="ghost"
              size="sm"
            >
              <Icon aria-label={iconDescription} />
            </IconButton>
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
            [`${blockClass}__disabled`]: disabled,
            [`${blockClass}__get-started`]: getStarted,
            [`${blockClass}__productive`]: productive,
            [`${blockClass}__clickable`]: clickable,
            [`${blockClass}__media-left`]: mediaPosition === 'left',
            [`${blockClass}--has-slug`]: !!slug,
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
      actions: actionsPlacement === 'top' ? getActions() : '',
      noActionIcons:
        actionIcons.length > 0 && actionsPlacement === 'top' ? false : true,
      actionsPlacement,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      primaryButtonIcon,
      primaryButtonPlacement,
      primaryButtonText,
      primaryButtonDisabled,
      description,
      hasActions: hasActions && actionsPlacement === 'top',
      inClickableCard: hasClickEvent,
      label,
      secondaryButtonDisabled,
      secondaryButtonHref,
      secondaryButtonIcon,
      secondaryButtonPlacement,
      secondaryButtonText,
      slug,
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
      actions: actionsPlacement === 'bottom' ? getActions() : '',
      actionsPlacement,
      disabled,
      footerActionIcon,
      hasActions: hasFooterActions,
      hasButton: hasFooterButton,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      primaryButtonDisabled,
      primaryButtonHref,
      primaryButtonIcon,
      primaryButtonKind,
      primaryButtonPlacement,
      primaryButtonText,
      productive,
      secondaryButtonDisabled,
      secondaryButtonHref,
      secondaryButtonIcon,
      secondaryButtonKind,
      secondaryButtonPlacement,
      secondaryButtonText,
    });
    return (
      <div {...getCardProps()}>
        {!getStarted && media && (
          <div className={`${blockClass}__media`}>{media}</div>
        )}
        {Pictogram && (
          <div className={`${blockClass}__pictogram`}>
            <Pictogram />
          </div>
        )}
        {getStarted && sequence && (
          <div className={`${blockClass}__sequence`}>{sequence}</div>
        )}
        {getStarted && status && (
          <div className={`${blockClass}__status`}>
            {status === 'incomplete' ? <Incomplete /> : ''}
            {status === 'complete' ? <CheckmarkOutline /> : ''}
          </div>
        )}
        <div className={`${blockClass}__content-container`}>
          <div {...getHeaderBodyProps()}>
            <div>
              <CardHeader {...getHeaderProps()} />
              <div {...getBodyProps()}>{children}</div>
            </div>
            {getStarted && media && (
              <div className={`${blockClass}__media`}>{media}</div>
            )}
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
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  footerActionIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  getStarted: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  media: PropTypes.node,
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  metadata: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      iconDescription: PropTypes.string,
    })
  ),
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
  overflowAriaLabel: PropTypes.string,
  pictogram: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonHref: PropTypes.string,
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  primaryButtonText: PropTypes.node,
  productive: PropTypes.bool,
  secondaryButtonDisabled: PropTypes.bool,
  secondaryButtonHref: PropTypes.string,
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  secondaryButtonText: PropTypes.string,
  sequence: PropTypes.number,

  /**
   * **Experimental:** For all cases a `Slug` component can be provided.
   * Clickable tiles only accept a boolean value of true and display a hollow slug.
   */
  slug: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),

  status: PropTypes.oneOf(['none', 'complete', 'incomplete']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  titleSize: PropTypes.oneOf(['default', 'large']),
};

Card.displayName = componentName;
