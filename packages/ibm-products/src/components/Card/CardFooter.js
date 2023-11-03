//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import { Button } from '@carbon/react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
const componentName = 'CardFooter';

const defaults = {
  actions: Object.freeze([]),
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
};

export let CardFooter = ({
  actions = defaults.actions,
  hasActions,
  hasButton,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonDisabled,
  primaryButtonHref,
  primaryButtonIcon,
  primaryButtonKind = defaults.primaryButtonKind,
  primaryButtonPlacement,
  primaryButtonText,
  productive = defaults.productive,
  secondaryButtonDisabled,
  secondaryButtonHref,
  secondaryButtonIcon,
  secondaryButtonKind = defaults.secondaryButtonKind,
  secondaryButtonPlacement,
  secondaryButtonText,
}) => {
  const blockClass = `${pkg.prefix}--card`;
  const footerClass = `${pkg.prefix}--card__footer`;
  const footerClasses = cx(footerClass, {
    [`${footerClass}-no-button`]: !hasButton,
  });

  return (
    <div className={footerClasses}>
      {secondaryButtonText && secondaryButtonPlacement === 'bottom' && (
        <Button
          kind={productive ? 'ghost' : secondaryButtonKind}
          onClick={onSecondaryButtonClick}
          size="md"
          renderIcon={secondaryButtonIcon}
          href={secondaryButtonHref}
          disabled={secondaryButtonDisabled}
        >
          {secondaryButtonText}
        </Button>
      )}
      {primaryButtonText && primaryButtonPlacement === 'bottom' && (
        <Button
          kind={productive ? 'ghost' : primaryButtonKind}
          onClick={onPrimaryButtonClick}
          size="md"
          renderIcon={primaryButtonIcon}
          href={primaryButtonHref}
          disabled={primaryButtonDisabled}
        >
          {primaryButtonText}
        </Button>
      )}
      {hasActions && <div className={`${blockClass}__actions`}>{actions}</div>}
    </div>
  );
};

CardFooter.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  hasActions: PropTypes.bool,
  hasButton: PropTypes.bool,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonHref: PropTypes.string,
  primaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonDisabled: PropTypes.bool,
  secondaryButtonHref: PropTypes.string,
  secondaryButtonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonPlacement: PropTypes.oneOf(['top', 'bottom']),
  secondaryButtonText: PropTypes.string,
};

CardFooter.displayName = componentName;
