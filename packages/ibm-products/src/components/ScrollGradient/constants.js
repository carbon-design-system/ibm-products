export const ScrollDirection = { X: 'X', Y: 'Y' };

export const ScrollStates = {
  // No scrolling required because content fits within container.
  NONE: 'NONE',
  // Scroll position is a the start of the scrollable content.
  INITIAL: 'INITIAL',
  // Scroll position is neither at start or end of scrollable content.
  STARTED: 'STARTED',
  // Scroll position is a the end of the scrollable content.
  END: 'END',
};

// FUNCTIONS

export const getScrollState = (element, scrollDirection) => {
  switch (scrollDirection) {
    case ScrollDirection.X: {
      if (element.scrollWidth === element.clientWidth) {
        return ScrollStates.NONE;
      }
      if (element.scrollLeft === 0) {
        return ScrollStates.INITIAL;
      }
      if (element.scrollLeft + element.clientWidth === element.scrollWidth) {
        return ScrollStates.END;
      }
      return ScrollStates.STARTED;
    }

    case ScrollDirection.Y:
    default: {
      if (element.scrollHeight === element.clientHeight) {
        return ScrollStates.NONE;
      }
      if (element.scrollTop === 0) {
        return ScrollStates.INITIAL;
      }
      if (element.scrollTop + element.clientHeight === element.scrollHeight) {
        return ScrollStates.END;
      }
      return ScrollStates.STARTED;
    }
  }
};
