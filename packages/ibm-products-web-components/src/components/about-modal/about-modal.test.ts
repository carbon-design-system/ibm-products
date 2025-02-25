/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi } from 'vitest';
import { render, html, TemplateResult } from 'lit';
import styles from './story-styles.scss?lit';
import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

const logo = html`
  <img
    src=${ExampleLogo}
    alt="Example product or service logo"
    style="max-width: 6rem"
  />
`;
const additionalInfo = html`
  <p class=${`c4p__footer-label`}>Powered by</p>
  <img src=${grafanaLogo} alt="Grafana" class=${`c4p__footer--tech-logo`} />
  <img src=${ansibleLogo} alt="Ansible" class=${`c4p__footer--tech-logo`} />
  <img src=${jsLogo} alt="JavaScript" class=${`c4p__footer--tech-logo`} />
`;
const content = html`This Web site contains proprietary notices and copyright
information, the terms of which must be observed and followed. Please see the
tab entitled 'Copyright and trademark information' for related information. IBM
grants you a non-exclusive, non-transferable, limited permission to access and
display the Web pages within this site as a customer or potential customer of
IBM provided you comply with these Terms of Use, and all copyright, trademark,
and other proprietary notices remain intact.`;
const defaultProps = {
  closeIconDescription: 'close',
  copyrightText: 'Copyright © IBM Corp. 2020, 2023',
  logo: logo,
  title: 'IBM Product name',
  version: 'Version 0.0.0',
  additionalInfo: additionalInfo,
  content: content,
  links: false,
};
const links: TemplateResult[] = [];
const index = 3;
for (let i = 0; i < index; i++) {
  const link = html`<cds-link href="#"> Link action </cds-link>`;
  links.push(link);
}
const template = (props = defaultProps) => html`
  <c4p-about-modal
    open
    closeIconDescription=${props.closeIconDescription}
    copyrightText=${props.copyrightText}
    .logo=${props.logo}
    .title=${props.title}
    .version=${props.version}
    .additionalInfo=${props.additionalInfo}
    .content=${props.content}
    .links=${props.links}
    aria-label="label"
  >
  </c4p-about-modal>
`;

describe('c4p-about-modal', () => {
  it('should render about modal', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const elem = document.body.querySelector('c4p-about-modal' as any);
    expect(elem).toBeDefined();
  });
});
