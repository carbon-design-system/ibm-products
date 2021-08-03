/**
 * @file Title bar module.
 * @copyright IBM Security 2020 - 2021
 */

import classnames from 'classnames';
import { bool, elementType, node } from 'prop-types';
import React, { createElement } from 'react';

import LayoutModule, {
  getLayoutModuleProps,
  layoutModuleNamespace,
} from '../LayoutModule';

const namespace = 'title-bar';

/**
 * Title bar modules provide interchangeable and reliable headings for establishing consistent hierarchies.
 */
const TitleBarModule = ({ children, element, subsection, title, ...other }) => (
  <LayoutModule
    className={classnames({
      [`${layoutModuleNamespace}--${namespace}--subsection`]: subsection,
    })}
    namespace={namespace}
    {...other}>
    {createElement(
      element,
      {
        ...getLayoutModuleProps({
          namespace: `${namespace}__title`,
        }),
      },
      title
    )}

    {children && (
      <LayoutModule namespace={`${namespace}__items`}>{children}</LayoutModule>
    )}
  </LayoutModule>
);

TitleBarModule.propTypes = {
  /** Provide the items for the `TitleBarModule` */
  children: node,

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Specify whether a subsection should be used */
  subsection: bool,

  /** Provide the title of the `TitleBarModule` */
  title: node.isRequired,
};

TitleBarModule.defaultProps = {
  children: null,
  subsection: false,
  element: 'h2',
};

export default TitleBarModule;
