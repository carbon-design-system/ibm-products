/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// cspell:words grafana

import React, { useEffect, useState } from 'react';

import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { AboutModal } from '.';

import { Button, Link } from 'carbon-components-react';

import mdx from './AboutModal.mdx';

import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

import styles from './_storybook-styles.scss';

const blockClass = `${pkg.prefix}--about-modal`;

export default {
  title: getStoryTitle(AboutModal.displayName),
  component: AboutModal,
  parameters: {
    styles,
    docs: { page: mdx },
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    additionalInfo: {
      control: {
        type: 'select',
        labels: {
          0: 'none',
          1: 'version number',
          2: 'version number and technologies used',
        },
      },
      options: [0, 1, 2],
      mapping: {
        0: null,
        1: [{ label: 'Version number', content: '1.3.41' }],
        2: [
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
        ],
      },
    },
    links: {
      control: {
        type: 'select',
        labels: { 0: 'none', 1: 'one link', 2: 'two links' },
      },
      options: [0, 1, 2],
      mapping: {
        0: null,
        1: [
          <Link href="https://www.carbondesignsystem.com" key="link1">
            Carbon Design System
          </Link>,
        ],
        2: [
          <Link href="https://www.carbondesignsystem.com" key="link1">
            Carbon Design System
          </Link>,
          <Link href="https://www.ibm.com/design/language" key="link2">
            IBM Design Language
          </Link>,
        ],
      },
    },
    logo: {
      control: {
        disable: true,
      },
    },
    open: {
      control: {
        disable: true,
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

const Template = (storyName, storyInitiallyOpen, props) => {
  const [open, setOpen] = useState(storyInitiallyOpen);
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
        open={open}
      />
    </>
  );
};

Template.propTypes = AboutModal.propTypes;

const commonArgs = {
  closeIconDescription: 'Close',
  title: (
    <>
      IBM{' '}
      <span
        style={
          // stylelint-disable-next-line carbon/type-token-use
          { fontWeight: '600' }
        }
      >
        Watson AI Ops
      </span>
    </>
  ),
  content: <>This is example content for an About Modal.</>,
};

const aboutModalStoryName = 'About modal';
export const aboutModal = prepareStory(
  Template.bind({}, aboutModalStoryName, true),
  {
    storyName: aboutModalStoryName,
    args: {
      additionalInfo: 1,
      ...commonArgs,
    },
  }
);

const withAllBodyStoryName =
  'About modal with links and legal and copyright text';
export const withAllBody = prepareStory(
  Template.bind({}, withAllBodyStoryName, true),
  {
    storyName: withAllBodyStoryName,
    args: {
      additionalInfo: 1,
      copyrightText: <>Copyright &copy; 2020 IBM corporation</>,
      legalText:
        'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information.',
      links: 2,
      ...commonArgs,
    },
  }
);

const withAddInfoStoryName = 'About modal with additional info';
export const withAddInfo = prepareStory(
  Template.bind({}, withAddInfoStoryName, true),
  {
    storyName: withAddInfoStoryName,
    args: {
      additionalInfo: 2,
      ...commonArgs,
    },
  }
);

const fullyLoadedStoryName = 'About modal with all props set';
export const fullyLoaded = prepareStory(
  Template.bind({}, fullyLoadedStoryName, false),
  {
    storyName: fullyLoadedStoryName,
    args: { ...withAllBody.args, ...withAddInfo.args },
  }
);

const withDarkThemeStoryName = 'About modal using dark theme';
export const withDarkTheme = prepareStory(
  Template.bind({}, withDarkThemeStoryName, false),
  {
    storyName: withDarkThemeStoryName,
    args: {
      additionalInfo: 1,
      className: 'sb--use-carbon-theme-g90',
      ...commonArgs,
    },
  }
);

const withScrollStoryName = 'About modal with scrolling';
export const withScroll = prepareStory(
  Template.bind({}, withScrollStoryName, true),
  {
    storyName: withScrollStoryName,
    args: {
      additionalInfo: 1,
      copyrightText: <>Copyright &copy; 2020 IBM corporation</>,
      legalText:
        'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control. This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control.',
      ...commonArgs,
    },
  }
);
