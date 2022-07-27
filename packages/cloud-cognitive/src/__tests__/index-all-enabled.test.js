/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { WebTerminalProvider } from '../index';

import { pkg } from '../settings';

import * as components from '..';

const canaryClass = `${pkg.prefix}--canary`;
const name = 'JS export checks';

pkg._silenceWarnings(true);
pkg.setAllComponents(true);

describe(name, () => {
  const { ResizeObserver } = window;
  let mockError, mockWarn;

  beforeEach(() => {
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
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  afterEach(() => {
    mockError.mockRestore();
    mockWarn.mockRestore();
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      const TestComponent = components[key];

      it(`Does not render a canary for "${key}" if package flags set to enable`, () => {
        const { container } = render(
          <WebTerminalProvider>
            <TestComponent />
          </WebTerminalProvider>
        );
        expect(container.querySelector(`.${canaryClass}`)).toBeNull();
      });
    }
  }
});
