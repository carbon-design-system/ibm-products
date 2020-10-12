/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { expPrefix } from '../../global/js/settings';

import { settings } from 'carbon-components';
const { prefix: carbonPrefix } = settings;

import {
  BreadcrumbItem,
  Button,
  Tab,
  Tabs,
  Tag,
} from 'carbon-components-react';
import { Lightning16, Bee32 } from '@carbon/icons-react';

import { ActionBarItem } from './ActionBarItem';
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
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
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
  <Tabs>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);
const tags = (
  <>
    <Tag type="blue">A tag</Tag>
    <Tag type="green">A tag</Tag>
    <Tag type="warm-gray">A tag</Tag>
    <Tag type="purple">A tag</Tag>
  </>
);
const title = 'Page title';

describe('PageHeader', () => {
  test('renders an empty header when no props are set', () => {
    const { container, queryByText } = render(<PageHeader />);
    expect(container.firstChild.nodeName.toLowerCase()).toEqual('section');
    expect(
      container.firstChild.classList.contains(`${expPrefix}-page-header`)
    ).toBe(true);
    expect(
      container.firstChild.classList.contains(
        `${expPrefix}-page-header--background`
      )
    ).toBe(false);
    expect(container.firstChild.classList.contains(classNames[0])).toBe(false);
    expect(container.firstChild.classList.contains(classNames[1])).toBe(false);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--action-bar`)
    ).toHaveLength(0);
    expect(
      container.querySelectorAll(
        `[label="Action 1"].${expPrefix}-action-bar-item`
      )
    ).toHaveLength(0);
    expect(
      container.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(0);
    expect(
      container.querySelectorAll(`.${carbonPrefix}--breadcrumb`)
    ).toHaveLength(0);
    expect(container.querySelectorAll(`.${carbonPrefix}--tabs`)).toHaveLength(
      0
    );
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--page-actions`)
    ).toHaveLength(0);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--subtitle`)
    ).toHaveLength(0);
    expect(queryByText(subtitle)).toBeNull();
    expect(container.querySelectorAll(`.${carbonPrefix}--tags`)).toHaveLength(
      0
    );
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--title`)
    ).toHaveLength(0);
    expect(queryByText(title)).toBeNull();
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--title-icon`)
    ).toHaveLength(0);
  });

  test('renders all the appropriate content when all props are set', () => {
    const { click } = fireEvent;

    const { container, getAllByText, getByText } = render(
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

    expect(container.firstChild.nodeName.toLowerCase()).toEqual('section');
    expect(
      container.firstChild.classList.contains(`${expPrefix}-page-header`)
    ).toBe(true);
    expect(
      container.firstChild.classList.contains(
        `${expPrefix}-page-header--background`
      )
    ).toBe(true);
    expect(container.firstChild.classList.contains(classNames[0])).toBe(true);
    expect(container.firstChild.classList.contains(classNames[1])).toBe(true);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--action-bar`)
    ).toHaveLength(1);
    expect(
      container.querySelectorAll(
        `[label="Action 1"].${expPrefix}-action-bar-item`
      )
    ).toHaveLength(1);
    click(
      container.querySelector(`[label="Action 1"].${expPrefix}-action-bar-item`)
    );
    expect(actionBarItemOnClick).toHaveBeenCalledTimes(1);
    expect(
      container.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(1);
    expect(
      container.querySelectorAll(`.${carbonPrefix}--breadcrumb`)
    ).toHaveLength(1);
    expect(getAllByText(/Breadcrumb [1-3]/)).toHaveLength(3);
    expect(container.querySelectorAll(`.${carbonPrefix}--tabs`)).toHaveLength(
      1
    );
    expect(getAllByText(/Tab [1-4]/)).toHaveLength(4);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--page-actions`)
    ).toHaveLength(2);
    expect(getAllByText('Primary button')).toHaveLength(2);
    click(getAllByText('Primary button')[0]);
    expect(pageActionItemOnClick).toHaveBeenCalledTimes(1);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--subtitle`)
    ).toHaveLength(1);
    expect(getByText(subtitle).textContent).toEqual(subtitle);
    expect(container.querySelectorAll(`.${carbonPrefix}--tabs`)).toHaveLength(
      1
    );
    expect(getAllByText('A tag')).toHaveLength(4);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--title`)
    ).toHaveLength(1);
    expect(
      container.querySelector(`.${expPrefix}-page-header--title`).textContent
    ).toEqual(title);
    expect(
      container.querySelectorAll(`.${expPrefix}-page-header--title-icon`)
    ).toHaveLength(1);
  });
});
