/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pkgPrefix /*, carbonPrefix */ } from '../../global/js/settings';

import {
  BreadcrumbItem,
  Button,
  Tab,
  Tabs,
  Tag,
} from 'carbon-components-react';
import { Lightning16, Bee32 } from '@carbon/icons-react';

import { ActionBarItem } from '../ActionBar';
import { PageHeader } from '.';

/* Test properties. */
const actionBarItemOnClick = jest.fn();
const pageActionItemOnClick = jest.fn();
const actionBarItems = (
  <>
    <ActionBarItem
      icon={Lightning16}
      label="Action 1"
      onClick={actionBarItemOnClick}
    />
    <ActionBarItem icon={Lightning16} label="Action 2" />
    <ActionBarItem icon={Lightning16} label="Action 3" />
    <ActionBarItem icon={Lightning16} label="Action 4" />
  </>
);
const availableSpace = <span className="page-header-test--available-space" />;
const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#" data-testid="breadcrumbitem">
      Breadcrumb 1
    </BreadcrumbItem>
    <BreadcrumbItem href="#" data-testid="breadcrumbitem">
      Breadcrumb 2
    </BreadcrumbItem>
    <BreadcrumbItem href="#" data-testid="breadcrumbitem">
      Breadcrumb 3
    </BreadcrumbItem>
  </>
);
const classNames = ['client-class-1', 'client-class-2'];
const pageActions = (
  <>
    <Button kind="secondary">Secondary button</Button>
    <Button onClick={pageActionItemOnClick}>Primary button</Button>
  </>
);
const subtitle = 'Optional subtitle if necessary';
const tabBar = (
  <Tabs data-testid="tabs">
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);
const tags = [
  <Tag data-testid="tags" type="blue" key="blue">
    A tag
  </Tag>,
  <Tag data-testid="tags" type="green" key="green">
    A tag
  </Tag>,
  <Tag data-testid="tags" type="warm-gray" key="warm-gray">
    A tag
  </Tag>,
  <Tag data-testid="tags" type="purple" key="purple">
    A tag
  </Tag>,
];
const title = 'Page title';

import uuidv4 from '../../global/js/utils/uuidv4';
jest.mock('../../global/js/utils/uuidv4');

describe('PageHeader', () => {
  beforeAll(() => {
    uuidv4.mockImplementation(() => 'testid');
  });

  test('renders an empty header when no props are set', () => {
    render(<PageHeader />);

    const header = document.querySelector(`section.${pkgPrefix}-page-header`);

    expect(header).not.toBeNull();
    expect(
      header.classList.contains(`${pkgPrefix}-page-header--background`)
    ).toBe(false);
    expect(header.classList.contains(classNames[0])).toBe(false);
    expect(header.classList.contains(classNames[1])).toBe(false);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--action-bar`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(0);
    expect(screen.queryAllByTestId('breadcrumbitem')).toHaveLength(0);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--page-actions`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--subtitle`)
    ).toHaveLength(0);
    expect(screen.queryByText(subtitle)).toBeNull();
    expect(screen.queryAllByTestId('tags')).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--title`)
    ).toHaveLength(0);
    expect(screen.queryByText(title)).toBeNull();
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--title-icon`)
    ).toHaveLength(0);
  });

  test('renders all the appropriate content when all props are set', () => {
    render(
      <PageHeader
        actionBarItems={actionBarItems}
        availableSpace={availableSpace}
        background
        breadcrumbItems={breadcrumbItems}
        className={classNames.join(' ')}
        navigation={tabBar}
        pageActions={pageActions}
        subtitle={subtitle}
        tags={tags}
        title={title}
        titleIcon={Bee32}
      />
    );

    const header = document.querySelector(`section.${pkgPrefix}-page-header`);
    console.log('Look here', header.innerHTML);

    expect(header).not.toBeNull();
    expect(
      header.classList.contains(`${pkgPrefix}-page-header--background`)
    ).toBe(true);
    expect(header.classList.contains(classNames[0])).toBe(true);
    expect(header.classList.contains(classNames[1])).toBe(true);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--action-bar`)
    ).toHaveLength(1);
    expect(
      document.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--breadcrumb`)
    ).toHaveLength(1);
    expect(screen.getAllByText(/Breadcrumb [1-3]/)).toHaveLength(3);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(screen.getAllByText(/Tab [1-4]/)).toHaveLength(4);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--page-actions`)
    ).toHaveLength(2);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--subtitle`)
    ).toHaveLength(1);
    expect(screen.getByText(subtitle).textContent).toEqual(subtitle);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(screen.getAllByText('A tag')).toHaveLength(4);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--title`)
    ).toHaveLength(1);
    expect(
      document.querySelector(`.${pkgPrefix}-page-header--title`).textContent
    ).toEqual(title);
    expect(
      document.querySelectorAll(`.${pkgPrefix}-page-header--title-icon`)
    ).toHaveLength(1);
  });
});
