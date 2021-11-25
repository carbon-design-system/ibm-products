import React from 'react';
import { render } from 'react-dom';
import { HTTPError403 } from '@carbon/ibm-cloud-cognitive';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';

import './index.scss';

const App = () => (
  <div className="app">
    <HTTPError403
      errorCodeLabel="Error 403"
      title="Forbidden"
      description="You are not authorized to access this resource."
      links={[
        {
          text: 'Carbon Design System',
          href: 'https://www.carbondesignsystem.com',
        },
        {
          text: 'Carbon for IBM Products component library',
          href: 'https://github.com/carbon-design-system/ibm-cloud-cognitive',
        },
      ]}
    />
    <ThemeDropdown />
  </div>
);

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
