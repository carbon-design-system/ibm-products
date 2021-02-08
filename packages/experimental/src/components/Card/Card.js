import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { pkgPrefix } from '../../global/js/settings';

export const Card = ({
  actionButtonFn,
  actionButtonText,
  actionIcon: ActionIcon,
  actionIconFn,
  children,
  className,
  href,
  label,
  mediaAltText,
  mediaUrl,
  onClick,
  title,
}) => {
  const cardClasses = cx({
    [`${pkgPrefix}-card`]: true,
    [`${pkgPrefix}-card--clickable`]: onClick,
    className,
  });

  const CardContent = (
    <div className={cardClasses}>
      {mediaUrl && (
        <img
          className={`${pkgPrefix}-card-media`}
          src={mediaUrl}
          alt={mediaAltText}
        />
      )}
      <div className={`${pkgPrefix}-card-header`}>
        <p className={`${pkgPrefix}-card-label`}>{label}</p>
        <p className={`${pkgPrefix}-card-title`}>{title}</p>
      </div>
      <div className={`${pkgPrefix}-card-body`}>{children}</div>
      <div className={`${pkgPrefix}-card-actions`}>
        {actionButtonText && (
          <div className={`${pkgPrefix}-card-action-button`}>
            <Button kind="primary" onClick={actionButtonFn}>
              {actionButtonText}
            </Button>
          </div>
        )}
        {ActionIcon && (
          <ActionIcon
            className={`${pkgPrefix}-card-action-icon`}
            onClick={actionIconFn}
          />
        )}
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
  actionButtonFn: PropTypes.func,
  actionButtonText: PropTypes.string,
  actionIcon: PropTypes.object,
  actionIconFn: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  mediaAltText: PropTypes.string,
  mediaUrl: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Card.defaultProps = {
  actionButtonFn: null,
  actionButtonText: '',
  actionIcon: null,
  actionIconFn: null,
  children: '',
  className: '',
  href: '',
  label: '',
  mediaAltText: '',
  mediaUrl: '',
  onClick: null,
  title: '',
};
