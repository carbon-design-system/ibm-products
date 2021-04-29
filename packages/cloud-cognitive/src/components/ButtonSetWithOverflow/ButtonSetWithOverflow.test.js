/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { ButtonSetWithOverflow } from '.';
import { Bee16 } from '@carbon/icons-react';
import { mockHTMLElement } from '../../global/js/utils/test-helper';
import { Button } from 'carbon-components-react';

const buttons = (handleClick) =>
  [1, 2, 3].map((num) => ({
    renderIcon: !(num % 3) ? Bee16 : null,
    label: `Action ${num}`,
    onClick: () => {
      handleClick(`Action ${num}`);
    },
  }));

import { pkg, carbon } from '../../settings';
const blockClass = `${pkg.prefix}--button-set-with-overflow`;

const buttonWidth = 200;

describe(ButtonSetWithOverflow.displayName, () => {
  let mockElement;

  beforeEach(() => {
    mockElement = mockHTMLElement({
      offsetWidth: {
        get: function () {
          let width = 0;

          if (this.classList.contains('bx--btn')) {
            width = buttonWidth;
          } else {
            width = window.innerWidth;
          }

          return width;
        },
      },
    });
  });

  afterEach(() => {
    mockElement.mockRestore();
  });

  it('Works with deprecated children', () => {
    window.innerWidth = buttonWidth * 3.5;

    const myOnClick = jest.fn();
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <ButtonSetWithOverflow>
        {buttons(myOnClick).map(({ label, ...rest }, index) => (
          <Button key={index} {...rest}>
            {label}
          </Button>
        ))}
      </ButtonSetWithOverflow>
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

    expect(warn).toBeCalledWith(
      "The prop 'children' of 'ButtonSetWithOverflow' has been deprecated and will soon be removed. See documentation on the 'buttons' property."
    );

    userEvent.click(action1);
    expect(myOnClick).toBeCalled();

    warn.mockRestore(); // Remove mock
  });

  it('Works with button shape array', () => {
    window.innerWidth = buttonWidth * 3.5;

    const myOnClick = jest.fn();
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<ButtonSetWithOverflow buttons={buttons(myOnClick)} />);

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

    warn.mockRestore(); // Remove mock
  });

  it('Renders as ComboButton when not enough space', () => {
    window.innerWidth = buttonWidth * 2.5;

    const myOnClick = jest.fn();
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const comboLabel = 'combo label';

    render(
      <ButtonSetWithOverflow
        buttons={buttons(myOnClick)}
        pageActionsLabel={comboLabel}
      />
    );

    const action1 = screen.queryByText(/Action 1/, {
      selector: `.${blockClass}__button-container:not(.${blockClass}__button-container--hidden) .${carbon.prefix}--btn`,
    });
    expect(action1).toBeNull();

    const comboButton = screen.getByText(/combo label/, {
      selector: `.${blockClass}__button-container--hidden+ .${carbon.prefix}--overflow-menu .${carbon.prefix}--btn`,
    });
    userEvent.click(comboButton);

    const action1a = screen.getByText(/Action 1/, {
      selector: `.${carbon.prefix}--overflow-menu-options__option-content`,
    });

    userEvent.click(action1a);
    expect(myOnClick).toBeCalled();

    warn.mockRestore(); // Remove mock
  });
});
