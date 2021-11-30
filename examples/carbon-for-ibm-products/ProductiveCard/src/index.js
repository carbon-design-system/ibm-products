import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './Theme/ThemeContext';
import './config';
import './styles.scss';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
