/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { PropsWithChildren, ReactNode } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--interstitial-screen-view`;
const componentName = 'InterstitialScreenView';

interface InterstitialScreenViewProps extends PropsWithChildren {
  /**
   * Provide the contents of the InterstitialScreenView.
   */
  children?: ReactNode;

  /**
   * Optional class name for this component.
   */
  className?: string;

  /**
   * The label to pass to the ProgressStep component.
   */
  stepTitle: string;
}
/**
 * An Onboarding component intended to be used as the child elements of the InterstitialScreen component.
 */
export let InterstitialScreenView = React.forwardRef<
  HTMLDivElement,
  InterstitialScreenViewProps
>(
  (
    {
      children,
      className,
      stepTitle,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <div
        role="complementary"
        aria-label={stepTitle}
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
        {...getDevtoolsProps(componentName)}
      >
        {children}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
InterstitialScreenView = pkg.checkComponentEnabled(
  InterstitialScreenView,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
InterstitialScreenView.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
InterstitialScreenView.propTypes = {
  /**
   * Provide the contents of the InterstitialScreenView.
   */
  children: PropTypes.node,

  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,

  /**
   * The label to pass to the ProgressStep component.
   */
  stepTitle: PropTypes.string.isRequired,
};
