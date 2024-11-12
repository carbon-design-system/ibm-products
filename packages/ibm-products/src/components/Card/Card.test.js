/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Card } from '.';
import { pkg, carbon } from '../../settings';

const componentName = Card.displayName;
const blockClass = `${pkg.prefix}--card`;

describe(componentName, () => {
  it('renders', async () => {
    render(<Card />);
  });

  it('renders expressive with primary button', async () => {
    const { click } = userEvent;
    const onPrimaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      onPrimaryButtonClick,
    };
    render(<Card {...props} />);
    await act(() => click(screen.getByText(props.primaryButtonText)));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
  });

  it('Renders expressive card with action icons and ensures that each click is being called', async () => {
    const { click } = userEvent;
    const onPrimaryButtonClick = jest.fn();
    const onSecondaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      secondaryButtonText: 'Secondary',
      onPrimaryButtonClick,
      onSecondaryButtonClick,
    };
    render(<Card {...props} />);
    await act(() => click(screen.getByText(props.primaryButtonText)));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
    await act(() => click(screen.getByText(props.secondaryButtonText)));
    expect(onSecondaryButtonClick).toHaveBeenCalled();
  });

  it('renders expressive with action icons', async () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    const actionIcons = [
      {
        id: '1',
        onClick,
        icon: () => <div>withOnClick</div>,
        iconDescription: 'icon',
      },
      {
        id: '2',
        href: '#',
        icon: () => <div>withHref</div>,
        iconDescription: 'icon',
      },
    ];
    const props = {
      actionIcons,
    };
    render(<Card {...props} />);
    await act(() => click(screen.getByText('withOnClick')));
    expect(onClick).toHaveBeenCalled();
    expect(screen.getByText('withHref').closest('a')).toHaveAttribute(
      'href',
      '#'
    );
  });

  it('renders expressive with onClick', async () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    const props = {
      onClick,
    };
    const { container } = render(<Card {...props} />);
    await act(() => click(container.firstChild));
    expect(onClick).toHaveBeenCalled();
  });

  it('renders expressive with media', async () => {
    const mediaContent = 'media element';
    const pictogramContent = 'pictogram element';
    const props = {
      media: <p>{mediaContent}</p>,
      pictogram: () => <p>{pictogramContent}</p>,
    };
    render(<Card {...props} />);
    expect(screen.getByText(mediaContent)).toBeVisible();
    expect(screen.getByText(pictogramContent)).toBeVisible();
  });

  it('renders productive', async () => {
    const { click } = userEvent;
    const iconClick = jest.fn();
    const buttonClick = jest.fn();
    const props = {
      label: 'Label',
      productive: true,
      actionIcons: [
        {
          id: '1',
          icon: () => <p>withOnClick</p>,
          onClick: iconClick,
          iconDescription: 'description',
        },
        {
          id: '2',
          icon: () => <p>withHref</p>,
          href: '#',
          iconDescription: 'description',
        },
      ],
      primaryButtonText: 'Ghost button',
      onPrimaryButtonClick: buttonClick,
      actionsPlacement: 'bottom',
    };
    const { container, rerender } = render(<Card {...props} />);
    expect(screen.getByText(props.label)).toBeVisible();
    expect(
      container.querySelector(`.${blockClass}__footer .${blockClass}__actions`)
    ).toBeVisible();
    await act(() => click(screen.getByText('withOnClick')));
    expect(iconClick).toHaveBeenCalled();
    expect(screen.getByText('withHref').closest('a')).toHaveAttribute(
      'href',
      '#'
    );
    await act(() => click(screen.getByText(props.primaryButtonText)));
    expect(buttonClick).toHaveBeenCalled();
    rerender(<Card {...props} actionsPlacement="top" />);
    expect(
      container.querySelector(`.${blockClass}__header .${blockClass}__actions`)
    ).toBeVisible();
  });

  it('render productive with disabled buttons', async () => {
    const { click } = userEvent;
    const primaryButtonClick = jest.fn();
    const secondaryButtonClick = jest.fn();
    const props = {
      label: 'Label',
      productive: true,
      primaryButtonText: 'Ghost button',
      primaryButtonDisabled: true,
      onPrimaryButtonClick: primaryButtonClick,
      actionsPlacement: 'bottom',
      secondaryButtonText: 'Secondary button',
      secondaryButtonDisabled: true,
      onSecondaryButtonClick: secondaryButtonClick,
    };
    render(<Card {...props} />);
    const primaryButtonElement = screen.getByText(/Ghost button/i);
    const secondaryButtonElement = screen.getByText(/Secondary button/i);
    expect(primaryButtonElement).toHaveAttribute('disabled');
    expect(secondaryButtonElement).toHaveAttribute('disabled');
    await act(() => click(primaryButtonElement));
    expect(primaryButtonClick).toHaveBeenCalledTimes(0);
    await act(() => click(secondaryButtonElement));
    expect(secondaryButtonClick).toHaveBeenCalledTimes(0);
  });

  it('renders productive with overflow', async () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    const props = {
      overflowActions: [
        {
          id: '1',
          itemText: 'Edit',
          onClick,
        },
      ],
      overflowAriaLabel: 'Overflow menu',
      actionsPlacement: 'bottom',
    };
    const { container, rerender } = render(<Card {...props} />);
    expect(
      container.querySelector(`.${blockClass}__footer .${blockClass}__actions`)
    ).toBeVisible();
    await act(() =>
      click(container.querySelector(`.${carbon.prefix}--overflow-menu`))
    );
    await act(() => click(screen.getByText('Edit')));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} actionsPlacement="top" />);
    expect(
      container.querySelector(`.${blockClass}__header .${blockClass}__actions`)
    ).toBeVisible();
  });

  it('renders productive with click zones', async () => {
    const onClick = jest.fn();
    const { click } = userEvent;
    const props = {
      onClick,
      clickZone: 'one',
      title: 'Title',
      description: 'Description',
      primaryButtonText: 'Primary',
      productive: true,
      actionIcons: [],
      children: <p>body</p>,
    };
    const { rerender, container } = render(<Card {...props} />);
    expect(screen.getByText(props.title)).toBeVisible();
    expect(screen.getByText(props.description)).toBeVisible();
    await act(() =>
      click(container.querySelector(`.${blockClass}__clickable`))
    );
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} clickZone="two" />);
    await act(() =>
      click(container.querySelector(`.${blockClass}__clickable`))
    );
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} clickZone="three" />);
    await act(() =>
      click(container.querySelector(`.${blockClass}__clickable`))
    );
    expect(onClick).toHaveBeenCalled();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Card />);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    const { container } = render(<Card className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('adds additional properties to the containing node', async () => {
    render(<Card data-testid="test-id" />);
    screen.getByTestId('test-id');
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<Card ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
