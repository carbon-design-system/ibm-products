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
        <OverflowMenu size={size} direction={pos}>
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
  /**
   * Icons that are displayed on card. Refer to design documentation for implementation guidelines
   */
  actionIcons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
  /**
   * Determines if the action icons are on the top or bottom of the card
   */
  actionIconsPosition: PropTypes.oneOf(['top', 'bottom']),
  /**
   * Optional header caption
   */
  caption: PropTypes.string,
  /**
   * Content that shows in the body of the card
   */
  children: PropTypes.node,
  /**
   * Optional user provided class
   */
  className: PropTypes.string,
  /**
   * Optional label for the top of the card
   */
  label: PropTypes.string,
  /**
   * Optional media content like an image to be placed in the card
   */
  media: PropTypes.node,
  /**
   * Establishes the position of the media in the card
   */
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  /**
   * Provides the callback for a clickable card
   */
  onClick: PropTypes.func,
  /**
   * Function that's called from the primary button or action icon
   */
  onPrimaryButtonClick: PropTypes.func,
  /**
   * Function that's called from the secondary button
   */
  onSecondaryButtonClick: PropTypes.func,
  /**
   * Use an overflow menu instead of action icons. Refer to design documentation for implementation guidelines
   */
  overflowActions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      itemText: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
  /**
   * Provides the icon that's displayed at the top of the card
   */
  pictogram: PropTypes.object,
  /**
   * Establishes the kind of button displayed for the primary button
   */
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  /**
   * The text that's displayed in the primary button
   */
  primaryButtonText: PropTypes.string,
  /**
   * Establishes if the card is in productive or expressive mode
   */
  productive: PropTypes.bool,
  /**
   * Establishes the kind of button displayed for the secondary button
   */
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  /**
   * The text that's displayed in the secondary button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Title that's displayed at the top of the card
   */
  title: PropTypes.string,
  /**
   * Determines title size
   */
  titleSize: PropTypes.oneOf(['default', 'large']),
};

Card.defaultProps = {
  actionIcons: [],
  actionIconsPosition: 'bottom',
  caption: '',
  children: '',
  className: '',
  label: '',
  media: null,
  mediaPosition: 'top',
  onClick: null,
  onPrimaryButtonClick: null,
  onSecondaryButtonClick: null,
  overflowActions: [],
  pictogram: null,
  primaryButtonKind: 'primary',
  primaryButtonText: '',
  productive: false,
  secondaryButtonKind: 'secondary',
  secondaryButtonText: '',
  title: '',
  titleSize: 'default',
};

Card.displayName = componentName;
