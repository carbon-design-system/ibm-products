import React from 'react';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import { SamplePage } from './Example/SamplePage';

function App() {
  return (
    <div>
      <ThemeProvider>
        <SamplePage />
        <ThemeDropdown />
      </ThemeProvider>
    </div>
  );
}

export default App;
