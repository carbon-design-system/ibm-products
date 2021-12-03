import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';
import './config';
import './styles.scss';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ThemeDropdown />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
