/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { SidePanel } from '.';

const blockClass = `${pkg.prefix}--side-panel`;
const actionSetBlockClass = `${pkg.prefix}--action-set`;

const dataTestId = uuidv4();

const renderSidePanel = ({ ...rest }, children) =>
  render(
    <SidePanel
      {...{
        open: true,
        setOpen: () => {},
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
          setOpen={() => {}}
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

  it('should render a condensed side panel version', () => {
    renderSidePanel(
      {
        condensed: true,
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
    const { fn } = jest;
    const { click } = fireEvent;
    const onClick = fn();
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

  it('adds additional properties to the containing node', () => {
    renderSidePanel({ 'data-testid': dataTestId }, 'content');
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderSidePanel({ ref }, 'content');
    expect(ref.current).toEqual(screen.getByRole('complementary'));
  });
});
