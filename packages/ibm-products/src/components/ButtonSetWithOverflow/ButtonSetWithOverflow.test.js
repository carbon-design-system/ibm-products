/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ButtonSetWithOverflow } from '.';
import { Bee16 } from '@carbon/icons-react';
import { mockHTMLElement } from '../../global/js/utils/test-helper';

const buttons = (handleClick) =>
  [1, 2, 3].map((num) => ({
    renderIcon: !(num % 3) ? Bee16 : null,
    iconDescription: !(num % 3) ? 'Busy bee' : null,
    label: `Action ${num}`,
    key: `key-${num}`,
    kind: num === 1 ? 'primary' : num === 2 ? 'secondary' : 'danger',
    onClick: () => {
      handleClick(`Action ${num}`);
    },
  }));

import { pkg, carbon } from '../../settings';
const blockClass = `${pkg.prefix}--button-set-with-overflow`;

const buttonWidth = 200;

describe(ButtonSetWithOverflow.displayName, () => {
  const { ResizeObserver } = window;
  let mockElement;

  beforeEach(() => {
    mockElement = mockHTMLElement({
      offsetWidth: {
        get: function () {
          let width = 0;

          if (this.classList.contains(`${carbon.prefix}--btn`)) {
            width = buttonWidth;
          } else {
            width = window.innerWidth;
          }

          return width;
        },
      },
    });
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    mockElement.mockRestore();
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('Works with button shape array', () => {
    window.innerWidth = buttonWidth * 3.5;

    const myOnClick = jest.fn();

    render(
      <ButtonSetWithOverflow
        buttons={buttons(myOnClick)}
        buttonSetOverflowLabel="overflow label"
      />
    );

    const action1 = screen.getByText(/Action 1/, {
      selector: `.${blockClass}__button-container:not(.${blockClass}__button-container--hidden) .${carbon.prefix}--btn`,
    });
    screen.getByText(/Action 2/, {
      selector: `.${blockClass}__button-container:not(.${blockClass}__button-container--hidden) .${carbon.prefix}--btn`,
    });
    screen.getByText(/Action 3/, {
      selector: `.${blockClass}__button-container:not(.${blockClass}__button-container--hidden) .${carbon.prefix}--btn`,
    });

    userEvent.click(action1);
    expect(myOnClick).toBeCalled();
  });

  it('Renders as ComboButton when not enough space', () => {
    window.innerWidth = buttonWidth * 2.5;

    const myOnClick = jest.fn();
    const buttonMenuLabel = 'button menu label';

    render(
      <ButtonSetWithOverflow
        buttons={buttons(myOnClick)}
        buttonSetOverflowLabel={buttonMenuLabel}
      />
    );

    const action1 = screen.queryByText(/Action 1/, {
      selector: `.${blockClass}__button-container:not(.${blockClass}__button-container--hidden) .${carbon.prefix}--btn`,
    });
    expect(action1).toBeNull();

    const comboButton = screen.getByText(/button menu label/, {
      selector: `.${blockClass}__button-container--hidden+ .${carbon.prefix}--overflow-menu .${carbon.prefix}--btn`,
    });
    userEvent.click(comboButton);

    const action1a = screen.getByText(/Action 1/, {
      selector: `.${carbon.prefix}--overflow-menu-options__option-content`,
    });

    userEvent.click(action1a);
    expect(myOnClick).toBeCalled();
  });

  it('Applies right align class when requested', () => {
    window.innerWidth = buttonWidth * 3.5;
    const myOnClick = jest.fn();

    const { container } = render(
      <ButtonSetWithOverflow
        buttons={buttons(myOnClick)}
        rightAlign={true}
        buttonSetOverflowLabel="overflow label"
      />
    );

    expect(container.querySelector(`.${blockClass}--right`)).not.toBeNull();
  });
});
