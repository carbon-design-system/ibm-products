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
const componentName = 'CardHeader';

const defaults = {
  hasActions: false,
  titleSize: 'default',
};

export let CardHeader = ({
  actions,
  description,
  hasActions = defaults.hasActions,
  label,
  title,
  titleSize = defaults.titleSize,
}) => {
  const blockClass = `${pkg.prefix}--card`;
  const headerClass = `${blockClass}__header`;
  const headerClasses = cx(headerClass, {
    [`${headerClass}-label-only`]: label && !title && !description,
    [`${headerClass}-has-label`]: !!label,
    [`${blockClass}__title-lg`]: titleSize === 'large',
  });

  return (
    <div className={headerClasses}>
      <div className={`${headerClass}-container`}>
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
          </div>
        )}
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  description: PropTypes.string,
  hasActions: PropTypes.bool,
  label: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.oneOf(['default', 'large']),
};

CardHeader.displayName = componentName;
