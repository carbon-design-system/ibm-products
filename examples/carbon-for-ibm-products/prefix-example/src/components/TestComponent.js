// cspell:words grafana

import React, { useState } from 'react';

import '../config'; // must come before @carbon/ibm-cloud-cognitive... imports

import { AboutModal } from '@carbon/ibm-cloud-cognitive';
import { Button, Link } from 'carbon-components-react';

import exampleLogo from '../static/media/example-logo.svg';
import './test-component.scss';

export const TestComponent = () => {
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
                  src={require('../static/media/grafana-logo.png')}
                />
                <img
                  alt="Ansible"
                  className="about-modal-stories--tech-logo"
                  src={require('../static/media/ansible-logo.png')}
                />
                <img
                  alt="JavaScript"
                  className="about-modal-stories--tech-logo"
                  src={require('../static/media/js-logo.png')}
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
