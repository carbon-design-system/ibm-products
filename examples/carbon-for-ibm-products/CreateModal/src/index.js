import React from 'react';
import { render } from 'react-dom';
import { Example } from './Example/Example';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';

import '@carbon/ibm-products/css/index-full-carbon.css';
import './_index.scss';

const App = () => (
  <div className="app">
    <Example />
    <ThemeDropdown />
  </div>
);

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
