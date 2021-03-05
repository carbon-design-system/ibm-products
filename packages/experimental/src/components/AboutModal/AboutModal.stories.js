/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'carbon-components-react';
import ExampleLogo from './example-logo.svg';
import mdx from './AboutModal.mdx';
import ansibleLogo from './technologyUsedLogos/ansible_logo.png';
import grafanaLogo from './technologyUsedLogos/grafana_logo.png';
import jsLogo from './technologyUsedLogos/js_logo.png';
import {
  storybookPrefixCanary as storybookPrefix /* , storybookPrefixReleased */,
} from '../../../config';

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

const Template = (args) => (
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
    {...args}
  />
);

/**
 * Simple state manager for modals.
 */
/* eslint-disable react/prop-types */
const ModalStateManager = ({
  renderLauncher: LauncherContent,
  children: ModalContent,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!ModalContent || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
            <ModalContent open={open} setOpen={setOpen} />,
            document.body
          )}
      {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
    </>
  );
};

export const Default = () => {
  return (
    <ModalStateManager
      renderLauncher={({ open, setOpen }) => (
        <Button onClick={() => setOpen(!open)}>Launch modal</Button>
      )}>
      {({ open, setOpen }) => (
        <AboutModal
          body="This is an example description"
          onRequestClose={() => setOpen(!open)}
          open={open}
          logo={ExampleLogo}
          productName={
            <>
              IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
            </>
          }
          versionNumber="0.0.1"
        />
      )}
    </ModalStateManager>
  );
};

export const withLinks = Template.bind({});
withLinks.args = {
  links: [
    {
      url: 'https://www.carbondesignsystem.com',
      text: 'Carbon Design System',
    },
    {
      url: 'https://www.ibm.com/design/language',
      text: 'IBM Design Language',
    },
  ],
};

export const withLinksAndLegalText = Template.bind({});
withLinksAndLegalText.args = {
  links: [
    {
      url: 'https://www.carbondesignsystem.com',
      text: 'Carbon Design System',
    },
    {
      url: 'https://www.ibm.com/design/language',
      text: 'IBM Design Language',
    },
  ],
  legalText:
    'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information.',
};

export const withLinksAndLegalAndCopyrightText = Template.bind({});
withLinksAndLegalAndCopyrightText.args = {
  links: [
    {
      url: 'https://www.carbondesignsystem.com',
      text: 'Carbon Design System',
    },
    {
      url: 'https://www.ibm.com/design/language',
      text: 'IBM Design Language',
    },
  ],
  legalText:
    'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information.',
  copyrightText: 'Copyright IBM corporation 2020',
};

export const withTechnologyUsedTab = Template.bind({});
withTechnologyUsedTab.args = {
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

export const withDarkTheme = Template.bind({});
withDarkTheme.args = {
  className: 'sb--use-carbon-theme-g90',
};

export const withLightTheme = Template.bind({});
withLightTheme.args = {
  className: 'sb--use-carbon-theme-g10',
};

export const withScroll = Template.bind({});
withScroll.args = {
  legalText:
    'This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control. This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information. IBM grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of IBM provided you comply with these Terms of Use, and all copyright, trademark, and other proprietary notices remain intact. You may only use a crawler to crawl this Web site as permitted by this Web site’s robots.txt protocol, and IBM may block any crawlers in its sole discretion. The use authorized under this agreement is non-commercial in nature (e.g., you may not sell the content you access on or through this Web site.) All other use of this site is prohibited. Except for the limited permission in the preceding paragraph, IBM does not grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other proprietary or intellectual property rights. You may not mirror any of the content from this site on another Web site or in any other media. Any software and other materials that are made available for downloading, access, or other use from this site with their own license terms will be governed by such terms, conditions, and notices. Your failure to comply with such terms or any of the terms on this site will result in automatic termination of any rights granted to you, without prior notice, and you must immediately destroy all copies of downloaded materials in your possession, custody or control.',
  copyrightText: 'Copyright IBM corporation 2020',
};
