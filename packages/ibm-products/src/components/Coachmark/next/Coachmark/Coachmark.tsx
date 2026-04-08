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
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../../../global/js/utils/devtools';
import { CoachmarkContext, blockClass } from './context';
import CoachmarkContent, { CoachmarkContentProps } from './CoachmarkContent';
import { Popover, NewPopoverAlignment } from '@carbon/react';
import { useIsomorphicEffect } from '../../../../global/js/hooks';
import { ContentHeader, ContentHeaderProps } from './ContentHeader';
import { ContentBody, ContentBodyProps } from './ContentBody';

// The block part of our conventional BEM class names (blockClass__E--M).

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

export interface CoachmarkPropsNext {
  /**
   * Provide the contents of the Coachmark.
   */
  children: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
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
  /**
   * Specify whether the component should be rendered on high-contrast.
   */
  highContrast?: boolean;
  /**
   * Specify whether a drop shadow should be rendered on the popover.
   */
  dropShadow?: boolean;
  /**
   * Specify whether a caret should be rendered on the popover. This is intended to use only for coachmark patterns.
   */
  caret?: boolean;
}

type CoachmarkContentComponent = FC<CoachmarkContentProps> & {
  Header: FC<ContentHeaderProps>;
  Body: FC<ContentBodyProps>;
};
// Define the type for Coachmark, extending it to include Trigger and Content
export type CoachmarkComponent = ForwardRefExoticComponent<
  CoachmarkPropsNext & RefAttributes<HTMLDivElement>
> & {
  Content: CoachmarkContentComponent;
};

/**
 * Coachmarks are used to call out specific functionality or concepts
 * within the UI that may not be intuitive but are important for the
 * user to gain understanding of the product's main value and discover new use cases.
 */
export const Coachmark = forwardRef<HTMLDivElement, CoachmarkPropsNext>(
  (props, ref) => {
    const {
      children,
      className,
      onClose,
      align = 'bottom',
      open,
      position = { x: 0, y: 0 },
      floating,
      dropShadow,
      highContrast,
      caret,
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
    const caretValue =
      caret !== undefined ? caret : floating === true ? false : true;

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

    useEffect(() => {
      const el = triggerRef.current;
      if (el) {
        el.setAttribute('aria-expanded', String(!!open));
      }
    }, [open]);

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

    const handleRequestClose = (event?: Event) => {
      onClose?.();
      setOpen(false);
    };

    // Separate trigger and content from children
    const childrenArray = React.Children.toArray(children);
    const contentElement = childrenArray.find(
      (child) => React.isValidElement(child) && child.type === CoachmarkContent
    ); // Find Coachmark.Content

    // Check if there's a trigger element (anything that's not CoachmarkContent)
    const triggerElement = childrenArray.find(
      (child) =>
        !(React.isValidElement(child) && child.type === CoachmarkContent)
    );

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
          ref={setRef}
          className={cx(blockClass, className, {
            [`${blockClass}--floating`]: floating,
          })}
          {...getDevtoolsProps(componentName)}
        >
          <Popover
            open={currentOpen}
            onRequestClose={handleRequestClose}
            align={align as NewPopoverAlignment}
            caret={caretValue}
            highContrast={highContrast ?? true}
            dropShadow={dropShadow}
          >
            {triggerElement}
            {contentElement}
          </Popover>
        </div>
      </CoachmarkContext.Provider>
    );
  }
) as CoachmarkComponent;
Coachmark.Content = CoachmarkContent;
Coachmark.Content.Header = ContentHeader;
Coachmark.Content.Body = ContentBody;
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
   * Specify whether a caret should be rendered on the popover. This is intended to use only for coachmark patterns.
   */
  caret: PropTypes.bool,
  /**
   * Provide the contents of the CoachmarkV2.
   */
  children: PropTypes.node.isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Specify whether a drop shadow should be rendered on the popover.
   */
  dropShadow: PropTypes.bool,
  /**
   * Specifies whether the component is floating or not.
   */
  floating: PropTypes.bool,
  /**
   * Specify whether the component should be rendered on high-contrast.
   */
  highContrast: PropTypes.bool,
  /**
   * Function to call when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * Specifies whether the component is currently open.
   */
  open: PropTypes.bool,
  /**
   * Fine tune the position of the target in pixels. Applies only to Beacons.
   */
  // @ts-ignore
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};
