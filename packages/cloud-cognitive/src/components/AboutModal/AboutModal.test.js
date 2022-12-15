/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// cspell:words grafana

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pkg, carbon } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';

import { Link } from 'carbon-components-react';
import { AboutModal } from '.';

import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

const blockClass = `${pkg.prefix}--about-modal`;
const componentName = AboutModal.displayName;

const tabLabel1 = `Version number ${uuidv4()}`;
const tabLabel2 = `Technologies (${uuidv4()}) used`;
const additionalInfo = [
  { label: tabLabel1, content: '1.3.41' },
  {
    label: tabLabel2,
    content: (
      <>
        <img
          src={grafanaLogo}
          alt="Grafana"
          className="about-modal-stories--tech-logo"
        />
        <img
          src={ansibleLogo}
          alt="Ansible"
          className="about-modal-stories--tech-logo"
        />
        <img
          src={jsLogo}
          alt="JavaScript"
          className="about-modal-stories--tech-logo"
        />
      </>
    ),
  },
];
const className = `class-${uuidv4()}`;
const closeIconDescription = `close ${uuidv4()}`;
const content = `This is example content: ${uuidv4()}`;
const copyrightText = `Copyright test text ${uuidv4()}`;
const dataTestId = uuidv4();
const logoAltText = `Example product ${uuidv4()} logo`;
const logo = (
  <img src={ExampleLogo} alt={logoAltText} style={{ maxWidth: '6rem' }} />
);
const legalText = `Legal test text ${uuidv4()}`;
const linkText = `Carbon (${uuidv4()}) Design System`;
const linkHref = `https://www.carbondesignsystem.com/${uuidv4()}`;
const links = [
  <Link href={linkHref} key="link1">
    {linkText}
  </Link>,
  <Link href="https://www.ibm.com/design/language" key="link2">
    IBM Design Language
  </Link>,
];
const onCloseReturnsTrue = jest.fn(() => true);
const onCloseReturnsFalse = jest.fn(() => false);
const titleText = `Watson ${uuidv4()} Ops`;
const title = (
  <>
    IBM <span>{titleText}</span>
  </>
);
const versionNumber = `1.3.${uuidv4()}`;

// render an AboutModal with content, logo, title, and any other required props
const renderComponent = ({ ...rest }) =>
  render(
    <AboutModal {...{ closeIconDescription, content, logo, title, ...rest }} />
  );

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('renders a component AboutModal', () => {
    renderComponent({ open: true });
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  xit('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('renders closeIconDescription, title, logo, and content', () => {
    renderComponent({ open: true });
    screen.getByRole('button', { name: closeIconDescription });
    screen.getByText(titleText);
    screen.getByText(content);
    screen.getByAltText(logoAltText);
  });

  it('renders with links', () => {
    renderComponent({ links, open: true });
    const link = screen.getByRole('link', { name: linkText });
    expect(link.href).toEqual(linkHref);
  });

  it('renders legal text', () => {
    renderComponent({ legalText, open: true });
    screen.getByText(legalText);
  });

  it('renders copyright text', () => {
    renderComponent({ copyrightText, open: true });
    screen.getByText(copyrightText);
  });

  it('renders a clickable carbon tab for additional info', () => {
    renderComponent({ additionalInfo, open: true });
    const tabToSelect = screen.getByRole('tab', { name: tabLabel2 });
    const tabSelected = `${carbon.prefix}--tabs__nav-item--selected`;
    expect(tabToSelect.parentElement).not.toHaveClass(tabSelected);
    userEvent.click(tabToSelect);
    expect(tabToSelect.parentElement).toHaveClass(tabSelected);
  });

  it('renders a version number', () => {
    renderComponent({
      additionalInfo: [{ label: tabLabel1, content: versionNumber }],
    });
    screen.getByText(versionNumber);
  });

  it('is visible when open is true', () => {
    renderComponent({ open: true });
    expect(screen.getByRole('presentation')).toHaveClass('is-visible');
  });

  it('is not visible when open is not true', () => {
    const { container } = renderComponent({ open: false });
    expect(container.firstChild).not.toHaveClass('is-visible');
  });

  it('applies className to the root node', () => {
    renderComponent({ className, open: true });
    expect(screen.getByRole('presentation')).toHaveClass(className);
  });

  it('calls onClose() when modal is closed', () => {
    renderComponent({ open: true, onClose: onCloseReturnsTrue });
    const aboutModal = screen.getByRole('presentation');
    const closeButton = screen.getByRole('button', {
      name: closeIconDescription,
    });
    expect(aboutModal).toHaveClass('is-visible');
    expect(onCloseReturnsTrue).toHaveBeenCalledTimes(0);
    userEvent.click(closeButton);
    expect(aboutModal).not.toHaveClass('is-visible');
    expect(onCloseReturnsTrue).toHaveBeenCalledTimes(1);
  });

  it('allows veto when modal is closed', () => {
    renderComponent({ open: true, onClose: onCloseReturnsFalse });
    const aboutModal = screen.getByRole('presentation');
    const closeButton = screen.getByRole('button', {
      name: closeIconDescription,
    });
    expect(aboutModal).toHaveClass('is-visible');
    expect(onCloseReturnsFalse).toHaveBeenCalledTimes(0);
    userEvent.click(closeButton);
    expect(aboutModal).toHaveClass('is-visible');
    expect(onCloseReturnsFalse).toHaveBeenCalledTimes(1);
  });

  it('adds additional properties to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current.outerModal.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
