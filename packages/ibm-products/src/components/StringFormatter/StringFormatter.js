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
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
import { DefinitionTooltip } from '@carbon/react';
import { StringFormatterAlignment } from './utils/enums';
// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--string-formatter`;
const componentName = 'StringFormatter';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  lines: 1,
  tooltipDirection: StringFormatterAlignment.BOTTOM_LEFT,
  truncate: false,
  width: null,
};

/**
 * StringFormatter allows for truncating text while displaying a tooltip
 * overlay on hover or focus with the entirety of the provided copy.
 */
export let StringFormatter = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      lines = defaults.lines,
      tooltipDirection = defaults.tooltipDirection,
      truncate = defaults.truncate,
      width = defaults.width,
      value,
      /* TODO: add other props for StringFormatter, with default values if needed */

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <span
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className // Apply any supplied class names to the main HTML element.
        )}
        ref={ref}
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        {...getDevtoolsProps(componentName)}
      >
        {truncate ? (
          <DefinitionTooltip
            className={`${blockClass}__tooltip`}
            align={tooltipDirection}
            definition={value}
            openOnHover={true}
          >
            <StringFormatterContent
              lines={lines}
              truncate={truncate}
              value={value}
              width={width}
            />
          </DefinitionTooltip>
        ) : (
          <StringFormatterContent
            className={className}
            lines={lines}
            truncate={truncate}
            value={value}
            width={width}
          />
        )}
      </span>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
StringFormatter = pkg.checkComponentEnabled(StringFormatter, componentName);

// The display name of the StringFormatter component, used by React. Note that displayName
// is used in preference to relying on function.name.
StringFormatter.displayName = componentName;

const DefaultStringFormatterProps = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /** Number of lines to clamp value. */
  lines: PropTypes.number,
  /** Whether or not the value should be truncated. */
  truncate: PropTypes.bool,
  /** Value to format. */
  value: PropTypes.string.isRequired,
  /** Maximum width of value which should include */
  width: PropTypes.string,
};

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
StringFormatter.propTypes = {
  ...DefaultStringFormatterProps,

  /** Specify the direction of the tooltip. Can be either top or bottom. */
  tooltipDirection: PropTypes.oneOf(Object.values(StringFormatterAlignment)),
};

/**
 * StringFormatterContent
 * Only used internally
 */

let StringFormatterContent = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      lines = defaults.lines,
      truncate = defaults.truncate,
      width = defaults.width,
      value,
      /* TODO: add other props for StringFormatter, with default values if needed */

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <span
        className={cx(`${blockClass}--content`, className, {
          [`${blockClass}--truncate`]: truncate,
        })}
        style={{
          maxWidth: width,
          WebkitLineClamp: lines,
        }}
        {...rest}
        ref={ref}
      >
        {value}
      </span>
    );
  }
);

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
StringFormatterContent.propTypes = {
  ...DefaultStringFormatterProps,
};
