import React from 'react';
import { mount } from 'enzyme';
import { expPrefix } from '../../global/js/settings';
import {
  BreadcrumbItem,
  Button,
  Tab,
  Tabs,
  Tag,
} from 'carbon-components-react';
import { Lightning16, Bee32 } from '@carbon/icons-react';
import { ActionBarItem } from './ActionBarItem';
import { PageHeader } from './PageHeader';
const actionBarItems = (
  <>
    <ActionBarItem icon={Lightning16} label="Action 1" />
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
    <Button>Primary button</Button>
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
  let wrapper;
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders an empty header when no props are set', () => {
    wrapper = mount(<PageHeader />);
    expect(wrapper.childAt(0).type()).toEqual('section');
    expect(wrapper.childAt(0).hasClass(`${expPrefix}-page-header`)).toBe(true);
    expect(
      wrapper.childAt(0).hasClass(`${expPrefix}-page-header--background`)
    ).toBe(false);
    expect(wrapper.childAt(0).hasClass(classNames[0])).toBe(false);
    expect(wrapper.childAt(0).hasClass(classNames[1])).toBe(false);
    expect(wrapper.find('ActionBar')).toHaveLength(0);
    expect(wrapper.find('ActionBarItem')).toHaveLength(0);
    expect(wrapper.find('span.page-header-test--available-space')).toHaveLength(
      0
    );
    expect(wrapper.find('Breadcrumb')).toHaveLength(0);
    expect(wrapper.find('BreadcrumbItem')).toHaveLength(0);
    expect(wrapper.find('Tabs')).toHaveLength(0);
    expect(wrapper.find('Tab')).toHaveLength(0);
    expect(wrapper.find('Tag')).toHaveLength(0);
    expect(
      wrapper.find(`.${expPrefix}-page-header--page-actions`)
    ).toHaveLength(0);
    expect(wrapper.find(`.${expPrefix}-page-header--subtitle`)).toHaveLength(0);
    expect(wrapper.find(`.${expPrefix}-page-header--title`)).toHaveLength(0);
  });
  it('renders all the appropriate content when all props are set', () => {
    wrapper = mount(
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
    expect(wrapper.childAt(0).type()).toEqual('section');
    expect(wrapper.childAt(0).hasClass(`${expPrefix}-page-header`)).toBe(true);
    expect(
      wrapper.childAt(0).hasClass(`${expPrefix}-page-header--background`)
    ).toBe(true);
    expect(wrapper.childAt(0).hasClass(classNames[0])).toBe(true);
    expect(wrapper.childAt(0).hasClass(classNames[1])).toBe(true);
    expect(wrapper.find('ActionBar')).toHaveLength(1);
    expect(wrapper.find('ActionBarItem')).toHaveLength(4);
    expect(wrapper.find('span.page-header-test--available-space')).toHaveLength(
      1
    );
    expect(wrapper.find('Breadcrumb')).toHaveLength(1);
    expect(wrapper.find('BreadcrumbItem')).toHaveLength(4);
    expect(wrapper.find('Tabs')).toHaveLength(1);
    expect(wrapper.find('Tab')).toHaveLength(4);
    expect(
      wrapper.find(`.${expPrefix}-page-header--page-actions`).find('button')
    ).toHaveLength(4);
    expect(
      wrapper.find(`.${expPrefix}-page-header--subtitle`).hostNodes().text()
    ).toEqual(subtitle);
    expect(wrapper.find('Tag')).toHaveLength(4);
    expect(
      wrapper.find(`.${expPrefix}-page-header--title`).hostNodes().text()
    ).toEqual(title);
    expect(
      wrapper.find(`.${expPrefix}-page-header--title`).find('svg')
    ).toHaveLength(1);
  });
});
