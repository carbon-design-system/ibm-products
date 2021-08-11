/**
 * @file Title bar module.
 * @copyright IBM Security 2020 - 2021
 */

import classnames from 'classnames';
import { bool, elementType, node, oneOf, string } from 'prop-types';
import React, { createElement } from 'react';

import LayoutModule, {
  getLayoutModuleProps,
  layoutModuleNamespace,
} from '../LayoutModule';

const namespace = 'title-bar';

/**
 * Title bar modules provide interchangeable and reliable headings for establishing consistent hierarchies.
 */
const TitleBarModule = ({
  children,
  element,
  subsection,
  title,
  label,
  labelDirection,
  ...other
}) => (
  <LayoutModule
    className={classnames({
      [`${layoutModuleNamespace}--${namespace}--subsection`]: subsection,
      [`${layoutModuleNamespace}--${namespace}--label`]: label,
    })}
    namespace={namespace}
    {...other}>
    <div className={`${layoutModuleNamespace}--${namespace}__label-wrapper`}>
      {label && (
        <LayoutModule
          namespace={`${namespace}__label order--${labelDirection}`}>
          {label}
        </LayoutModule>
      )}
      {createElement(
        element,
        {
          ...getLayoutModuleProps({
            namespace: `${namespace}__title`,
          }),
        },
        title
      )}
    </div>

    {children && (
      <LayoutModule namespace={`${namespace}__items`}>{children}</LayoutModule>
    )}
  </LayoutModule>
);

TitleBarModule.propTypes = {
  /** Provide the items for the `TitleBarModule` */
  children: node,

  /** Provide the label for the `TitleBarModule` */
  label: string,

  /** Provide the labels direction for the `TitleBarModule` */
  labelDirection: oneOf(['top', 'bottom']),

  /** Specify whether a subsection should be used */
  subsection: bool,

  /** Provide the title of the `TitleBarModule` */
  title: node.isRequired,
};

TitleBarModule.defaultProps = {
  children: null,
  subsection: false,
  element: 'h2',
  label: null,
  labelDirection: 'top',
};

export default TitleBarModule;
