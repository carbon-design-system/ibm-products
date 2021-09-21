/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Misuse16,
  Misuse20,
  Misuse24,
  Misuse32,
  ErrorFilled16,
  ErrorFilled20,
  ErrorFilled24,
  ErrorFilled32,
  WarningAltInvertedFilled16,
  WarningAltInvertedFilled20,
  WarningAltInvertedFilled24,
  WarningAltInvertedFilled32,
  WarningAltFilled16,
  WarningAltFilled20,
  WarningAltFilled24,
  WarningAltFilled32,
  UndefinedFilled16,
  UndefinedFilled20,
  UndefinedFilled24,
  UndefinedFilled32,
  UnknownFilled16,
  UnknownFilled20,
  UnknownFilled24,
  UnknownFilled32,
  CheckmarkFilled16,
  CheckmarkFilled20,
  CheckmarkFilled24,
  CheckmarkFilled32,
  InformationSquareFilled16,
  InformationSquareFilled20,
  InformationSquareFilled24,
  InformationSquareFilled32,
  Renew16,
  Renew20,
  Renew24,
  Renew32,
  Time16,
  Time20,
  Time24,
  Time32,
} from '@carbon/icons-react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const icons = {
  fatal: {
    sm: Misuse16,
    md: Misuse20,
    lg: Misuse24,
    xlg: Misuse32,
  },
  critical: {
    sm: ErrorFilled16,
    md: ErrorFilled20,
    lg: ErrorFilled24,
    xlg: ErrorFilled32,
  },
  'major-warning': {
    sm: WarningAltInvertedFilled16,
    md: WarningAltInvertedFilled20,
    lg: WarningAltInvertedFilled24,
    xlg: WarningAltInvertedFilled32,
  },
  'minor-warning': {
    sm: WarningAltFilled16,
    md: WarningAltFilled20,
    lg: WarningAltFilled24,
    xlg: WarningAltFilled32,
  },
  undefined: {
    sm: UndefinedFilled16,
    md: UndefinedFilled20,
    lg: UndefinedFilled24,
    xlg: UndefinedFilled32,
  },
  unknown: {
    sm: UnknownFilled16,
    md: UnknownFilled20,
    lg: UnknownFilled24,
    xlg: UnknownFilled32,
  },
  normal: {
    sm: CheckmarkFilled16,
    md: CheckmarkFilled20,
    lg: CheckmarkFilled24,
    xlg: CheckmarkFilled32,
  },
  info: {
    sm: InformationSquareFilled16,
    md: InformationSquareFilled20,
    lg: InformationSquareFilled24,
    xlg: InformationSquareFilled32,
  },
  'in-progress': {
    sm: Renew16,
    md: Renew20,
    lg: Renew24,
    xlg: Renew32,
  },
  running: {
    sm: Renew16,
    md: Renew20,
    lg: Renew24,
    xlg: Renew32,
  },
  pending: {
    sm: Time16,
    md: Time20,
    lg: Time24,
    xlg: Time32,
  },
};

const blockClass = `${pkg.prefix}--status-icon`;
const componentName = 'StatusIcon';

export let StatusIcon = React.forwardRef(
  ({ kind, theme, size, className, iconDescription, ...rest }, ref) => {
    const IconComponent = icons[kind]?.[size];

    const classNames = cx(className, blockClass, `${blockClass}--${theme}`, {
      [`${blockClass}--${theme}-${kind}`]: kind,
    });

    return (
      IconComponent && (
        <IconComponent
          {...rest}
          className={classNames}
          ref={ref}
          {...getDevtoolsProps(componentName)}
        >
          <title>{iconDescription}</title>
        </IconComponent>
      )
    );
  }
);

StatusIcon = pkg.checkComponentEnabled(StatusIcon, componentName);

StatusIcon.displayName = componentName;

StatusIcon.propTypes = {
  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className: PropTypes.string,
  /**
   * A required prop that provides a title element and tooltip for the icon for accessibility purposes
   */
  iconDescription: PropTypes.string.isRequired,
  /**
   * A required prop that displays the respective icon associated with the status
   */
  kind: PropTypes.oneOf([
    'fatal',
    'critical',
    'major-warning',
    'minor-warning',
    'undefined',
    'unknown',
    'normal',
    'info',
    'in-progress',
    'running',
    'pending',
  ]).isRequired,

  /**
   * A required prop that displays the size of the icon associate with the status
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xlg']).isRequired,

  /**
   * A required prop that displays the theme of the icon associated with the status
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};
