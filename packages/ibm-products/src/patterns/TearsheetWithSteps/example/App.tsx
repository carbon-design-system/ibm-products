/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { TearsheetWithStepsExample } from './components/StepTearsheet';

export default function App() {
  return (
    <div className="tearsheet-steps-example">
      <h1>Tearsheet with Steps</h1>
      <p style={{ marginBottom: '2rem' }}>
        Example demonstrating how to build a multi-step workflow inside a
        Tearsheet using <code>StepProvider</code> from{' '}
        <code>@carbon/utilities-react</code>.
      </p>
      <TearsheetWithStepsExample />
    </div>
  );
}
