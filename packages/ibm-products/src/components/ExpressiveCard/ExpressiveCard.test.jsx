/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { ExpressiveCard } from '.';

const componentName = ExpressiveCard.displayName;

describe(componentName, () => {
  it('renders', async () => {
    render(<ExpressiveCard />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ExpressiveCard />);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const { container } = render(<ExpressiveCard className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  const dataTestId = 'dataTestId';

  it('adds additional properties to the containing node', async () => {
    render(<ExpressiveCard data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<ExpressiveCard ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(<ExpressiveCard data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('disables primary and secondary buttons when primaryButtonDisabled and secondaryButtonDisabled are true', async () => {
    const user = userEvent.setup();
    const onPrimaryButtonClick = jest.fn();
    const onSecondaryButtonClick = jest.fn();

    render(
      <ExpressiveCard
        primaryButtonText="Primary"
        primaryButtonDisabled
        onPrimaryButtonClick={onPrimaryButtonClick}
        secondaryButtonText="Secondary"
        secondaryButtonDisabled
        onSecondaryButtonClick={onSecondaryButtonClick}
      />
    );

    const primaryButton = screen.getByRole('button', { name: 'Primary' });
    const secondaryButton = screen.getByRole('button', { name: 'Secondary' });

    expect(primaryButton).toBeDisabled();
    expect(secondaryButton).toBeDisabled();

    await user.click(primaryButton);
    await user.click(secondaryButton);

    expect(onPrimaryButtonClick).not.toHaveBeenCalled();
    expect(onSecondaryButtonClick).not.toHaveBeenCalled();
  });
});
