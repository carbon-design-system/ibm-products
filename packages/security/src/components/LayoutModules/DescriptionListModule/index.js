/**
 * @file Description list module.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { bool, node, oneOf } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'description-list';
/**
 * Description list modules provide a means to orderly layout terms and definitions.
 */
const DescriptionListModule = ({ children, dense, mode, short, ...other }) => (
  <LayoutModule
    namespace={namespace}
    className={classnames({
      [`${layoutModuleNamespace}--${namespace}--dense`]: dense,
      [`${layoutModuleNamespace}--${namespace}--${mode}`]: mode,
      [`${layoutModuleNamespace}--${namespace}--short`]: short,
    })}
    {...other}
  >
    {children}
  </LayoutModule>
);

DescriptionListModule.propTypes = {
  /** Provide the `TypeLayout`, and optionally `TitleBar`, for the `DescriptionListModule` */
  children: node.isRequired,

  /** Specify whether a dense spacing should be used */
  dense: bool,

  /** Optionally specify if the module should be stacked or toggle between a stacked and default layout */
  mode: oneOf(['stacked', 'toggle']),

  /** Specify whether a short spacing should be used */
  short: bool,
};

export default DescriptionListModule;
