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
  const cardClasses = cx(`${pkg.prefix}-card`, {
    [`${pkg.prefix}-card--productive`]: productive,
    [`${pkg.prefix}-card--clickable`]: onClick,
    [`${pkg.prefix}-card--media-left`]: mediaPosition === 'left',
    className,
  });

  const headerClasses = cx(`${pkg.prefix}-card-header`, {
    [`${pkg.prefix}-card-header--label-only`]: label && !title && !caption,
  });

  const titleClasses = cx(`${pkg.prefix}-card-title`, {
    [`${pkg.prefix}-card-title--lg`]: titleSize === 'large',
  });

  const hasActions = actionIcons.length > 0 || overflowActions.length > 0;

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

    const icons = actionIcons.map(({ id, icon }) => (
      <div key={id} className={`${pkg.prefix}-card-icon`}>
        {icon}
      </div>
    ));

    return icons;
  };

  const CardContent = (
    <div className={cardClasses}>
      {media && <div className={`${pkg.prefix}-card-media`}>{media}</div>}
      {Pictogram && (
        <div className={`${pkg.prefix}-card-pictogram`}>
          <Pictogram />
        </div>
      )}
      <div className={`${pkg.prefix}-card-content-container`}>
        <div className={headerClasses}>
          {label && <p className={`${pkg.prefix}-card-label`}>{label}</p>}
          <div className={`${pkg.prefix}-card-title-container`}>
            {title && <p className={titleClasses}>{title}</p>}
            {hasActions && actionIconsPosition === 'top' && (
              <div className={`${pkg.prefix}-card-actions`}>{getActions()}</div>
            )}
          </div>
          {caption && <p className={`${pkg.prefix}-card-caption`}>{caption}</p>}
        </div>
        <div className={`${pkg.prefix}-card-body`}>{children}</div>
        <div className={`${pkg.prefix}-card-footer`}>
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
          {hasActions && actionIconsPosition === 'bottom' && (
            <div className={`${pkg.prefix}-card-actions`}>{getActions()}</div>
          )}
        </div>
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
  mediaPosition: 'top',
  overflowActions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
  titleSize: 'default',
};

Card.displayName = componentName;
