/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  InstantGenerateExample,
  GenerateExample,
  EditExample,
} from './components/GenerateAnAPIKeyExamples';

function App() {
  return (
    <div className="example-container">
      <h1>Generate an API Key Examples</h1>

      <section className="example-section">
        <h2>Instant Generate</h2>
        <InstantGenerateExample />
      </section>

      <section className="example-section">
        <h2>Generate</h2>
        <GenerateExample />
      </section>

      <section className="example-section">
        <h2>Edit</h2>
        <EditExample />
      </section>
    </div>
  );
}

export default App;
