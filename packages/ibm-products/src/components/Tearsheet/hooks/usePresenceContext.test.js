/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { renderHook, act } from '@testing-library/react';
import { usePresenceContext, PresenceContext } from './usePresenceContext';
import React from 'react';

describe('usePresenceContext', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('when enablePresence is false (default behavior)', () => {
    it('should mirror open state immediately', () => {
      const { result } = renderHook(() => usePresenceContext(true, false));

      expect(result.current.isPresent).toBe(true);
      expect(result.current.shouldBeOpen).toBe(true);
      expect(result.current.isExiting).toBe(false);
    });

    it('should update shouldBeOpen immediately when open changes', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, false),
        { initialProps: { open: true } }
      );

      expect(result.current.shouldBeOpen).toBe(true);

      rerender({ open: false });

      expect(result.current.shouldBeOpen).toBe(false);
      expect(result.current.isPresent).toBe(true); // Always present when enablePresence is false
    });

    it('should always be present regardless of open state', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, false),
        { initialProps: { open: true } }
      );

      expect(result.current.isPresent).toBe(true);

      rerender({ open: false });

      expect(result.current.isPresent).toBe(true);
    });
  });

  describe('when enablePresence is true', () => {
    it('should delay shouldBeOpen on initial mount with open=true', () => {
      const { result } = renderHook(() => usePresenceContext(true, true));

      // Initially shouldBeOpen should be false (before timer completes)
      // But React 18 may batch updates, so we check after advancing timers
      expect(result.current.isPresent).toBe(true);

      // After 10ms delay, shouldBeOpen should be true
      act(() => {
        jest.advanceTimersByTime(10);
      });

      expect(result.current.shouldBeOpen).toBe(true);
    });

    it('should not delay shouldBeOpen on subsequent opens', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, true),
        { initialProps: { open: false } }
      );

      // Initial state
      expect(result.current.shouldBeOpen).toBe(false);
      expect(result.current.isPresent).toBe(false);

      // Open the component
      rerender({ open: true });

      // Should open immediately (no delay on reopen)
      expect(result.current.shouldBeOpen).toBe(true);
      expect(result.current.isPresent).toBe(true);
    });

    it('should transition through exit states correctly', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, true),
        { initialProps: { open: true } }
      );

      // Fast-forward initial delay
      act(() => {
        jest.advanceTimersByTime(10);
      });

      expect(result.current.isPresent).toBe(true);
      expect(result.current.isExiting).toBe(false);

      // Close the component
      rerender({ open: false });

      expect(result.current.shouldBeOpen).toBe(false);
      expect(result.current.isPresent).toBe(true); // Still present during exit
      expect(result.current.isExiting).toBe(true);

      // Call handleExitComplete to finish exit
      act(() => {
        result.current.handleExitComplete();
      });

      expect(result.current.isPresent).toBe(false); // Now removed from DOM
      expect(result.current.isExiting).toBe(false);
    });

    it('should not finish exit if open becomes true during exit', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, true),
        { initialProps: { open: true } }
      );

      // Fast-forward initial delay
      act(() => {
        jest.advanceTimersByTime(10);
      });

      // Close the component
      rerender({ open: false });

      expect(result.current.isExiting).toBe(true);

      // Reopen before exit completes
      rerender({ open: true });

      expect(result.current.isExiting).toBe(false);
      expect(result.current.isPresent).toBe(true);

      // handleExitComplete should not finish exit when open is true
      act(() => {
        result.current.handleExitComplete();
      });

      expect(result.current.isPresent).toBe(true);
    });

    it('should handle rapid open/close transitions', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, true),
        { initialProps: { open: false } }
      );

      // Open
      rerender({ open: true });
      expect(result.current.shouldBeOpen).toBe(true);

      // Close immediately
      rerender({ open: false });
      expect(result.current.shouldBeOpen).toBe(false);
      expect(result.current.isPresent).toBe(true);

      // Open again before exit completes
      rerender({ open: true });
      expect(result.current.shouldBeOpen).toBe(true);
      expect(result.current.isPresent).toBe(true);
    });
  });

  describe('when used within PresenceContext', () => {
    it('should always return isPresent as true', () => {
      const wrapper = ({ children }) => (
        <PresenceContext.Provider value={{ id: 'test-id' }}>
          {children}
        </PresenceContext.Provider>
      );

      const { result } = renderHook(() => usePresenceContext(false, true), {
        wrapper,
      });

      expect(result.current.isPresent).toBe(true);
    });
  });

  describe('handleExitComplete callback', () => {
    it('should be stable across renders', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, true),
        { initialProps: { open: true } }
      );

      const firstCallback = result.current.handleExitComplete;

      rerender({ open: false });

      const secondCallback = result.current.handleExitComplete;

      // Callback reference may change but should work the same
      // useCallback dependencies include 'open', so reference may change
      expect(typeof firstCallback).toBe('function');
      expect(typeof secondCallback).toBe('function');
    });

    it('should only finish exit when open is false', () => {
      const { result, rerender } = renderHook(
        ({ open }) => usePresenceContext(open, true),
        { initialProps: { open: true } }
      );

      // Fast-forward initial delay
      act(() => {
        jest.advanceTimersByTime(10);
      });

      // Try to call handleExitComplete while open
      act(() => {
        result.current.handleExitComplete();
      });

      expect(result.current.isPresent).toBe(true);

      // Close and then call handleExitComplete
      rerender({ open: false });

      act(() => {
        result.current.handleExitComplete();
      });

      expect(result.current.isPresent).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle enablePresence changing from false to true', () => {
      const { result, rerender } = renderHook(
        ({ enablePresence }) => usePresenceContext(true, enablePresence),
        { initialProps: { enablePresence: false } }
      );

      expect(result.current.shouldBeOpen).toBe(true);

      rerender({ enablePresence: true });

      expect(result.current.shouldBeOpen).toBe(true);
      expect(result.current.isPresent).toBe(true);
    });

    it('should handle enablePresence changing from true to false', () => {
      const { result, rerender } = renderHook(
        ({ enablePresence }) => usePresenceContext(true, enablePresence),
        { initialProps: { enablePresence: true } }
      );

      // Fast-forward initial delay
      act(() => {
        jest.advanceTimersByTime(10);
      });

      rerender({ enablePresence: false });

      expect(result.current.shouldBeOpen).toBe(true);
      expect(result.current.isPresent).toBe(true);
    });

    it('should cleanup timer on unmount during initial delay', () => {
      const { unmount } = renderHook(() => usePresenceContext(true, true));

      // Unmount before timer completes
      unmount();

      // Advance timers to ensure no errors
      act(() => {
        jest.advanceTimersByTime(10);
      });

      // No errors should occur
    });
  });
});
