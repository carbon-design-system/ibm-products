import React from 'react';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import './config';
import Example from './Example/Example';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Example />
        <ThemeDropdown />
      </ThemeProvider>
    </div>
  );
}

export default App;
