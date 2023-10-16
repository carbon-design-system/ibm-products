/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import PropTypes, { Component } from 'prop-types';
import { createPortal } from 'react-dom';
import { CoachmarkOverlay } from './CoachmarkOverlay';
import { CoachmarkContext } from './utils/context';
import { COACHMARK_OVERLAY_KIND } from './utils/enums';
import { useClickOutsideElement, useWindowEvent } from './utils/hooks';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';
import { throttle } from 'lodash';
// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark`;
const componentName = 'Coachmark';

const defaults = {
  align: 'bottom',
  onClose: () => {},
  overlayKind: 'tooltip',
  theme: 'light',
};

/**
 * Coachmarks are used to call out specific functionality or concepts
 * within the UI that may not be intuitive but are important for the
 * user to gain understanding of the product's main value and discover new use cases.
 */

export let Coachmark = forwardRef(
  (
    {
      align = defaults.align,
      children,
      className,
      onClose = defaults.onClose,
      overlayClassName,
      overlayKind = defaults.overlayKind,
      overlayRef,
      portalTarget,
      positionTune,
      target,
      theme = defaults.theme,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const isBeacon = overlayKind === COACHMARK_OVERLAY_KIND.TOOLTIP;
    const isStacked = overlayKind === COACHMARK_OVERLAY_KIND.STACKED;
    const portalNode = portalTarget
      ? document.querySelector(portalTarget) ?? document.querySelector('body')
      : document.querySelector('body');
    const [isOpen, setIsOpen] = useState(isStacked);
    const [shouldResetPosition, setShouldResetPosition] = useState(false);
    const [targetRect, setTargetRect] = useState();
    const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 });
    const overlayBackupRef = useRef();
    const backupRef = useRef();
    const _coachmarkRef = ref || backupRef;
    const _overlayRef = overlayRef || overlayBackupRef;
    const closeOverlay = () => {
      setIsOpen(false);
    };

    const handleClose = () => {
      if (isStacked) {
        // If stacked, do not unmount,
        // only call its ("parent") onClose method.
        onClose();
      } else {
        setIsOpen(false);
        onClose();
      }
    };

    const handleTargetKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

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
        onKeyDown: handleTargetKeyDown,
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
          ref={_coachmarkRef}
          {
            // Pass through any other property values as HTML attributes.
            ...rest
          }
          {...getDevtoolsProps(componentName)}
        >
          {target}
          {isOpen &&
            createPortal(
              <CoachmarkOverlay
                ref={_overlayRef}
                fixedIsVisible={false}
                kind={overlayKind}
                onClose={handleClose}
                theme={theme}
                className={overlayClassName}
              >
                {children}
              </CoachmarkOverlay>,
              portalNode
            )}
        </div>
      </CoachmarkContext.Provider>
    );
  }
);

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
  // TODO: UPDATE COMMENT HERE - UPDATE MDX TO HAVE DIRECTION TO USE ONLY OVERLAY ELEMENTS>...
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

  overlayRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Component) }),
  ]),

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
