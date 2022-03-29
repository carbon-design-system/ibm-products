//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';
import { Button } from 'carbon-components-react';
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
  primaryButtonHref,
  primaryButtonIcon,
  primaryButtonKind = defaults.primaryButtonKind,
  primaryButtonText,
  productive = defaults.productive,
  secondaryButtonHref,
  secondaryButtonIcon,
  secondaryButtonKind = defaults.secondaryButtonKind,
  secondaryButtonText,
}) => {
  const blockClass = `${pkg.prefix}--card`;
  const footerClass = `${pkg.prefix}--card__footer`;
  const footerClasses = cx(footerClass, {
    [`${footerClass}-no-button`]: !hasButton,
  });

  return (
    <div className={footerClasses}>
      {secondaryButtonText && (
        <Button
          kind={secondaryButtonKind}
          onClick={onSecondaryButtonClick}
          size="field"
          renderIcon={secondaryButtonIcon}
          href={secondaryButtonHref}
        >
          {secondaryButtonText}
        </Button>
      )}
      {primaryButtonText && (
        <Button
          kind={productive ? 'ghost' : primaryButtonKind}
          onClick={onPrimaryButtonClick}
          size="field"
          renderIcon={primaryButtonIcon}
          href={primaryButtonHref}
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
  primaryButtonHref: PropTypes.string,
  primaryButtonIcon: PropTypes.string,
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonHref: PropTypes.string,
  secondaryButtonIcon: PropTypes.string,
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string,
};

CardFooter.displayName = componentName;
