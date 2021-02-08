/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Card } from '.';

const { name } = Card;
const defaultProps = {
  label: 'Label',
  title: 'Title',
  onActionSubmit: () => {},
  children: <p>text</p>,
  mediaUrl: 'https://via.placeholder.com/400x300/000/fff',
  mediaAltText: 'alt text',
};

describe(name, () => {
  test('should render', async () => {
    render(<Card {...defaultProps} />);
  });
});
