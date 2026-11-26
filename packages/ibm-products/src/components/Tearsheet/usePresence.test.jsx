/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { act, renderHook } from '@testing-library/react';
import { pkg } from '../../settings';
import { usePresence } from './usePresence';

const cssAnimationDescriptor = Object.getOwnPropertyDescriptor(
  globalThis,
  'CSSAnimation'
);

const createAnimation = (animationName = `${pkg.prefix}--presence-exit`) => {
  let resolve;
  let reject;
  const finished = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  const animation = Object.assign(Object.create(CSSAnimation.prototype), {
    animationName,
    finished,
  });
  return { animation, resolve, reject };
};

const setup = (animations) => {
  const ref = {
    current: { getAnimations: jest.fn(() => animations) },
  };
  return {
    ref,
    ...renderHook(({ open }) => usePresence(ref, open), {
      initialProps: { open: true },
    }),
  };
};

describe('Tearsheet usePresence', () => {
  beforeAll(() => {
    Object.defineProperty(globalThis, 'CSSAnimation', {
      configurable: true,
      value: class {},
    });
  });

  afterAll(() => {
    if (cssAnimationDescriptor) {
      Object.defineProperty(globalThis, 'CSSAnimation', cssAnimationDescriptor);
    } else {
      delete globalThis.CSSAnimation;
    }
  });

  it('finishes immediately when there are no exit animations', () => {
    const { result, rerender } = setup([]);
    rerender({ open: false });
    expect(result.current.isPresent).toBe(false);
  });

  it('waits for all matching animations to finish', async () => {
    const first = createAnimation();
    const second = createAnimation();
    const unrelated = createAnimation('other-animation');
    const { result, rerender } = setup([
      first.animation,
      second.animation,
      unrelated.animation,
    ]);
    rerender({ open: false });

    await act(async () => first.resolve());
    expect(result.current.isPresent).toBe(true);
    await act(async () => second.resolve());
    expect(result.current.isPresent).toBe(false);
  });

  it('handles cancellation without ending other exit animations early', async () => {
    const first = createAnimation();
    const second = createAnimation();
    const { result, rerender } = setup([first.animation, second.animation]);
    rerender({ open: false });

    await act(async () =>
      first.reject(new DOMException('Cancelled', 'AbortError'))
    );
    expect(result.current.isPresent).toBe(true);
    await act(async () => second.resolve());
    expect(result.current.isPresent).toBe(false);
  });

  it('does not let a cancelled previous exit finish a new exit', async () => {
    const previous = createAnimation();
    const current = createAnimation();
    const { ref, result, rerender } = setup([previous.animation]);
    rerender({ open: false });
    rerender({ open: true });
    ref.current.getAnimations.mockReturnValue([current.animation]);
    rerender({ open: false });

    await act(async () =>
      previous.reject(new DOMException('Cancelled', 'AbortError'))
    );
    expect(result.current.isPresent).toBe(true);
    expect(result.current.isExiting).toBe(true);
    await act(async () => current.resolve());
    expect(result.current.isPresent).toBe(false);
  });

  it('handles cancellation after unmount', async () => {
    const exit = createAnimation();
    const { rerender, unmount } = setup([exit.animation]);
    rerender({ open: false });
    unmount();

    await act(async () =>
      exit.reject(new DOMException('Cancelled', 'AbortError'))
    );
  });
});
