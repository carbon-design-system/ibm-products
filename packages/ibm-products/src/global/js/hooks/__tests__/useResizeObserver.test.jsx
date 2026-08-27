/**
 * Copyright IBM Corp. 2023, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import { render, screen, act } from '@testing-library/react';
import { useResizeObserver } from '../useResizeObserver';

const ResizeTest = ({ onResize = null }) => {
  const ref = useRef(null);
  const { width, height } = useResizeObserver(ref, onResize);
  return (
    <div ref={ref} data-testid="observed-element">
      width: {width}, height: {height}
    </div>
  );
};

const defaultSize = 100;
describe('useResizeObserver', () => {
  let savedObserverCb;

  beforeEach(() => {
    // Run requestAnimationFrame callbacks synchronously so that the
    // ResizeObserver → rAF → queueMicrotask → setState chain completes
    // inside act() without leaking updates (React 19 fix).
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });

    window.ResizeObserver = jest.fn().mockImplementation((cb) => {
      savedObserverCb = cb;
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      };
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  // Triggers resize and flushes the rAF + microtask chain inside act
  const triggerResize = async (
    element,
    width = defaultSize,
    height = defaultSize
  ) =>
    act(async () => {
      savedObserverCb([{ target: element, contentRect: { width, height } }]);
    });

  it('returns the initial size of the component', async () => {
    render(<ResizeTest />);
    // queueMicrotask defers the initial setWidth/setHeight calls past React's
    // passive-effects flush (React 19 fix). Flush microtasks before asserting.
    await act(async () => {});
    screen.getByText('width: 0, height: 0');
  });

  it('returns the updated sizes from hook upon resizing', async () => {
    render(<ResizeTest />);
    await act(async () => {});
    const element = screen.getByTestId('observed-element');
    screen.getByText('width: 0, height: 0');

    await triggerResize(element);
    screen.getByText(`width: ${defaultSize}, height: ${defaultSize}`);

    await triggerResize(element, defaultSize * 2, defaultSize * 3);
    screen.getByText(`width: ${defaultSize * 2}, height: ${defaultSize * 3}`);
  });

  it('calls the provided onResize function', async () => {
    const resizeFn = jest.fn();
    render(<ResizeTest onResize={resizeFn} />);
    // Flush the initial queueMicrotask from getInitialSize before triggering
    // resize events, so the initial state settles to 0,0 first.
    await act(async () => {});
    const element = screen.getByTestId('observed-element');

    await triggerResize(element, defaultSize * 2, defaultSize * 3);
    screen.getByText(`width: ${defaultSize * 2}, height: ${defaultSize * 3}`);
    expect(resizeFn).toHaveBeenCalledTimes(1);

    await triggerResize(element, defaultSize * 3, defaultSize * 4);
    screen.getByText(`width: ${defaultSize * 3}, height: ${defaultSize * 4}`);
    expect(resizeFn).toHaveBeenCalledTimes(2);

    await triggerResize(element, defaultSize, defaultSize);
    screen.getByText(`width: ${defaultSize}, height: ${defaultSize}`);
    expect(resizeFn).toHaveBeenCalledTimes(3);
  });
});
