/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import clamp from 'lodash/clamp';
import { purple50, gray20, gray70 } from '@carbon/colors';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--checklist__chart`;
const componentName = 'ChecklistChart';

const defaults = {
  theme: 'light',
};

/**
 * Custom chart component used within Checklist PLG component
 */
export let ChecklistChart = React.forwardRef(
  ({ className, value, theme = defaults.theme, ...rest }, ref) => {
    const numDegrees = clamp(value * 360, 0, 360);
    const circleColor = theme === 'light' ? gray20 : gray70; // $ui-03 (-ish)
    const progressColor = purple50;

    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        style={{
          backgroundImage: `conic-gradient(${progressColor} ${numDegrees}deg, ${circleColor} ${numDegrees}deg 360deg)`,
          borderRadius: '50%',
        }}
        ref={ref}
        role="img"
        {...getDevtoolsProps(componentName)}
      />
    );
  }
);

ChecklistChart.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
ChecklistChart.propTypes = {
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Number between 0 and 1.
   */
  value: PropTypes.number.isRequired,
};
