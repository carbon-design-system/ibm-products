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
  magnitudeType: 'unknown',
  height: 16,
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
      magnitudeType = defaults.magnitudeType,
      path,
      title,
      viewBox,
      width = defaults.width,
      /* TODO: add other props for DecoratorIcon, with default values if needed */

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <svg
        {...rest}
        aria-hidden={true}
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          `${blockClass}__magnitude-${magnitudeType}`,

          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        // fill="currentColor"
        focusable={false}
        height={height}
        preserveAspectRatio="xMidYMid meet"
        // style={{ willChange: 'transform' }}
        ref={ref}
        style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
        viewBox={viewBox}
        width={width}
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
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  magnitudeType: PropTypes.oneOf([
    'unknown',
    'benign',
    'low',
    'medium',
    'high',
    'critical',
  ]),
  path: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
