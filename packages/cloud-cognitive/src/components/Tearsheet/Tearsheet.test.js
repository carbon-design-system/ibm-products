/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pkg } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';

import { Button, ButtonSet, Tab, Tabs } from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '.';

const blockClass = `${pkg.prefix}--tearsheet`;
const componentName = Tearsheet.displayName;
const componentNameNarrow = TearsheetNarrow.displayName;

const onClick = jest.fn();
const onCloseReturnsFalse = jest.fn(() => false);
const onCloseReturnsTrue = jest.fn(() => true);

const createButton = `Create ${uuidv4()}`;
const actions = [
  { kind: 'secondary', onClick, label: 'Cancel' },
  { onClick, label: createButton },
];
const badActions = [
  { kind: 'primary' },
  { kind: 'primary' },
  { kind: 'ghost' },
  { kind: 'ghost' },
  { kind: 'danger' },
];
const childFragment = `Main ${uuidv4()} content`;
const children = <div>{childFragment}</div>;
const className = `class-${uuidv4()}`;
const closeIconDescription = `Close the ${uuidv4()} tearsheet`;
const dataTestId = uuidv4();
// cspell: disable
const descriptionFragment = `Lorem ipsum ${uuidv4()} dolor sit amet`;
const description = (
  <span>
    <em>{descriptionFragment}</em>, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </span>
);
// cspell: enable
const headerActionButtonLabel = `Button ${uuidv4()}`;
const headerActions = (
  <ButtonSet>
    <Button>{headerActionButtonLabel}</Button>
  </ButtonSet>
);
const influencerFragment = `This is a ${uuidv4()} convincing influencer`;
const influencer = <div>{influencerFragment}</div>;
const label = `The label of the ${uuidv4()} tearsheet`;
const tabLabel1 = `Tab ${uuidv4()} 1`;
const tabLabel2 = `Tab ${uuidv4()} 2`;
const tabLabel3 = `Tab ${uuidv4()} 3`;
const tabLabel4 = `Tab ${uuidv4()} 4`;
const navigation = (
  <div>
    <Tabs data-test-id="tabs">
      <Tab label={tabLabel1} />
      <Tab label={tabLabel2} />
      <Tab label={tabLabel3} />
      <Tab label={tabLabel4} />
    </Tabs>
  </div>
);
const title = `Title of the ${uuidv4()} tearsheet`;

// These are tests than apply to both Tearsheet and TearsheetNarrow
const commonTests = (Ts, name) => {
  it(`renders a component ${name}`, () => {
    render(<Ts {...{ closeIconDescription }} />);
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Ts {...{ closeIconDescription, label, title }} />
    );
    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  it('omits main content sections when no props supplied and no close icon requested', () => {
    render(<Ts hasCloseIcon={false} />);
    expect(document.querySelector(`.${blockClass}__header`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__influencer`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__main`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__buttons`)).toBeNull();
    expect(screen.getByRole('presentation')).not.toHaveClass('is-visible');
  });

  it('renders buttons', () => {
    render(<Ts {...{ actions }} />);
    expect(document.querySelector(`.${blockClass}__buttons`)).not.toBeNull();
    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText(createButton));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('rejects too many buttons using the custom validator', () => {
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Ts actions={badActions} />);
    expect(error).toBeCalledWith(
      expect.stringContaining(`\`actions\` supplied to \`${name}\`: you cannot`)
    );
    error.mockRestore();
  });

  it('renders children', () => {
    render(<Ts {...{ closeIconDescription }}>{children}</Ts>);
    expect(document.querySelector(`.${blockClass}__main`)).not.toBeNull();
    screen.getByText(childFragment);
  });

  it('applies className to the root node', () => {
    render(<Ts {...{ className, closeIconDescription }} />);
    expect(screen.getByRole('presentation')).toHaveClass(className);
  });

  it('responds to hasCloseIcon and renders closeIconDescription', () => {
    render(<Ts hasCloseIcon {...{ closeIconDescription }} />);
    expect(document.querySelector(`.${blockClass}__header`)).not.toBeNull();
    screen.getByRole('button', { name: closeIconDescription });
  });

  it('requires closeIconDescription when there are no actions', () => {
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Ts />);
    expect(error).toBeCalledWith(
      expect.stringContaining(
        `The prop \`closeIconDescription\` is marked as required`
      )
    );
    error.mockRestore();
  });

  it('renders description', () => {
    render(<Ts {...{ closeIconDescription, description }} />);
    screen.getByText(descriptionFragment);
  });

  it('renders label', () => {
    render(<Ts {...{ closeIconDescription, label }} />);
    screen.getByText(label);
  });

  it('calls onClose() when the tearsheet is closed', () => {
    render(
      <Ts
        hasCloseIcon
        {...{ closeIconDescription }}
        onClose={onCloseReturnsTrue}
        open
      />
    );
    const tearsheet = screen.getByRole('presentation');
    const closeButton = screen.getByRole('button', {
      name: closeIconDescription,
    });
    expect(tearsheet).toHaveClass('is-visible');
    expect(onCloseReturnsTrue).toHaveBeenCalledTimes(0);
    userEvent.click(closeButton);
    expect(tearsheet).not.toHaveClass('is-visible');
    expect(onCloseReturnsTrue).toHaveBeenCalledTimes(1);
  });

  it('allows veto when the tearsheet is closed', () => {
    render(
      <Ts
        hasCloseIcon
        {...{ closeIconDescription }}
        onClose={onCloseReturnsFalse}
        open
      />
    );
    const tearsheet = screen.getByRole('presentation');
    const closeButton = screen.getByRole('button', {
      name: closeIconDescription,
    });
    expect(tearsheet).toHaveClass('is-visible');
    expect(onCloseReturnsFalse).toHaveBeenCalledTimes(0);
    userEvent.click(closeButton);
    expect(tearsheet).toHaveClass('is-visible');
    expect(onCloseReturnsFalse).toHaveBeenCalledTimes(1);
  });

  it('is visible when open is true', () => {
    render(<Ts open />);
    expect(screen.getByRole('presentation')).toHaveClass('is-visible');
  });

  it('reports deprecation of preventCloseOnClickOutside', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Ts preventCloseOnClickOutside={true} />);
    expect(warn).toBeCalledWith(
      expect.stringContaining(
        `The prop \`preventCloseOnClickOutside\` of \`${name}\` has been deprecated`
      )
    );
    warn.mockRestore();
  });

  it('renders title', () => {
    render(<Ts {...{ title }} />);
    screen.getByText(title);
  });

  it('renders verticalPosition', () => {
    render(<Ts verticalPosition="lower" />);
    expect(screen.getByRole('dialog')).toHaveClass(
      `${blockClass}__container--lower`
    );
  });

  it('adds additional properties to the containing node', () => {
    render(<Ts data-test-id={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<Ts {...{ ref }} />);
    expect(ref.current.outerModal.current).toHaveClass(blockClass);
  });

  it("doesn't render when stacked more than three deep", () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<Ts open />);
    render(<Ts open />);
    render(<Ts open />);
    render(<Ts open />);
    expect(screen.getAllByRole('presentation')).toHaveLength(3);
    expect(warn).toBeCalledWith(
      'Tearsheet not rendered: maximum stacking depth exceeded.'
    );
    warn.mockRestore();
  });
};

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  commonTests(Tearsheet, componentName);

  it('renders headerActions', () => {
    render(<Tearsheet {...{ headerActions }} />);
    screen.getByText(headerActionButtonLabel);
  });

  it('renders influencer', () => {
    render(<Tearsheet {...{ influencer }} />);
    expect(document.querySelector(`.${blockClass}__influencer`)).not.toBeNull();
    const influencerElt = screen.getByText(influencerFragment).parentElement;
    expect(influencerElt).not.toHaveClass(`${blockClass}__influencer--right`);
    expect(influencerElt).not.toHaveClass(`${blockClass}__influencer--wide`);
  });

  it('responds to influencerPosition', () => {
    render(<Tearsheet {...{ influencer }} influencerPosition="right" />);
    const influencerElt =
      screen.getByText(influencerFragment).parentElement.parentElement;
    expect(influencerElt).toHaveClass(`${blockClass}__main`);
  });

  it('responds to influencerWidth', () => {
    render(<Tearsheet {...{ influencer }} influencerWidth="wide" />);
    const influencerElt = screen.getByText(influencerFragment).parentElement;
    expect(influencerElt).toHaveClass(`${blockClass}__influencer--wide`);
  });

  it('renders navigation', () => {
    render(<Tearsheet {...{ navigation }} />);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    screen.getByRole('tab', { name: tabLabel1 });
    screen.getByRole('tab', { name: tabLabel2 });
    screen.getByRole('tab', { name: tabLabel3 });
    screen.getByRole('tab', { name: tabLabel4 });
  });
});

describe(componentNameNarrow, () => {
  const { ResizeObserver } = window;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  commonTests(TearsheetNarrow, componentNameNarrow);
});
