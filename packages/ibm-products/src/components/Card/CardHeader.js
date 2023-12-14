//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { Button, usePrefix } from '@carbon/react';
const componentName = 'CardHeader';

const defaults = {
  hasActions: false,
  titleSize: 'default',
};

export let CardHeader = ({
  actions,
  noActionIcons,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonIcon,
  primaryButtonPlacement,
  primaryButtonText,
  primaryButtonDisabled,
  description,
  hasActions = defaults.hasActions,
  inClickableCard,
  label,
  secondaryButtonDisabled,
  secondaryButtonHref,
  secondaryButtonIcon,
  secondaryButtonPlacement,
  secondaryButtonText,
  slug,
  title,
  titleSize = defaults.titleSize,
}) => {
  const carbonPrefix = usePrefix();
  const blockClass = `${pkg.prefix}--card`;
  const headerClass = `${blockClass}__header`;
  const headerClasses = cx(headerClass, {
    [`${headerClass}-label-only`]: label && !title && !description,
    [`${headerClass}-has-label`]: !!label,
    [`${blockClass}__title-lg`]: titleSize === 'large',
  });
  const actionGhostButton = `${blockClass}__actions-header-ghost-button`;
  const actionGhostButtonClass = cx(actionGhostButton, {
    [`${actionGhostButton}--only`]: noActionIcons,
  });

  const hollowSlugIcon = (
    <svg
      className={`${carbonPrefix}--slug ${carbonPrefix}--slug-icon`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="23" height="23" />
      <path
        d="M13.2436 16H11.5996L10.9276 13.864H7.95164L7.29164 16H5.68364L8.49164 7.624H10.4596L13.2436 16ZM10.5436 12.508L9.46364 9.064H9.40364L8.33564 12.508H10.5436ZM17.9341 16H14.1301V14.728H15.2341V8.896H14.1301V7.624H17.9341V8.896H16.8181V14.728H17.9341V16Z"
        fill="#161616"
      />
    </svg>
  );

  let normalizedSlug;
  if (slug) {
    if (inClickableCard) {
      normalizedSlug = hollowSlugIcon;
    } else if (typeof slug !== 'boolean') {
      normalizedSlug = React.cloneElement(slug, {
        size:
          (label && title) || (title && titleSize === 'large') ? 'sm' : 'xs',
      });
    }
  }

  return (
    <div className={headerClasses}>
      <div
        className={cx([
          `${headerClass}-container`,
          { [`${headerClass}-container--has-slug`]: !!slug },
          { [`${headerClass}-container--has-actions`]: !!hasActions },
          {
            [`${headerClass}-container--large-tile-or-label`]:
              title && (label || titleSize === 'large'),
          },
        ])}
      >
        <div className={`${blockClass}__title-container`}>
          {label && <p className={`${blockClass}__label`}>{label}</p>}
          {title && <h6 className={`${blockClass}__title`}>{title}</h6>}
          {description && (
            <p className={`${blockClass}__description`}>{description}</p>
          )}
        </div>
        {hasActions && (
          <div
            className={`${blockClass}__actions ${blockClass}__actions-header`}
          >
            {actions}
            {secondaryButtonText && secondaryButtonPlacement === 'top' && (
              <Button
                kind="ghost"
                onClick={onSecondaryButtonClick}
                size="sm"
                renderIcon={secondaryButtonIcon}
                href={secondaryButtonHref}
                className={actionGhostButtonClass}
                disabled={secondaryButtonDisabled}
              >
                {secondaryButtonText}
              </Button>
            )}
            {primaryButtonText && primaryButtonPlacement === 'top' && (
              <Button
                kind="ghost"
                size="sm"
                renderIcon={primaryButtonIcon}
                onClick={onPrimaryButtonClick}
                className={actionGhostButtonClass}
                disabled={primaryButtonDisabled}
              >
                {primaryButtonText}
              </Button>
            )}
          </div>
        )}
        {normalizedSlug}
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  hasActions: PropTypes.bool,
  /**
   * is the host card clickable
   */
  inClickableCard: PropTypes.bool,
  label: PropTypes.string,
  noActionIcons: PropTypes.bool,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  primaryButtonText: PropTypes.string,
  secondaryButtonDisabled: PropTypes.bool,
  secondaryButtonHref: PropTypes.string,
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  secondaryButtonText: PropTypes.string,
  /**
   * **Experimental:** For all cases a `Slug` component can be provided.
   * Clickable tiles only accept a boolean value of true and display a hollow slug.
   */
  slug: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),

  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  titleSize: PropTypes.oneOf(['default', 'large']),
};

CardHeader.displayName = componentName;
