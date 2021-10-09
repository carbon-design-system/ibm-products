/**
 * @file Title bar module.
 * @copyright IBM Security 2020 - 2021
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
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
  children: PropTypes.node,

  /** Specify the base element to use to build the title */
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

  /** Provide the label for the `TitleBarModule` */
  label: PropTypes.string,

  /** Provide the labels direction for the `TitleBarModule` */
  labelDirection: PropTypes.oneOf(['top', 'bottom']),

  /** Specify whether a subsection should be used */
  subsection: PropTypes.bool,

  /** Provide the title of the `TitleBarModule` */
  title: PropTypes.node.isRequired,
};

TitleBarModule.defaultProps = {
  children: null,
  subsection: false,
  element: 'h2',
  label: null,
  labelDirection: 'top',
};

export default TitleBarModule;
