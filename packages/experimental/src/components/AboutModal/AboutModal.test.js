/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Link } from 'carbon-components-react';

import '../../enable-all'; // must come before component is imported (directly or indirectly)

import { AboutModal } from '.';
import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

const content = 'This is example content';
const logo = (
  <img
    src={ExampleLogo}
    alt="Example product logo"
    style={{ maxWidth: '6rem' }}
  />
);
const title = (
  <>
    IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
  </>
);

describe('AboutModal', () => {
  test('renders title and content', () => {
    render(<AboutModal open logo={logo} content={content} title={title} />);
    expect(
      screen.getByText(/Watson AI Ops/i) && screen.getByText(content)
    ).toBeTruthy();
  });

  test('renders product logo', () => {
    const { container } = render(
      <AboutModal open logo={logo} content={content} title={title} />
    );
    const renderedProductLogo = container.querySelector('img');
    expect(renderedProductLogo).toBeTruthy();
  });

  test('renders with links', () => {
    const { getByText, container } = render(
      <AboutModal
        content={content}
        open
        logo={logo}
        title={title}
        links={[
          <Link href="https://www.carbondesignsystem.com" key="link1">
            Carbon Design System
          </Link>,
          <Link href="https://www.ibm.com/design/language" key="link2">
            IBM Design Language
          </Link>,
        ]}
      />
    );

    const { click } = fireEvent;
    const link = container.querySelector('a').href;
    click(getByText('Carbon Design System'));
    expect(link.length && link).toEqual('https://www.carbondesignsystem.com/');
  });

  test('renders legal text', () => {
    render(
      <AboutModal
        open
        logo={logo}
        content={content}
        title={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        legalText="Legal test text"
      />
    );
    expect(screen.getByText(/Legal test text/i)).toBeTruthy();
  });

  test('renders copyright text', () => {
    render(
      <AboutModal
        open
        logo={logo}
        content={content}
        title={title}
        copyrightText="Copyright test text"
      />
    );
    expect(screen.getByText(/Copyright test text/i)).toBeTruthy();
  });

  test('renders a clickable carbon tab for additional info', () => {
    render(
      <AboutModal
        content={content}
        open
        logo={logo}
        title={title}
        legalText="This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information."
        copyrightText="Copyright IBM corporation 2020"
        additionalInfo={[
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
        ]}
      />
    );
    const { click } = fireEvent;
    const tabToSelect = screen.getByRole('tab', { name: /Version number/i });
    click(tabToSelect);
    expect(tabToSelect.classList.contains('bx--tabs__nav-item--selected'));
  });

  test('render modal in light theme', () => {
    const { container } = render(
      <AboutModal
        open
        logo={logo}
        content={content}
        title={title}
        copyrightText="Copyright test text"
        theme="light"
      />
    );
    const modalContainer = container.querySelector(
      '.bx--modal.is-visible.exp-about-modal'
    );
    expect(modalContainer.classList.contains('exp-about-modal-light-theme'));
  });

  test('renders a version number', () => {
    const { getByText } = render(
      <AboutModal
        open
        logo={logo}
        content={content}
        title={title}
        additionalInfo={[{ label: 'Version number', content: '1.3.41' }]}
      />
    );
    expect(getByText(/1.3.41/i)).toBeTruthy();
  });
});
