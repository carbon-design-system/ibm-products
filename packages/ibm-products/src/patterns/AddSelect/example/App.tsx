/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StandardSingleAddSelect } from './preview-components/StandardSingleAddSelect';

function App() {
  return (
    <div className="example-container">
      <h1>AddSelect Pattern Examples</h1>

      <section className="example-section">
        <h2>Single Selection</h2>
        <p>Select one item from a list</p>
        <StandardSingleAddSelect />
      </section>
    </div>
  );
}

export default App;

// Made with Bob
