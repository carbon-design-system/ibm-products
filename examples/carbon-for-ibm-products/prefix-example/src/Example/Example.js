// cspell:words grafana

import React, { useState } from 'react';

import '../config'; // must come before @carbon/ibm-products... imports

import { AboutModal } from '@carbon/ibm-products';
import { Button, Link } from 'carbon-components-react';

import exampleLogo from './media/example-logo.svg';
import './_example.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import '../config'; // must come before @carbon/ibm-products component instance created

export const Example = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenModalClick = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModalClick}>Reopen About Modal</Button>
      <style>{`.exp-about-modal { opacity: 0 };`}</style>
      <AboutModal
        open={isOpen}
        additionalInfo={[
          {
            content: '1.3.41',
            label: 'Version number',
          },
          {
            content: (
              <>
                <img
                  alt="Grafana"
                  className="about-modal-stories--tech-logo"
                  src={require('./media/grafana-logo.png')}
                />
                <img
                  alt="Ansible"
                  className="about-modal-stories--tech-logo"
                  src={require('./media/ansible-logo.png')}
                />
                <img
                  alt="JavaScript"
                  className="about-modal-stories--tech-logo"
                  src={require('./media/js-logo.png')}
                />
              </>
            ),
            label: 'Technologies used',
          },
        ]}
        content={
          <>This is example content for an About Modal with all props set.</>
        }
        copyrightText={<>Copyright © 2020 IBM corporation</>}
        legalText="This Web site contains proprietary notices and copyright information, the terms of which must be observed and followed. Please see the tab entitled “Copyright and trademark information” for related information."
        links={[
          <Link key="link1" href="https://www.carbondesignsystem.com">
            Carbon Design System
          </Link>,
          <Link key="link2" href="https://www.ibm.com/design/language">
            IBM Design Language
          </Link>,
        ]}
        logo={
          <img
            alt="Example product or service logo"
            src={exampleLogo}
            style={{ maxWidth: '6rem' }}
          />
        }
        onClose={handleCloseModal}
        title={
          <>
            IBM <span style={{ fontWeight: '600' }}>Watson AI Ops</span>
          </>
        }
      />
    </>
  );
};
