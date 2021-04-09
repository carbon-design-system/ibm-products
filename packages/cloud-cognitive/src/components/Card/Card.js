//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
const componentName = 'Card';

export let Card = ({
  actionIcons,
  actionIconsPosition,
  caption,
  children,
  className,
  clickZone,
  label,
  media,
  mediaPosition,
  onClick,
  onPrimaryButtonClick,
  overflowActions,
  onSecondaryButtonClick,
  pictogram: Pictogram,
  primaryButtonKind,
  primaryButtonText,
  productive,
  secondaryButtonKind,
  secondaryButtonText,
  title,
  titleSize,
}) => {
  const hasActions = actionIcons.length > 0 || overflowActions.length > 0;
  const hasTopActions = hasActions && actionIconsPosition === 'top';
  const hasBottomActions = hasActions && actionIconsPosition === 'bottom';
  const hasBottomButton = !!secondaryButtonText || !!primaryButtonText;
  const hasBottomBar = hasBottomActions || hasBottomButton;

  const headerClasses = cx(`${pkg.prefix}-card-header`, {
    [`${pkg.prefix}-card-header--label-only`]: label && !title && !caption,
    [`${pkg.prefix}-card-header--has-label`]: label && productive,
    [`${pkg.prefix}-card-title--lg`]: titleSize === 'large',
  });

  const footerClasses = cx(`${pkg.prefix}-card-footer`, {
    [`${pkg.prefix}-card-footer--no-button`]: !hasBottomButton,
  });

  const getActions = () => {
    if (overflowActions.length !== 0) {
      const pos = actionIconsPosition === 'top' ? 'bottom' : 'top';
      const size = actionIconsPosition === 'top' ? 'sm' : 'lg';
      return (
        <OverflowMenu size={size} direction={pos} flipped>
          {overflowActions.map(({ id, ...rest }) => (
            <OverflowMenuItem key={id} {...rest} />
          ))}
        </OverflowMenu>
      );
    }

    if (actionIcons.length === 0) return;

    const icons = actionIcons.map(
      ({ id, icon: Icon, onClick, iconDescription }) => {
        if (productive)
          return (
            <Button
              renderIcon={Icon}
              hasIconOnly
              onClick={onClick}
              size={actionIconsPosition === 'top' ? 'sm' : 'field'}
              iconDescription={iconDescription}
              kind="ghost"
            />
          );
        return (
          <div key={id} className={`${pkg.prefix}-card-icon`}>
            <Icon aria-label={iconDescription} />
          </div>
        );
      }
    );

    return icons;
  };

  const getClickableProps = () => ({
    onClick,
    onKeyDown: onClick,
    role: 'button',
    tabIndex: '0',
  });

  const getCardProps = () => {
    const clickable =
      (!!onClick && !productive) ||
      (!!onClick && productive && clickZone === 'one');
    const cardProps = {
      className: cx(`${pkg.prefix}-card`, {
        [`${pkg.prefix}-card--productive`]: productive,
        [`${pkg.prefix}-card--clickable`]: clickable,
        [`${pkg.prefix}-card--media-left`]: mediaPosition === 'left',
        className,
      }),
      ...(clickable && getClickableProps()),
    };

    return cardProps;
  };

  const getHeaderBodyProps = () => {
    const clickable = !!onClick && clickZone === 'two';
    const headerBodyProps = {
      className: cx(`${pkg.prefix}-card-header-body-container`, {
        [`${pkg.prefix}-card--clickable`]: clickable,
      }),
      ...(clickable && getClickableProps()),
    };

    return headerBodyProps;
  };

  const getBodyProps = () => {
    const clickable = !!onClick && clickZone === 'three';
    const bodyProps = {
      className: cx(`${pkg.prefix}-card-body`, {
        [`${pkg.prefix}-card--clickable`]: clickable,
      }),
      ...(clickable && getClickableProps()),
    };

    return bodyProps;
  };

  const CardContent = (
    <div {...getCardProps()}>
      {media && <div className={`${pkg.prefix}-card-media`}>{media}</div>}
      {Pictogram && (
        <div className={`${pkg.prefix}-card-pictogram`}>
          <Pictogram />
        </div>
      )}
      <div className={`${pkg.prefix}-card-content-container`}>
        <div {...getHeaderBodyProps()}>
          <div className={headerClasses}>
            <div className={`${pkg.prefix}-card-header-container`}>
              <div className={`${pkg.prefix}-card-title-container`}>
                {label && <p className={`${pkg.prefix}-card-label`}>{label}</p>}
                {title && <p className={`${pkg.prefix}-card-title`}>{title}</p>}
                {caption && (
                  <p className={`${pkg.prefix}-card-caption`}>{caption}</p>
                )}
              </div>
              {hasTopActions && (
                <div
                  className={`${pkg.prefix}-card-actions ${pkg.prefix}-card-actions--top`}>
                  {getActions()}
                </div>
              )}
            </div>
          </div>
          <div {...getBodyProps()}>{children}</div>
        </div>
        {hasBottomBar && (
          <div className={footerClasses}>
            {secondaryButtonText && (
              <Button
                kind={secondaryButtonKind}
                onClick={onSecondaryButtonClick}
                size="field">
                {secondaryButtonText}
              </Button>
            )}
            {primaryButtonText && (
              <Button
                kind={productive ? 'ghost' : primaryButtonKind}
                onClick={onPrimaryButtonClick}
                size="field">
                {primaryButtonText}
              </Button>
            )}
            {hasBottomActions && (
              <div className={`${pkg.prefix}-card-actions`}>{getActions()}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return CardContent;
};

// Return a placeholder if not released and not enabled by feature flag
Card = pkg.checkComponentEnabled(Card, componentName);

Card.propTypes = {
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
  actionIconsPosition: PropTypes.oneOf(['top', 'bottom']),
  caption: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  clickZone: PropTypes.oneOf(['one', 'two', 'three']),
  label: PropTypes.string,
  media: PropTypes.node,
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  onClick: PropTypes.func,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  overflowActions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      itemText: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  pictogram: PropTypes.object,
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['default', 'large']),
};

Card.defaultProps = {
  actionIcons: [],
  actionIconsPosition: 'bottom',
  clickZone: 'one',
  mediaPosition: 'top',
  overflowActions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
  titleSize: 'default',
};

Card.displayName = componentName;
