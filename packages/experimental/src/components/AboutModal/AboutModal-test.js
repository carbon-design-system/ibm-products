/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { AboutModal } from './AboutModal';
import ExampleLogo from './example-logo.svg';
import ansibleLogo from './technologyUsedLogos/ansible_logo.png';
import grafanaLogo from './technologyUsedLogos/grafana_logo.png';
import jsLogo from './technologyUsedLogos/js_logo.png';

describe('AboutModal', () => {
  test('renders title and description', () => {
    render(
      <AboutModal
        open
        logo={ExampleLogo}
        body="This is an example description"
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
      />
    );
    expect(
      screen.getByText(/Watson AI Ops/i) &&
        screen.getByText(/This is an example description/i)
    ).toBeTruthy();
  });

  test('renders product logo', () => {
    const { container } = render(
      <AboutModal
        open
        logo={ExampleLogo}
        body="This is an example description"
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
      />
    );
    const renderedProductLogo = container.querySelector('img');
    expect(renderedProductLogo).toBeTruthy();
  });

  test('renders with link', () => {
    const { getByText, container } = render(
      <AboutModal
        body="This is an example description"
        open
        logo={ExampleLogo}
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
        links={[
          {
            url: 'https://www.carbondesignsystem.com/',
            text: 'Carbon Design System',
          },
          {
            url: 'https://www.ibm.com/design/language/',
            text: 'IBM Design Language',
          },
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
        logo={ExampleLogo}
        body="This is an example description"
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
        legalText="Legal test text"
      />
    );
    expect(screen.getByText(/Legal test text/i)).toBeTruthy();
  });

  test('renders copyright text', () => {
    render(
      <AboutModal
        open
        logo={ExampleLogo}
        body="This is an example description"
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
        copyrightText="Copyright test text"
      />
    );
    expect(screen.getByText(/Copyright test text/i)).toBeTruthy();
  });

  test('renders a clickable carbon tab for technologies used', () => {
    render(
      <AboutModal
        body="This is an example description"
        open
        logo={ExampleLogo}
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
        legalText="This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information."
        copyrightText="Copyright IBM corporation 2020"
        technologiesUsed={[
          {
            src: grafanaLogo,
            alt: 'Logo for grafana',
          },
          {
            src: ansibleLogo,
            alt: 'Logo for ansible',
          },
          {
            src: jsLogo,
            alt: 'Logo for javascript',
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
        logo={ExampleLogo}
        body="This is an example description"
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
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
        logo={ExampleLogo}
        body="This is an example description"
        productName={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        versionNumber="0.0.1"
      />
    );
    expect(getByText(/0.0.1/i)).toBeTruthy();
  });
});
