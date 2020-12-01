/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { expPrefix } from '../../global/js/settings';

import { settings } from 'carbon-components';
const { prefix: carbonPrefix } = settings;

import { Button, Tab, Tabs } from 'carbon-components-react';

import { Tearsheet, TearsheetNarrow } from '.';

/* Test properties. */
const buttonOnClick = jest.fn();
const onClose = jest.fn();

const buttons = (
  <div>
    <Button kind="secondary" onClick={buttonOnClick}>
      Cancel
    </Button>
    <Button onClick={buttonOnClick}>Create</Button>
  </div>
);

const classNames = ['client-class-1', 'client-class-2'];

const closeIconDescription = 'Close the tearsheet';

const description = (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </span>
);

const influencer = <div>Influencer</div>;

const label = 'The label of the tearsheet';

const mainContent = <div>Main content</div>;

const tabs = (
  <div>
    <Tabs data-testid="tabs">
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
      <Tab label="Tab 4" />
    </Tabs>
  </div>
);

const title = 'Title of the tearsheet';

describe('Tearsheet', () => {
  test('renders a tearsheet when no props are set', () => {
    render(<Tearsheet />);

    const tearsheet = document.querySelector(`div.${expPrefix}-tearsheet`);

    expect(tearsheet).not.toBeNull();
    expect(tearsheet.classList.contains(classNames[0])).toBe(false);
    expect(tearsheet.classList.contains(classNames[1])).toBe(false);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--header`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--influencer`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--main`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--buttons`)
    ).toHaveLength(0);
  });

  test('renders all the appropriate content when all props are set', () => {
    render(
      <Tearsheet
        buttons={buttons}
        className={classNames.join(' ')}
        closeIconDescription={closeIconDescription}
        description={description}
        influencer={influencer}
        label={label}
        navigation={tabs}
        onClose={onClose}
        open={true}
        title={title}>
        {mainContent}
      </Tearsheet>
    );

    const tearsheet = document.querySelector(`div.${expPrefix}-tearsheet`);

    expect(tearsheet).not.toBeNull();
    expect(tearsheet.classList.contains(classNames[0])).toBe(true);
    expect(tearsheet.classList.contains(classNames[1])).toBe(true);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--header`)
    ).toHaveLength(1);
    expect(screen.getAllByTitle(closeIconDescription)).toHaveLength(1);
    expect(screen.getAllByText(label)).toHaveLength(1);
    expect(screen.getAllByText(title)).toHaveLength(1);
    expect(screen.getAllByText(/^Lorem ipsum dolor sit amet/)).toHaveLength(1);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(screen.getAllByText(/Tab [1-4]/)).toHaveLength(4);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--influencer`)
    ).toHaveLength(1);
    expect(screen.getAllByText('Influencer')).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--main`)
    ).toHaveLength(1);
    expect(screen.getAllByText('Main content')).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--buttons`)
    ).toHaveLength(1);
    userEvent.click(screen.getAllByText('Create')[0]);
    expect(buttonOnClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getAllByTitle(closeIconDescription)[0]);
    expect(onClose).toHaveBeenCalledTimes(1);

    expect(
      document.querySelectorAll(`.${carbonPrefix}--modal-header__heading`)
    ).toHaveLength(1);
    expect(
      document.querySelector(`.${carbonPrefix}--modal-header__heading`)
        .textContent
    ).toEqual(title);
  });

  test('narrow variant renders all the appropriate content when all props are set', () => {
    render(
      <TearsheetNarrow
        buttons={buttons}
        className={classNames.join(' ')}
        closeIconDescription={closeIconDescription}
        description={description}
        label={label}
        onClose={onClose}
        open={true}
        title={title}>
        {mainContent}
      </TearsheetNarrow>
    );

    const tearsheet = document.querySelector(`div.${expPrefix}-tearsheet`);

    expect(tearsheet).not.toBeNull();
    expect(tearsheet.classList.contains(classNames[0])).toBe(true);
    expect(tearsheet.classList.contains(classNames[1])).toBe(true);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--header`)
    ).toHaveLength(1);
    expect(screen.getAllByTitle(closeIconDescription)).toHaveLength(1);
    expect(screen.getAllByText(label)).toHaveLength(1);
    expect(screen.getAllByText(title)).toHaveLength(1);
    expect(screen.getAllByText(/^Lorem ipsum dolor sit amet/)).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--main`)
    ).toHaveLength(1);
    expect(screen.getAllByText('Main content')).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${expPrefix}-tearsheet--buttons`)
    ).toHaveLength(1);
    userEvent.click(screen.getAllByText('Create')[0]);
    expect(buttonOnClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getAllByTitle(closeIconDescription)[0]);
    expect(onClose).toHaveBeenCalledTimes(1);

    expect(
      document.querySelectorAll(`.${carbonPrefix}--modal-header__heading`)
    ).toHaveLength(1);
    expect(
      document.querySelector(`.${carbonPrefix}--modal-header__heading`)
        .textContent
    ).toEqual(title);
  });
});
