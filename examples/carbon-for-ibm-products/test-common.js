const { ResizeObserver } = window;
let mockError, mockWarn;

const beforeEach = () => {
  // The component instantiations that follow will generate a stack of
  // console errors and warnings about required props not provided or
  // conditions not met, and for the purposes of these tests we don't care.
  mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
  mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
  URL.createObjectURL = jest.fn(() => Promise.resolve('download-link'));
};

const afterEach = () => {
  mockError.mockRestore();
  mockWarn.mockRestore();
  jest.restoreAllMocks();
  window.ResizeObserver = ResizeObserver;
};

export const init = (_beforeEach, _afterEach) => {
  _beforeEach(beforeEach);
  _afterEach(afterEach);
};
