// cspell:words joebob
import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { Terminal20 as Terminal } from '@carbon/icons-react';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';

import './index.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import './config'; // must come before @carbon/ibm-cloud-cognitive... imports
import { WebTerminal } from '@carbon/ibm-cloud-cognitive';

const App = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const openTerminal = useCallback(() => setIsTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setIsTerminalOpen(false), []);
  return (
    <div className="app">
      <HeaderContainer
        render={() => (
          <Header aria-label="IBM [Product]">
            <HeaderName href="/" prefix="IBM">
              [Product]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Web terminal"
                onClick={openTerminal}
              >
                <Terminal />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />
      <div className="main--content">
        <WebTerminal
          open={isTerminalOpen}
          closeTerminal={closeTerminal}
          documentationLinks={[
            {
              label: 'BX/ICP docs',
              href: '#',
              onClick: () => console.log('clicked'),
              openInNewTab: false,
            },
            {
              label: 'Kube docs',
              href: '#',
              onClick: () => console.log('clicked'),
              openInNewTab: true,
            },
            {
              label: 'Docker docs',
              href: '#',
              onClick: () => console.log('clicked'),
              openInNewTab: true,
            },
            {
              label: 'Helm docs',
              href: '#',
              onClick: () => console.log('clicked'),
              openInNewTab: true,
            },
          ]}
        >
          <div className="example-terminal">
            <p>Connection successful.</p>

            <p>
              DISCLAIMER: This is not a real terminal, you would pass your own
              terminal component into the children of the WebTerminal component.
            </p>

            <p>Please see the docs of this component for more information.</p>

            <p>joebob:~$</p>
          </div>
        </WebTerminal>
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
