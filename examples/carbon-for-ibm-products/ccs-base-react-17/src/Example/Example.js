// cspell:words grafana

import React, { useState } from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { AboutModal } from '@carbon/ibm-products';
import { Button, Link } from 'carbon-components-react';

import ExampleLogo from './media/example-logo.svg';
import './_example.scss';

export const Example = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show AboutModal</Button>
      <AboutModal
        additionalInfo={[{ label: 'Version number', content: '1.3.41' }]}
        content={
          <>
            This is an example of the AboutModal from the Carbon for IBM
            Products component library. The library is designed and built on top
            of the Carbon Design System and Carbon Components React.
          </>
        }
        closeIconDescription="Close"
        copyrightText={<>Copyright &copy; 2020 IBM corporation</>}
        links={[
          <Link
            href="https://carbon-for-ibm-products.netlify.app/"
            key="View storybook"
          >
            View the components
          </Link>,
          <Link
            href="https://github.com/carbon-design-system/ibm-products/blob/main/LICENSE"
            key="License"
          >
            License
          </Link>,
          <Link
            href="https://www.npmjs.com/package/@carbon/ibm-products"
            key="npm"
          >
            Install from npm
          </Link>,
          <Link href="https://www.carbondesignsystem.com/" key="Carbon">
            Carbon Design System
          </Link>,
        ]}
        logo={
          <img
            src={ExampleLogo}
            alt="Example product or service logo"
            style={{ maxWidth: '6rem' }}
          />
        }
        title={
          <>
            IBM <span style={{ fontWeight: '600' }}>Products components</span>
          </>
        }
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};
