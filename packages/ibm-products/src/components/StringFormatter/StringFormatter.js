/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

import { DefinitionTooltip } from '@carbon/react';
import { StringFormatterAlignment } from './utils/enums';

const blockClass = `${pkg.prefix}--string-formatter`;
const componentName = 'StringFormatter';

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
      className,
      lines = defaults.lines,
      tooltipDirection = defaults.tooltipDirection,
      truncate = defaults.truncate,
      width = defaults.width,
      value,
      ...rest
    },
    ref
  ) => {
    const stringFormatterContent = (
      <span
        className={cx(`${blockClass}--content`, {
          [`${blockClass}--truncate`]: truncate,
        })}
        style={{
          maxWidth: width,
          WebkitLineClamp: lines,
        }}
      >
        {value}
      </span>
    );

    return (
      <span
        {...rest}
        className={cx(blockClass, className)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {truncate ? (
          <DefinitionTooltip
            className={`${blockClass}__tooltip`}
            align={tooltipDirection}
            definition={value}
            openOnHover={true}
          >
            {stringFormatterContent}
          </DefinitionTooltip>
        ) : (
          { stringFormatterContent }
        )}
      </span>
    );
  }
);

StringFormatter = pkg.checkComponentEnabled(StringFormatter, componentName);

StringFormatter.displayName = componentName;

StringFormatter.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /** Number of lines to clamp value. */
  lines: PropTypes.number,
  /** Specify the direction of the tooltip. Can be either top or bottom. */
  tooltipDirection: PropTypes.oneOf(Object.values(StringFormatterAlignment)),
  /** Whether or not the value should be truncated. */
  truncate: PropTypes.bool,
  /** Value to format. */
  value: PropTypes.string.isRequired,
  /** Maximum width of value which should include */
  width: PropTypes.string,
};
