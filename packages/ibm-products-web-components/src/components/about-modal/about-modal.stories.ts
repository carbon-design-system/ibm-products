/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, TemplateResult } from 'lit';
import './index';
import { prefix } from '../../globals/settings';
import '@carbon/web-components/es/components/button/index.js';
import styles from './story-styles.scss?lit';
import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';
import '@carbon/web-components/es/components/link/index.js';

const storyPrefix = 'about-modal-stories__';
const blockClass = `${prefix}--about-modal`;
const openModal = () => {
  const modal = document
    .querySelector(`${prefix}-about-modal`)
    ?.toggleAttribute('open');
};

const argTypes = {
  closeIconDescription: {
    control: 'text',
    description: 'The accessibility title for the close icon.',
  },
  copyrightText: {
    control: 'text',
    description:
      'Trademark and copyright information. Displays first year of product release to current year.',
  },
  logo: {
    control: false,
    description: 'A visual symbol used to represent the product.',
  },
  title: {
    control: 'select',
    description: 'label',
    options: {
      'No label': 0,
      'Shorter label': 1,
      'Longer label': 2,
    },
  },
  version: {
    control: 'text',
    description:
      'Text that provides information on the version number of your product.',
  },
  additionalInfo: {
    control: 'select',
    description:
      'If you are legally required to display logos of technologies used to build your product you can provide this in the additionalInfo. Additional information will be displayed in the footer.',
    options: {
      'no additional info': 0,
      'powered by logos': 1,
    },
  },
  content: {
    control: 'select',
    description:
      'Subhead text providing any relevant product disclaimers including legal information (optional)',
    options: {
      'no content': 0,
      'short content': 1,
      'medium content': 2,
      'long content': 3,
    },
  },
  links: {
    control: 'select',
    description:
      'An array of Carbon `Link` component if there are additional information to call out within the card. The about modal should be used to display the product information and not where users go to find help (optional) text providing any relevant product disclaimers including legal information (optional)',
    options: {
      none: 0,
      'one link': 1,
      'two links': 2,
      'three links': 3,
    },
  },
  modalAriaLabel: {
    control: 'text',
    description: 'Specifies aria label for AboutModal',
  },
};

const logo = html`
  <img
    src=${ExampleLogo}
    alt="Example product or service logo"
    style="max-width: 6rem"
  />
`;

const getTitle = (index) => {
  switch (index) {
    case 0:
      return html`IBM Product name`;
    case 1:
      return html`IBM Product name example that is longer than one line`;
    case 2:
      return html`IBM <span style="font-weight: 600">Product name</span>`;
    default:
      return null;
  }
};

const getAdditionalInfo = (index) => {
  switch (index) {
    case 1:
      return html`
        <p class=${`${blockClass}__footer-label`}>Powered by</p>
        <img
          src=${grafanaLogo}
          alt="Grafana"
          class=${`${blockClass}__footer--tech-logo`}
        />
        <img
          src=${ansibleLogo}
          alt="Ansible"
          class=${`${blockClass}__footer--tech-logo`}
        />
        <img
          src=${jsLogo}
          alt="JavaScript"
          class=${`${blockClass}__footer--tech-logo`}
        />
      `;
    default:
      return null;
  }
};

const getContent = (index) => {
  switch (index) {
    case 1:
      return html`This Web site contains proprietary notices and copyright
      information, the terms of which must be observed and followed.`;
    case 2:
      return html`This Web site contains proprietary notices and copyright
      information, the terms of which must be observed and followed. Please see
      the tab entitled 'Copyright and trademark information' for related
      information. IBM grants you a non-exclusive, non-transferable, limited
      permission to access and display the Web pages within this site as a
      customer or potential customer of IBM provided you comply with these Terms
      of Use, and all copyright, trademark, and other proprietary notices remain
      intact.`;
    case 3:
      return html`This Web site contains proprietary notices and copyright
      information, the terms of which must be observed and followed. Please see
      the tab entitled 'Copyright and trademark information' for related
      information. IBM grants you a non-exclusive, non-transferable, limited
      permission to access and display the Web pages within this site as a
      customer or potential customer of IBM provided you comply with these Terms
      of Use, and all copyright, trademark, and other proprietary notices remain
      intact. You may only use a crawler to crawl this Web site as permitted by
      this Web site's robots.txt protocol, and IBM may block any crawlers in its
      sole discretion. The use authorized under this agreement is non-commercial
      in nature (e.g., you may not sell the content you access on or through
      this Web site.) All other use of this site is prohibited. Except for the
      limited permission in the preceding paragraph, IBM does not grant you any
      express or implied rights or licenses under any patents, trademarks,
      copyrights, or other proprietary or intellectual property rights. You may
      not mirror any of the content from this site on another Web site or in any
      other media. Any software and other materials that are made available for
      downloading, access, or other use from this site with their own license
      terms will be governed by such terms, conditions, and notices. Your
      failure to comply with such terms or any of the terms on this site will
      result in automatic termination of any rights granted to you, without
      prior notice, and you must immediately destroy all copies of downloaded
      materials in your possession, custody or control. This Web site contains
      proprietary notices and copyright information, the terms of which must be
      observed and followed. Please see the tab entitled “Copyright and
      trademark information” for related information. IBM grants you a
      non-exclusive, non-transferable, limited permission to access and display
      the Web pages within this site as a customer or potential customer of IBM
      provided you comply with these Terms of Use, and all copyright, trademark,
      and other proprietary notices remain intact. You may only use a crawler to
      crawl this Web site as permitted by this Web site’s robots.txt protocol,
      and IBM may block any crawlers in its sole discretion. The use authorized
      under this agreement is non-commercial in nature (e.g., you may not sell
      the content you access on or through this Web site.) All other use of this
      site is prohibited. Except for the limited permission in the preceding
      paragraph, IBM does not grant you any express or implied rights or
      licenses under any patents, trademarks, copyrights, or other proprietary
      or intellectual property rights. You may not mirror any of the content
      from this site on another Web site or in any other media. Any software and
      other materials that are made available for downloading, access, or other
      use from this site with their own license terms will be governed by such
      terms, conditions, and notices. Your failure to comply with such terms or
      any of the terms on this site will result in automatic termination of any
      rights granted to you, without prior notice, and you must immediately
      destroy all copies of downloaded materials in your possession, custody or
      control.`;
    default:
      return null;
  }
};

const getLinks = (index) => {
  if (index > 0) {
    const links: TemplateResult[] = [];
    for (let i = 0; i < index; i++) {
      const link = html`<cds-link href="#"> Link action </cds-link>`;
      links.push(link);
    }
    return links;
  } else {
    return null;
  }
};

const renderTemplate = (args) => {
  return html`
    <style>
      ${styles}
    </style>
    <div class="${storyPrefix}story-container">
      <div class="${storyPrefix}story-header"></div>
      <div id="page-content-selector" class="${storyPrefix}story-content">
        <cds-button @click="${openModal}">Reopen the About Modal</cds-button>
      </div>
    </div>
    <c4p-about-modal
      closeIconDescription=${args.closeIconDescription}
      copyrightText=${args.copyrightText}
      .logo=${args.logo}
      .title=${getTitle(args.title)}
      .version=${args.version}
      .additionalInfo=${getAdditionalInfo(args.additionalInfo)}
      .content=${getContent(args.content)}
      .links=${getLinks(args.links)}
      aria-label=${args.modalAriaLabel}
    ></c4p-about-modal>
  `;
};

export const Default = {
  args: {
    closeIconDescription: 'close',
    copyrightText: 'Copyright © IBM Corp. 2020, 2023',
    logo: logo,
    title: 2,
    version: 'Version 0.0.0',
    additionalInfo: 0,
    content: 0,
    links: 0,
    modalAriaLabel: '',
  },
  argTypes,
  render: renderTemplate,
};

export const AboutModalWithAllPropsSet = {
  args: {
    closeIconDescription: 'close',
    copyrightText: 'Copyright © IBM Corp. 2020, 2023',
    logo: logo,
    title: 2,
    version: 'Version 0.0.0',
    additionalInfo: 1,
    content: 2,
    links: 3,
    modalAriaLabel: '',
  },
  argTypes,
  render: renderTemplate,
};

const meta = {
  title: 'Experimental/AboutModal',
};

export default meta;
