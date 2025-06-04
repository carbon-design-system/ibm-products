/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { PropsWithChildren, ReactNode } from 'react';

interface ContentWrapperProps extends PropsWithChildren {
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

  /**
   * Optional method that takes in a message id and returns an internationalized string.
   */
  translateWithId?: (id: string) => string;
}
/**
 * An Onboarding component intended to be used as the child elements of the InterstitialScreen component.
 */
export const ContentWrapper = React.forwardRef<
  HTMLDivElement,
  ContentWrapperProps
>(
  (
    {
      children,
      className,
      stepTitle,
      translateWithId,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    return (
      <div
        aria-label={stepTitle}
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={className}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
