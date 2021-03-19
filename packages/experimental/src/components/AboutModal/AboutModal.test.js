/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { pkg, carbon } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

import { Link } from 'carbon-components-react';
import { AboutModal } from '.';

import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

const blockClass = `${pkg.prefix}--about-modal`;
const componentName = AboutModal.displayName;

const { click } = fireEvent;

const additionalInfo = [
  { label: 'Version number', content: '1.3.41' },
  {
    label: 'Technologies used',
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
const content = `This is example content: ${uuidv4()}`;
const copyrightText = `Copyright test text ${uuidv4()}`;
const dataTestId = uuidv4();
const logo = (
  <img
    src={ExampleLogo}
    alt="Example product logo"
    style={{ maxWidth: '6rem' }}
  />
);
const legalText = `Legal test text ${uuidv4()}`;
const links = [
  <Link href="https://www.carbondesignsystem.com" key="link1">
    Carbon Design System
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

describe(componentName, () => {
  it('renders a component AboutModal', () => {
    const { container } = render(
      <AboutModal open {...{ content, logo, title }} />
    );
    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <AboutModal open {...{ content, logo, title }} />
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('renders title and content', () => {
    render(<AboutModal open {...{ content, logo, title }} />);
    expect(
      screen.getByText(titleText) && screen.getByText(content)
    ).toBeTruthy();
  });

  it('renders product logo', () => {
    const { container } = render(
      <AboutModal open {...{ content, logo, title }} />
    );
    const renderedProductLogo = container.querySelector('img');
    expect(renderedProductLogo).toBeTruthy();
  });

  it('renders with links', () => {
    const { getByText, container } = render(
      <AboutModal open {...{ content, links, logo, title }} />
    );

    const link = container.querySelector('a').href;
    click(getByText('Carbon Design System'));
    expect(link.length && link).toEqual('https://www.carbondesignsystem.com/');
  });

  it('renders legal text', () => {
    render(<AboutModal open {...{ content, legalText, logo, title }} />);
    expect(screen.getByText(legalText)).toBeTruthy();
  });

  it('renders copyright text', () => {
    render(<AboutModal open {...{ content, copyrightText, logo, title }} />);
    expect(screen.getByText(copyrightText)).toBeTruthy();
  });

  it('renders a clickable carbon tab for additional info', () => {
    render(
      <AboutModal
        open
        {...{ additionalInfo, content, copyrightText, legalText, logo, title }}
      />
    );
    const tabToSelect = screen.getByRole('tab', { name: /Version number/i });
    click(tabToSelect);
    expect(
      tabToSelect.parentElement.classList.contains(
        `${carbon.prefix}--tabs__nav-item--selected`
      )
    ).toBeTruthy();
  });

  it('renders a version number', () => {
    const { getByText } = render(
      <AboutModal
        open
        {...{ content, logo, title }}
        additionalInfo={[{ label: 'Version number', content: versionNumber }]}
      />
    );
    expect(getByText(versionNumber)).toBeTruthy();
  });

  it('is visible when open is true', () => {
    const { container } = render(
      <AboutModal open logo={logo} content={content} title={title} />
    );
    const aboutModal = container.querySelector(`.${carbon.prefix}--modal`);
    expect(aboutModal.classList.contains('is-visible')).toBeTruthy();
  });

  it('is not visible when open is not true', () => {
    const { container } = render(
      <AboutModal open={false} {...{ content, logo, title }} />
    );
    const aboutModal = container.querySelector(`.${carbon.prefix}--modal`);
    expect(aboutModal.classList.contains('is-visible')).toBeFalsy();
  });

  it('applies className to the root node', () => {
    const { container } = render(
      <AboutModal open {...{ className, content, logo, title }} />
    );
    const aboutModal = container.querySelector(`.${carbon.prefix}--modal`);
    expect(aboutModal.classList.contains(className)).toBeTruthy();
  });

  it('calls onClose() when modal is closed', () => {
    const { container } = render(
      <AboutModal
        open
        {...{ content, logo, title }}
        onClose={onCloseReturnsTrue}
      />
    );
    const aboutModal = container.querySelector(`.${carbon.prefix}--modal`);
    const closeButton = aboutModal.querySelector(
      `.${carbon.prefix}--modal-close`
    );

    expect(aboutModal.classList.contains('is-visible')).toBeTruthy();
    expect(onCloseReturnsTrue).toHaveBeenCalledTimes(0);
    click(closeButton);
    expect(aboutModal.classList.contains('is-visible')).toBeFalsy();
    expect(onCloseReturnsTrue).toHaveBeenCalledTimes(1);
  });

  it('calls onClose() when modal is closed and allows veto of close', () => {
    const { container } = render(
      <AboutModal
        open
        {...{ content, logo, title }}
        onClose={onCloseReturnsFalse}
      />
    );
    const aboutModal = container.querySelector(`.${carbon.prefix}--modal`);
    const closeButton = aboutModal.querySelector(
      `.${carbon.prefix}--modal-close`
    );

    expect(aboutModal.classList.contains('is-visible')).toBeTruthy();
    expect(onCloseReturnsFalse).toHaveBeenCalledTimes(0);
    click(closeButton);
    expect(aboutModal.classList.contains('is-visible')).toBeTruthy();
    expect(onCloseReturnsFalse).toHaveBeenCalledTimes(1);
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <AboutModal open {...{ content, logo, title }} data-testid={dataTestId} />
    );
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<AboutModal open {...{ content, logo, ref, title }} />);
    expect(
      ref.current.outerModal.current.classList.contains(blockClass)
    ).toBeTruthy();
  });
});
