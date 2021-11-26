import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';
import { render } from 'react-dom';
import { Button } from 'carbon-components-react';
import ChildrenContent from './ChildrenContent';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';
import { SidePanel } from '@carbon/ibm-cloud-cognitive';

import './index.scss';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <HeaderContainer
        render={() => (
          <Header aria-label="IBM [Product]">
            <HeaderName href="/" prefix="IBM">
              [Product]
            </HeaderName>
          </Header>
        )}
      />
      <div className="main--content">
        <Button onClick={() => setOpen((prev) => !prev)}>
          Open side panel
        </Button>
        <SidePanel
          includeOverlay
          className="test"
          open={open}
          onRequestClose={() => setOpen(false)}
          title="Incident management"
          subtitle="Testing subtitle text."
          actions={[
            {
              label: 'Submit',
              onClick: () => setOpen(false),
              kind: 'primary',
            },
            {
              label: 'Cancel',
              onClick: () => setOpen(false),
              kind: 'secondary',
            },
          ]}
        >
          <ChildrenContent />
        </SidePanel>
      </div>
      <ThemeDropdown />
    </div>
  );
};

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
