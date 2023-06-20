/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useCoachmark } from '../Coachmark';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark-beacon`;
const componentName = 'CoachmarkBeacon';

const defaults = {
  kind: 'default',
};

/**
 * Use beacon for the target prop of a Coachmark component.
 */
export let CoachmarkBeacon = React.forwardRef(
  ({ label, className, kind = defaults.kind, ...rest }, ref) => {
    const coachmark = useCoachmark();

    const overlayPositionStyle = {
      top: coachmark.positionTune?.y ?? 0,
      left: coachmark.positionTune?.x ?? 0,
    };
    return (
      <span
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, `${blockClass}-${kind}`, className)}
        ref={ref}
        role="main"
        style={overlayPositionStyle}
        {...getDevtoolsProps(componentName)}
      >
        <button
          tabIndex={0}
          type="button"
          {...coachmark.buttonProps}
          aria-label={label}
          className={`${blockClass}__target`}
        >
          <svg className={`${blockClass}__center`}>
            <circle r={1} cx={38} cy={38} />
          </svg>
        </button>
      </span>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CoachmarkBeacon = pkg.checkComponentEnabled(CoachmarkBeacon, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkBeacon.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkBeacon.propTypes = {
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,
  /**
   * What style of beacon.
   * BEACON_KIND is an exported enum from the Coachmark and can be used for this value.
   * @see {@link BEACON_KIND}
   */
  kind: PropTypes.oneOf(['default']),
  /**
   * The aria label.
   */
  label: PropTypes.string.isRequired,
};
