import './App.css';

import { useState } from 'react';

import { AboutModal } from '@carbon/ibm-cloud-cognitive';
import { Button, Link } from 'carbon-components-react';

import ExampleLogo from './assets/example-logo.svg';

const App = () => {
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
        copyrightText={<>Copyright &copy; 2020 IBM corporation</>}
        links={[
          <Link
            href="https://ibm-cloud-cognitive.netlify.app/"
            key="View storybook"
          >
            View the components
          </Link>,
          <Link
            href="https://github.com/carbon-design-system/ibm-cloud-cognitive/blob/main/LICENSE"
            key="License"
          >
            License
          </Link>,
          <Link
            href="https://www.npmjs.com/package/@carbon/ibm-cloud-cognitive"
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

export default App;
