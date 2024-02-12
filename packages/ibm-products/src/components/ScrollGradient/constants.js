export const scrollDirection = { X: 'X', Y: 'Y' };

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
