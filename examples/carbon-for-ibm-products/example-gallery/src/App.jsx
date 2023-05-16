import React from 'react';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import Gallery from './components/Gallery';

function App({site = 'codesandbox'}) {
  return (
    <div>
      <ThemeProvider>
        <Gallery site={site} />
        <ThemeDropdown />
      </ThemeProvider>
    </div>
  );
}

export default App;
