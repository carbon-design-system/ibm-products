/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { ChevronDown16 } from '@carbon/icons-react';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--non-linear-reading`;
const componentName = 'NonLinearReading';

// Default values for props
const defaults = {
  theme: 'light',
};

/**
 * Use non-linear reading when space is limited to share a
 * brief, at-a-glance, summary of a concept that may require
 * more explanation for some users.
 */
export let NonLinearReading = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      children,
      className,
      /* other props for NonLinearReading, with default values if needed */
      definition,
      theme = defaults.theme,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen((prevState) => !prevState);
    };

    return (
      <span
        {...rest}
        className={cx(blockClass, `${blockClass}__${theme}`, className)}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        {' '}
        <button
          type="button"
          aria-expanded={isOpen}
          className={cx(`${blockClass}__keyword`, [
            isOpen
              ? [`${blockClass}__keyword-open`]
              : [`${blockClass}__keyword-closed`],
          ])}
          onClick={handleToggle}
        >
          {children}
          <ChevronDown16 />
        </button>{' '}
        {isOpen && <span className={`${blockClass}__body`}>{definition}</span>}{' '}
      </span>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
NonLinearReading = pkg.checkComponentEnabled(NonLinearReading, componentName);
NonLinearReading.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
NonLinearReading.propTypes = {
  /**
   * The keyword of the component appears as a pill.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * The content that appears when the keyword is toggled open.
   */
  definition: PropTypes.node.isRequired,

  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};
