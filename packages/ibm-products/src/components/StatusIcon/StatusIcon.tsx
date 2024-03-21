/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PropsWithChildren, forwardRef } from 'react';
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
  InProgress,
  CheckmarkOutline,
  Pending,
} from '@carbon/react/icons';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--status-icon`;
const componentName = 'StatusIcon';

/**
The `StatusIcon` component follows the Carbon guidelines for status icons with
some added specifications around illustration usage. For additional usage
guidelines and documentation please refer to the links above.

_Status icons_ are an important method of communicating severity level
information to users. The shapes and colors, communicate severity that enable
users to quickly assess and identify status and respond accordingly.
 */

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Theme = 'light'| 'dark';
type Kind = 'fatal'| 'critical' | 'major-warning' |'minor-warning' |'undefined' |'unknown'
| 'normal' | 'info' | 'in-progress' | 'running'| 'pending';
interface StatusIconProps extends PropsWithChildren
{
   /**
   * Provide an optional class to be applied to the modal root node.
   */
  className ?: string;
  /**
   * A required prop that provides a title element and tooltip for the icon for accessibility purposes
   */
  iconDescription : string;
  /**
   * A required prop that displays the respective icon associated with the status
   */
  kind : Kind;
  /**
   * A required prop that displays the size of the icon associate with the status
   */
  size : Size;
   /**
   * A required prop that displays the theme of the icon associated with the status
   */
  theme : Theme;
}
export let StatusIcon = forwardRef(
  ({ 
     kind,
     theme, 
     size, 
     className,
     iconDescription,
      ...rest 
    }:StatusIconProps,
     ref 
     ) => {
    const icons = {
      fatal: {
        sm: forwardRef((props) => (
          <Misuse size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <Misuse size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <Misuse size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <Misuse size={32} {...props} />
        )),
      },
      critical: {
        sm: forwardRef((props) => (
          <ErrorFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <ErrorFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <ErrorFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <ErrorFilled size={32} {...props} />
        )),
      },
      'major-warning': {
        sm: forwardRef((props) => (
          <WarningAltInvertedFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <WarningAltInvertedFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <WarningAltInvertedFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <WarningAltInvertedFilled size={32} {...props} />
        )),
      },
      'minor-warning': {
        sm: forwardRef((props) => (
          <WarningAltFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <WarningAltFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <WarningAltFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <WarningAltFilled size={32} {...props} />
        )),
      },
      undefined: {
        sm: forwardRef((props) => (
          <UndefinedFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <UndefinedFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <UndefinedFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <UndefinedFilled size={32} {...props} />
        )),
      },
      unknown: {
        sm: forwardRef((props) => (
          <UnknownFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <UnknownFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <UnknownFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <UnknownFilled size={32} {...props} />
        )),
      },
      normal: {
        sm: forwardRef((props) => (
          <CheckmarkFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <CheckmarkFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <CheckmarkFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <CheckmarkFilled size={32} {...props} />
        )),
      },
      info: {
        sm: forwardRef((props) => (
          <InformationSquareFilled size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <InformationSquareFilled size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <InformationSquareFilled size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <InformationSquareFilled size={32} {...props} />
        )),
      },
      'in-progress': {
        sm: forwardRef((props) => (
          <InProgress size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <InProgress size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <InProgress size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <InProgress size={32} {...props} />
        )),
      },
      running: {
        sm: forwardRef((props) => (
          <CheckmarkOutline size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <CheckmarkOutline size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <CheckmarkOutline size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <CheckmarkOutline size={32} {...props} />
        )),
      },
      pending: {
        sm: forwardRef((props) => (
          <Pending size={16} {...props} />
        )),
        md: forwardRef((props) => (
          <Pending size={20} {...props} />
        )),
        lg: forwardRef((props) => (
          <Pending size={24} {...props} />
        )),
        xl: forwardRef((props) => (
          <Pending size={32} {...props} />
        )),
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
          {...{
            className: classNames,
            ref
          }}
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
  kind: PropTypes.oneOf<Kind>([
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
  size: PropTypes.oneOf<Size>(['sm', 'md', 'lg', 'xl']).isRequired,
  /**
   * A required prop that displays the theme of the icon associated with the status
   */
  theme: PropTypes.oneOf<Theme>(['light', 'dark']).isRequired,
};