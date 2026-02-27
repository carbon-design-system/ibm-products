/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  CreateModalExample,
  CreateModalWithValidationExample,
} from './components/CreateModalExample';

function App() {
  return (
    <div className="example-container">
      <h1>Create Modal Examples</h1>

      <section className="example-section">
        <h2>Standard Create Modal</h2>
        <CreateModalExample />
      </section>

      <section className="example-section">
        <h2>Create Modal with Form Validation</h2>
        <CreateModalWithValidationExample />
      </section>
    </div>
  );
}

export default App;
