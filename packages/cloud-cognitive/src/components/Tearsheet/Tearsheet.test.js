/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  expectWarn,
  expectMultipleError,
  required,
} from '../../global/js/utils/test-helper';

import uuidv4 from '../../global/js/utils/uuidv4';
import { carbon, pkg } from '../../settings';

import { Button, ButtonSet, Tab, Tabs } from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '.';
import { CreateTearsheetNarrow } from '../CreateTearsheetNarrow';

const blockClass = `${pkg.prefix}--tearsheet`;
const componentName = Tearsheet.displayName;
const componentNameNarrow = TearsheetNarrow.displayName;
const componentNameCreateNarrow = CreateTearsheetNarrow.displayName;

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
  { kind: 'danger--tertiary' },
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
    <Tabs data-testid="tabs">
      <Tab label={tabLabel1} />
      <Tab label={tabLabel2} />
      <Tab label={tabLabel3} />
      <Tab label={tabLabel4} />
    </Tabs>
  </div>
);
const title = `Title of the ${uuidv4()} tearsheet`;

// These are tests than apply to both Tearsheet and TearsheetNarrow
// and also (with extra props and omitting button tests) to CreateTearsheetNarrow
let tooManyButtonsTestedAlready = false;
let closeIconDescriptionTestedAlready = false;
const commonTests = (Ts, name, props, testActions) => {
  it(`renders a component ${name}`, () => {
    render(<Ts {...{ ...props, closeIconDescription }} />);
    expect(document.querySelector(`.${carbon.prefix}--modal`)).toHaveClass(
      blockClass
    );
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Ts {...{ ...props, closeIconDescription, label, title }} />
    );
    await expect(container).toBeAccessible(name);
    await expect(container).toHaveNoAxeViolations();
  });

  it('omits main content sections when no props supplied and no close icon requested', () => {
    render(<Ts {...props} hasCloseIcon={false} />);
    expect(document.querySelector(`.${blockClass}__header`)).toBeNull();
    expect(document.querySelector(`.${blockClass}__influencer`)).toBeNull();

    if (testActions) {
      expect(document.querySelector(`.${blockClass}__main`)).toBeNull();
      expect(document.querySelector(`.${blockClass}__buttons`)).toBeNull();
    }

    expect(document.querySelector(`.${carbon.prefix}--modal`)).not.toHaveClass(
      'is-visible'
    );
  });

  if (testActions) {
    it('renders buttons', () => {
      render(<Ts {...{ ...props, actions }} />);
      expect(document.querySelector(`.${blockClass}__buttons`)).not.toBeNull();
      expect(onClick).toHaveBeenCalledTimes(0);
      userEvent.click(screen.getByText(createButton));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('rejects too many buttons using the custom validator', () =>
      expectMultipleError(
        // prop-types only reports the first occurrence of each distinct error,
        // which creates an unfortunate dependency between test runs
        tooManyButtonsTestedAlready
          ? [
              `Invalid prop \`actions\` supplied to \`${name}\`: you cannot have more than four actions`,
            ]
          : [
              `Invalid prop \`actions\` supplied to \`${name}\`: you cannot have more than four actions`,
              'Invalid prop `actions[4].kind` of value `danger--tertiary` supplied to `TearsheetShell`',
              'Invalid prop `actions` supplied to `ActionSet`: you cannot have more than four actions',
              'Invalid prop `kind` of value `danger--tertiary` supplied to `ActionSetButton`',
            ],
        () => {
          tooManyButtonsTestedAlready = true;
          render(<Ts {...props} actions={badActions} />);
        }
      ));
  }

  it('renders children', () => {
    render(<Ts {...{ ...props, closeIconDescription }}>{children}</Ts>);
    expect(document.querySelector(`.${blockClass}__main`)).not.toBeNull();
    screen.getByText(childFragment);
  });

  it('applies className to the root node', () => {
    render(<Ts {...{ ...props, className, closeIconDescription }} />);
    expect(document.querySelector(`.${carbon.prefix}--modal`)).toHaveClass(
      className
    );
  });

  it('responds to hasCloseIcon and renders closeIconDescription', () => {
    render(<Ts {...{ ...props, closeIconDescription }} hasCloseIcon />);
    expect(document.querySelector(`.${blockClass}__header`)).not.toBeNull();
    screen.getByRole('button', { name: closeIconDescription });
  });

  if (testActions) {
    it('requires closeIconDescription when there are no actions', () =>
      expectMultipleError(
        // prop-types only reports the first occurrence of each distinct error,
        // which creates an unfortunate dependency between test runs
        closeIconDescriptionTestedAlready
          ? [required('closeIconDescription', name)]
          : [
              required('closeIconDescription', name),
              required('closeIconDescription', 'TearsheetShell'),
            ],
        () => {
          render(<Ts {...props} />);
          closeIconDescriptionTestedAlready = true;
        }
      ));
  }

  it('renders description', () => {
    render(<Ts {...{ ...props, closeIconDescription, description }} />);
    screen.getByText(descriptionFragment);
  });

  it('renders label', () => {
    render(<Ts {...{ ...props, closeIconDescription, label }} />);
    screen.getByText(label);
  });

  if (testActions) {
    it('calls onClose() when the tearsheet is closed', () => {
      render(
        <Ts
          {...{ ...props, closeIconDescription }}
          hasCloseIcon
          onClose={onCloseReturnsTrue}
          open
        />
      );
      const tearsheet = document.querySelector(`.${carbon.prefix}--modal`);
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
          {...{ ...props, closeIconDescription }}
          hasCloseIcon
          onClose={onCloseReturnsFalse}
          open
        />
      );
      const tearsheet = document.querySelector(`.${carbon.prefix}--modal`);
      const closeButton = screen.getByRole('button', {
        name: closeIconDescription,
      });
      expect(tearsheet).toHaveClass('is-visible');
      expect(onCloseReturnsFalse).toHaveBeenCalledTimes(0);
      userEvent.click(closeButton);
      expect(tearsheet).toHaveClass('is-visible');
      expect(onCloseReturnsFalse).toHaveBeenCalledTimes(1);
    });
  }

  it('is visible when open is true', () => {
    render(<Ts {...props} open />);
    expect(document.querySelector(`.${carbon.prefix}--modal`)).toHaveClass(
      'is-visible'
    );
  });

  it('renders title', () => {
    render(<Ts {...{ ...props, title }} />);
    screen.getByText(title);
  });

  it('renders verticalPosition', () => {
    render(<Ts {...props} verticalPosition="lower" />);
    expect(screen.getByRole('dialog')).toHaveClass(
      `${blockClass}__container--lower`
    );
  });

  it('adds additional properties to the containing node', () => {
    render(<Ts {...props} data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<Ts {...{ ...props, ref }} />);
    expect(ref.current.outerModal.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<Ts {...props} data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(name);
  });

  it("doesn't render when stacked more than three deep", () =>
    expectWarn(
      'Tearsheet not rendered: maximum stacking depth exceeded.',
      () => {
        render(<Ts {...props} open />);
        render(<Ts {...props} open />);
        render(<Ts {...props} open />);
        render(<Ts {...props} open />);
        expect(
          document.querySelectorAll(`.${carbon.prefix}--modal.is-visible`)
        ).toHaveLength(3);
      }
    ));
};

const initialDefaultPortalTargetBody = pkg.isFeatureEnabled(
  'default-portal-target-body',
  true
);

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    pkg.feature['default-portal-target-body'] = false;
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  commonTests(Tearsheet, componentName, {}, true);

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
    pkg.feature['default-portal-target-body'] = false;
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  commonTests(TearsheetNarrow, componentNameNarrow, {}, true);
});

describe(componentNameCreateNarrow, () => {
  const { ResizeObserver } = window;

  beforeAll(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    pkg.feature['default-portal-target-body'] = false;
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
    pkg.feature['default-portal-target-body'] = initialDefaultPortalTargetBody;
  });

  commonTests(
    CreateTearsheetNarrow,
    componentNameCreateNarrow,
    {
      children: 'Body',
      formTitle: 'Title',
      primaryButtonText: 'Primary',
      secondaryButtonText: 'Secondary',
    },
    false
  );
});
