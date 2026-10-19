/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import { useWindowResize } from '../useWindowResize';
import { render, screen, fireEvent, act } from '@testing-library/react';

const TestComponent = (props) => {
  const { throttleInterval } = props;
  const [height, setHeight] = useState(false);
  useWindowResize(
    ({ current }) => {
      const { innerHeight } = current;
      setHeight(innerHeight);
    },
    [],
    throttleInterval
  );
  return <div>{height}</div>;
};

describe('useWindowsResize', () => {
  it('works by default', async () => {
    jest.useFakeTimers();
    render(<TestComponent />);
    // setTimeout(doGetWindowSize, 0) defers the initial measurement past the
    // commit phase (React 19 fix). Flush timers inside act before asserting.
    await act(async () => {
      jest.runAllTimers();
    });
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    jest.useRealTimers();
    screen.getByText('768');
  });

  it('works with throttle', async () => {
    jest.useFakeTimers();
    render(<TestComponent throttleInterval={10} />);
    // Flush the initial setTimeout(doGetWindowSize, 0) and the throttle timer
    await act(async () => {
      jest.runAllTimers();
    });
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    window.innerWidth = 505;
    fireEvent(window, new Event('resize'));
    await act(async () => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
    screen.getByText('768');
  });
});
