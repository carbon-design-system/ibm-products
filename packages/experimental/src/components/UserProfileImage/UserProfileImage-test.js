/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

import { ExampleComponent } from '.';

const {
  defaultProps: { primaryButtonLabel, secondaryButtonLabel },
  name,
} = ExampleComponent;

jest.setTimeout(15000);

describe(name, () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(<ExampleComponent />);

    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  test('calls primary and secondary actions when buttons are clicked', () => {
    const { fn } = jest;

    const primaryClickMock = fn();
    const secondaryClickMock = fn();

    const { getByText } = render(
      <ExampleComponent
        onPrimaryClick={primaryClickMock}
        onSecondaryClick={secondaryClickMock}
      />
    );

    userEvent.click(getByText(primaryButtonLabel));
    expect(primaryClickMock).toBeCalled();

    userEvent.click(getByText(secondaryButtonLabel));
    expect(secondaryClickMock).toBeCalled();
  });
});
