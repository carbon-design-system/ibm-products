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
  const { click } = fireEvent;
  const { fn } = jest;

  test('does not call primary and secondary actions if not provided', () => {
    const onPrimaryClick = fn();
    const onSecondaryClick = fn();

    const { getByText } = render(<ExampleComponent />);

    click(getByText(primaryButtonLabel));
    expect(onPrimaryClick).not.toHaveBeenCalled();

    click(getByText(secondaryButtonLabel));
    expect(onSecondaryClick).not.toHaveBeenCalled();
  });

  test('calls primary and secondary actions when buttons are clicked', () => {
    const onPrimaryClick = fn();
    const onSecondaryClick = fn();

    const { getByText } = render(
      <ExampleComponent
        onPrimaryClick={onPrimaryClick}
        onSecondaryClick={onSecondaryClick}
      />
    );

    click(getByText(primaryButtonLabel));
    expect(onPrimaryClick).toHaveBeenCalled();

    click(getByText(secondaryButtonLabel));
    expect(onSecondaryClick).toHaveBeenCalled();
  });
});
