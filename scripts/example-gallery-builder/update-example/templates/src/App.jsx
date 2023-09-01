import React from 'react';
import { ThemeProvider } from './ThemeSelector/ThemeContext';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
IMPORT_IBM_PRODUCTS_CONFIGimport Example from './Example/Example';

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
