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
import { Button } from 'carbon-components-react';
import { useCoachmark } from './utils/context';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark-button`;
const componentName = 'CoachmarkButton';

/**
 * Use CoachmarkButton for the target prop of a Coachmark component.
 */
export let CoachmarkButton = React.forwardRef(
  ({ children, className, ...rest }, ref) => {
    const coachmark = useCoachmark();
    return (
      <Button
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
        {...coachmark.buttonProps}
      >
        {children}
      </Button>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CoachmarkButton = pkg.checkComponentEnabled(CoachmarkButton, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkButton.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkButton.propTypes = {
  /**
   * Provide the contents of the CoachmarkButton.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
