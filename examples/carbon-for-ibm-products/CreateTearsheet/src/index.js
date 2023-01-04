import React from 'react';
import { render } from 'react-dom';

// This example uses this CSS build to minimize CodeSandBox transpile times
import '@carbon/ibm-products/css/index-full-carbon.css';
import './_index.scss';

import { Example } from './Example/Example';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';

const handleRestartClick = () =>
  document.getAnimations().forEach((anim) => anim.play());

render(
  <ThemeProvider>
    <div className="app">
      <Example />
      <ThemeDropdown />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);
