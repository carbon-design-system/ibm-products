/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ComboButton } from '..';
import { BasicHeader } from './BasicHeader';

describe(ComboButton.name, () => {
  const renderComponent = (args) => render(<BasicHeader {...args} />);

  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders the header title without breadcrumbs', async () => {
    renderComponent({ title: 'Page title' });

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Page title');

    expect(
      screen.queryByRole('navigation', { name: 'Breadcrumb' })
    ).not.toBeInTheDocument();
  });

  it('renders the header breadcrumbs without title', async () => {
    renderComponent({
      breadcrumbs: [
        { key: '0', href: '/', label: 'Home page' },
        { key: '1', href: '/', label: 'Application name' },
      ],
    });

    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'Home page' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Application name' })
    ).toBeInTheDocument();

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders the header title and breadcrumbs', async () => {
    renderComponent({
      title: 'Page title',
      breadcrumbs: [
        { key: '0', href: '/', label: 'Home page' },
        { key: '1', href: '/', label: 'Application name' },
      ],
    });

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Page title');

    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'Home page' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Application name' })
    ).toBeInTheDocument();
  });

  it('throws an error if no title or breadcrumbs is provided', async () => {
    renderComponent();

    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][0]).toContain(
      'Warning: You have tried using a BasicHeader component without specifying a title nor breadcrumbs props'
    );
  });
});
