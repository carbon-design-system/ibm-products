/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * TODO: Breakdown titles, icons, clickable items into sub-components
 * See
 *   ModifiedTabs (ModifiedTabLabelNew, ModifiedTabLabelWithClose)
 *   PageHeader (PageHeaderTitle, PageHeaderUtils)
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
import clamp from 'lodash/clamp';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--checklist__chart`;
const componentName = 'ChecklistChart';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  theme: 'light',
};

/**
 * TODO: A description of the component.
 */
export let ChecklistChart = React.forwardRef(
  ({ className, value, theme = defaults.theme, ...rest }, ref) => {
    const numDegrees = clamp(value * 360, 0, 360);
    const circleColor = theme === 'light' ? '#c6c6c6' : '#525252'; // $gray-30, $gray-70
    const progressColor = theme === 'light' ? '#6929c4' : '#A56EFF'; // $purple-70, $purple-50

    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        style={{
          backgroundImage: `conic-gradient(${progressColor} ${numDegrees}deg, ${circleColor} ${numDegrees}deg 360deg)`,
          borderRadius: '50%',
        }}
        ref={ref}
        {...getDevtoolsProps(componentName)}
      />
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
// ChecklistChart = pkg.checkComponentEnabled(ChecklistChart, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
// ChecklistChart.displayName = componentName;

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
