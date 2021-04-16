/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';

import { AboutModal } from '.';

import { Button, Link } from 'carbon-components-react';

import mdx from './AboutModal.mdx';

import ExampleLogo from './_story-assets/example-logo.svg';
import ansibleLogo from './_story-assets/ansible-logo.png';
import grafanaLogo from './_story-assets/grafana-logo.png';
import jsLogo from './_story-assets/js-logo.png';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, AboutModal.displayName);
const blockClass = `${pkg.prefix}--about-modal`;

export default {
  title: `${storybookPrefix}/${AboutModal.displayName}`,
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
    alt="Example product or service logo"
    style={{ maxWidth: '6rem' }}
  />
);

const Template = ({ storyInitiallyOpen = true, story, ...other }) => {
  const [open, setOpen] = useState(storyInitiallyOpen);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {story?.storyName}</Button>

      <style>{`.${blockClass} { opacity: 0; }`};</style>
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
        additionalInfo={[{ label: 'Version number', content: '1.3.41' }]}
        {...other}
      />
    </>
  );
};

Template.propTypes = {
  story: PropTypes.object,
  storyInitiallyOpen: PropTypes.bool,
  ...AboutModal.propTypes,
};

export const aboutModal = Template.bind({});
aboutModal.args = {
  story: aboutModal,
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

export const withAdditionalInfo = Template.bind({});
withAdditionalInfo.storyName = 'About Modal with additional info';
withAdditionalInfo.args = {
  story: withAdditionalInfo,
  additionalInfo: [
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
};

export const withAllPropsSet = Template.bind({});
withAllPropsSet.storyName = 'About Modal with all props set';
withAllPropsSet.args = {
  ...withLinksAndLegalAndCopyrightText.args,
  ...withAdditionalInfo.args,
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
