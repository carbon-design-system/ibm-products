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
import '../../enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

import { Button, Tab, Tabs } from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '.';

const blockClass = `${pkg.prefix}--tearsheet`;
const componentName = Tearsheet.displayName;
const componentNameNarrow = TearsheetNarrow.displayName;

const onClick = jest.fn();
const onClose = jest.fn();

const createButton = `Create ${uuidv4()}`;
const buttons = (
  <div>
    <Button kind="secondary" onClick={onClick}>
      Cancel
    </Button>
    <Button onClick={onClick}>{createButton}</Button>
  </div>
);
const childFragment = `Main ${uuidv4()} content`;
const children = <div>{childFragment}</div>;
const className = `class-${uuidv4()}`;
const closeIconDescription = `Close the ${uuidv4()} tearsheet`;
const descriptionFragment = `Lorem ipsum ${uuidv4()} dolor sit amet`;
const description = (
  <span>
    <em>{descriptionFragment}</em>, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </span>
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
    <Tabs data-testid="tabs">
      <Tab label={tabLabel1} />
      <Tab label={tabLabel2} />
      <Tab label={tabLabel3} />
      <Tab label={tabLabel4} />
    </Tabs>
  </div>
);
const title = `Title of the ${uuidv4()} tearsheet`;

const commonTests = (Ts, name) => {
  it(`renders a component ${name}`, () => {
    render(<Ts />);
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Ts {...{ label, title }} />);
    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  it('omits main content sections when no props supplied', () => {
    render(<Ts hasCloseIcon={false} />);
    expect(document.querySelector(`.${blockClass}__header`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__influencer`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__main`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__buttons`)).toBeNull();
    expect(screen.getByRole('presentation')).not.toHaveClass('is-visible');
  });

  it('renders buttons', () => {
    render(<Ts {...{ buttons }} />);
    expect(document.querySelector(`.${blockClass}__buttons`)).not.toBeNull();
    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText(createButton));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders children', () => {
    render(<Ts>{children}</Ts>);
    expect(document.querySelector(`.${blockClass}__main`)).not.toBeNull();
    screen.getByText(childFragment);
  });

  it('applies className to the root node', () => {
    render(<Ts {...{ className }} />);
    expect(screen.getByRole('presentation')).toHaveClass(className);
  });

  it('renders closeIconDescription', () => {
    render(<Ts {...{ closeIconDescription }} />);
    screen.getByRole('button', { name: closeIconDescription });
  });

  it('renders description', () => {
    render(<Ts {...{ description }} />);
    screen.getByText(descriptionFragment);
  });

  it('responds to hasCloseIcon', () => {
    render(<Ts hasCloseIcon={false} />);
    expect(document.querySelector(`.${blockClass}__header`)).toBeNull();
    expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
  });

  it('renders height', () => {
    render(<Ts height="lower" />);
    expect(screen.getByRole('dialog')).toHaveClass(
      `${blockClass}__container--lower`
    );
  });

  it('renders label', () => {
    render(<Ts {...{ label }} />);
    screen.getByText(label);
  });

  it('calls onClose() when the tearsheet is closed', () => {
    render(<Ts {...{ onClose }} open />);
    const tearsheet = screen.getByRole('presentation');
    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(tearsheet).toHaveClass('is-visible');
    expect(onClose).toHaveBeenCalledTimes(0);
    userEvent.click(closeButton);
    expect(tearsheet).not.toHaveClass('is-visible');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders open', () => {
    render(<Ts {...{ onClose }} open />);
    const tearsheet = screen.getByRole('presentation');
    expect(tearsheet).toHaveClass('is-visible');
  });

  // preventCloseOnClickOutside is passed directly to the ComposedModal.
  // we do not need to test carbon-react.
  //it('renders preventCloseOnClickOutside', () => {});

  it('renders title', () => {
    render(<Ts {...{ title }} />);
    screen.getByText(title);
  });
};

describe(componentName, () => {
  commonTests(Tearsheet, componentName);

  it('renders influencer', () => {
    render(<Tearsheet {...{ influencer }} />);
    expect(document.querySelector(`.${blockClass}__influencer`)).not.toBeNull();
    const influencerElt = screen.getByText(influencerFragment).parentElement;
    expect(influencerElt).not.toHaveClass(`${blockClass}__influencer--right`);
    expect(influencerElt).not.toHaveClass(`${blockClass}__influencer--wide`);
  });

  it('responds to influencerPosition', () => {
    render(<Tearsheet {...{ influencer }} influencerPosition="right" />);
    const influencerElt = screen.getByText(influencerFragment).parentElement;
    expect(influencerElt).toHaveClass(`${blockClass}__influencer--right`);
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
  commonTests(TearsheetNarrow, componentNameNarrow);
});
