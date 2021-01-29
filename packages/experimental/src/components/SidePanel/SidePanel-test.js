/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import SidePanel from './SidePanel';
import { pkgPrefix } from '../../global/js/settings';

describe('SidePanel', () => {
  test('renders the side panel', () => {
    render(
      <SidePanel setOpen={() => {}} open titleText="Test side panel">
        Body content
      </SidePanel>
    );
    expect(screen.queryAllByText(/Test side panel/i)).toBeTruthy();
  });

  test('should render a side panel with an overlay', () => {
    const { container } = render(
      <SidePanel open includeOverlay setOpen={() => {}}>
        Content
      </SidePanel>
    );
    const overlayElement = container.querySelector(
      `.${pkgPrefix}-side-panel-overlay`
    );
    expect(overlayElement).toBeTruthy();
  });

  test('should render a side panel from the right', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} placement="right">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container-right-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a side panel from the left', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} placement="left">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container-left-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });
  test('should render a side panel from the left', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} placement="left">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container-left-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render an extra small side panel', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} size="extraSmall">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container--extra-small`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a small side panel', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} size="small">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container--small`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a medium side panel', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}}>
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container--medium`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a large side panel', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} size="large">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container--large`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a max side panel', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} size="max">
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-container--max`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a slide in panel version', () => {
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

  test('should render one primary action button', () => {
    render(
      <SidePanel
        open
        setOpen={() => {}}
        primaryActions={[
          {
            label: 'Primary button',
            onPrimaryActionClick: () => {},
            kind: 'primary',
          },
        ]}>
        Content
      </SidePanel>
    );
    const submitButtons = screen.queryAllByText('Primary button');
    expect(submitButtons).toHaveLength(1);
  });

  test('should render two action buttons', () => {
    render(
      <SidePanel
        open
        setOpen={() => {}}
        primaryActions={[
          {
            label: 'Action button',
            onPrimaryActionClick: () => {},
            kind: 'primary',
          },
          {
            label: 'Action button',
            onPrimaryActionClick: () => {},
            kind: 'secondary',
          },
        ]}>
        Content
      </SidePanel>
    );
    const submitButtons = screen.queryAllByText('Action button');
    expect(submitButtons).toHaveLength(2);
  });

  test('should render a single ghost action button', () => {
    const { container } = render(
      <SidePanel
        open
        setOpen={() => {}}
        primaryActions={[
          {
            label: 'Ghost action button',
            onPrimaryActionClick: () => {},
            kind: 'ghost',
          },
        ]}>
        Content
      </SidePanel>
    );
    const sidePanelOuter = container.querySelector(
      `.${pkgPrefix}-side-panel-ghost-button`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  test('should render a condensed side panel version', () => {
    render(
      <SidePanel
        open
        setOpen={() => {}}
        condensed
        primaryActions={[
          {
            label: 'Primary button',
            onPrimaryActionClick: () => {},
          },
        ]}>
        Content
      </SidePanel>
    );
    const sidePanelAction = screen.getByText(/Primary button/i);
    expect(
      sidePanelAction.classList.contains(
        `${pkgPrefix}-side-panel-primary-action-button-condensed`
      )
    ).toBeTruthy();
  });

  test('should render navigation button', () => {
    const { container } = render(
      <SidePanel open setOpen={() => {}} currentStep={1}>
        Content
      </SidePanel>
    );
    const navigationAction = container.querySelector(
      `.${pkgPrefix}-side-panel-navigation-back-button`
    );
    expect(navigationAction).toBeTruthy();
  });

  test('should click the navigation button', () => {
    const { fn } = jest;
    const { click } = fireEvent;
    const onNavigationBack = fn();
    const { container } = render(
      <SidePanel
        open
        setOpen={() => {}}
        currentStep={1}
        onNavigationBack={onNavigationBack}>
        Content
      </SidePanel>
    );
    const navigationAction = container.querySelector(
      `.${pkgPrefix}-side-panel-navigation-back-button`
    );
    click(navigationAction);
    expect(onNavigationBack).toBeCalled();
  });

  test('should click the primary action button', () => {
    const { fn } = jest;
    const { click } = fireEvent;
    const onPrimaryActionClick = fn();
    render(
      <SidePanel
        open
        setOpen={() => {}}
        primaryActions={[
          {
            label: 'Primary button',
            onPrimaryActionClick,
          },
        ]}>
        Content
      </SidePanel>
    );
    const sidePanelAction = screen.getByText(/Primary button/i);
    click(sidePanelAction);
    expect(onPrimaryActionClick).toBeCalled();
  });
});
