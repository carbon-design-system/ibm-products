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
import { pkg } from '../../settings';

const icons = {
  fatal: {
    small: Misuse16,
    medium: Misuse20,
    large: Misuse24,
    'x-large': Misuse32,
  },
  critical: {
    small: ErrorFilled16,
    medium: ErrorFilled20,
    large: ErrorFilled24,
    'x-large': ErrorFilled32,
  },
  'major-warning': {
    small: WarningAltInvertedFilled16,
    medium: WarningAltInvertedFilled20,
    large: WarningAltInvertedFilled24,
    'x-large': WarningAltInvertedFilled32,
  },
  'minor-warning': {
    small: WarningAltFilled16,
    medium: WarningAltFilled20,
    large: WarningAltFilled24,
    'x-large': WarningAltFilled32,
  },
  undefined: {
    small: UndefinedFilled16,
    medium: UndefinedFilled20,
    large: UndefinedFilled24,
    'x-large': UndefinedFilled32,
  },
  unknown: {
    small: UnknownFilled16,
    medium: UnknownFilled20,
    large: UnknownFilled24,
    'x-large': UnknownFilled32,
  },
  normal: {
    small: CheckmarkFilled16,
    medium: CheckmarkFilled20,
    large: CheckmarkFilled24,
    'x-large': CheckmarkFilled32,
  },
  info: {
    small: InformationSquareFilled16,
    medium: InformationSquareFilled20,
    large: InformationSquareFilled24,
    'x-large': InformationSquareFilled32,
  },
  'in-progress': {
    small: Renew16,
    medium: Renew20,
    large: Renew24,
    'x-large': Renew32,
  },
  running: {
    small: Renew16,
    medium: Renew20,
    large: Renew24,
    'x-large': Renew32,
  },
  pending: {
    small: Time16,
    medium: Time20,
    large: Time24,
    'x-large': Time32,
  },
};

const blockClass = `${pkg.prefix}--status-icon`;
const componentName = 'StatusIcon';

export let StatusIcon = React.forwardRef(
  ({ kind, theme, size, className, iconDescription, ...rest }, ref) => {
    const IconComponent = icons[kind]?.[size];

    const classNames = cx(className, `${blockClass}--${theme}`, {
      [`${blockClass}--${theme}-${kind}`]: kind,
    });

    return (
      <div {...rest} className={(`${blockClass}`, classNames)}>
        {IconComponent && (
          <IconComponent className={`${blockClass}__icon`} ref={ref}>
            <title>{iconDescription}</title>
          </IconComponent>
        )}
      </div>
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
   * A required prop that provides a description of the icon for accessibility purposes. This string *MUST* match the string that is provided to the "kind" prop
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']).isRequired,

  /**
   * A required prop that displays the theme of the icon associate with the status
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};
