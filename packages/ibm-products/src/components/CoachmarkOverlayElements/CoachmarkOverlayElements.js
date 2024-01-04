/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { Children, useEffect, useRef, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
import { Button } from '@carbon/react';
import { useCoachmark } from '../Coachmark';
import { clamp } from 'lodash';
import pconsole from '../../global/js/utils/pconsole';
//TODO THIS PATH WILL NEED TO BE UPDATED ONCE IN IBM PRODUCTS
//import { Carousel } from '../Carousel';
//TODO THIS PATH WILL NEED TO BE UPDATED ONCE IN IBM PRODUCTS
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark-overlay-elements`;
const componentName = 'CoachmarkOverlayElements';

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
  isVisible: false,
  nextButtonText: 'Next',
  previousButtonLabel: 'Back',
  closeButtonLabel: 'Got it',
};
/**
 * Composable container to allow for the displaying of CoachmarkOverlayElement
 * components in a carousel fashion.
 */
export let CoachmarkOverlayElements = React.forwardRef(
  (
    {
      className,
      children,
      // isVisible = defaults.isVisible,
      // media,
      // nextButtonText = defaults.nextButtonText,
      // previousButtonLabel = defaults.previousButtonLabel,
      // closeButtonLabel = defaults.closeButtonLabel,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <div
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
      >
        {children}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CoachmarkOverlayElements = pkg.checkComponentEnabled(
  CoachmarkOverlayElements,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkOverlayElements.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkOverlayElements.propTypes = {
  /**
   * Provide the contents of the CoachmarkOverlayElements.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /* TODO: add types and DocGen for all props. */
};
