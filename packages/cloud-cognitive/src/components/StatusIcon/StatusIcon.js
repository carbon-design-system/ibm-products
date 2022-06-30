/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Misuse,
  ErrorFilled,
  WarningAltInvertedFilled,
  WarningAltFilled,
  UndefinedFilled,
  UnknownFilled,
  CheckmarkFilled,
  InformationSquareFilled,
  Renew,
  Time,
} from '@carbon/icons-react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const icons = {
  fatal: {
    sm: (props) => <Misuse size={16} {...props} />,
    md: (props) => <Misuse size={20} {...props} />,
    lg: (props) => <Misuse size={24} {...props} />,
    xl: (props) => <Misuse size={32} {...props} />,
  },
  critical: {
    sm: (props) => <ErrorFilled size={16} {...props} />,
    md: (props) => <ErrorFilled size={20} {...props} />,
    lg: (props) => <ErrorFilled size={24} {...props} />,
    xl: (props) => <ErrorFilled size={32} {...props} />,
  },
  'major-warning': {
    sm: (props) => <WarningAltInvertedFilled size={16} {...props} />,
    md: (props) => <WarningAltInvertedFilled size={20} {...props} />,
    lg: (props) => <WarningAltInvertedFilled size={24} {...props} />,
    xl: (props) => <WarningAltInvertedFilled size={32} {...props} />,
  },
  'minor-warning': {
    sm: (props) => <WarningAltFilled size={16} {...props} />,
    md: (props) => <WarningAltFilled size={20} {...props} />,
    lg: (props) => <WarningAltFilled size={24} {...props} />,
    xl: (props) => <WarningAltFilled size={32} {...props} />,
  },
  undefined: {
    sm: (props) => <UndefinedFilled size={16} {...props} />,
    md: (props) => <UndefinedFilled size={20} {...props} />,
    lg: (props) => <UndefinedFilled size={24} {...props} />,
    xl: (props) => <UndefinedFilled size={32} {...props} />,
  },
  unknown: {
    sm: (props) => <UnknownFilled size={16} {...props} />,
    md: (props) => <UnknownFilled size={20} {...props} />,
    lg: (props) => <UnknownFilled size={24} {...props} />,
    xl: (props) => <UnknownFilled size={32} {...props} />,
  },
  normal: {
    sm: (props) => <CheckmarkFilled size={16} {...props} />,
    md: (props) => <CheckmarkFilled size={20} {...props} />,
    lg: (props) => <CheckmarkFilled size={24} {...props} />,
    xl: (props) => <CheckmarkFilled size={32} {...props} />,
  },
  info: {
    sm: (props) => <InformationSquareFilled size={16} {...props} />,
    md: (props) => <InformationSquareFilled size={20} {...props} />,
    lg: (props) => <InformationSquareFilled size={24} {...props} />,
    xl: (props) => <InformationSquareFilled size={32} {...props} />,
  },
  'in-progress': {
    sm: (props) => <Renew size={16} {...props} />,
    md: (props) => <Renew size={20} {...props} />,
    lg: (props) => <Renew size={24} {...props} />,
    xl: (props) => <Renew size={32} {...props} />,
  },
  running: {
    sm: (props) => <Renew size={16} {...props} />,
    md: (props) => <Renew size={20} {...props} />,
    lg: (props) => <Renew size={24} {...props} />,
    xl: (props) => <Renew size={32} {...props} />,
  },
  pending: {
    sm: (props) => <Time size={16} {...props} />,
    md: (props) => <Time size={20} {...props} />,
    lg: (props) => <Time size={24} {...props} />,
    xl: (props) => <Time size={32} {...props} />,
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
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,

  /**
   * A required prop that displays the theme of the icon associated with the status
   */
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
};
