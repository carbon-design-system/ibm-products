/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { Copy20 } from '@carbon/icons-react';
import { TextInput } from 'carbon-components-react';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { SidePanel } from '.';

const blockClass = `${pkg.prefix}--side-panel`;
const actionSetBlockClass = `${pkg.prefix}--action-set`;
const sizes = ['xs', 'sm', 'md', 'lg', 'max'];

const dataTestId = uuidv4();

const onRequestCloseFn = jest.fn();
const renderSidePanel = ({ ...rest }, children) =>
  render(
    <SidePanel
      {...{
        open: true,
        onRequestClose: onRequestCloseFn,
        ...rest,
      }}>
      {children}
    </SidePanel>
  );

describe('SidePanel', () => {
  it('renders the side panel', () => {
    renderSidePanel(
      {
        titleText: 'Test side panel',
      },
      'content'
    );
    expect(screen.queryAllByText(/Test side panel/i)).toBeTruthy();
  });

  it('should render a side panel with an overlay', () => {
    const { container } = renderSidePanel(
      {
        includeOverlay: true,
      },
      'content'
    );
    const overlayElement = container.querySelector(`.${blockClass}__overlay`);
    expect(overlayElement).toBeTruthy();
  });

  it('should render a side panel from the right', () => {
    const { container } = renderSidePanel(
      {
        placement: 'right',
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container-right-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a side panel from the left', () => {
    const { container } = renderSidePanel(
      {
        placement: 'left',
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container-left-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render an extra small side panel', () => {
    const { container } = renderSidePanel(
      {
        size: 'xs',
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container--extra-small`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a small side panel', () => {
    const { container } = renderSidePanel(
      {
        size: 'sm',
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container--small`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a medium side panel', () => {
    const { container } = renderSidePanel({}, 'content');
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container--medium`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a large side panel', () => {
    const { container } = renderSidePanel(
      {
        size: 'lg',
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container--large`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a max side panel', () => {
    const { container } = renderSidePanel(
      {
        size: 'max',
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${blockClass}__container--max`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a slide in panel version', () => {
    const { container } = render(
      <div>
        <SidePanel
          open
          onRequestClose={() => {}}
          slideIn
          pageContentSelector="#side-panel-test-page-content">
          Content
        </SidePanel>
        <div id="side-panel-test-page-content" />
      </div>
    );
    const pageContent = container.querySelector(
      '#side-panel-test-page-content'
    );
    const style = getComputedStyle(pageContent);

    expect(style.marginRight).toBe('30rem');
  });

  it('should render one primary action button', () => {
    renderSidePanel(
      {
        actions: [
          {
            label: 'Primary button',
            onClick: () => {},
            kind: 'primary',
          },
        ],
      },
      'content'
    );
    const submitButtons = screen.queryAllByText('Primary button');
    expect(submitButtons).toHaveLength(1);
  });

  it('should render two action buttons', () => {
    renderSidePanel(
      {
        actions: [
          {
            label: 'Action button',
            onClick: () => {},
            kind: 'primary',
          },
          {
            label: 'Action button',
            onClick: () => {},
            kind: 'secondary',
          },
        ],
      },
      'content'
    );
    const submitButtons = screen.queryAllByText('Action button');
    expect(submitButtons).toHaveLength(2);
  });

  it('should render a single ghost action button', () => {
    const { container } = renderSidePanel(
      {
        actions: [
          {
            label: 'Ghost action button',
            onClick: () => {},
            kind: 'ghost',
          },
        ],
      },
      'content'
    );
    const sidePanelOuter = container.querySelector(
      `.${actionSetBlockClass}__action-button--ghost`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a side panel with condensed actions', () => {
    renderSidePanel(
      {
        condensedActions: true,
        actions: [
          {
            label: 'Primary button',
            onClick: () => {},
          },
        ],
      },
      'content'
    );
    const sidePanelAction = screen.getByText(/Primary button/i);
    expect(
      sidePanelAction.parentElement.classList.contains(
        `${blockClass}__actions-container-condensed`
      )
    ).toBeTruthy();
  });

  it('should render navigation button', () => {
    const { container } = renderSidePanel(
      {
        currentStep: 1,
      },
      'content'
    );
    const navigationAction = container.querySelector(
      `.${blockClass}__navigation-back-button`
    );
    expect(navigationAction).toBeTruthy();
  });

  it('should click the navigation button', () => {
    const { fn } = jest;
    const { click } = fireEvent;
    const onNavigationBack = fn();
    const { container } = renderSidePanel(
      {
        currentStep: 1,
        onNavigationBack: onNavigationBack,
      },
      'content'
    );
    const navigationAction = container.querySelector(
      `.${blockClass}__navigation-back-button`
    );
    click(navigationAction);
    expect(onNavigationBack).toBeCalled();
  });

  it('should click the primary action button', () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    renderSidePanel(
      {
        actions: [
          {
            label: 'Primary button',
            onClick,
          },
        ],
      },
      'content'
    );
    const sidePanelAction = screen.getByText(/Primary button/i);
    click(sidePanelAction);
    expect(onClick).toBeCalled();
  });

  it('should click an action toolbar button', () => {
    const { click } = userEvent;
    const onActionToolbarButtonClickFn = jest.fn();
    const { container } = renderSidePanel({
      actionToolbarButtons: [
        {
          label: 'Copy',
          icon: Copy20,
          onActionToolbarButtonClick: onActionToolbarButtonClickFn,
        },
      ],
    });
    const toolbarButton = container.querySelector(
      `.${blockClass}__action-toolbar-button`
    );
    click(toolbarButton);
    expect(onActionToolbarButtonClickFn).toHaveBeenCalled();
  });

  it('adds additional properties to the containing node', () => {
    renderSidePanel({ 'data-testid': dataTestId }, 'content');
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderSidePanel({ ref }, 'content');
    expect(ref.current).toEqual(screen.getByRole('complementary'));
  });

  it('should call the onRequestClose event handler', () => {
    const { click } = userEvent;
    const { container } = renderSidePanel({}, 'content');
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    click(closeIconButton);
    expect(onRequestCloseFn).toHaveBeenCalled();
  });

  it('should call the onNavigationBack event handler', () => {
    const onNavigationBackFn = jest.fn();
    const { click } = userEvent;
    const { container } = renderSidePanel(
      {
        onNavigationBack: onNavigationBackFn,
        currentStep: 1,
      },
      'content'
    );
    const navigationButton = container.querySelector(
      `.${blockClass}__navigation-back-button`
    );
    click(navigationButton);
    expect(onNavigationBackFn).toHaveBeenCalled();
  });

  // it('should successfully retrieve actions container element', () => {
  //   const { container } = renderSidePanel(
  //     {
  //       actions: [
  //         {
  //           label: 'Primary button',
  //           onClick: jest.fn(),
  //         },
  //       ],
  //     },
  //     'content'
  //   );
  //   const outerPanelElement = container.querySelector(`#${blockClass}-outer`);
  //   const actionsContainerElement = outerPanelElement.querySelector(`.${blockClass}__actions-container`);
  //   expect(outerPanelElement).toBeInTheDocument();
  //   expect(actionsContainerElement).toBeInTheDocument();
  // });

  // it('should properly set the size class on the outer panel element', () => {
  //   const { container } = renderSidePanel({}, 'content');
  //   const sidePanelOuter = container.querySelector(
  //     `.${blockClass}`
  //   );
  //   expect(sidePanelOuter).toHaveClass(`${blockClass}__container--medium`);
  // });

  sizes.forEach((size) => {
    it('should render the correct size side panel', () => {
      const { container } = renderSidePanel(
        {
          size,
        },
        'content'
      );
      const sidePanelOuter = container.querySelector(`.${blockClass}`);
      let sizeValue;
      switch (size) {
        case 'xs':
          sizeValue = 'extra-small';
          break;
        case 'sm':
          sizeValue = 'small';
          break;
        case 'md':
          sizeValue = 'medium';
          break;
        case 'lg':
          sizeValue = 'large';
          break;
        case 'max':
          sizeValue = 'max';
          break;
        default:
          sizeValue = 'medium';
          break;
      }
      expect(sidePanelOuter).toHaveClass(
        `${blockClass}__container--${sizeValue}`
      );
    });
  });

  it('should test for applying focus to specified element', async () => {
    renderSidePanel(
      {
        selectorPrimaryFocus: '#test-input',
      },
      <TextInput labelText="Input A" id="test-input" placeholder="Test input" />
    );
    const inputWithFocus = await waitFor(() =>
      screen.getByPlaceholderText(/Test input/i)
    );
    expect(inputWithFocus).toHaveFocus();
    // await waitFor(() => expect(input).toBeInTheDocument());
    // await waitFor(() => expect(input).toHaveFocus());

    // const value = await Promise.resolve(true);
    // expect(value).toBe(true);
  });
});
