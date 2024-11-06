/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

import { DefinitionTooltip } from '@carbon/react';
import {
  StringFormatterAlignment,
  deprecated_StringFormatterAlignment,
  propMappingFunction,
} from './utils/enums';
import { allPropTypes } from '../../global/js/utils/props-helper';
import { useIsomorphicEffect } from '../../global/js/hooks';

const blockClass = `${pkg.prefix}--string-formatter`;
const componentName = 'StringFormatter';

const defaults = {
  lines: 1,
  tooltipDirection: StringFormatterAlignment.BOTTOM_START,
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
    const contentRef = useRef(null);

    useIsomorphicEffect(() => {
      contentRef.current.style.maxWidth = width;
      contentRef.current.style.WebkitLineClamp = lines;
    }, [lines, width]);

    const stringFormatterContent = (
      <span
        ref={contentRef}
        className={cx(`${blockClass}--content`, {
          [`${blockClass}--truncate`]: truncate,
        })}
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
          stringFormatterContent
        )}
      </span>
    );
  }
);

StringFormatter = pkg.checkComponentEnabled(StringFormatter, componentName);

StringFormatter.displayName = componentName;

StringFormatter.validateAlignment = () => (props, propName, componentName) => {
  const prop = props[propName];
  const deprecatedAlignValues = Object.values(
    deprecated_StringFormatterAlignment
  );
  if (deprecatedAlignValues.includes(prop)) {
    const mappedNewProp = propMappingFunction(prop);
    console.warn(
      `"${prop}" is a deprecated value for the "${propName}" prop on the "${componentName}" component. Use "${mappedNewProp}" instead. Allowable values are: ${Object.values(
        StringFormatterAlignment
      ).join(', ')}.`
    );
  }
};

StringFormatter.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /** Number of lines to clamp value. */
  lines: PropTypes.number,
  /** Specify the direction of the tooltip. Can be either top or bottom. */
  tooltipDirection: allPropTypes([
    StringFormatter.validateAlignment(),
    PropTypes.oneOf(
      Object.values(deprecated_StringFormatterAlignment),
      Object.values(StringFormatterAlignment)
    ),
  ]),
  /** Whether or not the value should be truncated. */
  truncate: PropTypes.bool,
  /** Value to format. */
  value: PropTypes.string.isRequired,
  /** Maximum width of value which should include */
  width: PropTypes.string,
};
