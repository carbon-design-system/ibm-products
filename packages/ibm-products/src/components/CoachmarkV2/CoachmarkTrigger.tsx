/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blockClass, CoachmarkV2Context } from './Coachmark-v2';

export interface CoachmarkTriggerProps {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
}

export type EnrichedChildren = {
  children: ReactNode;
};

const CoachmarkTrigger = forwardRef<HTMLDivElement, CoachmarkTriggerProps>(
  (props, ref) => {
    const { className = '', children, ...rest } = props;
    const { open, setOpen, triggerRef } = useContext(CoachmarkV2Context);

    const coachmarkTriggerBlockClass = `${blockClass}--coachmark-trigger`;
    let childWithOnClick = children;
    if (!isValidElement(children)) {
      console.warn(
        '<Comp.Trigger> expects a single valid React element as child'
      );
      return null;
    }
    const userOnClick = (children as ReactElement<any>).props.onClick;

    const composedOnClick = (event: MouseEvent) => {
      setOpen?.(!open);
      userOnClick?.(event);
    };

    // Clone the element and override onClick
    childWithOnClick = cloneElement(children, {
      ...(children as ReactElement<any>).props,
      onClick: composedOnClick,
      ref: triggerRef,
    });

    return (
      <div
        ref={ref}
        role="presentation"
        className={cx(coachmarkTriggerBlockClass, className)}
        {...rest}
      >
        {childWithOnClick}
      </div>
    );
  }
);

export default CoachmarkTrigger;

CoachmarkTrigger.propTypes = {
  /**
   * Provide the optional content for header section and will be render after header titles and before progress indicator.
   * People can make use of this if they want to have custom header.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
};
