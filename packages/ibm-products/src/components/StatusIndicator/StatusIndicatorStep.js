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

import { InlineLoading } from '@carbon/react';
import { CircleStroke } from '@carbon/react/icons';
import uuidv4 from '../../global/js/utils/uuidv4';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--status-indicator-step`;
const componentName = 'StatusIndicatorStep';

const defaults = {
  status: 'inactive',
};

/**
 * An icon and description that describes one step of the `StatusIndicator`.
 */
export let StatusIndicatorStep = React.forwardRef(
  (
    { className, description, errorMessage, status = defaults.status, ...rest },
    ref
  ) => {
    const key = uuidv4();

    return (
      <li
        {...rest}
        className={cx(blockClass, className, `${blockClass}--${status}`)}
        key={key}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      >
        {status === 'active' && (
          <InlineLoading description={description} status="active" />
        )}

        {status === 'finished' && (
          <InlineLoading description={description} status="finished" />
        )}

        {status === 'error' && (
          <InlineLoading description={description} status="error" />
        )}
        {status === 'error' && errorMessage && (
          <div className={`${blockClass}__error-message`}>{errorMessage}</div>
        )}

        {status === 'inactive' && (
          <div className={`${blockClass}--inline-loading`}>
            <div className={`${blockClass}__animation`}>
              <CircleStroke size={16} viewBox="1 1 14 14" title={description} />
            </div>
            <div className={`${blockClass}__text`}>{description}</div>
          </div>
        )}
      </li>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
StatusIndicatorStep = pkg.checkComponentEnabled(
  StatusIndicatorStep,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
StatusIndicatorStep.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
StatusIndicatorStep.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * The text that describes the icon.
   */
  description: PropTypes.string.isRequired,
  /**
   * This message will appear below the description if the `status` is "error".
   */
  errorMessage: PropTypes.string,
  /**
   * Each `status` represents a different icon..
   */
  status: PropTypes.oneOf(['inactive', 'active', 'error', 'finished']),
};
