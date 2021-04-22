/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { Card } from '.';
import { pkg } from '../../settings';

const { name } = Card;

describe(name, () => {
  test('renders', () => {
    render(<Card />);
  });

  test('expressive with primary button', () => {
    const onPrimaryButtonClick = jest.fn();
    const props = {
      primaryButtonText: 'Primary',
      onPrimaryButtonClick,
    };
    const { getByText } = render(<Card {...props} />);
    fireEvent.click(getByText(props.primaryButtonText));
    expect(onPrimaryButtonClick).toHaveBeenCalled();
  });

  test('expressive with both buttons', () => {
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

  test('expressive with action icons', () => {
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

  test('expressive with onClick', () => {
    const onClick = jest.fn();
    const props = {
      onClick,
    };
    const { container } = render(<Card {...props} />);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalled();
  });

  test('productive', () => {
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
    const { getByText } = render(<Card {...props} />);
    fireEvent.click(getByText('icon'));
    expect(iconClick).toHaveBeenCalled();
    fireEvent.click(getByText(props.primaryButtonText));
    expect(buttonClick).toHaveBeenCalled();
  });

  test('productive with overflow', () => {
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
    const { getByText, container } = render(<Card {...props} />);
    fireEvent.click(container.querySelector('.bx--overflow-menu'));
    fireEvent.click(getByText('Edit'));
    expect(onClick).toHaveBeenCalled();
  });

  test('productive with click zones', () => {
    const onClick = jest.fn();
    const props = {
      onClick,
      clickZone: 'one',
      title: 'Title',
      primaryButtonText: 'Primary',
      productive: true,
      actionIcons: [],
      children: <p>body</p>,
    };
    const { rerender, container } = render(<Card {...props} />);
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
