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

import { Tab, Tabs } from 'carbon-components-react';
import { Lightning16, Bee32 } from '@carbon/icons-react';

import { PageHeader } from '.';
import {
  mockHTMLElement,
  expectMultipleError,
  expectWarn,
  deprecated,
  required,
} from '../../global/js/utils/test-helper';

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
const pageActionsCustomContent = 'Custom page action';

const pageActionsCustom = {
  // eslint-disable-next-line react/button-has-type
  content: <button>{pageActionsCustomContent}</button>,
  minWidth: 150,
  maxWidth: 300,
};

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

const titleUserDefinedStrings = {
  content: 'Page title',
  breadcrumbContent: 'Breadcrumb title',
  asText: 'Text title',
};

const titleUserDefined = {
  content: <div>{titleUserDefinedStrings.content}</div>,
  breadcrumbContent: <span>{titleUserDefinedStrings.breadcrumbContent}</span>,
  asText: titleUserDefinedStrings.asText,
};
const titleObj = { text: 'Page title', loading: false, icon: Bee32 };

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
  withoutBackground: false,
  breadcrumbOverflowAriaLabel,
  breadcrumbs,
  className: classNames.join(' '),
  enableBreadcrumbScroll: false,
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

const testPropsUserDefined = {
  breadcrumbs, // breadcrumbs needed for title breadcrumb test
  breadcrumbOverflowAriaLabel,
  title: titleUserDefined,
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

    // When withoutBackground is false this should result in the value 1 for opacity
    const regStyle = new RegExp(
      `--${prefix}--page-header--background-opacity: 1`
    );
    expect(header.getAttribute('style')).toMatch(regStyle);
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

  test('PageHeader space for collapse button without navigation', () => {
    render(
      <PageHeader
        {...testProps}
        hasCollapseHeaderToggle={true}
        navigation={null}
      >
        {children}
      </PageHeader>
    );
  });

  test('PageHeader space for collapse button without navigation or tags', () => {
    render(
      <PageHeader
        {...testProps}
        hasCollapseHeaderToggle={true}
        navigation={null}
        tags={null}
      >
        {children}
      </PageHeader>
    );
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
    render(<PageHeader {...{ navigation, withoutBackground: true }} />);

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

  test('enableBreadcrumbScroll works', () => {
    render(
      <PageHeader
        {...prepareProps(testProps, 'breadcrumbs')}
        enableBreadcrumbScroll={true}
      >
        {children}
      </PageHeader>
    );

    // Need to figure out how to test this
    // expect(
    //   'Enabling the breadcrumb allows the breadcrumb to scroll, pushed by navigation row.'
    // ).toBeTruthy();
  });

  test('renders title as string', () => {
    render(<PageHeader title={testProps.title.text} />);

    screen.getByText(testProps.title.text);
  });

  test('renders title when using user defined title', () => {
    render(<PageHeader {...testPropsUserDefined} />);

    screen.getByText(titleUserDefinedStrings.content);
    screen.getByText(titleUserDefinedStrings.breadcrumbContent, {
      // selector need to ignore sizing items
      selector: `.${prefix}--breadcrumb-with-overflow__breadcrumb-container:not(.${prefix}--breadcrumb-with-overflow__breadcrumb-container--hidden) .${carbon.prefix}--link`,
    });

    const allTitle = screen.getAllByTitle(titleUserDefinedStrings.asText);
    expect(allTitle).toHaveLength(3); // breadcrumb sizing, breadcrumb and main title
  });

  test('renders title when using user defined title without a breadcrumbContent', () => {
    const noBreadcrumbContent = { ...testPropsUserDefined };
    noBreadcrumbContent.title.breadcrumbContent = undefined;

    render(<PageHeader {...noBreadcrumbContent} />);

    screen.getByText(titleUserDefinedStrings.content, {
      // selector need to ignore sizing items
      selector: `.${prefix}--breadcrumb-with-overflow__breadcrumb-container:not(.${prefix}--breadcrumb-with-overflow__breadcrumb-container--hidden) .${carbon.prefix}--link`,
    });

    const allTitle = screen.getAllByTitle(titleUserDefinedStrings.asText);
    expect(allTitle).toHaveLength(3); // breadcrumb sizing, breadcrumb and main title
  });

  test('Without background', () => {
    const { title } = testProps;

    render(
      <PageHeader
        {...{
          title,
          withoutBackground: true,
          breadcrumbOverflowAriaLabel: 'Show the breadcrumb overflow',
          breadcrumbs,
        }}
        aria-label="Page header" // gives section role 'region'
      />
    );

    screen.getByRole('region');
  });

  test('ActionBar without overflow aria label', () =>
    expectMultipleError(
      [
        required('actionBarOverflowAriaLabel', 'PageHeader'),
        required('overflowAriaLabel', 'ActionBar'),
      ],
      () => {
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
      }
    ));

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

  test('Background is not there with withoutBackground is true', () => {
    const dataTestId = uuidv4();
    render(
      <PageHeader
        data-testid={dataTestId}
        title={testProps.title}
        withoutBackground={true}
      />
    );

    const header = screen.getByTestId(dataTestId);

    // When withoutBackground is true this should result in the value 0 for opacity
    const regStyle = new RegExp(
      `--${prefix}--page-header--background-opacity: 0`
    );
    expect(header.getAttribute('style')).toMatch(regStyle);
  });

  test('Works, for now, with deprecated props', () =>
    expectWarn(deprecated('hasBackgroundAlways', 'PageHeader'), () => {
      const dataTestId = uuidv4();
      render(
        <PageHeader
          data-testid={dataTestId}
          title={testProps.title}
          hasBackgroundAlways={false}
        />
      );

      const header = screen.getByTestId(dataTestId);

      // When hasBackgroundAlways is false this should result in the value 0 for opacity
      const regStyle = new RegExp(
        `--${prefix}--page-header--background-opacity: 0`
      );
      expect(header.getAttribute('style')).toMatch(regStyle);
    }));

  test('PageHeader grid settings narrow and fullWidth', () => {
    const dataTestId = uuidv4();
    const { container } = render(
      <PageHeader data-testid={dataTestId} narrowGrid fullWidthGrid />
    );

    const grid = container.querySelector(`.${carbon.prefix}--grid`);
    expect(grid).toHaveClass(`${carbon.prefix}--grid--narrow`);
    expect(grid).toHaveClass(`${carbon.prefix}--grid--full-width`);
  });

  test('PageHeader with custom pageActions', () => {
    render(<PageHeader {...testProps} pageActions={pageActionsCustom} />);

    screen.getAllByText('Custom page action');
  });
});
