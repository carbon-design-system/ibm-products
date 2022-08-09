/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, renderHook } from '@testing-library/react-hooks';
import { Code16 as Code, Copy16 as Copy } from '@carbon/icons-react';

import { pkg } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';
import { documentationLinks } from './preview-components/documentationLinks';
import {
  WebTerminal,
  WebTerminalProvider,
  WebTerminalContentWrapper,
  useWebTerminal,
} from './index';

const blockClass = `${pkg.prefix}--web-terminal`;
const name = WebTerminal.displayName;
const dataTestId = uuidv4();

const MockWebTerminal = React.forwardRef(
  (
    { children, ...props }, // eslint-disable-line
    ref
  ) => (
    <WebTerminalProvider>
      <WebTerminal
        isInitiallyOpen
        closeIconDescription="Close terminal"
        ref={ref}
        {...props}
      >
        {children}
      </WebTerminal>
    </WebTerminalProvider>
  )
);

describe(name, () => {
  it('Renders the component `WebTerminal` if flag is enabled', () => {
    const { container } = render(
      <MockWebTerminal>Body content</MockWebTerminal>
    );

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  /**
    We are skipping the a11y test for now since the only a11y violation 
    is a potential violation. We can remove the skip once we fix our accessibility-checker
    issue. https://github.com/carbon-design-system/ibm-cloud-cognitive/issues/2154
  */
  it.skip('has no accessibility violations', async () => {
    const { container } = render(
      <MockWebTerminal isInitiallyOpen>Body content</MockWebTerminal>
    );

    await expect(container).toBeAccessible();
  });

  test('should attach a custom class to the web terminal', () => {
    const testClassName = 'test-class-name';
    const { container } = render(
      <MockWebTerminal isInitiallyOpen className={testClassName}>
        Body content
      </MockWebTerminal>
    );
    expect(container.querySelector(`.${testClassName}`)).not.toBeNull();
  });

  it('should render child element content', () => {
    render(<MockWebTerminal>Body content</MockWebTerminal>);
    expect(screen.getByText(/Body content/i)).toBeInTheDocument();
  });

  it('custom hook should toggle web terminal', () => {
    /**  Utilizing renderHook so jest knows about the custom hook and passing 
         in the WebTerminalProvider so that the hook can consume the value  */
    const { result } = renderHook(() => useWebTerminal(), {
      wrapper: WebTerminalProvider,
    });

    // open should be false by default and check if openWebTerminal is a function
    expect(result.current.open).toBe(false);
    expect(typeof result.current.toggleWebTerminal).toBe('function');

    act(() => {
      result.current.toggleWebTerminal();
    });

    expect(result.current.open).toBe(true);

    act(() => {
      result.current.toggleWebTerminal();
    });

    expect(result.current.open).toBe(false);
  });

  it('custom hook should open and close web terminal', () => {
    /**  Utilizing renderHook so jest knows about the custom hook and passing 
         in the WebTerminalProvider so that the hook can consume the value  */
    const { result } = renderHook(() => useWebTerminal(), {
      wrapper: WebTerminalProvider,
    });

    // open should be false by default and check if openWebTerminal is a function
    expect(result.current.open).toBe(false);
    expect(typeof result.current.openWebTerminal).toBe('function');

    // open web terminal
    act(() => {
      result.current.openWebTerminal();
    });

    // open should be true
    expect(result.current.open).toBe(true);

    // check if closeWebTerminal is a function
    expect(typeof result.current.closeWebTerminal).toBe('function');

    // close web terminal
    act(() => {
      result.current.closeWebTerminal();
    });

    // open should be false
    expect(result.current.open).toBe(false);
  });

  it('should render documentation link text', () => {
    render(
      <MockWebTerminal documentationLinks={documentationLinks}>
        Body content
      </MockWebTerminal>
    );
    const { click } = userEvent;
    click(screen.getByText(/Show documentation links/i));
    expect(screen.getByText(/Kubernetes docs/i));
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <MockWebTerminal data-testid={dataTestId}>Body content</MockWebTerminal>
    );
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef(null);
    render(<MockWebTerminal ref={ref}>Body content</MockWebTerminal>);

    /** 
      This await is necessary so that the document loads completely and the ref isn't null */
    await screen.findByText('Body content');

    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });

  it('should call the animationEnd event', () => {
    const { animationEnd } = fireEvent;
    const { rerender, container } = render(
      <MockWebTerminal isInitiallyOpen closeIconDescription="Close terminal">
        Body content
      </MockWebTerminal>
    );

    const outerElement = container.querySelector(`.${blockClass}`);

    rerender(
      <MockWebTerminal isInitiallyOpen closeIconDescription="Close terminal">
        Body content
      </MockWebTerminal>
    );
    animationEnd(outerElement);
    expect(outerElement).toBeNull;
  });

  it('should render action icon buttons', () => {
    const { click } = userEvent;
    const deploymentButtonFn = jest.fn();
    const copyLogsButtonFn = jest.fn();

    render(
      <MockWebTerminal
        actions={[
          {
            renderIcon: Code,
            onClick: deploymentButtonFn,
            iconDescription: 'Create new deployment',
          },
          {
            renderIcon: Copy,
            onClick: copyLogsButtonFn,
            iconDescription: 'Copy logs',
          },
        ]}
      >
        Body content
      </MockWebTerminal>
    );

    click(screen.getByText(/Create new deployment/i));
    expect(deploymentButtonFn).toHaveBeenCalledTimes(1);
    click(screen.getByText(/Copy logs/i));
    expect(copyLogsButtonFn).toHaveBeenCalledTimes(1);
  });

  it('should render the close icon description prop', () => {
    render(
      <MockWebTerminal
        isInitiallyOpen
        closeIconDescription="Close web terminal"
      >
        Body content
      </MockWebTerminal>
    );

    expect(screen.getByText(/close web terminal/i)).toBeInTheDocument();
  });

  it('content wrapper should pass children', () => {
    render(
      <WebTerminalProvider>
        <WebTerminalContentWrapper>body content</WebTerminalContentWrapper>
      </WebTerminalProvider>
    );

    expect(screen.getByText(/body content/i)).toBeInTheDocument();
  });

  it('content wrapper should be full width when web terminal is closed', async () => {
    const RenderComponent = (
      { isInitiallyOpen = false, dataTestId = null } // eslint-disable-line
    ) => (
      <WebTerminalProvider>
        <WebTerminalContentWrapper>content</WebTerminalContentWrapper>
        <WebTerminal
          isInitiallyOpen={isInitiallyOpen}
          data-testid={dataTestId}
          closeIconDescription="Close terminal"
        >
          Body content
        </WebTerminal>
      </WebTerminalProvider>
    );

    render(<RenderComponent />);

    let windowWidth = document.body.getBoundingClientRect().width;
    let contentWrapperWidth = screen
      .getByText('content')
      .getBoundingClientRect().width;

    expect(contentWrapperWidth).toBe(windowWidth);
  });

  it('content wrapper should be reacting to the width of the web terminal when open ', async () => {
    const RenderComponent = (
      { isInitiallyOpen = false, dataTestId = null } // eslint-disable-line
    ) => (
      <WebTerminalProvider>
        <WebTerminalContentWrapper>content</WebTerminalContentWrapper>
        <WebTerminal
          isInitiallyOpen={isInitiallyOpen}
          data-testid={dataTestId}
          closeIconDescription="Close terminal"
        >
          Body content
        </WebTerminal>
      </WebTerminalProvider>
    );

    const dataTestId = uuidv4();
    render(<RenderComponent isInitiallyOpen dataTestId={dataTestId} />);

    let windowWidth = document.body.getBoundingClientRect().width;
    let contentWrapperWidth = screen
      .getByText('content')
      .getBoundingClientRect().width;
    let webTerminalWidth = screen
      .getByTestId(dataTestId)
      .getBoundingClientRect().width;

    expect(contentWrapperWidth).toBe(windowWidth - webTerminalWidth);
  });
});
