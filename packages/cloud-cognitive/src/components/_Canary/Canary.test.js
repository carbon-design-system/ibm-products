/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import uuidv4 from '../../global/js/utils/uuidv4';

import { Canary } from '.';

const componentName = Canary.displayName;

const replacedComponentName = `component-${uuidv4()}`;

describe(componentName, () => {
  // test('has no accessibility violations', async () => {
  //   const { container } = render(<Canary component={dummyContent} />);

  //   await expect(container).toBeAccessible(name);
  //   await expect(container).toHaveNoAxeViolations();
  // });

  it(`displays the replaced component name`, () => {
    const container = render(<Canary componentName={replacedComponentName} />);
    expect(container.getByText(replacedComponentName)).toBeInTheDocument();
  });
});
