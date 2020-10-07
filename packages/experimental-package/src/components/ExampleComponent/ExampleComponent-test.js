/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ExampleComponent } from '.';

const {
  defaultProps: { primaryButtonLabel, secondaryButtonLabel },
  name,
} = ExampleComponent;

describe(name, () => {
  test('calls primary and secondary actions when buttons are clicked', () => {
    const { click } = fireEvent;
    const { fn } = jest;

    const primaryClickMock = fn();
    const secondaryClickMock = fn();

    const { getByText } = render(
      <ExampleComponent
        onPrimaryClick={primaryClickMock}
        onSecondaryClick={secondaryClickMock}
      />
    );

    click(getByText(primaryButtonLabel));
    expect(primaryClickMock).toBeCalled();

    click(getByText(secondaryButtonLabel));
    expect(secondaryClickMock).toBeCalled();
  });
});
