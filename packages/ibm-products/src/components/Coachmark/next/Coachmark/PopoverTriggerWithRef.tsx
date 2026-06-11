/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef, RefObject, useRef } from 'react';
import { useIsomorphicEffect } from '../../../../global/js/hooks';
import { useMergedRefs } from '../../../../global/js/hooks/useMergedRefs';
import { autoUpdate } from '@floating-ui/react';

interface PopoverTriggerWithRefProps {
  /**
   * Reference to the target element to sync position with
   */
  targetRef: RefObject<HTMLElement | null>;
}

/**
 * PopoverTriggerWithRef is an invisible element that syncs its position
 * with an external trigger element. This allows Popover to position correctly
 * relative to a trigger that exists outside the Popover component tree.
 *
 * The proxy is properly hidden from assistive technology using multiple techniques:
 * - aria-hidden="true"
 * - tabIndex={-1}
 * - CSS clip techniques
 * - opacity: 0
 * - pointerEvents: none
 */
export const PopoverTriggerWithRef = forwardRef<
  HTMLDivElement,
  PopoverTriggerWithRefProps
>(({ targetRef }, popoverRef) => {
  const proxyRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRefs([popoverRef, proxyRef]);

  // Sync position immediately when target or proxy ref changes
  useIsomorphicEffect(() => {
    if (!targetRef.current || !proxyRef.current) {
      return;
    }
    const target = targetRef.current;
    const proxy = proxyRef.current;

    const syncPosition = () => {
      const rect = target.getBoundingClientRect();

      console.log('Setting proxy position to:', rect);

      // Set positioning to match the external trigger exactly
      proxy.style.position = 'fixed';
      proxy.style.left = `${rect.left}px`;
      proxy.style.top = `${rect.top}px`;
      proxy.style.width = `${rect.width}px`;
      proxy.style.height = `${rect.height}px`;

      console.log('Proxy after positioning:', proxy.getBoundingClientRect());

      // Dispatch a custom event to notify that positioning is complete
      proxy.dispatchEvent(
        new CustomEvent('proxyPositioned', { bubbles: true })
      );
    };

    // Initial sync - do it immediately
    syncPosition();

    // Force a reflow to ensure the position is applied
    void proxy.offsetHeight;

    // Force Floating UI to recalculate by triggering a resize event
    // This must happen AFTER the proxy is positioned
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
      console.log('Dispatched resize event to trigger Floating UI update');
    });

    // Keep synced on scroll/resize using autoUpdate
    const cleanup = autoUpdate(target, proxy, syncPosition, {
      ancestorScroll: true,
      ancestorResize: true,
      elementResize: true,
      layoutShift: true,
    });

    return cleanup;
  }, [targetRef]);

  return (
    <button
      ref={mergedRef}
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        opacity: 0,
        border: 'none',
        background: 'none',
        padding: 0,
        margin: 0,
        // Start with minimal dimensions - will be updated by effect
        width: '1px',
        height: '1px',
        left: '0px',
        top: '0px',
      }}
    />
  );
});

PopoverTriggerWithRef.displayName = 'PopoverTriggerWithRef';
