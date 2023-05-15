/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner__element`;
const componentName = 'GuidebannerElement';

/**
 * The GuidebannerElement is a required child component of the Guidebanner,
 * and acts as a container for a CarouselItem.
 *
 * Note: all child components of GuidebannerElements must specify
 * a 'dark' theme where applicable.
 */
const GuidebannerElement = ({
  button,
  className,
  description,
  title,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cx(blockClass, className)}
      {...getDevtoolsProps(componentName)}
    >
      {title && <h2 className={`${blockClass}-title`}>{title}</h2>}
      {description && <p className={`${blockClass}-content`}>{description}</p>}
      {button && <div className={`${blockClass}-buttons`}>{button}</div>}
    </div>
  );
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
GuidebannerElement.propTypes = {
  /**
   * An optional button can be rendered below the description.
   * This can be a link, button, Coachmark button, etc.
   */
  button: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The description of the element.
   */

  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,

  /**
   * The title of the element.
   */
  title: PropTypes.string,
};

export { GuidebannerElement };
