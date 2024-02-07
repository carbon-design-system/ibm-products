/**
 * Copyright IBM Corp. 2024, 2024
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

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--decorator-icon`;
const componentName = 'DecoratorIcon';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  magnitude: 'unknown',
  height: 16,
  small: false,
  viewBox: '0 0 16 16',
  width: 16,
};

/**
 * TODO: A description of the component.
 */
export let DecoratorIcon = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      height = defaults.height,
      magnitude = defaults.magnitude,
      path,
      small = defaults.small,
      title,
      viewBox = defaults.viewBox,
      width = defaults.width,
      /* TODO: add other props for DecoratorIcon, with default values if needed */

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const _height = small ? 12 : height;
    const _width = small ? 12 : width;

    return (
      <svg
        {...rest}
        aria-hidden={true}
        className={cx(
          blockClass,
          className,
          `${blockClass}__magnitude-${magnitude}`
        )}
        focusable={false}
        height={_height}
        preserveAspectRatio="xMidYMid meet"
        ref={ref}
        viewBox={viewBox}
        width={_width}
        {...getDevtoolsProps(componentName)}
      >
        {title && <title>{title}</title>}
        <path d={path} />
      </svg>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
DecoratorIcon = pkg.checkComponentEnabled(DecoratorIcon, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
DecoratorIcon.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
DecoratorIcon.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /* TODO: add types and DocGen for all props. */
  height: PropTypes.number,
  magnitude: PropTypes.oneOf([
    'unknown',
    'benign',
    'low',
    'medium',
    'high',
    'critical',
  ]),
  path: PropTypes.string,
  small: PropTypes.bool,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
};
