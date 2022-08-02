/**
 * @file Layout module.
 * @copyright IBM Security 2020 - 2021
 */

import classnames from 'classnames';
import { elementType, node, string } from 'prop-types';
import { createElement } from 'react';

import { getComponentNamespace } from '../../globals/namespace';

const microlayoutNamespace = getComponentNamespace('microlayout');

const getMicrolayoutProps = ({ className, namespace }) => ({
  className: classnames(
    microlayoutNamespace,
    `${microlayoutNamespace}--${namespace}`,
    className
  ),
});

const Microlayout = ({ as, className, children, namespace, ...other }) =>
  createElement(
    as,
    {
      ...getMicrolayoutProps({ className, namespace }),
      ...other,
    },
    children
  );

Microlayout.propTypes = {
  /** Provide a custom element to be rendered instead of the default */
  as: elementType,

  /** Provide the content for the `LayoutModule` */
  children: node.isRequired,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Provide the style namespace for the `LayoutModule` */
  namespace: string.isRequired,
};

Microlayout.defaultProps = {
  as: 'div',
  className: null,
};

export default Microlayout;

export { getMicrolayoutProps, microlayoutNamespace };
