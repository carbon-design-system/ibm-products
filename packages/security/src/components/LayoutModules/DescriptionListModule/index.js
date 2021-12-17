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
const DescriptionListModule = ({ children, dense, mode, ...other }) => (
  <LayoutModule
    namespace={namespace}
    className={classnames({
      [`${layoutModuleNamespace}--${namespace}--dense`]: dense,
      [`${layoutModuleNamespace}--${namespace}--${mode}`]: mode,
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

  /** Specify whether the module should be side-by-side, stacked, or toggle between the two */
  mode: oneOf(['default', 'stacked', 'toggle']),
};

export default DescriptionListModule;
