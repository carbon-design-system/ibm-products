/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectMultipleError } from '../../global/js/utils/test-helper';

import React, { act } from 'react';
import { Button, TextInput, AILabel, AILabelContent } from '@carbon/react';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { SidePanel } from '.';
import { Add } from '@carbon/react/icons';

const { prefix } = pkg;

const blockClass = `${prefix}--side-panel`;
const actionSetBlockClass = `${prefix}--action-set`;
const sizes = ['xs', 'sm', 'md', 'lg', '2xl'];

const dataTestId = uuidv4();

const title = uuidv4();
const subtitle = uuidv4();
const selectorPageContentValue = '#side-panel-test-page-content';

const onRequestCloseFn = jest.fn();
const onUnmountFn = jest.fn();

const sampleAILabel = (
  <AILabel className="aiLabel-container" size="xs" align="left-start">
    <AILabelContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </AILabelContent>
  </AILabel>
);

const renderSidePanel = ({ ...rest } = {}, children = <p>test</p>) =>
  render(
    <SidePanel
      id="sidepanel-id"
      {...{
        title,
        open: true,
        onRequestClose: onRequestCloseFn,
        ...rest,
      }}
    >
      {children}
    </SidePanel>
  );

const SlideIn = ({
  placement,
  open,
  animateTitle = true,
  actionToolbarButtons,
  selectorPageContent = selectorPageContentValue,
  useSelectorPageContent = false,
  ...rest
}) => {
  return (
    <div>
      <SidePanel
        id="sidepanel-id"
        actionToolbarButtons={actionToolbarButtons}
        title={title}
        subtitle={subtitle}
        animateTitle={animateTitle}
        open={open}
        onRequestClose={onRequestCloseFn}
        slideIn
        selectorPageContent={
          useSelectorPageContent ? null : selectorPageContent
        }
        placement={placement}
        onUnmount={onUnmountFn}
        {...rest}
      >
        Content
      </SidePanel>
      <div id={selectorPageContentValue.slice(1)} />
    </div>
  );
};

describe('SidePanel', () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
  });

  it('renders the side panel', async () => {
    const subtitle = uuidv4();
    const labelText = uuidv4();
    renderSidePanel({
      title: 'Test side panel',
      subtitle,
      labelText,
    });
    expect(screen.queryAllByText(/Test side panel/i)).toBeTruthy();
    expect(screen.getByText(subtitle));
    expect(screen.getByText(labelText));
  });

  it('should render a side panel with an overlay and trigger clickOutside hook when clicked', async () => {
    const onRequestCloseFn = jest.fn();
    const { container } = renderSidePanel({
      includeOverlay: true,
      onRequestClose: onRequestCloseFn,
    });
    const overlayElement = container.querySelector(`.${blockClass}__overlay`);
    expect(overlayElement).toBeTruthy();
    await act(() => userEvent.click(overlayElement));
    expect(onRequestCloseFn).toHaveBeenCalled();
  });

  it('should render a side panel from the right', async () => {
    const { container } = renderSidePanel({
      placement: 'right',
    });
    const sidePanelOuter = container.querySelector(
      `.${blockClass}--right-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a side panel from the left', async () => {
    const { container } = renderSidePanel({
      placement: 'left',
    });
    const sidePanelOuter = container.querySelector(
      `.${blockClass}--left-placement`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a left slide in panel version', async () => {
    const { container, rerender } = render(<SlideIn placement="left" open />);
    const pageContent = container.querySelector(selectorPageContentValue);
    const style = getComputedStyle(pageContent);
    expect(style.marginInlineStart).toBe('30rem');
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    await act(() => userEvent.click(closeIconButton));
    await act(() => rerender(<SlideIn placement="left" open={false} />));
    const updatedStyles = getComputedStyle(pageContent);
    expect(updatedStyles.marginInlineStart).toBe('0');
  });

  it('should render a right slide in panel version with onUnmount prop', async () => {
    const { container, rerender } = render(<SlideIn placement="right" open />);
    const pageContent = container.querySelector(selectorPageContentValue);
    const style = getComputedStyle(pageContent);
    expect(style.marginInlineEnd).toBe('30rem');
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    const outerElement = container.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(closeIconButton));
    await act(() => fireEvent.animationStart(outerElement));
    await act(() => rerender(<SlideIn placement="right" open={false} />));
    await act(() => fireEvent.animationEnd(outerElement));
    const updatedStyles = getComputedStyle(pageContent);
    expect(updatedStyles.marginInlineEnd).toBe('0');
    expect(onUnmountFn).toHaveBeenCalled();
  });

  it('should render a right slide in panel version', async () => {
    const { container, rerender } = render(
      <SlideIn
        animateTitle={false}
        placement="right"
        open
        actionToolbarButtons={[]}
      />
    );
    const pageContent = container.querySelector(selectorPageContentValue);
    const style = getComputedStyle(pageContent);
    expect(style.marginInlineEnd).toBe('30rem');
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    const outerElement = container.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(closeIconButton));
    await act(() => fireEvent.animationStart(outerElement));
    await act(() => fireEvent.animationEnd(outerElement));
    await act(() =>
      rerender(<SlideIn animateTitle={false} placement="right" open={false} />)
    );
    const updatedStyles = getComputedStyle(pageContent);
    expect(updatedStyles.marginInlineEnd).toBe('0');
  });

  it('should test overlay exit animation', async () => {
    const { container, rerender } = renderSidePanel({
      includeOverlay: true,
    });
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    const overlayElement = container.querySelector(`.${blockClass}__overlay`);
    await act(() => userEvent.click(closeIconButton));
    await act(() =>
      rerender(
        <SidePanel
          title={title}
          includeOverlay
          open={false}
          onRequestClose={onRequestCloseFn}
          id="sidepanel-id"
        >
          Content
        </SidePanel>
      )
    );
    setTimeout(() => {
      expect(overlayElement).not.toBeInTheDocument();
    }, 250);
  });

  it('should label text be hidden on scroll on main body', async () => {
    const subtitle = 'Test label text';
    const labelText = uuidv4();
    const { container } = render(
      <SlideIn
        subtitle={subtitle}
        labelText={labelText}
        animateTitle={true}
        placement="right"
        open
        actionToolbarButtons={[]}
      />
    );
    const mainBody = container.querySelector(`.${blockClass}__inner-content`);
    expect(mainBody).toBeTruthy();
    const subTitle = screen.getByText('Test label text');
    const initialMarginTop = window.getComputedStyle(subTitle).marginTop;
    fireEvent.scroll(mainBody, { target: { scrollTop: 300 } });
    expect(mainBody.scrollTop).toBe(300);
    const updatedMarginTop = window.getComputedStyle(subTitle).marginTop;
    expect(updatedMarginTop).not.toBe(initialMarginTop);
  });

  it('should render one primary action button', async () => {
    const { container } = renderSidePanel({
      includeOverlay: true,
      actions: [
        {
          label: 'Primary button',
          onClick: () => {},
          kind: 'primary',
        },
      ],
    });
    const submitButtons = screen.queryAllByText('Primary button');
    const outerElement = container.querySelector(`.${blockClass}`);
    fireEvent.animationStart(outerElement);
    fireEvent.animationEnd(outerElement);
    expect(submitButtons).toHaveLength(1);
  });

  it('should render two action buttons', async () => {
    renderSidePanel({
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
    });
    const submitButtons = screen.queryAllByText('Action button');
    expect(submitButtons).toHaveLength(2);
  });

  it('should render a single ghost action button', async () => {
    const { container } = renderSidePanel({
      actions: [
        {
          label: 'Ghost action button',
          onClick: () => {},
          kind: 'ghost',
        },
      ],
    });
    const sidePanelOuter = container.querySelector(
      `.${actionSetBlockClass}__action-button--ghost`
    );
    expect(sidePanelOuter).toBeTruthy();
  });

  it('should render a side panel with condensed actions', async () => {
    renderSidePanel({
      condensedActions: true,
      actions: [
        {
          label: 'Primary button',
          onClick: () => {},
        },
      ],
    });
    const sidePanelAction = screen.getByText(/Primary button/i);
    expect(
      sidePanelAction.parentElement.classList.contains(
        `${blockClass}__actions-container--condensed`
      )
    ).toBeTruthy();
  });

  it('rejects too many buttons using the custom validator', async () =>
    expectMultipleError(
      [
        'Invalid prop `actions` supplied to `SidePanel`: you cannot have more than three actions',
        'Invalid prop `actions` supplied to `ActionSet`: you cannot have more than three actions',
        'Invalid prop `kind` of value `danger--tertiary` supplied to `ActionSetButton`',
      ],
      () =>
        renderSidePanel({
          actions: [
            { kind: 'primary' },
            { kind: 'primary' },
            { kind: 'ghost' },
            { kind: 'ghost' },
            { kind: 'danger--tertiary' },
          ],
        })
    ));

  it('should render navigation button', async () => {
    const { container } = renderSidePanel({
      currentStep: 1,
    });
    const navigationAction = container.querySelector(
      `.${blockClass}__navigation-back-button`
    );
    expect(navigationAction).toBeTruthy();
  });

  it('should have AI Label when it is passed through slug', () => {
    const { container } = renderSidePanel({
      slug: sampleAILabel,
    });
    expect(container.querySelector('.aiLabel-container')).toBeTruthy();
  });

  it('should not have a ai label container when a it is not passed', () => {
    const { container } = renderSidePanel();
    expect(container.querySelector('.aiLabel-container')).toBe(null);
  });

  it('should have AI Label when it is passed', () => {
    const { container } = renderSidePanel({
      aiLabel: sampleAILabel,
    });
    expect(container.querySelector('.aiLabel-container')).toBeTruthy();
  });

  it('should have AI Label when it is passed to decorator', () => {
    const { container } = renderSidePanel({
      decorator: sampleAILabel,
    });
    expect(container.querySelector('.aiLabel-container')).toBeTruthy();
  });

  it('should throw console warning if labelText passed without Title', () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});
    renderSidePanel({
      title: '',
      labelText: 'Side Panel test label',
    });
    expect(consoleWarnSpy).toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        `The prop \`labelText\` was provided without a \`title\`. It is required to have a \`title\` when using the \`labelText\` prop.`
      )
    ); // Adjust the expected message
    consoleWarnSpy.mockRestore();
  });
  it('should click the navigation button', async () => {
    const { fn } = jest;
    const { click } = userEvent;
    const onNavigationBackFn = fn();
    const { container } = renderSidePanel({
      currentStep: 1,
      onNavigationBack: onNavigationBackFn,
    });
    const navigationAction = container.querySelector(
      `.${blockClass}__navigation-back-button`
    );
    await act(() => click(navigationAction));
    expect(onNavigationBackFn).toBeCalled();
  });

  it('should click the primary action button', async () => {
    const { click } = userEvent;
    const onClick = jest.fn();
    renderSidePanel({
      actions: [
        {
          label: 'Primary button',
          onClick,
        },
      ],
    });
    const sidePanelAction = screen.getByText(/Primary button/i);
    await act(() => click(sidePanelAction));
    expect(onClick).toBeCalled();
  });

  it('should click an action toolbar button', async () => {
    const { click } = userEvent;
    const toolbarButtonFn1 = jest.fn();
    const toolbarButtonFn2 = jest.fn();
    const { container } = renderSidePanel({
      actionToolbarButtons: [
        {
          leading: true,
          label: 'Copy 1',
          onClick: toolbarButtonFn1,
        },
        {
          label: 'Copy 2',
          icon: (props) => <Add size={16} {...props} />,
          onClick: toolbarButtonFn2,
        },
      ],
    });
    const toolbarButtons = container.querySelectorAll(
      `.${blockClass}__action-toolbar-button`
    );
    await act(() => click(toolbarButtons[0]));
    expect(toolbarButtonFn1).toHaveBeenCalledTimes(1);
    await act(() => click(toolbarButtons[1]));
    expect(toolbarButtonFn2).toHaveBeenCalledTimes(1);
  });

  it('adds additional properties to the containing node', async () => {
    renderSidePanel({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    renderSidePanel({ ref });
    expect(ref.current).toEqual(screen.getByRole('complementary'));
  });

  it('adds the Devtools attribute to the containing node', async () => {
    renderSidePanel({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      SidePanel.displayName
    );
  });

  it('should call the onRequestClose event handler', async () => {
    const { click } = userEvent;
    const { container } = renderSidePanel();
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    await act(() => click(closeIconButton));
    expect(onRequestCloseFn).toHaveBeenCalled();
  });

  it('should call the onRequestClose event handler on pressing Esc key', async () => {
    const { keyboard } = userEvent;
    renderSidePanel();
    await act(async () => {
      await keyboard('{Escape}');
    });
    expect(onRequestCloseFn).toHaveBeenCalled();
  });

  it('should call the onNavigationBack event handler', async () => {
    const onNavigationBackFn = jest.fn();
    const { click } = userEvent;
    const { container } = renderSidePanel({
      onNavigationBack: onNavigationBackFn,
      currentStep: 1,
    });
    const navigationButton = container.querySelector(
      `.${blockClass}__navigation-back-button`
    );
    await act(() => click(navigationButton));
    expect(onNavigationBackFn).toHaveBeenCalled();
  });

  sizes.forEach((size) => {
    it(`should render a ${size} size side panel`, async () => {
      const { container } = renderSidePanel({
        size,
      });
      const sidePanelOuter = container.querySelector(`.${blockClass}`);
      expect(sidePanelOuter).toHaveClass(`${blockClass}--${size}`);
    });
  });

  it('should simulate onAnimationEnd synthetic event and set focus to specified element', async () => {
    const { container } = renderSidePanel(
      {
        open: true,
        selectorPrimaryFocus: '#test-input',
      },
      <TextInput labelText="Input A" id="test-input" placeholder="Test input" />
    );
    const outerElement = container.querySelector(`.${blockClass}`);
    fireEvent.animationStart(outerElement);
    fireEvent.animationEnd(outerElement);
    const inputElement = container.querySelector(`#test-input`);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(inputElement).toHaveFocus();
  });

  it('should default focus to close button when selectorPrimaryFocus prop is not passed', async () => {
    const { container } = renderSidePanel(
      {},
      <TextInput labelText="Input A" id="test-input" placeholder="Test input" />
    );
    const outerElement = container.querySelector(`.${blockClass}`);
    fireEvent.animationEnd(outerElement);
    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    await waitFor(() => {
      expect(closeIconButton).toHaveFocus();
    });
  });

  it('should render slide in panel from left', async () => {
    const { container } = render(
      <SlideIn placement="left" open={false}>
        Content
      </SlideIn>
    );
    const pageContent = container.querySelector(selectorPageContentValue);
    const style = getComputedStyle(pageContent);
    expect(style.marginInlineStart).toBe('0');
  });

  it('should return focus back to launcher button', async () => {
    const mockCloseFn = jest.fn();

    const DummyComponent = ({ open }) => {
      const buttonRef = React.useRef(undefined);

      return (
        <div>
          <Button ref={buttonRef}>Open</Button>
          <SlideIn
            animateTitle={false}
            placement="right"
            open={open}
            actionToolbarButtons={[]}
            launcherButtonRef={buttonRef}
            onRequestClose={mockCloseFn}
          />
        </div>
      );
    };

    const { container, getByText, rerender } = render(
      <DummyComponent open={true} />
    );

    const launchButtonEl = getByText('Open');
    expect(launchButtonEl).toBeInTheDocument();

    const closeIconButton = container.querySelector(
      `.${blockClass}__close-button`
    );
    await act(() => userEvent.click(closeIconButton));
    expect(mockCloseFn).toHaveBeenCalledTimes(1);

    rerender(<DummyComponent open={false} />);

    await waitFor(() => {
      expect(launchButtonEl).toHaveFocus();
    });
  });
});
