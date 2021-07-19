/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Card } from '.';
import { pkg } from '../../settings';

const { name } = Card;
const blockClass = `${pkg.prefix}--card`;

describe(name, () => {
  it('renders', () => {
    render(<Card />);
  });

  it('renders expressive with primary button', () => {
    const { click } = userEvent;
    const onPrimaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      onPrimaryButtonClick,
    };
    const { getByText } = render(<Card {...props} />);
    click(getByText(props.primaryButtonText));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
  });

  it('renders expressive with both buttons', () => {
    const { click } = userEvent;
    const onPrimaryButtonClick = jest.fn();
    const onSecondaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      secondaryButtonText: 'Secondary',
      onPrimaryButtonClick,
      onSecondaryButtonClick,
    };
    const { getByText } = render(<Card {...props} />);
    click(getByText(props.primaryButtonText));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
    click(getByText(props.secondaryButtonText));
    expect(onSecondaryButtonClick).toHaveBeenCalled();
  });

  it('renders expressive with action icons', () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    const actionIcons = [
      {
        id: '1',
        onClick,
        icon: () => <div>icon</div>,
        iconDescription: 'icon',
      },
    ];
    const props = {
      actionIcons,
    };
    const { getByText } = render(<Card {...props} />);
    click(getByText('icon'));
    expect(onClick).toHaveBeenCalled();
  });

  it('renders expressive with onClick', () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    const props = {
      onClick,
    };
    const { container } = render(<Card {...props} />);
    click(container.firstChild);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders expressive with media', () => {
    const mediaContent = 'media element';
    const pictogramContent = 'pictogram element';
    const props = {
      media: <p>{mediaContent}</p>,
      pictogram: () => <p>{pictogramContent}</p>,
    };
    const { getByText } = render(<Card {...props} />);
    expect(getByText(mediaContent)).toBeVisible();
    expect(getByText(pictogramContent)).toBeVisible();
  });

  it('renders productive', () => {
    const { click } = userEvent;
    const iconClick = jest.fn();
    const buttonClick = jest.fn();
    const props = {
      label: 'Label',
      productive: true,
      actionIcons: [
        {
          id: '1',
          icon: () => <p>icon</p>,
          onClick: iconClick,
          iconDescription: 'description',
        },
      ],
      primaryButtonText: 'Ghost button',
      onPrimaryButtonClick: buttonClick,
    };
    const { container, getByText, rerender } = render(<Card {...props} />);
    expect(getByText(props.label)).toBeVisible();
    expect(container.querySelector(`.${blockClass}__actions-top`)).toBeNull();
    click(getByText('icon'));
    expect(iconClick).toHaveBeenCalled();
    click(getByText(props.primaryButtonText));
    expect(buttonClick).toHaveBeenCalled();
    rerender(<Card {...props} actionsPlacement="top" />);
  });

  it('renders productive with overflow', () => {
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
    };
    const { getByText, container, rerender } = render(<Card {...props} />);
    click(container.querySelector('.bx--overflow-menu'));
    click(getByText('Edit'));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} actionsPlacement="top" />);
  });

  it('renders productive with click zones', () => {
    const onClick = jest.fn();
    const { click } = userEvent;
    const props = {
      onClick,
      clickZone: 'one',
      title: 'Title',
      caption: 'Caption',
      primaryButtonText: 'Primary',
      productive: true,
      actionIcons: [],
      children: <p>body</p>,
    };
    const { rerender, getByText, container } = render(<Card {...props} />);
    expect(getByText(props.title)).toBeVisible();
    expect(getByText(props.caption)).toBeVisible();
    click(container.querySelector(`.${blockClass}__clickable`));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} clickZone="two" />);
    click(container.querySelector(`.${blockClass}__clickable`));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} clickZone="three" />);
    click(container.querySelector(`.${blockClass}__clickable`));
    expect(onClick).toHaveBeenCalled();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<Card className="test-class" />);
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('adds additional properties to the containing node', () => {
    render(<Card data-test-id="test-id" />);
    screen.getByTestId('test-id');
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<Card ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
