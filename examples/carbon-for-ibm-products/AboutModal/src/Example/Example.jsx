// cspell:words grafana

import React, { useState } from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { AboutModal } from '@carbon/ibm-products';
import { Button, Link } from '@carbon/react';

import exampleLogo from './media/example-logo.svg';
import ansibleLogo from './media/ansible-logo.svg';
import grafanaLogo from './media/grafana-logo.svg';
import jsLogo from './media/js-logo.svg';

import './_example.scss';

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
      <Button kind="secondary" onClick={handleOpenModalClick}>
        Reopen the About Modal dialog
      </Button>

      <AboutModal
        tabListAriaLabel="an aria label"
        open={isOpen}
        additionalInfo={[
          {
            content: (
              <>
                <img
                  alt="Grafana"
                  className="c4p-about-modal__stories--tech-logo"
                  src={grafanaLogo}
                />
                <img
                  alt="Ansible"
                  className="c4p-about-modal__stories--tech-logo"
                  src={ansibleLogo}
                />
                <img
                  alt="JavaScript"
                  className="c4p-about-modal__stories--tech-logo"
                  src={jsLogo}
                />
              </>
            ),
            label: 'Powered by',
          },
        ]}
        closeIconDescription="Close"
        version={'Version 0.0.0'}
        copyrightText={'Copyright © 2020 IBM corporation'}
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
        }
      />
    </>
  );
};

export default Example;
