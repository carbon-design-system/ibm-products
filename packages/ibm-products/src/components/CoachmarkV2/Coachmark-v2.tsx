/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { ReactNode, createContext, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import CoachmarkTrigger, { CoachmarkTriggerProps } from './CoachmarkTrigger';
import CoachmarkContent, { CoachmarkContentProps } from './CoachmarkContent';
import { NewPopoverAlignment } from '@carbon/react';
import { useIsomorphicEffect } from '../../global/js/hooks';

// The block part of our conventional BEM class names (blockClass__E--M).
export const blockClass = `${pkg.prefix}--coachmark`;
const componentName = 'CoachmarkV2';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

export interface CoachmarkV2Props {
  /**
   * Provide the contents of the Coachmark.
   */
  children: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   * The aria label applied to the Coachmark component
   */
  ariaLabel?: string;
  /**
   * Specifies whether the component is currently open.
   */
  isOpenByDefault?: boolean;
  /**
   * Function to call when the close button is clicked.
   */
  onClose?: () => void;
  /**
   * Where to render the Coachmark relative to its target.
   */
  align?: NewPopoverAlignment;
  /**
   * Fine tune the position of the target in pixels.
   */
  positionTune?: { x: number; y: number };
}

// Define the type for Coachmark, extending it to include Trigger and Content
export type CoachmarkV2Component = React.ForwardRefExoticComponent<
  CoachmarkV2Props & React.RefAttributes<HTMLDivElement>
> & {
  Trigger: React.FC<CoachmarkTriggerProps>;
  Content: React.FC<CoachmarkContentProps>;
};
interface CoachmarkV2ContextType {
  onClose?: () => void;
  open?: boolean;
  setOpen: (value: boolean) => void;
  align?: NewPopoverAlignment;
  triggerRef: React.RefObject<HTMLElement | null>;
  positionTune: { x: number; y: number };
}

export const CoachmarkV2Context = createContext<CoachmarkV2ContextType>({
  open: false,
  setOpen: () => {},
  align: 'bottom',
  triggerRef: { current: null },
  positionTune: { x: 0, y: 0 },
});
/**
 * Coachmarks are used to call out specific functionality or concepts
 * within the UI that may not be intuitive but are important for the
 * user to gain understanding of the product's main value and discover new use cases.
 */
export const CoachmarkV2 = React.forwardRef<HTMLDivElement, CoachmarkV2Props>(
  (props, ref) => {
    const {
      children,
      className,
      ariaLabel = 'CoachmarkV2',
      onClose,
      align = 'bottom',
      isOpenByDefault = false,
      positionTune,
      ...rest
    } = props;
    const [open, setOpen] = React.useState(isOpenByDefault);
    const triggerRef = useRef<HTMLElement>(null);
    const internalRef = useRef<HTMLDivElement | null>(null);

    useIsomorphicEffect(() => {
      const { x = 0, y = 0 } = positionTune ?? {};
      const el = internalRef.current;

      if (el && (x !== 0 || y !== 0)) {
        el.style.transform = `translate(${x}px, ${y}px)`;
      }
    }, [positionTune]);

    const setRef = (node: HTMLDivElement | null) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <CoachmarkV2Context.Provider
        value={{
          onClose,
          open,
          setOpen,
          align,
          triggerRef,
          positionTune: positionTune ?? { x: 0, y: 0 },
        }}
      >
        <div
          {...rest}
          className={cx(
            blockClass, // Apply the block class to the main HTML element
            className // Apply any supplied class names to the main HTML element.
          )}
          aria-label={ariaLabel}
          ref={setRef}
          {...getDevtoolsProps(componentName)}
        >
          <div className={`${blockClass}--container`}>{children}</div>
        </div>
      </CoachmarkV2Context.Provider>
    );
  }
) as CoachmarkV2Component;
CoachmarkV2.Trigger = CoachmarkTrigger;
CoachmarkV2.Content = CoachmarkContent;

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkV2.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkV2.propTypes = {
  /**
   * Where to render the Coachmark relative to its target.
   */
  align: PropTypes.string,
  /**
   * The aria label applied to the Coachmark component
   */
  ariaLabel: PropTypes.string,
  /**
   * Provide the contents of the CoachmarkV2.
   */
  children: PropTypes.node.isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Specifies whether the component is currently open.
   */
  isOpenByDefault: PropTypes.bool,
  /**
   * Function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * Fine tune the position of the target in pixels. Applies only to Beacons.
   */
  // @ts-ignore
  positionTune: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};
