/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect } from 'react';

interface UseCollapsibleHeaderOptions {
  container: HTMLDivElement | null;
  triggerCollapse: (collapsed: boolean) => void;
  disableHeaderCollapse?: boolean;
}

/**
 * Custom hook to manage collapsible header behavior based on scroll and drag gestures.
 *
 * This avoids relying solely on scroll events because collapsing the header can
 * remove scrollable space, preventing further scroll events from firing.
 */
export function useCollapsible({
  container,
  triggerCollapse,
  disableHeaderCollapse = false,
}: UseCollapsibleHeaderOptions) {
  useEffect(() => {
    if (!container || disableHeaderCollapse) {
      return;
    }

    let startY: number | null = null;
    let isDragging = false;

    const onPointerDown = (e: PointerEvent) => {
      startY = e.clientY;
      isDragging = true;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || startY === null) {
        return;
      }

      const diffY = startY - e.clientY;
      if (diffY > 5) {
        triggerCollapse(true);
      } else if (diffY < -5) {
        triggerCollapse(false);
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      startY = null;
      document.body.style.cursor = 'default';
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        triggerCollapse(true);
      } else if (e.deltaY < 0) {
        triggerCollapse(false);
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('wheel', onWheel);

    return () => {
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('wheel', onWheel);
    };
  }, [container, triggerCollapse, disableHeaderCollapse]);
}
