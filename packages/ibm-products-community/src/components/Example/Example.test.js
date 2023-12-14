import React from 'react';
import { render } from '@testing-library/react';
import { Example } from '.';

const componentName = Example.displayName;

describe(componentName, () => {
  it('renders', async () => {
    render(<Example />);
  });
});
