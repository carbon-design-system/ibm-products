/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import cx from 'classnames';
import { ChevronDown } from '@carbon/react/icons';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import uuidv4 from '../../global/js/utils/uuidv4';
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
    { children, className, definition, theme = defaults.theme, ...rest },
    ref
  ) => {
    const [isOpen, setOpen] = useState(false);
    const contentId = useRef(uuidv4()).current;

    const handleToggle = () => {
      setOpen((prevState) => !prevState);
    };

    return (
      <span
        {...rest}
        className={cx(blockClass, `${blockClass}__${theme}`, className)}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {' '}
        <button
          type="button"
          aria-controls={contentId}
          aria-expanded={isOpen}
          className={cx(`${blockClass}__keyword`, [
            isOpen
              ? [`${blockClass}__keyword-open`]
              : [`${blockClass}__keyword-closed`],
          ])}
          onClick={handleToggle}
        >
          {children}
          <ChevronDown size={16} />
        </button>{' '}
        <span id={contentId} className={`${blockClass}__body`} hidden={!isOpen}>
          {isOpen && definition}
        </span>{' '}
      </span>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
NonLinearReading = pkg.checkComponentEnabled(NonLinearReading, componentName);
NonLinearReading.displayName = componentName;

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
