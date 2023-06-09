/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { forwardRef, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

import { CoachmarkDragbar } from './CoachmarkDragbar';
import { CoachmarkHeader } from './CoachmarkHeader';
import { getOffsetTune } from './utils/constants';
import { useCoachmark } from './utils/context';
import { COACHMARK_OVERLAY_KIND } from './utils/enums';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--coachmark-overlay`;
const componentName = 'CoachmarkOverlay';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

const defaults = {
  kind: COACHMARK_OVERLAY_KIND.DRAGGABLE,
  theme: 'light',
};

/**
 * DO NOT USE. This component is for the exclusive use
 * of other Novice to Pro components.
 */
export let CoachmarkOverlay = forwardRef(
  (
    {
      children,
      onClose,
      fixedIsVisible,
      className,
      kind = defaults.kind,
      theme = defaults.theme,
      ...rest
    },
    ref
  ) => {
    const overlayRef = useRef();
    const coachmark = useCoachmark();
    const isBeacon = kind === COACHMARK_OVERLAY_KIND.BEACON;
    const isDraggable = kind === COACHMARK_OVERLAY_KIND.DRAGGABLE;
    let styledTune = {};
    // TODO: check this... this feels like it should be in a hook with no dep array.
    if (isBeacon || isDraggable) {
      if (coachmark.targetRect) {
        styledTune = {
          left: coachmark.targetRect.x + window.scrollX,
          top: coachmark.targetRect.y + window.scrollY,
        };
      }

      if (isBeacon) {
        // Compensate for radius of beacon
        styledTune.left += 16;
        styledTune.top += 16;
      } else if (isDraggable) {
        // Compensate for width and height of target element
        const offsetTune = getOffsetTune(coachmark, kind);
        styledTune.left += offsetTune.left;
        styledTune.top += offsetTune.top;
      }
    }

    function handleDrag(movementX, movementY) {
      const overlay = overlayRef.current;
      const { x, y } = overlay.getBoundingClientRect();
      overlay.style.transform = 'none';
      overlay.style.position = 'fixed';
      overlay.style.left = `${x + movementX}px`;
      overlay.style.top = `${y + movementY}px`;
      overlay.style.bottom = 'auto';
    }

    return (
      <div
        {...rest}
        className={cx(
          blockClass,
          `${blockClass}--${kind}`,
          `${blockClass}__${theme}`,
          (isBeacon || isDraggable) && `${blockClass}--${coachmark.align}`,
          fixedIsVisible && `${blockClass}--is-visible`,
          className
        )}
        ref={overlayRef}
        style={styledTune}
        {...getDevtoolsProps(componentName)}
      >
        {isDraggable ? (
          <CoachmarkDragbar onDrag={handleDrag} onClose={onClose} />
        ) : (
          <CoachmarkHeader onClose={onClose} />
        )}
        <div className={`${blockClass}__body`} ref={ref}>
          {children}
        </div>
        {isBeacon && <span className={`${blockClass}__caret`} />}
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
CoachmarkOverlay = pkg.checkComponentEnabled(CoachmarkOverlay, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CoachmarkOverlay.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CoachmarkOverlay.propTypes = {
  /**
   * The CoachmarkOverlayElements child components.
   * Validation is handled in the parent Coachmark component.
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,
  /**
   * The visibility of CoachmarkOverlay is
   * managed in the parent Coachmark component.
   */
  fixedIsVisible: PropTypes.bool.isRequired,
  /**
   * What kind or style of Coachmark to render.
   */
  kind: PropTypes.oneOf(Object.values(COACHMARK_OVERLAY_KIND)),
  /**
   * Function to call when the Coachmark closes.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
};
