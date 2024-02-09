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

const blockClass = `${pkg.prefix}--string-formatter`;
const componentName = 'StringFormatterContent';

const defaults = {
  lines: 1,
  truncate: false,
  width: null,
};

/**
 * StringFormatterContent is to be used within StringFormatter.
 *
 * This component is not intended for general use.
 */

export let StringFormatterContent = React.forwardRef(
  (
    {
      className,
      lines = defaults.lines,
      truncate = defaults.truncate,
      width = defaults.width,
      value,
      ...rest
    },
    ref
  ) => {
    return (
      <span
        {...rest}
        className={cx(`${blockClass}--content`, className, {
          [`${blockClass}--truncate`]: truncate,
        })}
        style={{
          maxWidth: width,
          WebkitLineClamp: lines,
        }}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {value}
      </span>
    );
  }
);

StringFormatterContent.displayName = componentName;

StringFormatterContent.propTypes = {
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
