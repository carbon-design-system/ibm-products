import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';
import './config';

import { CommonHeader } from './components/CommonHeader/CommonHeader.js';
import { Content } from 'carbon-components-react';

import './index.scss';
import { SamplePage } from './components/SamplePage/index.js';

const App = () => (
  <div className="app">
    <CommonHeader className="header-area" />
    <Content className="content-area">
      <SamplePage />
    </Content>
    <ThemeDropdown />
  </div>
);

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
