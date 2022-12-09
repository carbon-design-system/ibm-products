/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { Example as AboutModalExample } from './AboutModal/src/Example/Example';

describe('All examples', () => {
  init(beforeEach, afterEach);

  it('successfully renders AboutModal example', () => {
    // const { container } = renderComponent();
    render(<AboutModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
});
