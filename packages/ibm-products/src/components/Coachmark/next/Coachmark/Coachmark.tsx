/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, {
  FC,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  RefObject,
  createContext,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../../../global/js/utils/devtools';
import { pkg } from '../../../../settings';
import CoachmarkContent, { CoachmarkContentProps } from './CoachmarkContent';
import { NewPopoverAlignment } from '@carbon/react';
import { useIsomorphicEffect } from '../../../../global/js/hooks';

// The block part of our conventional BEM class names (blockClass__E--M).
export const blockClass = `${pkg.prefix}--coachmark__next`;
const componentName = 'Coachmark';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

export interface CoachmarkProps {
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
  open?: boolean;
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
  position?: { x: number; y: number };
  /**
   * Specifies whether the component is floating or not.
   */
  floating?: boolean;
}

// Define the type for Coachmark, extending it to include Trigger and Content
export type CoachmarkComponent = ForwardRefExoticComponent<
  CoachmarkProps & RefAttributes<HTMLDivElement>
> & {
  Content: FC<CoachmarkContentProps>;
};
interface CoachmarkContextType {
  onClose?: () => void;
  open?: boolean;
  setOpen: (value: boolean) => void;
  align?: NewPopoverAlignment;
  triggerRef: RefObject<HTMLElement | null>;
  position: { x: number; y: number };
  contentRef: HTMLElement | null;
  setContentRef: (value: any) => void;
  floating?: boolean;
}

export const CoachmarkContext = createContext<CoachmarkContextType>({
  open: false,
  setOpen: () => {},
  align: 'bottom',
  triggerRef: { current: null },
  position: { x: 0, y: 0 },
  contentRef: null,
  setContentRef: (value: boolean) => {},
  floating: false,
});
/**
 * Coachmarks are used to call out specific functionality or concepts
 * within the UI that may not be intuitive but are important for the
 * user to gain understanding of the product's main value and discover new use cases.
 */
export const Coachmark = forwardRef<HTMLDivElement, CoachmarkProps>(
  (props, ref) => {
    const {
      children,
      className,
      ariaLabel,
      onClose,
      align = 'bottom',
      open,
      position = { x: 0, y: 0 },
      floating,
      ...rest
    } = props;
    const triggerRef = useRef<HTMLElement>(null);
    const internalRef = useRef<HTMLDivElement | null>(null);
    const [contentRef, setContentRef] = useState<HTMLElement | null>(null);
    const [openState, setOpenState] = useState(false);

    const setOpen = (value: boolean) => {
      if (!value) {
        onClose?.();
      }
      if (open === undefined) {
        setOpenState(value);
      }
    };

    const currentOpen = open ?? openState;

    useEffect(() => {
      const container = internalRef.current;
      if (!container) {
        return;
      }

      const focusableElements = Array.from(
        container.querySelectorAll('*')
      ) as HTMLElement[];

      const firstFocusable = focusableElements.find(
        (el) => el.tabIndex >= 0 && !el.hasAttribute('disabled')
      );

      if (firstFocusable) {
        triggerRef.current = firstFocusable;
      }
    }, [children]);

    useIsomorphicEffect(() => {
      const { x = 0, y = 0 } = position ?? {};
      const el = internalRef.current;

      if (el && (x !== 0 || y !== 0)) {
        el.style.transform = `translate(${x}px, ${y}px)`;
      }
    }, [position]);

    const setRef = (node: HTMLDivElement | null) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as RefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <CoachmarkContext.Provider
        value={{
          onClose,
          open: currentOpen,
          setOpen,
          align,
          triggerRef,
          position,
          contentRef,
          setContentRef,
          floating,
        }}
      >
        <div
          {...rest}
          className={cx(
            blockClass, // Apply the block class to the main HTML element
            className, // Apply any supplied class names to the main HTML element.
            { [`${blockClass}--floating`]: floating }
          )}
          aria-label={ariaLabel}
          ref={setRef}
          {...getDevtoolsProps(componentName)}
        >
          <div className={`${blockClass}--container`}>{children}</div>
        </div>
      </CoachmarkContext.Provider>
    );
  }
) as CoachmarkComponent;
Coachmark.Content = CoachmarkContent;

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Coachmark.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Coachmark.propTypes = {
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
  defaultOpen: PropTypes.bool,
  /**
   * Specifies whether the component is floating or not.
   */
  floating: PropTypes.bool,
  /**
   * Function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * Fine tune the position of the target in pixels. Applies only to Beacons.
   */
  // @ts-ignore
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};
