/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { Card } from '.';
import { pkg } from '../../settings';

const { name } = Card;

describe(name, () => {
  it('renders', () => {
    render(<Card />);
  });

  it('expressive with primary button', () => {
    const onPrimaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      onPrimaryButtonClick,
    };
    const { getByText } = render(<Card {...props} />);
    fireEvent.click(getByText(props.primaryButtonText));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
  });

  it('expressive with both buttons', () => {
    const onPrimaryButtonClick = jest.fn();
    const onSecondaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      secondaryButtonText: 'Secondary',
      onPrimaryButtonClick,
      onSecondaryButtonClick,
    };
    const { getByText } = render(<Card {...props} />);
    fireEvent.click(getByText(props.primaryButtonText));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
    fireEvent.click(getByText(props.secondaryButtonText));
    expect(onSecondaryButtonClick).toHaveBeenCalled();
  });

  it('expressive with action icons', () => {
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
    fireEvent.click(getByText('icon'));
    expect(onClick).toHaveBeenCalled();
  });

  it('expressive with onClick', () => {
    const onClick = jest.fn();
    const props = {
      onClick,
    };
    const { container } = render(<Card {...props} />);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalled();
  });

  it('expressive with media', () => {
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

  it('productive', () => {
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
    expect(
      container.querySelector(`.${pkg.prefix}-card-actions--top`)
    ).toBeNull();
    fireEvent.click(getByText('icon'));
    expect(iconClick).toHaveBeenCalled();
    fireEvent.click(getByText(props.primaryButtonText));
    expect(buttonClick).toHaveBeenCalled();
    rerender(<Card {...props} actionIconsPosition="top" />);
    expect(
      container.querySelector(`.${pkg.prefix}-card-actions--top`)
    ).toBeVisible();
  });

  it('productive with overflow', () => {
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
    fireEvent.click(container.querySelector('.bx--overflow-menu'));
    fireEvent.click(getByText('Edit'));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} actionIconsPosition="top" />);
  });

  it('productive with click zones', () => {
    const onClick = jest.fn();
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
    fireEvent.click(container.querySelector(`.${pkg.prefix}-card--clickable`));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} clickZone="two" />);
    fireEvent.click(container.querySelector(`.${pkg.prefix}-card--clickable`));
    expect(onClick).toHaveBeenCalled();
    rerender(<Card {...props} clickZone="three" />);
    fireEvent.click(container.querySelector(`.${pkg.prefix}-card--clickable`));
    expect(onClick).toHaveBeenCalled();
  });
});
