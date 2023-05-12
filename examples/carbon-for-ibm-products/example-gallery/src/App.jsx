import React from 'react';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import Gallery from './components/Gallery';

import './_App.scss';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Gallery />
        <ThemeDropdown />
      </ThemeProvider>
    </div>
  );
}

export default App;
