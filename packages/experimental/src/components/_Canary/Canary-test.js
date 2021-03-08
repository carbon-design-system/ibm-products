/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { Canary } from '.';

const { name } = Canary;

describe(name, () => {
  const dummyContent = 'a component name';

  // test('has no accessibility violations', async () => {
  //   const { container } = render(<Canary component={dummyContent} />);

  //   await expect(container).toBeAccessible(name);
  //   await expect(container).toHaveNoAxeViolations();
  // });

  it(`adds content for the ${name}`, () => {
    const wrapper = render(<Canary component={dummyContent} />);
    expect(wrapper.getByText(dummyContent)).toBeInTheDocument();
  });
});
