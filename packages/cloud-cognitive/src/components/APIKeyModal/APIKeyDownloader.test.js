/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { APIKeyDownloader } from './APIKeyDownloader';

const componentName = APIKeyDownloader.name;
const defaultProps = {
  apiKey: '123-456-789',
  body: 'API key created',
  fileName: 'file',
  fileType: 'json',
  linkText: 'download',
};

URL.createObjectURL = jest.fn(() => Promise.resolve('download-link'));

describe(name, () => {
  it('has json file download', async () => {
    const { getByText } = render(<APIKeyDownloader {...defaultProps} />);
    const link = getByText(defaultProps.linkText);
    await waitFor(() => {
      expect(link).toHaveProperty('download');
    });
    getByText(defaultProps.body);
    expect(link).toHaveProperty('download', 'file.json');
    expect(link).toHaveProperty('href', 'http://localhost/download-link');
  });

  it('has json file download', async () => {
    const props = {
      ...defaultProps,
      fileType: 'txt',
    };
    const { getByText } = render(<APIKeyDownloader {...props} />);
    const link = getByText(props.linkText);

    await waitFor(() => {
      expect(link).toHaveProperty('download');
    });
    expect(link).toHaveProperty('download', 'file.txt');
    expect(link).toHaveProperty('href', 'http://localhost/download-link');
  });

  /**
   * even though fileName is marked isRequired it's still possible to pass an empty string and not trigger a console warning
   * to avoid any issues with trying to download the file the code still checks for this and use
   * a default file name if an empty string or null is found
   */
  it('adds default file name when empty string is passed', async () => {
    const props = {
      ...defaultProps,
      fileName: '',
    };
    const { getByText } = render(<APIKeyDownloader {...props} />);
    const link = getByText('download');

    await waitFor(() => {
      expect(link).toHaveProperty('download');
    });
    expect(link).toHaveProperty('download', 'apikey.json');
    expect(link).toHaveProperty('href', 'http://localhost/download-link');
  });

  xit('has no accessibility violations', async () => {
    const { getByText, container } = render(
      <APIKeyDownloader {...defaultProps} />
    );
    await waitFor(() => getByText('download'));
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });
});
