/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button } from '@carbon/react';
import { Code, Copy } from '@carbon/react/icons';
import {
  Default,
  WithDocumentationLinks,
  WithActions,
} from './preview-components';
import '@carbon/styles/css/styles.css';
import './styles/_web-terminal.scss';
import './index.scss';

const actions = [
  {
    renderIcon: (props) => <Code size={16} {...props} />,
    onClick: () => {},
    iconDescription: 'Create new deployment',
  },
  {
    renderIcon: (props) => <Copy size={16} {...props} />,
    onClick: () => {},
    iconDescription: 'Copy logs',
  },
];

const sharedArgs = {
  closeIconDescription: 'Close terminal',
  documentationLinksIconDescription: 'Show documentation links',
};

export const App = () => {
  const [openDefault, setOpenDefault] = useState(false);
  const [openWithDocumentationLinks, setOpenWithDocumentationLinks] =
    useState(false);
  const [openWithActions, setOpenWithActions] = useState(false);

  return (
    <div className="example-container">
      <h1>Web Terminal Examples</h1>

      <section className="example-section">
        <h2>Default</h2>
        <Button onClick={() => setOpenDefault((prev) => !prev)}>
          Open terminal
        </Button>
        <Default
          key={String(openDefault)}
          {...sharedArgs}
          actions={actions}
          isInitiallyOpen={openDefault}
        />
      </section>

      <section className="example-section">
        <h2>With Documentation Links</h2>
        <Button onClick={() => setOpenWithDocumentationLinks((prev) => !prev)}>
          Open terminal with documentation links
        </Button>
        <WithDocumentationLinks
          key={String(openWithDocumentationLinks)}
          {...sharedArgs}
          isInitiallyOpen={openWithDocumentationLinks}
        />
      </section>

      <section className="example-section">
        <h2>With Actions</h2>
        <Button onClick={() => setOpenWithActions((prev) => !prev)}>
          Open terminal with actions
        </Button>
        <WithActions
          key={String(openWithActions)}
          {...sharedArgs}
          actions={actions}
          isInitiallyOpen={openWithActions}
        />
      </section>
    </div>
  );
};

export default App;
