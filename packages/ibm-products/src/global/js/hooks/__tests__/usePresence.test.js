/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { act } from 'react';
import { usePresence } from '../usePresence';
import { render, screen } from '@testing-library/react';

const content = 'Component content';
const defaultDuration = 1000; // specified in `usePresence.ts`
// eslint-disable-next-line react/prop-types
const TestComponent = ({ open }) => {
  const { shouldRender } = usePresence(open);
  return shouldRender ? <div>{content}</div> : null;
};

describe('usePresence', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should immediately render component', () => {
    render(<TestComponent open />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });
  it('should wait to unmount component to account for animation duration', () => {
    const { rerender, container } = render(<TestComponent open />);
    rerender(<TestComponent open={false} />);
    act(() => {
      jest.advanceTimersByTime(defaultDuration);
    });
    expect(container.firstChild).toBeNull();
  });
});
