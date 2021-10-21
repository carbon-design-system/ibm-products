/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pkg, carbon } from '../../settings';

import { BreadcrumbItem, Tab, Tabs } from 'carbon-components-react';
import { Lightning16, Bee32 } from '@carbon/icons-react';

import { PageHeader } from '.';
import { ActionBarItem } from '../ActionBar';
import { mockHTMLElement } from '../../global/js/utils/test-helper';

const { prefix } = pkg;

const blockClass = `${prefix}--page-header`;

/* Test properties. */
const actionBarOverflowAriaLabel = 'Show additional action bar items';

const actionBarItems = [1, 2, 3, 4].map((item) => ({
  key: `a-key-${item}`,
  renderIcon: Lightning16,
  iconDescription: `Action ${item}`,
  onClick: () => {},
}));

const actionBarItemsNodes = (
  <>
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 1"
      onClick={() => {}}
    />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 2" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 3" />
    <ActionBarItem renderIcon={Lightning16} iconDescription="Action 4" />
  </>
);

const availableSpaceTextContent = 'Some content';
const children = (
  <span className="page-header-test--available-space">
    {availableSpaceTextContent}
  </span>
);

const breadcrumbItem = (item) => ({
  href: '#',
  key: `Breadcrumb ${item}`,
  label: `Breadcrumb ${item}`,
});
const breadcrumbs = [1, 2, 3].map(breadcrumbItem);
const breadcrumbOverflowAriaLabel =
  'Open and close additional breadcrumb item list.';
const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
  </>
);
const classNames = ['client-class-1', 'client-class-2'];
const pageActions = [
  {
    key: '1',
    kind: 'secondary',
    label: 'Secondary button',
    onClick: () => {},
  },
  {
    key: '2',
    kind: 'primary',
    label: 'Primary button',
    onClick: () => {},
  },
];
const pageActionsOverflowLabel = 'Page actions...';

const subtitle = 'Optional subtitle if necessary';
const navigation = (
  <Tabs data-testid="tabs">
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);

// supply enough tags to trigger TagSet overflow required props
const tags = Array.from({ length: 20 }, () => ({
  'data-testid': 'tags',
  type: 'blue',
  label: 'A tag',
}));

const titleObj = { text: 'Page title', loading: false, icon: Bee32 };
const titleString = 'Page title';

import uuidv4 from '../../global/js/utils/uuidv4';
import { prepareProps } from '../../global/js/utils/props-helper';
jest.mock('../../global/js/utils/uuidv4');

// init test sizes, in a method to take account of test window.innerWidth and window.innerHeight
const initSizes = () => ({
  offsetWidth: {
    [`${blockClass}`]: window.innerWidth,
    [`${carbon.prefix}--btn`]: 200,
    [`${blockClass}__breadcrumb-row`]: window.innerWidth,
    [`${prefix}--breadcrumb-with-overflow`]: window.innerWidth * 0.6,
    [`${prefix}--tag-set`]: window.innerWidth * 0.25,
    [`${prefix}--tag-set__sizing-tag`]: window.innerWidth * 0.05,
    [`${prefix}--button-set-with-overflow__button-container`]:
      window.innerWidth * 0.4,
    [`${prefix}--button-set-with-overflow`]: window.innerWidth * 0.4,
    [`${carbon.prefix}--breadcrumb-item`]: 200,
    [`${prefix}--action-bar__displayed-items`]: window.innerWidth * 0.3,
    [`${blockClass}__breadcrumb-title`]: window.innerWidth * 0.2,
    [`${prefix}--button-menu`]: 200,
    [`${prefix}--tag-set-overflow`]: 40,
  },
  clientHeight: {
    [`${blockClass}`]: 300,
    [`${blockClass}__available-row`]: 40,
    [`${blockClass}__breadcrumb-row`]: 40,
    [`${carbon.prefix}--breadcrumb-item`]: 40,
    [`${blockClass}__navigation-row`]: 48,
    [`${blockClass}__subtitle-row`]: 40,
    [`${blockClass}__title-row`]: 64,
  },
});
const testSizes = (el, property, _default) => {
  const classes = el.getAttribute('class').split(' ');
  const sizes = initSizes();

  const propSizes = sizes[property];
  if (propSizes) {
    for (let cls of classes) {
      // see if any class we check for is catered for.
      const val = propSizes[cls] ? propSizes[cls] : -1;
      if (val >= 0) {
        // console.log(property, cls, val);
        return val;
      }
    }
  }
  // console.log('testSizes found nothing.', property, el.outerHTML);
  return _default;
};

const testProps = {
  actionBarItems,
  actionBarOverflowAriaLabel,
  allTagsModalTitle: 'All tags',
  allTagsModalSearchLabel: 'Search all tags',
  allTagsModalSearchPlaceholderText: 'Search all tags',
  hasBackgroundAlways: true,
  breadcrumbOverflowAriaLabel,
  breadcrumbs,
  className: classNames.join(' '),
  navigation,
  pageActions,
  pageActionsOverflowLabel,
  showAllTagsLabel: 'View all tags',
  subtitle,
  tags,
  title: titleObj,
  collapseHeaderIconDescription: 'Collapse header',
  expandHeaderIconDescription: 'Expand header',
};

const testPropsAltTitle = {
  title: titleString,
  titleIcon: Bee32,
};

describe('PageHeader', () => {
  const { ResizeObserver, scrollTo } = window;
  let mockElement;
  const mocks = [];

  window.innerWidth = 2000;
  window.innerHeight = 1080;

  beforeEach(() => {
    mockElement = mockHTMLElement({
      offsetWidth: {
        get: function () {
          return testSizes(this, 'offsetWidth', window.innerWidth);
        },
      },
      clientHeight: {
        get: function () {
          return testSizes(this, 'clientHeight', window.innerHeight);
        },
      },
    });

    mocks.push({
      id: 'uuidv4',
      mock: uuidv4.mockImplementation(() => 'test-id'),
    });
    window.scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation();
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    mocks.forEach((mock) => {
      mock.mock.mockRestore();
    });
    mockElement.mockRestore();
    jest.restoreAllMocks();
    window.scrollTo = scrollTo;
    window.ResizeObserver = ResizeObserver;
  });

  test('renders an empty header when no props are set', () => {
    const dataTestId = uuidv4();
    render(<PageHeader data-testid={dataTestId} />);

    // console.dir(screen.getByRole('region')); // section should be a region https://fae.disability.illinois.edu/rulesets/ROLE_5/
    const header = screen.getByTestId(dataTestId);
    expect(header).toHaveClass(blockClass);

    expect(header).toHaveClass(`${blockClass}--show-background`);

    expect(header).not.toHaveClass(classNames[0]);
    expect(header).not.toHaveClass(classNames[1]);

    expect(
      document.querySelectorAll(`.${blockClass}__action-bar`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${blockClass}__page-actions`)
    ).toHaveLength(0);
    expect(document.querySelectorAll(`.${blockClass}__subtitle`)).toHaveLength(
      0
    );
    expect(screen.queryByText(subtitle)).toBeNull();
    expect(document.querySelectorAll(`.${blockClass}__title`)).toHaveLength(0);
    expect(screen.queryByText(titleObj.text)).toBeNull();
    expect(
      document.querySelectorAll(`.${blockClass}__title-icon`)
    ).toHaveLength(0);
  });

  test('renders all the appropriate content when all props are set', () => {
    const dataTestId = uuidv4();
    render(
      <PageHeader {...testProps} data-testid={dataTestId}>
        {children}
      </PageHeader>
    );

    // console.dir(screen.getByRole('region')); // section should be a region https://fae.disability.illinois.edu/rulesets/ROLE_5/
    const header = screen.getByTestId(dataTestId);
    expect(header).toHaveClass(blockClass);

    expect(header).toHaveClass(`${blockClass}--show-background`);
    expect(header).toHaveClass(classNames[0]);
    expect(header).toHaveClass(classNames[1]);
    expect(
      document.querySelectorAll(`.${blockClass}__action-bar`)
    ).toHaveLength(1);
    expect(
      document.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${blockClass}__breadcrumb`)
    ).toHaveLength(1);
    expect(
      screen.getAllByText(/Breadcrumb [1-3]/, {
        // selector need to ignore sizing items
        selector: `.${prefix}--breadcrumb-with-overflow__breadcrumb-container:not(.${prefix}--breadcrumb-with-overflow__breadcrumb-container--hidden) .${carbon.prefix}--link`,
      })
    ).toHaveLength(3);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(screen.getAllByText(/Tab [1-4]/)).toHaveLength(4);
    expect(
      document.querySelectorAll(`.${blockClass}__page-actions`)
    ).toHaveLength(2);
    screen.getAllByText(testProps.pageActionsOverflowLabel);
    expect(document.querySelectorAll(`.${blockClass}__subtitle`)).toHaveLength(
      1
    );
    expect(screen.getByText(subtitle).textContent).toEqual(subtitle);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(
      screen.getAllByText('A tag', {
        // selector need to ignore sizing items
        selector: `.${prefix}--tag-set__displayed-tag .${carbon.prefix}--tag span`,
      }).length
    ).toBeGreaterThan(0);
    expect(document.querySelectorAll(`.${blockClass}__title`)).toHaveLength(1);
    expect(document.querySelector(`.${blockClass}__title`).textContent).toEqual(
      titleObj.text
    );
    expect(
      document.querySelectorAll(`.${blockClass}__title-icon`)
    ).toHaveLength(1);
  });

  test('copes with actionBarItems as nodes', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <PageHeader
        actionBarItems={actionBarItemsNodes}
        actionBarOverflowAriaLabel={actionBarOverflowAriaLabel}
      />
    );

    expect(warn).toBeCalledWith(
      'The usage of the prop `actionBarItems` of `PageHeader` has been changed and support for the old usage will soon be removed. Expects an array of objects with the following properties: iconDescription, renderIcon and onClick.'
    );

    warn.mockRestore(); // Remove mock
  });

  const dataTestId = 'data-testid';

  it('adds additional properties to the containing node', () => {
    const testStyle = { name: '--test-this', value: 'test-value' };
    const styles = { [`${testStyle.name}`]: testStyle.value };

    render(<PageHeader data-testid={dataTestId} style={styles} />);
    const header = screen.getByTestId(dataTestId);

    // style was failing due to pageHeaderStyles not being initialized
    expect(header.getAttribute('style')).toContain(testStyle.value);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<PageHeader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<PageHeader data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      PageHeader.displayName
    );
  });

  test('collapse button works', () => {
    const dataTestId = uuidv4();
    render(
      <PageHeader
        {...testProps}
        hasCollapseHeaderToggle={true}
        data-testid={dataTestId}
      >
        {children}
      </PageHeader>
    );

    const collapseButton = screen.getByRole('button', {
      name: testProps.collapseHeaderIconDescription,
    });

    window.scrollTo.mockReset();
    expect(window.scrollTo).not.toHaveBeenCalled();
    userEvent.click(collapseButton);
    // Determine how to test this (jest dom does not do scroll events)
    // screen.getByLabelText(testProps.expandHeaderIconDescription);
    expect(window.scrollTo).toHaveBeenCalled();
    userEvent.click(collapseButton);
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });

  test('collapseHeader prop test', () => {
    const dataTestId = uuidv4();
    render(
      <PageHeader {...testProps} collapseHeader={true} data-testid={dataTestId}>
        {children}
      </PageHeader>
    );

    expect(window.scrollTo).toHaveBeenCalled();
  });

  test('Navigation row renders when Navigation but no tags', () => {
    const { navigation } = testProps;
    render(<PageHeader {...{ navigation, hasBackgroundAlways: false }} />);

    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
  });

  test('Navigation row renders when Tags but no Navigation', () => {
    const {
      tags,
      allTagsModalTitle,
      allTagsModalSearchLabel,
      allTagsModalSearchPlaceholderText,
      showAllTagsLabel,
    } = testProps;

    render(
      <PageHeader
        {...{
          tags,
          allTagsModalTitle,
          allTagsModalSearchLabel,
          allTagsModalSearchPlaceholderText,
          showAllTagsLabel,
        }}
      />
    );

    expect(
      screen.getAllByText('A tag', {
        // selector need to ignore sizing items
        selector: `.${prefix}--tag-set__displayed-tag .${carbon.prefix}--tag span`,
      }).length
    ).toBeGreaterThan(0);
  });

  test('Title row renders when PageActions but no Title', () => {
    const { pageActions, pageActionsOverflowLabel = pageActionsOverflowLabel } =
      testProps;
    render(<PageHeader {...{ pageActions, pageActionsOverflowLabel }} />);

    expect(
      document.querySelectorAll(`.${blockClass}__page-actions`)
    ).toHaveLength(1);
  });

  test('Title row renders when Title but no PageActions', () => {
    const { title } = testProps;
    render(<PageHeader {...{ title }} />);

    expect(
      document.querySelectorAll(
        `.${blockClass}__title-row .${blockClass}__title`
      )
    ).toHaveLength(1);
  });

  test('Title row renders when Title with pageActions and navigation but no subtitle or available space', () => {
    const { title } = testProps;
    render(
      <PageHeader
        {...{ title, pageActions, pageActionsOverflowLabel, navigation }}
      />
    );

    expect(
      document.querySelectorAll(
        `.${blockClass}__title-row .${blockClass}__title`
      )
    ).toHaveLength(1);
    expect(
      document.querySelectorAll(`.${blockClass}__navigation-row`)
    ).toHaveLength(1);
  });

  test('Breadcrumb row renders when breadcrumb but no action bar items', () => {
    render(
      <PageHeader
        {...prepareProps(testProps, 'actionBarItems', 'pageActions')}
      />
    );

    expect(
      screen.getAllByText(/Breadcrumb [1-3]/, {
        // selector need to ignore sizing items
        selector: `.${prefix}--breadcrumb-with-overflow__breadcrumb-container:not(.${prefix}--breadcrumb-with-overflow__breadcrumb-container--hidden) .${carbon.prefix}--link`,
      })
    ).toHaveLength(3);
  });

  test('Breadcrumb row renders when action bar items but no breadcrumb', () => {
    render(
      <PageHeader {...prepareProps(testProps, 'breadcrumbs')}>
        {children}
      </PageHeader>
    );

    // screen.getByText(/Action/);
    const actionBarItems = document.querySelectorAll(
      `.${blockClass}__action-bar`
    );
    expect(actionBarItems).toHaveLength(1);
  });

  test.skip('disableBreadcrumbScroll works', () => {
    // Need to figure out how to test this
    expect(
      'Disabling the breadcrumb scroll stops the breadcrumb scrolling off the screen.'
    ).toBeTruthy();
  });

  test('renders title when using separate string and icon', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<PageHeader {...testPropsAltTitle} />);

    expect(warn).toBeCalledWith(
      'The prop `titleIcon` of `PageHeader` has been deprecated and will soon be removed. Use `title` prop shape instead.'
    );

    screen.getByText(titleString, { selector: `.${blockClass}__title span` });

    expect(
      document.querySelectorAll(`.${blockClass}__title-icon`)
    ).toHaveLength(1);
  });

  test('Without hasBackgroundAlways', () => {
    const { title } = testProps;

    render(
      <PageHeader
        {...{
          title,
          hasBackgroundAlways: false,
          breadcrumbOverflowAriaLabel: 'Show the breadcrumb overflow',
          breadcrumbs,
        }}
        aria-label="Page header" // gives section role 'region'
      />
    );

    screen.getByRole('region');
  });

  test('ActionBar without overflow aria label', () => {
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { title } = testProps;
    render(
      <PageHeader
        {...{
          title,
          actionBarItems,
        }}
        aria-label="Page header" // gives section role 'region'
      />
    );

    expect(error).toBeCalledWith(
      expect.stringMatching(
        /^Warning: Failed prop type: The prop `overflowAriaLabel` is marked as required in `ActionBar`/
      )
    );

    jest.spyOn(console, 'error').mockRestore();
  });

  test('Title shows as loading', () => {
    render(
      <PageHeader
        {...{
          breadcrumbs: testProps.breadcrumbs,
          breadcrumbOverflowAriaLabel: testProps.breadcrumbOverflowAriaLabel,
          title: { text: '', loading: true },
        }}
      />
    );

    const skeletons = document.querySelectorAll(
      `.${carbon.prefix}--skeleton__text`
    );
    expect(skeletons).toHaveLength(3);
  });

  test('Breadcrumb without overflow aria label', () => {
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <PageHeader
        {...{
          breadcrumbs,
        }}
        aria-label="Page header" // gives section role 'region'
      />
    );

    expect(error).toBeCalledWith(
      expect.stringMatching(
        /^Warning: Failed prop type: The prop `overflowAriaLabel` is marked as required in `BreadcrumbWithOverflow`/
      )
    );

    jest.spyOn(console, 'error').mockRestore();
  });

  test('Works, for now, with deprecated props', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    const warnings = [
      'The prop `actionBarOverflowLabel` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `actionBarOverflowAriaLabel`.',
      'The prop `availableSpace` of `PageHeader` has been deprecated and will soon be removed. Make use of children instead.',
      'The prop `background` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `hasBackgroundAlways`',
      'The prop `breadcrumbItems` of `PageHeader` has been deprecated and will soon be removed. Usage changed to expect breadcrumb item like shapes, see `breadcrumbs`.',
      'The prop `breadcrumbOverflowLabel` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `breadcrumbOverflowAriaLabel`.',
      'The prop `collapseHeaderLabel` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `collapseHeaderIconDescription`.',
      'The prop `collapseHeaderToggleWanted` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `hasCollapseHeaderToggle`',
      'The prop `expandHeaderLabel` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `expandHeaderIconDescription`.',
      'The prop `preCollapseTitleRow` of `PageHeader` has been deprecated and will soon be removed. Property renamed to `collapseTitle`.',
      'The prop `preventBreadcrumbScroll` of `PageHeader` has been deprecated and will soon be removed. Prop renamed to `disableBreadcrumbScroll`.',
    ];

    const dataTestId = uuidv4();
    render(
      <PageHeader
        data-testid={dataTestId}
        actionBarItems={actionBarItems}
        actionBarOverflowLabel={testProps.actionBarOverflowAriaLabel}
        availableSpace={children}
        background={testProps.hasBackgroundAlways}
        breadcrumbItems={breadcrumbItems}
        breadcrumbOverflowLabel={testProps.breadcrumbOverflowAriaLabel}
        collapseHeaderLabel={testProps.collapseHeaderIconDescription}
        collapseHeaderToggleWanted={true}
        expandHeaderLabel={testProps.expandHeaderIconDescription}
        preCollapseTitleRow={true}
        preventBreadcrumbScroll={true}
        title={titleString}
      />
    );

    for (let i = 0; i < warnings.length; i++) {
      expect(warn).toBeCalledWith(warnings[i]);
    }

    const header = screen.getByTestId(dataTestId);

    // check for rendered items
    screen.getByLabelText(testProps.actionBarOverflowAriaLabel);
    screen.getByText(availableSpaceTextContent);
    expect(header).toHaveClass(`${blockClass}--show-background`);
    expect(header.querySelectorAll(`.${blockClass}__breadcrumb`)).toHaveLength(
      1
    );
    screen.getByLabelText(testProps.breadcrumbOverflowAriaLabel);
    screen.getByLabelText(testProps.collapseHeaderIconDescription);

    // const collapseButton =
    screen.getByRole('button', {
      name: testProps.collapseHeaderIconDescription,
    });
    // Determine how to test this
    // userEvent.click(collapseButton);
    // screen.getByLabelText(testProps.expandHeaderIconDescription);

    screen.getAllByText(titleString, {
      selector: `.${blockClass}__breadcrumb-title--pre-collapsed .${carbon.prefix}--link`,
    });

    warn.mockRestore(); // Remove mock
  });

  test('Deprecated title skeleton with breadcrumbs', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        breadcrumbOverflowLabel={testProps.breadcrumbOverflowAriaLabel}
        title={{ text: titleString, loading: true }}
      />
    );

    const skeletons = document.querySelectorAll(
      `.${carbon.prefix}--skeleton__text`
    );
    expect(skeletons).toHaveLength(3);

    warn.mockRestore(); // Remove mock
  });

  test('PageHeader grid settings narrow and fullWidth', () => {
    const dataTestId = uuidv4();
    const { container } = render(
      <PageHeader data-testid={dataTestId} narrowGrid fullWidthGrid />
    );

    const grid = container.querySelector(`.${carbon.prefix}--grid`);
    expect(grid).toHaveClass(`${carbon.prefix}--grid--narrow`);
    expect(grid).toHaveClass(`${carbon.prefix}--grid--full-width`);
  });
});
