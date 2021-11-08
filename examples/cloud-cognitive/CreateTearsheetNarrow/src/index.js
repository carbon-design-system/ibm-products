import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';

import './index.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import './config'; // must come before @carbon/ibm-cloud-cognitive... imports
import { TestComponent } from './components/TestComponent';

const App = () => (
  <div className="app">
    <TestComponent />
    <ThemeDropdown />
  </div>
);

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
