/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { APIKeyDownloader } from '.';

const { name } = APIKeyDownloader;
const defaultProps = {
  apiKey: '123-456-789',
  bodyText: 'API key created',
  fileName: 'file',
  linkText: 'download',
};

global.URL.createObjectURL = jest.fn(() => Promise.resolve('download-link'));

describe(name, () => {
  test('renders with minimal setup', async () => {
    const { rerender, getByText } = render(
      <APIKeyDownloader {...defaultProps} />
    );
    const link = getByText('download');

    await waitFor(() => {
      expect(link).toHaveProperty('download');
    });
    expect(link).toHaveProperty('download', 'file.json');
    expect(link).toHaveProperty('href', 'http://localhost/download-link');

    rerender(<APIKeyDownloader {...defaultProps} fileName="" />);
    await waitFor(() => {
      expect(link).toHaveProperty('download');
    });
    expect(link).toHaveProperty('download', 'apikey.json');
    expect(link).toHaveProperty('href', 'http://localhost/download-link');
  });
});
