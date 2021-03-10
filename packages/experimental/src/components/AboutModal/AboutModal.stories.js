/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { Button, Link } from 'carbon-components-react';

import mdx from './AboutModal.mdx';

import ExampleLogo from './example-logo.svg';
import ansibleLogo from './technologyUsedLogos/ansible_logo.png';
import grafanaLogo from './technologyUsedLogos/grafana_logo.png';
import jsLogo from './technologyUsedLogos/js_logo.png';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, 'AboutModal');

import { AboutModal } from './AboutModal';

import styles from './_index.scss';

export default {
  title: `${storybookPrefix}/AboutModal`,
  component: AboutModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const logo = (
  <img
    src={ExampleLogo}
    alt="Example product logo"
    style={{ maxWidth: '6rem' }}
  />
);

const Template = ({ storyInitiallyOpen = true, story, ...other }) => {
  const [open, setOpen] = useState(storyInitiallyOpen);
  console.dir(this);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {story?.storyName}</Button>

      <style>{`.${pkg.prefix}-about-modal { opacity: 0 }`};</style>
      <AboutModal
        open={open}
        onClose={() => setOpen(false)}
        logo={logo}
        title={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
        content={
          <>
            This is example content for an {story?.storyName || 'About Modal'}.
          </>
        }
        versionNumber="0.0.1"
        {...other}
      />
    </>
  );
};

export const Basic = Template.bind({});
Basic.storyName = 'About Modal';
Basic.args = {
  story: Basic,
};

export const withLinksAndLegalAndCopyrightText = Template.bind({});
withLinksAndLegalAndCopyrightText.storyName =
  'About Modal with links and legal and copyright text';
withLinksAndLegalAndCopyrightText.args = {
  story: withLinksAndLegalAndCopyrightText,
  links: [
    <Link href="https://www.carbondesignsystem.com" key="link1">
      Carbon Design System
    </Link>,
    <Link href="https://www.ibm.com/design/language" key="link2">
      IBM Design Language
    </Link>,
  ],
  legalText:
    'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information.',
  copyrightText: <>Copyright &copy; 2020 IBM corporation</>,
};

export const withTechnologyUsedTab = Template.bind({});
withTechnologyUsedTab.storyName = 'About Modal with technologies used';
withTechnologyUsedTab.args = {
  story: withTechnologyUsedTab,
  technologiesUsed: [
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
  ],
};

export const withAllPropsSet = Template.bind({});
withAllPropsSet.storyName = 'About Modal with all props set';
withAllPropsSet.args = {
  ...withLinksAndLegalAndCopyrightText.args,
  ...withTechnologyUsedTab.args,
  story: withAllPropsSet,
  storyInitiallyOpen: false,
};

export const withDarkTheme = Template.bind({});
withDarkTheme.storyName = 'About Modal using dark theme';
withDarkTheme.args = {
  story: withDarkTheme,
  storyInitiallyOpen: false,
  className: 'sb--use-carbon-theme-g90',
};

export const withScroll = Template.bind({});
withScroll.storyName = 'About Modal with scrolling';
withScroll.args = {
  story: withScroll,
  legalText:
    'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control. This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control.',
  copyrightText: <>Copyright &copy; 2020 IBM corporation</>,
};
