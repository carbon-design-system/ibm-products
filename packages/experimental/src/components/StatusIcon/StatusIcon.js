/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useEffect } from 'react';
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

const icons = [
  {
    type: 'fatal',
    small: <Misuse16 />,
    medium: <Misuse20 />,
    large: <Misuse24 />,
    'x-large': <Misuse32 />,
  },
  {
    type: 'critical',
    small: <ErrorFilled16 />,
    medium: <ErrorFilled20 />,
    large: <ErrorFilled24 />,
    'x-large': <ErrorFilled32 />,
  },
  {
    type: 'major-warning',
    small: <WarningAltInvertedFilled16 />,
    medium: <WarningAltInvertedFilled20 />,
    large: <WarningAltInvertedFilled24 />,
    'x-large': <WarningAltInvertedFilled32 />,
  },
  {
    type: 'minor-warning',
    small: <WarningAltFilled16 />,
    medium: <WarningAltFilled20 />,
    large: <WarningAltFilled24 />,
    'x-large': <WarningAltFilled32 />,
  },
  {
    type: 'undefined',
    small: <UndefinedFilled16 />,
    medium: <UndefinedFilled20 />,
    large: <UndefinedFilled24 />,
    'x-large': <UndefinedFilled32 />,
  },
  {
    type: 'unknown',
    small: <UnknownFilled16 />,
    medium: <UnknownFilled20 />,
    large: <UnknownFilled24 />,
    'x-large': <UnknownFilled32 />,
  },
  {
    type: 'normal',
    small: <CheckmarkFilled16 />,
    medium: <CheckmarkFilled20 />,
    large: <CheckmarkFilled24 />,
    'x-large': <CheckmarkFilled32 />,
  },
  {
    type: 'info',
    small: <InformationSquareFilled16 />,
    medium: <InformationSquareFilled20 />,
    large: <InformationSquareFilled24 />,
    'x-large': <InformationSquareFilled32 />,
  },
  {
    type: 'in-progress',
    small: <Renew16 />,
    medium: <Renew20 />,
    large: <Renew24 />,
    'x-large': <Renew32 />,
  },
  {
    type: 'running',
    small: <Renew16 />,
    medium: <Renew20 />,
    large: <Renew24 />,
    'x-large': <Renew32 />,
  },
  {
    type: 'pending',
    small: <Time16 />,
    medium: <Time20 />,
    large: <Time24 />,
    'x-large': <Time32 />,
  },
];

const blockClass = `${pkg.prefix}-status-icon`;

export const StatusIcon = ({ type, theme, size, className, ...rest }) => {
  const [icon, setIcon] = useState([]);
  const [iconSize, setIconSize] = useState('');
  const [iconTheme, setIconTheme] = useState(null);

  const classNames = cx({
    [`${blockClass}--${iconTheme}`]: iconTheme,
    [`${blockClass}--${iconTheme}-${type}`]: type,
    className,
  });

  useEffect(() => {
    type && setIcon(...icons.filter((icon) => icon.type === type));
  }, [type]);

  useEffect(() => {
    size && setIconSize(size);
  }, [size]);

  useEffect(() => {
    theme && setIconTheme(theme);
  }, [theme]);

  return (
    <div className={classNames} {...rest}>
      {icon && iconTheme && iconSize ? icon[`${iconSize}`] : null}
    </div>
  );
};

StatusIcon.displayName = 'StatusIcon';

StatusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  type: PropTypes.oneOf([
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
};

StatusIcon.defaultProps = {
  className: null,
  type: null,
  theme: null,
  size: null,
};
