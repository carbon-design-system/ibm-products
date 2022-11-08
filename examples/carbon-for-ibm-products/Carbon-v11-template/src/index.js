import React from 'react';
import ReactDOM from 'react-dom';
import './config';
import App from './App';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import './index.scss';
// This example uses this CSS build to minimize CodeSandBox transpile times
import '@carbon/ibm-products/css/index-full-carbon.css';

ReactDOM.render(
  <ThemeProvider>
    <div className="app">
      <App />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);
