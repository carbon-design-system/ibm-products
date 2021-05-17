/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pkg, carbon } from '../../settings';

import {
  BreadcrumbItem,
  Button,
  Tab,
  Tabs,
  Tag,
} from 'carbon-components-react';
import { Lightning16, Bee32 } from '@carbon/icons-react';

import { PageHeader } from '.';
import { ActionBarItem } from '../ActionBar';
import { mockHTMLElement } from '../../global/js/utils/test-helper';

const blockClass = `${pkg.prefix}--page-header`;

/* Test properties. */
const actionBarItems = [1, 2, 3, 4].map((item) => ({
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

const availableSpace = <span className="page-header-test--available-space" />;
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
    kind: 'secondary',
    label: 'Secondary button',
    onClick: () => {},
  },
  {
    kind: 'primary',
    label: 'Primary button',
    onClick: () => {},
  },
];

const pageActionsDepTest = pageActions.map(({ label, ...rest }, index) => (
  <Button {...rest} key={index}>
    {label}
  </Button>
));

const pageActionsDepTest2 = (
  <>
    {pageActions.map(({ label, ...rest }, index) => (
      <Button {...rest} key={index}>
        {label}
      </Button>
    ))}
  </>
);

const subtitle = 'Optional subtitle if necessary';
const navigation = (
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
import { prepareProps } from '../../global/js/utils/props-helper';
jest.mock('../../global/js/utils/uuidv4');

const sizes = {
  [`${carbon.prefix}--btn`]: {
    get offsetWidth() {
      return 200;
    },
  },
  [`${blockClass}`]: {
    get offsetWidth() {
      return window.innerWidth;
    },
  },
  [`${blockClass}__breadcrumb-row`]: {
    get offsetWidth() {
      return window.innerWidth;
    },
  },
  [`${pkg.prefix}--breadcrumb-with-overflow`]: {
    get offsetWidth() {
      return window.innerWidth * 0.6;
    },
  },
  [`${pkg.prefix}--tag-set`]: {
    get offsetWidth() {
      return window.innerWidth * 0.25;
    },
  },
  [`${pkg.prefix}--tag-set__sizing-tag`]: {
    get offsetWidth() {
      return window.innerWidth * 0.05;
    },
  },
  [`${pkg.prefix}--button-set-with-overflow__button-container`]: {
    get offsetWidth() {
      return window.innerWidth * 0.4;
    },
  },
  [`${pkg.prefix}--button-set-with-overflow`]: {
    get offsetWidth() {
      return window.innerWidth * 0.4;
    },
  },
  [`${carbon.prefix}--breadcrumb-item`]: {
    get offsetWidth() {
      return 200;
    },
  },
  [`${pkg.prefix}--action-bar__displayed-items`]: {
    get offsetWidth() {
      return window.innerWidth * 0.3;
    },
  },
  [`${blockClass}__breadcrumb-title`]: {
    get offsetWidth() {
      return window.innerWidth * 0.2;
    },
  },
};
const testSizes = (el, property) => {
  const classes = el.getAttribute('class').split(' ');

  for (let cls of classes) {
    const val = sizes[cls] ? sizes[cls][property] : -1;
    if (val >= 0) {
      return val;
    }
  }
  console.log('xxx', property, el.outerHTML);
  return -1;
};

const testProps = {
  actionBarItems,
  availableSpace,
  background: true,
  breadcrumbItems,
  className: classNames.join(' '),
  navigation,
  pageActions,
  subtitle,
  tags,
  title,
  titleIcon: Bee32,
};

describe('PageHeader', () => {
  const { ResizeObserver, scrollTo } = window;
  let mockElement;
  const mocks = [];

  window.innerWidth = 2000;

  beforeEach(() => {
    mockElement = mockHTMLElement({
      offsetWidth: {
        get: function () {
          let width = testSizes(this, 'offsetWidth');

          if (width < 0) {
            width = window.innerWidth;
          }

          return width;
        },
      },
    });

    mocks.push({
      id: 'uuidv4',
      mock: uuidv4.mockImplementation(() => 'testid'),
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
    const dataTestid = uuidv4();
    render(<PageHeader data-testid={dataTestid} />);

    // console.dir(screen.getByRole('region')); // section should be a region https://fae.disability.illinois.edu/rulesets/ROLE_5/
    const header = screen.getByTestId(dataTestid);
    expect(header).toHaveClass(blockClass);

    expect(header).not.toHaveClass(`${blockClass}--show-background`);

    expect(header).not.toHaveClass(classNames[0]);
    expect(header).not.toHaveClass(classNames[1]);

    expect(
      document.querySelectorAll(`.${blockClass}__action-bar`)
    ).toHaveLength(0);
    expect(
      document.querySelectorAll('span.page-header-test--available-space')
    ).toHaveLength(0);
    expect(screen.queryAllByTestId('breadcrumbitem')).toHaveLength(0);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(0);
    expect(
      document.querySelectorAll(`.${blockClass}__page-actions`)
    ).toHaveLength(0);
    expect(document.querySelectorAll(`.${blockClass}__subtitle`)).toHaveLength(
      0
    );
    expect(screen.queryByText(subtitle)).toBeNull();
    expect(screen.queryAllByTestId('tags')).toHaveLength(0);
    expect(document.querySelectorAll(`.${blockClass}__title`)).toHaveLength(0);
    expect(screen.queryByText(title)).toBeNull();
    expect(
      document.querySelectorAll(`.${blockClass}__title-icon`)
    ).toHaveLength(0);
  });

  test('renders all the appropriate content when all props are set', () => {
    const dataTestid = uuidv4();
    render(<PageHeader {...testProps} data-testid={dataTestid} />);

    // console.dir(screen.getByRole('region')); // section should be a region https://fae.disability.illinois.edu/rulesets/ROLE_5/
    const header = screen.getByTestId(dataTestid);
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
        selector: `.${pkg.prefix}--breadcrumb-with-overflow__breadcrumb-container:not(.${pkg.prefix}--breadcrumb-with-overflow__breadcrumb-container--hidden) .${carbon.prefix}--link`,
      })
    ).toHaveLength(3);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(screen.getAllByText(/Tab [1-4]/)).toHaveLength(4);
    expect(
      document.querySelectorAll(`.${blockClass}__page-actions`)
    ).toHaveLength(2);
    expect(document.querySelectorAll(`.${blockClass}__subtitle`)).toHaveLength(
      1
    );
    expect(screen.getByText(subtitle).textContent).toEqual(subtitle);
    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
    expect(
      screen.getAllByText('A tag', {
        // selector need to ignore sizing items
        selector: `.${pkg.prefix}--tag-set__displayed-tag .${carbon.prefix}--tag span`,
      })
    ).toHaveLength(4);
    expect(document.querySelectorAll(`.${blockClass}__title`)).toHaveLength(1);
    expect(document.querySelector(`.${blockClass}__title`).textContent).toEqual(
      title
    );
    expect(
      document.querySelectorAll(`.${blockClass}__title-icon`)
    ).toHaveLength(1);
  });

  test('copes with actionBarItems as nodes', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<PageHeader actionBarItems={actionBarItemsNodes} />);

    expect(warn).toBeCalledWith(
      "The usage of prop 'actionBarItems' of 'PageHeader' has been changed and you should update. Expects an array of objects with the following properties: iconDescription, renderIcon and onClick."
    );

    warn.mockRestore(); // Remove mock
  });

  test('with deprecated page actions', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<PageHeader pageActions={pageActionsDepTest} />);

    screen.getByText('Primary button', {
      selector: `.${blockClass}__page-actions .${pkg.prefix}--button-set-with-overflow__button-container:not(.${pkg.prefix}--button-set-with-overflow__button-container--hidden) .${carbon.prefix}--btn`,
    });

    expect(warn).toBeCalledWith(
      "The usage of prop 'pageActions' of 'PageHeader' has been changed and you should update. Expects an array of objects with the following properties: label and onClick."
    );

    warn.mockRestore(); // Remove mock
  });

  test('with deprecated page actions in a fragment', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<PageHeader pageActions={pageActionsDepTest2} />);

    screen.getByText('Primary button', {
      selector: `.${blockClass}__page-actions .${pkg.prefix}--button-set-with-overflow__button-container:not(.${pkg.prefix}--button-set-with-overflow__button-container--hidden) .${carbon.prefix}--btn`,
    });

    expect(warn).toBeCalledWith(
      "The usage of prop 'pageActions' of 'PageHeader' has been changed and you should update. Expects an array of objects with the following properties: label and onClick."
    );

    warn.mockRestore(); // Remove mock
  });

  it('adds additional properties to the containing node', () => {
    const dataTestid = uuidv4();
    render(<PageHeader data-testid={dataTestid} />);
    screen.getByTestId(dataTestid);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<PageHeader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  test('collapse button works', () => {
    const dataTestid = uuidv4();
    render(
      <PageHeader
        {...testProps}
        showCollapseHeaderButton
        data-testid={dataTestid}
      />
    );

    // console.dir(screen.getByRole('region')); // section should be a region https://fae.disability.illinois.edu/rulesets/ROLE_5/
    // const header = screen.getByTestId(dataTestid);
    const collapseButton = screen.getByText('Toggle expansion');

    // const prevCalls = window.scrollTo.callCount;
    // console.dir(window.scrollTo);
    window.scrollTo.mockReset();
    expect(window.scrollTo).not.toHaveBeenCalled();
    userEvent.click(collapseButton);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  test('Navigation row renders when Navigation but no tags', () => {
    const { navigation } = testProps;
    render(<PageHeader {...{ navigation }} />);

    expect(screen.queryAllByTestId('tabs')).toHaveLength(1);
  });

  test('Navigation row renders when Tags but no Navigation', () => {
    const { tags } = testProps;
    render(<PageHeader {...{ tags }} />);

    expect(
      screen.getAllByText('A tag', {
        // selector need to ignore sizing items
        selector: `.${pkg.prefix}--tag-set__displayed-tag .${carbon.prefix}--tag span`,
      })
    ).toHaveLength(4);
  });

  test('Title row renders when PageActions but no Title', () => {
    const { pageActions } = testProps;
    render(<PageHeader {...{ pageActions }} />);

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

  test('Breadcrumb row renders when breadcrumb but no action bar items', () => {
    render(
      <PageHeader
        {...prepareProps(testProps, 'actionBarItems', 'pageActions')}
      />
    );

    expect(
      screen.getAllByText(/Breadcrumb [1-3]/, {
        // selector need to ignore sizing items
        selector: `.${pkg.prefix}--breadcrumb-with-overflow__breadcrumb-container:not(.${pkg.prefix}--breadcrumb-with-overflow__breadcrumb-container--hidden) .${carbon.prefix}--link`,
      })
    ).toHaveLength(3);
  });

  test('Breadcrumb row renders when action bar items but no breadcrumb', () => {
    render(<PageHeader {...prepareProps(testProps, 'breadcrumbItems')} />);

    // screen.getByText(/Action/);
    const actionBarItems = document.querySelectorAll(
      `.${blockClass}__action-bar`
    );
    expect(actionBarItems).toHaveLength(1);
  });
});
