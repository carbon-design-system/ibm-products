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

export let CardFooter = ({
  actions,
  hasActions,
  hasButton,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonKind,
  primaryButtonText,
  productive,
  secondaryButtonKind,
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
        >
          {secondaryButtonText}
        </Button>
      )}
      {primaryButtonText && (
        <Button
          kind={productive ? 'ghost' : primaryButtonKind}
          onClick={onPrimaryButtonClick}
          size="field"
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
  primaryButtonKind: PropTypes.oneOf(['primary', 'ghost']),
  primaryButtonText: PropTypes.string,
  productive: PropTypes.bool,
  secondaryButtonKind: PropTypes.oneOf(['secondary', 'ghost']),
  secondaryButtonText: PropTypes.string,
};

CardFooter.defaultProps = {
  actions: [],
  primaryButtonKind: 'primary',
  productive: false,
  secondaryButtonKind: 'secondary',
};

CardFooter.displayName = componentName;
