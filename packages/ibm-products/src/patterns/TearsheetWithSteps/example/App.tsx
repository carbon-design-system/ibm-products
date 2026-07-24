/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { TearsheetWithSteps } from './components/StepTearsheet';
import { StepProvider } from '@carbon/utilities-react';
import { Button } from '@carbon/react';

export default function App() {
  const [open, setOpen] = useState(false);
  const launcherButtonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="tearsheet-steps-example">
      <h1>Tearsheet with Steps</h1>
      <p style={{ marginBottom: '2rem' }}>
        Example demonstrating how to build a multi-step workflow inside a
        Tearsheet using <code>StepProvider</code> from{' '}
        <code>@carbon/utilities-react</code>.
      </p>
      <Button
        ref={launcherButtonRef}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        Open Tearsheet
      </Button>
      <StepProvider>
        <TearsheetWithSteps
          open={open}
          setOpen={setOpen}
          launcherButtonRef={launcherButtonRef}
        />
      </StepProvider>
    </div>
  );
}
