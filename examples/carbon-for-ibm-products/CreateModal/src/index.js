import React from 'react';
import { render } from 'react-dom';
import { CreateModalExample } from './CreateModalExample';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';

import './index.scss';

const App = () => (
  <div className="app">
    <CreateModalExample />
    <ThemeDropdown />
  </div>
);

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
