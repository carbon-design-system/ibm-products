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
  let mockError, mockWarn;

  beforeEach(() => {
    // The component instantiations that follow will generate a stack of
    // console errors and warnings about required props not provided or
    // conditions not met, and for the purposes of these tests we don't care.
    mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
    mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    mockError.mockRestore();
    mockWarn.mockRestore();
    jest.restoreAllMocks();
  });

  for (const key in components) {
    if (key.charAt(0) === key.charAt(0).toUpperCase()) {
      it(`Does not render a canary for "${key}" if package flags set to enable`, async () => {
        const TestComponent = components[key];
        let elementContainer;

        /** Wraps the test component with the web terminal provider if the test component
            starts with 'WebTerminal' */
        if (key.startsWith('WebTerminal')) {
          const { container } = render(
            <WebTerminalProvider>
              <TestComponent />
            </WebTerminalProvider>
          );
          elementContainer = container;
        } else {
          const { container } = render(<TestComponent />);
          elementContainer = container;
        }

        expect(elementContainer.querySelector(`.${canaryClass}`)).toBeNull();
      });
    }
  }
});
