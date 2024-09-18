/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// cspell:words grafana

import React, { useEffect, useState } from 'react';

import { pkg } from '../../settings';
import { AboutModal } from '.';

import { Button, Link } from '@carbon/react';

import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

import styles from './_storybook-styles.scss?inline';

const blockClass = `${pkg.prefix}--about-modal`;

import DocsPage from './AboutModal.docs-page';

export default {
  title: 'IBM Products/Components/About modal/AboutModal',
  component: AboutModal,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    additionalInfo: {
      control: {
        type: 'select',
        labels: {
          0: 'no additional info',
          1: 'powered by logos',
        },
      },
      options: [0, 1],
      mapping: {
        0: null,
        1: (
          <>
            <p className={`${blockClass}__footer-label`}>Powered by</p>
            <img
              src={grafanaLogo}
              alt="Grafana"
              className={`${blockClass}__stories--tech-logo`}
            />
            <img
              src={ansibleLogo}
              alt="Ansible"
              className={`${blockClass}__stories--tech-logo`}
            />
            <img
              src={jsLogo}
              alt="JavaScript"
              className={`${blockClass}__stories--tech-logo`}
            />
          </>
        ),
      },
    },
    links: {
      control: {
        type: 'select',
        labels: { 0: 'none', 1: 'one link', 2: 'two links', 3: 'three links' },
      },
      options: [0, 1, 2, 3],
      mapping: {
        0: null,
        1: [
          <Link href="#" key="link1">
            Link action
          </Link>,
        ],
        2: [
          <Link href="#" key="link1">
            Link action
          </Link>,
          <Link href="#" key="link2">
            Link action
          </Link>,
        ],
        3: [
          <Link href="#" key="link1">
            Link action
          </Link>,
          <Link href="#" key="link2">
            Link action
          </Link>,
          <Link href="#" key="link3">
            Link action
          </Link>,
        ],
      },
    },
    content: {
      control: {
        type: 'select',
        labels: {
          0: 'no content',
          1: 'short content',
          2: 'medium content',
          3: 'long content',
        },
      },
      options: [0, 1, 2, 3],
      mapping: {
        0: null,
        1: 'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed.',
        2: "This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled 'Copyright and trademark information' for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact.",
        3: "This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled 'Copyright and trademark information' for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site's robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control. This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control.",
      },
    },
    logo: {
      control: false,
    },
    open: {
      control: false,
    },
    title: {
      control: {
        type: 'select',
        labels: {
          0: 'short title',
          1: 'long title',
          2: 'short title with formatting',
        },
      },
      options: [0, 1, 2],
      mapping: {
        0: <>IBM Product name</>,
        1: <>IBM Product name example that is longer than one line</>,
        2: (
          <>
            IBM{' '}
            <span
              style={
                // stylelint-disable-next-line carbon/type-token-use
                { fontWeight: '600' }
              }
            >
              Product name
            </span>
          </>
        ),
      },
    },
  },
};

const logo = (
  <img
    src={ExampleLogo}
    alt="Example product or service logo"
    style={{ maxWidth: '6rem' }}
  />
);

const Template = (storyName, storyInitiallyOpen, props, context) => {
  const [open, setOpen] = useState(false);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        {beenOpen ? 'Reopen the' : 'Open the'} {storyName}
      </Button>

      <style>{`.${blockClass} { opacity: 0; }`};</style>
      <AboutModal
        {...props}
        onClose={() => setOpen(false)}
        logo={logo}
        modalAriaLabel="About this product"
        open={open}
      />
    </>
  );
};

Template.propTypes = AboutModal.propTypes;

const commonArgs = {
  closeIconDescription: 'Close',
  version: 'Version 0.0.0',
  copyrightText: 'Copyright © IBM Corp. 2020, 2023',
};

const aboutModalStoryName = 'About modal';
export const aboutModal = Template.bind({}, aboutModalStoryName, true);
aboutModal.storyName = aboutModalStoryName;
aboutModal.args = {
  title: 2,
  links: 0,
  content: 0,
  additionalInfo: 0,
  ...commonArgs,
};

const fullyLoadedStoryName = 'About modal with all props set';
export const aboutModalWithAllPropsSet = Template.bind(
  {},
  fullyLoadedStoryName,
  false
);
aboutModalWithAllPropsSet.storyName = fullyLoadedStoryName;
aboutModalWithAllPropsSet.args = {
  title: 2,
  links: 3,
  content: 2,
  additionalInfo: 1,
  ...commonArgs,
};
