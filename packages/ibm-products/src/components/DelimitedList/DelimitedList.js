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

const blockClass = `${pkg.prefix}--delimited-list`;
const componentName = 'DelimitedList';

const defaults = {
  delimiter: ', ',
  items: [],
  truncate: true,
};

/**
 * `DelimitedList` converts an array of items into a single line of
 * comma-separated values. If the line is longer than it's parent
 * container's width, then it will be truncated with an ellipsis.
 */
export let DelimitedList = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      className,
      /* add other props for DelimitedList, with default values if needed */
      delimiter = defaults.delimiter,
      items = defaults.items,
      truncate = defaults.truncate,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <div
        {...rest}
        className={cx(blockClass, className, [
          truncate && items.length > 0 && `${blockClass}-truncate`,
        ])}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        {items.length > 0 ? items.join(delimiter) : '–'}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
DelimitedList = pkg.checkComponentEnabled(DelimitedList, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
DelimitedList.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
DelimitedList.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * The character(s) used to separate the items.
   */
  delimiter: PropTypes.string,
  /**
   * Array of items to be listed.
   */
  items: PropTypes.arrayOf(PropTypes.any),
  /**
   * Toggle the component's ability to truncate or not.
   */
  truncate: PropTypes.bool,
};
