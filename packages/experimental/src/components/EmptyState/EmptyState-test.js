/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { EmptyState } from '.';

const { name } = EmptyState;

describe(name, () => {
  test('should render empty state header and call the action', () => {
    const { click } = fireEvent;
    const { fn } = jest;
    const onActionHandler = fn();

    const { getByText } = render(
      <EmptyState
        heading="Empty state heading"
        subtext="Empty state subtext"
        action={{
          text: 'Create new',
          type: 'primary',
          actionHandler: onActionHandler,
        }}
      />
    );

    click(getByText('Create new'));
    expect(onActionHandler).toBeCalled();
  });
});
