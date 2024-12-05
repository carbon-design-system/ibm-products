/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  MutableRefObject,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useClickOutsideElement, useWindowEvent } from './utils/hooks';

import { COACHMARK_OVERLAY_KIND } from './utils/enums';
import { CoachmarkContext } from './utils/context';
import { CoachmarkOverlay } from './CoachmarkOverlay';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
import { throttle } from 'lodash';
import { Popover, PopoverAlignment, PopoverContent } from '@carbon/react';
import { useIsomorphicEffect } from '../../global/js/hooks';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark`;
const overlayBlockClass = `${blockClass}-overlay`;
const componentName = 'Coachmark';

const defaults = {
  align: 'bottom',
  onClose: () => {},
  overlayKind: 'tooltip',
  theme: 'light',
  isOpenByDefault: false,
};

export interface CoachmarkProps {
  /**
   * Where to render the Coachmark relative to its target.
   * Applies only to Floating and Tooltip Coachmarks.
   * @see COACHMARK_ALIGNMENT
   */
  align?:
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'top'
    | 'top-left'
    | 'top-right';
  /**
   * Auto aligns the coachmark based on screen boundaries
   * Applies only to Tooltip Coachmarks.
   */
  autoAlign?: boolean;
  /**
   * Coachmark should use a single CoachmarkOverlayElements component as a child.
   * @see CoachmarkOverlayElements
   */
  children: ReactNode;
  /**
   * Optional class name for this component.
   */
  className?: string;

  /**
   * Function to call when the Coachmark closes.
   */
  onClose?: () => void;
  /**
   * Optional class name for the Coachmark Overlay component.
   */
  overlayClassName?: string;

  /**
   * What kind or style of Coachmark to render.
   */
  overlayKind?: 'tooltip' | 'floating' | 'stacked';

  overlayRef?: MutableRefObject<HTMLElement | null>;
  /**
   * By default, the Coachmark will be appended to the end of `document.body`.
   * The Coachmark will remain persistent as the user navigates the app until
   * the user closes the Coachmark.
   *
   * Alternatively, the app developer can tightly couple the Coachmark to a DOM
   * element or other component by specifying a CSS selector. The Coachmark will
   * remain visible as long as that element remains visible or mounted. When the
   * element is hidden or component is unmounted, the Coachmark will disappear.
   */
  portalTarget?: string;

  /**
   * Fine tune the position of the target in pixels. Applies only to Beacons.
   */
  positionTune?: { x: number; y: number };
  /**
   * The optional button or beacon that the user will click to show the Coachmark.
   */
  target: React.ReactNode;
  /**
   * Determines the theme of the component.
   */
  theme?: 'light' | 'dark';
  /**
   * Determines if the coachmark is open by default.
   * Does nothing if `overlayKind=stacked`.
   */
  isOpenByDefault?: boolean;
}

/**
 * Coachmarks are used to call out specific functionality or concepts
 * within the UI that may not be intuitive but are important for the
 * user to gain understanding of the product's main value and discover new use cases.
 */

export let Coachmark = forwardRef<HTMLElement, CoachmarkProps>(
  (
    {
      align = defaults.align,
      autoAlign,
      children,
      className,
      onClose = defaults.onClose,
      overlayClassName,
      overlayKind = defaults.overlayKind,
      overlayRef,
      positionTune,
      portalTarget,
      target,
      theme = defaults.theme,
      isOpenByDefault = defaults.isOpenByDefault,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const isBeacon = overlayKind === COACHMARK_OVERLAY_KIND.TOOLTIP;
    const isStacked = overlayKind === COACHMARK_OVERLAY_KIND.STACKED;
    const [isOpen, setIsOpen] = useState(isStacked || isOpenByDefault);
    const [shouldResetPosition, setShouldResetPosition] = useState(false);
    const [targetRect, setTargetRect] = useState();
    const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 });
    const overlayBackupRef = useRef(undefined);
    const backupRef = useRef(undefined);
    const _coachmarkRef = ref || backupRef;
    const _overlayRef = overlayRef || overlayBackupRef;

    const portalNode = useRef<Element | DocumentFragment | null>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    useIsomorphicEffect(() => {
      portalNode.current = portalTarget
        ? document?.querySelector(portalTarget) ??
          document?.querySelector('body')
        : document?.querySelector('body');
    }, [portalTarget]);

    const closeOverlay = () => {
      setIsOpen(false);
    };

    const handleClose = useCallback(() => {
      if (isStacked) {
        // If stacked, do not unmount,
        // only call its ("parent") onClose method.
        onClose();
      } else {
        setIsOpen(false);
        onClose();
      }
    }, [isStacked, onClose]);

    const escFunction = useCallback(
      (event) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      },
      [handleClose]
    );

    useEffect(() => {
      document.addEventListener('keydown', escFunction, false);

      return () => {
        document.removeEventListener('keydown', escFunction, false);
      };
    }, [escFunction]);

    const handleTargetClick = (e) => {
      setTargetRect(e.target.getBoundingClientRect());
      setTargetOffset({ x: e.target.offsetLeft, y: e.target.offsetTop });

      if (isBeacon) {
        // toggle open/closed for beacons
        setIsOpen((prevIsOpen) => !prevIsOpen);
      } else {
        // reset position for all other kinds
        setIsOpen(false);
        setShouldResetPosition(true);
      }
    };

    const contextValue = {
      buttonProps: {
        'aria-expanded': isOpen,
        tabIndex: 0,
        onClick: handleTargetClick,
        // Compensate for accidental open/close on double-click.
        // Only open on double-click.
        onDoubleClick: handleTargetClick,
      },
      closeButtonProps: {
        onClick: handleClose,
      },
      targetRect: targetRect,
      targetOffset: targetOffset,
      align: align,
      positionTune: positionTune,
      isOpen: isOpen,
    };
    const handleResize = throttle(() => {
      closeOverlay();
    }, 2000);

    // instead of toggling on/off,
    // keep open and reset to original position
    useEffect(() => {
      if (shouldResetPosition) {
        setShouldResetPosition(false);
        setIsOpen(true);
      }
    }, [shouldResetPosition]);

    useIsomorphicEffect(() => {
      const overlayPositionStyle = {
        top: `${(positionTune?.y ?? 0) - 16}px`,
        left: `${(positionTune?.x ?? 0) - 16}px`,
      };
      if (
        popoverRef.current &&
        popoverRef.current.style &&
        overlayPositionStyle
      ) {
        const combinedStyle = {
          position: 'absolute',
          ...overlayPositionStyle,
        };
        Object.assign(popoverRef.current.style, combinedStyle);
      }
    }, [popoverRef, positionTune]);

    // On unmount:
    // - DO NOT "Close()" the coachmark.
    //   - This triggers a "signal" to close it forever.
    //   - "Closing" should only ever be a user-triggered event.
    // - DO "hide" the coachmark.
    //   - The app is doing the action for the user.
    //   - The user will have the opportunity to open it again.
    useEffect(() => {
      return () => setIsOpen(false);
    }, []);

    useClickOutsideElement(
      _coachmarkRef,
      _overlayRef,
      overlayKind,
      closeOverlay
    );
    useWindowEvent('resize', handleResize);
    return (
      <CoachmarkContext.Provider value={contextValue}>
        <div
          className={cx(blockClass, `${blockClass}__${theme}`, className)}
          ref={_coachmarkRef as MutableRefObject<HTMLDivElement | null>}
          {
            // Pass through any other property values as HTML attributes.
            ...rest
          }
          {...getDevtoolsProps(componentName)}
        >
          {overlayKind !== 'tooltip' ? (
            <>
              {target}
              {isOpen &&
                portalNode?.current &&
                createPortal(
                  <CoachmarkOverlay
                    ref={_overlayRef as MutableRefObject<HTMLDivElement | null>}
                    fixedIsVisible={false}
                    kind={overlayKind}
                    onClose={handleClose}
                    theme={theme}
                    className={cx(
                      overlayClassName,
                      `${overlayBlockClass}--is-visible`
                    )}
                  >
                    {children}
                  </CoachmarkOverlay>,
                  // Default to `document.body` when `portalNode` is `null`
                  portalNode?.current
                )}
            </>
          ) : (
            <Popover
              highContrast
              caret
              ref={popoverRef}
              align={align as PopoverAlignment}
              autoAlign={autoAlign}
              open={isOpen}
            >
              {target}
              <PopoverContent>
                {isOpen && (
                  <CoachmarkOverlay
                    ref={_overlayRef as MutableRefObject<HTMLDivElement | null>}
                    fixedIsVisible={false}
                    kind={overlayKind}
                    onClose={handleClose}
                    theme={theme}
                    className={cx(overlayClassName, {
                      [`${overlayBlockClass}--is-visible`]: isOpen,
                    })}
                  >
                    {children}
                  </CoachmarkOverlay>
                )}
              </PopoverContent>
            </Popover>
          )}
        </div>
      </CoachmarkContext.Provider>
    );
  }
);

const overlayRefType =
  typeof HTMLElement === 'undefined'
    ? PropTypes.object
    : // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
      PropTypes.instanceOf(HTMLElement);

// Return a placeholder if not released and not enabled by feature flag
Coachmark = pkg.checkComponentEnabled(Coachmark, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Coachmark.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Coachmark.propTypes = {
  /**
   * Where to render the Coachmark relative to its target.
   * Applies only to Floating and Tooltip Coachmarks.
   * @see COACHMARK_ALIGNMENT
   */
  align: PropTypes.oneOf([
    'bottom',
    'bottom-left',
    'bottom-right',
    'left',
    'left-top',
    'left-bottom',
    'right',
    'right-top',
    'right-bottom',
    'top',
    'top-left',
    'top-right',
  ]),
  /**
   * Auto aligns the coachmark based on screen boundaries
   * Applies only to Tooltip Coachmarks.
   */
  autoAlign: PropTypes.bool,

  /**
   * Coachmark should use a single CoachmarkOverlayElements component as a child.
   * @see CoachmarkOverlayElements
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,

  /**
   * Determines if the coachmark is open by default.
   * Does nothing if `overlayKind=stacked`.
   */
  isOpenByDefault: PropTypes.bool,

  /**
   * Function to call when the Coachmark closes.
   */
  onClose: PropTypes.func,
  /**
   * Optional class name for the Coachmark Overlay component.
   */
  overlayClassName: PropTypes.string,

  /**
   * What kind or style of Coachmark to render.
   */
  overlayKind: PropTypes.oneOf(['tooltip', 'floating', 'stacked']),

  overlayRef: PropTypes.shape({
    current: overlayRefType as PropTypes.Validator<HTMLElement | null>,
  }),
  /**
   * By default, the Coachmark will be appended to the end of `document.body`.
   * The Coachmark will remain persistent as the user navigates the app until
   * the user closes the Coachmark.
   *
   * Alternatively, the app developer can tightly couple the Coachmark to a DOM
   * element or other component by specifying a CSS selector. The Coachmark will
   * remain visible as long as that element remains visible or mounted. When the
   * element is hidden or component is unmounted, the Coachmark will disappear.
   */
  portalTarget: PropTypes.string,
  /**
   * Fine tune the position of the target in pixels. Applies only to Beacons.
   */
  // @ts-ignore
  positionTune: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  /**
   * The optional button or beacon that the user will click to show the Coachmark.
   */
  target: PropTypes.node,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};
