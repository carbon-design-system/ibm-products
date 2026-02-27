/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  StandardExportModal,
  ExportModalWithExtensionValidation,
  ExportModalWithPreformattedExtensions,
} from './components/ExportModalExamples';

function App() {
  return (
    <div className="example-container">
      <h1>Export Modal Examples</h1>

      <section className="example-section">
        <h2>Standard Export Modal</h2>
        <StandardExportModal />
      </section>

      <section className="example-section">
        <h2>Export Modal with Extension Validation</h2>
        <ExportModalWithExtensionValidation />
      </section>

      <section className="example-section">
        <h2>Export Modal with Preformatted Extensions</h2>
        <ExportModalWithPreformattedExtensions />
      </section>
    </div>
  );
}

export default App;
