import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { Canary } from '../_Canary';
import { pkg } from '../../settings';
const componentName = 'Card';

export const Card = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({
      actionIcon: ActionIcon,
      caption,
      children,
      className,
      label,
      media,
      mediaPosition,
      onClick,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      pictogram: Pictogram,
      primaryButtonKind,
      primaryButtonText,
      secondaryButtonKind,
      secondaryButtonText,
      title,
    }) => {
      const cardClasses = cx(`${pkg.prefix}-card`, {
        [`${pkg.prefix}-card--clickable`]: onClick,
        [`${pkg.prefix}-card--media-left`]: mediaPosition === 'left',
        className,
      });

      const headerClasses = cx(`${pkg.prefix}-card-header`, {
        [`${pkg.prefix}-card-header--label-only`]: label && !title && !caption,
      });

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
              {title && <p className={`${pkg.prefix}-card-title`}>{title}</p>}
              {caption && (
                <p className={`${pkg.prefix}-card-caption`}>{caption}</p>
              )}
            </div>
            <div className={`${pkg.prefix}-card-body`}>{children}</div>
            <div className={`${pkg.prefix}-card-actions`}>
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
                  kind={primaryButtonKind}
                  onClick={onPrimaryButtonClick}
                  size="field">
                  {primaryButtonText}
                </Button>
              )}
              {ActionIcon && (
                <ActionIcon
                  className={`${pkg.prefix}-card-action-icon`}
                  onClick={onPrimaryButtonClick}
                />
              )}
            </div>
          </div>
        </div>
      );

      return CardContent;
    };

Card.propTypes = {
  /**
   * Icon to display in the bottom right of the card
   */
  actionIcon: PropTypes.object,
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
};

Card.defaultProps = {
  actionIcon: null,
  caption: '',
  children: '',
  className: '',
  label: '',
  media: null,
  mediaPosition: 'top',
  onClick: null,
  onPrimaryButtonClick: null,
  onSecondaryButtonClick: null,
  pictogram: null,
  primaryButtonKind: 'primary',
  primaryButtonText: '',
  secondaryButtonKind: 'secondary',
  secondaryButtonText: '',
  title: '',
};

Card.displayName = componentName;
