import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { pkgPrefix } from '../../global/js/settings';

export const Card = ({
  actionButtonText,
  actionIcon: ActionIcon,
  pictogram: Pictogram,
  children,
  className,
  href,
  label,
  media,
  mediaPosition,
  onActionClick,
  onClick,
  title,
}) => {
  const cardClasses = cx({
    [`${pkgPrefix}-card`]: true,
    [`${pkgPrefix}-card--clickable`]: onClick,
    [`${pkgPrefix}-card--media-left`]: mediaPosition === 'left',
    className,
  });

  const CardContent = (
    <div className={cardClasses}>
      {media && <div className={`${pkgPrefix}-card-media`}>{media}</div>}
      {Pictogram && (
        <div className={`${pkgPrefix}-card-pictogram`}>
          <Pictogram />
        </div>
      )}
      <div className={`${pkgPrefix}-card-content-container`}>
        <div className={`${pkgPrefix}-card-header`}>
          <p className={`${pkgPrefix}-card-label`}>{label}</p>
          <p className={`${pkgPrefix}-card-title`}>{title}</p>
        </div>
        <div className={`${pkgPrefix}-card-body`}>{children}</div>
        <div className={`${pkgPrefix}-card-actions`}>
          {actionButtonText && (
            <div className={`${pkgPrefix}-card-action-button`}>
              <Button kind="primary" onClick={onActionClick}>
                {actionButtonText}
              </Button>
            </div>
          )}
          {ActionIcon && (
            <ActionIcon
              className={`${pkgPrefix}-card-action-icon`}
              onClick={onActionClick}
            />
          )}
        </div>
      </div>
    </div>
  );

  if (!href) return CardContent;

  return (
    <a className={`${pkgPrefix}-card-link`} href={href}>
      {CardContent}
    </a>
  );
};

Card.propTypes = {
  actionButtonText: PropTypes.string,
  actionIcon: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  media: PropTypes.node,
  mediaPosition: PropTypes.oneOf(['top', 'left']),
  onActionClick: PropTypes.func,
  onClick: PropTypes.func,
  pictogram: PropTypes.object,
  title: PropTypes.string,
};

Card.defaultProps = {
  actionButtonText: '',
  actionIcon: null,
  children: '',
  className: '',
  href: '',
  label: '',
  media: null,
  mediaPosition: 'top',
  onActionClick: null,
  onClick: null,
  pictogram: null,
  title: '',
};
