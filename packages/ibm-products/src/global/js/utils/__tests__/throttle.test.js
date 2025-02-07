import { throttle } from '../throttle';

describe('throttle', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should throttle function as expected', () => {
    const scrollFn = jest.fn();
    const throttledScroll = throttle(scrollFn, 100);

    throttledScroll();
    throttledScroll();
    throttledScroll();
    throttledScroll();
    throttledScroll();
    jest.advanceTimersByTime(100);
    throttledScroll();
    throttledScroll();
    expect(scrollFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    throttledScroll();
    expect(scrollFn).toHaveBeenCalledTimes(2);
  });
});
