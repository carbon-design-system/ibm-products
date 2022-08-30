/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef } from 'react';
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

const blockClass = `${pkg.prefix}--status-icon`;
const componentName = 'StatusIcon';

export let StatusIcon = forwardRef(
  ({ kind, theme, size, className, iconDescription, ...rest }, ref) => {
    const icons = {
      fatal: {
        sm: forwardRef((props, ref) => (
          <Misuse size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <Misuse size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <Misuse size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <Misuse size={32} ref={ref} {...props} />
        )),
      },
      critical: {
        sm: forwardRef((props, ref) => (
          <ErrorFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <ErrorFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <ErrorFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <ErrorFilled size={32} ref={ref} {...props} />
        )),
      },
      'major-warning': {
        sm: forwardRef((props, ref) => (
          <WarningAltInvertedFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <WarningAltInvertedFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <WarningAltInvertedFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <WarningAltInvertedFilled size={32} ref={ref} {...props} />
        )),
      },
      'minor-warning': {
        sm: forwardRef((props, ref) => (
          <WarningAltFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <WarningAltFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <WarningAltFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <WarningAltFilled size={32} ref={ref} {...props} />
        )),
      },
      undefined: {
        sm: forwardRef((props, ref) => (
          <UndefinedFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <UndefinedFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <UndefinedFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <UndefinedFilled size={32} ref={ref} {...props} />
        )),
      },
      unknown: {
        sm: forwardRef((props, ref) => (
          <UnknownFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <UnknownFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <UnknownFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <UnknownFilled size={32} ref={ref} {...props} />
        )),
      },
      normal: {
        sm: forwardRef((props, ref) => (
          <CheckmarkFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <CheckmarkFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <CheckmarkFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <CheckmarkFilled size={32} ref={ref} {...props} />
        )),
      },
      info: {
        sm: forwardRef((props, ref) => (
          <InformationSquareFilled size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <InformationSquareFilled size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <InformationSquareFilled size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <InformationSquareFilled size={32} ref={ref} {...props} />
        )),
      },
      'in-progress': {
        sm: forwardRef((props, ref) => (
          <Renew size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <Renew size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <Renew size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <Renew size={32} ref={ref} {...props} />
        )),
      },
      running: {
        sm: forwardRef((props, ref) => (
          <Renew size={16} ref={ref} {...props} />
        )),
        md: forwardRef((props, ref) => (
          <Renew size={20} ref={ref} {...props} />
        )),
        lg: forwardRef((props, ref) => (
          <Renew size={24} ref={ref} {...props} />
        )),
        xl: forwardRef((props, ref) => (
          <Renew size={32} ref={ref} {...props} />
        )),
      },
      pending: {
        sm: forwardRef((props, ref) => <Time size={16} ref={ref} {...props} />),
        md: forwardRef((props, ref) => <Time size={20} ref={ref} {...props} />),
        lg: forwardRef((props, ref) => <Time size={24} ref={ref} {...props} />),
        xl: forwardRef((props, ref) => <Time size={32} ref={ref} {...props} />),
      },
    };

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
