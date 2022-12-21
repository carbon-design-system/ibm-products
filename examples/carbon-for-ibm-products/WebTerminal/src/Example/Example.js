import React, { useState, useCallback } from "react";

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction
} from "@carbon/react";
import { Terminal } from "@carbon/icons-react";

import "./_example.scss";

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import {
  useWebTerminal,
  WebTerminal,
  WebTerminalContentWrapper,
  WebTerminalProvider
} from "@carbon/ibm-products";

const ExampleInner = () => {
  const { openWebTerminal } = useWebTerminal();

  return (
    <>
      <HeaderContainer
        render={() => (
          <Header aria-label='IBM [Product]'>
            <HeaderName href='/' prefix='IBM'>
              [Product]
            </HeaderName>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label='Web terminal'
                onClick={openWebTerminal}
                tooltipAlignment='end'
              >
                <Terminal />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      />

      <WebTerminalContentWrapper>
        <div className='main--content'>
          <WebTerminal
            closeIconDescription='Close terminal'
            documentationLinksIconDescription='Documentation links'
            documentationLinks={[
              {
                itemText: "BX/ICP docs",
                href: "#",
                onClick: () => console.log("clicked"),
                openInNewTab: false
              },
              {
                itemText: "Kube docs",
                href: "#",
                onClick: () => console.log("clicked"),
                openInNewTab: true
              },
              {
                itemText: "Docker docs",
                href: "#",
                onClick: () => console.log("clicked"),
                openInNewTab: true
              },
              {
                itemText: "Helm docs",
                href: "#",
                onClick: () => console.log("clicked"),
                openInNewTab: true
              }
            ]}
          >
            <div className='example-terminal'>
              <p>Connection successful.</p>

              <p>
                DISCLAIMER: This is not a real terminal, you would pass your own
                terminal component into the children of the WebTerminal
                component.
              </p>

              <p>Please see the docs of this component for more information.</p>

              <p>joe bob:~$</p>
            </div>
          </WebTerminal>
        </div>
      </WebTerminalContentWrapper>
    </>
  );
};

export const Example = () => {
  // Web terminal needs a provider to work
  return (
    <WebTerminalProvider>
      <ExampleInner />
    </WebTerminalProvider>
  );
};
