import React from 'react';
import { render } from 'react-dom';
import { StatusIconExample } from './StatusIconExample';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';

import './index.scss';

const App = () => (
  <div className="app">
    <StatusIconExample />
    <ThemeDropdown />
  </div>
);

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
