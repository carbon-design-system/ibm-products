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
  HighImpactDeletionExample,
  HighImpactDeletionWithConnectedItemsExample,
  HighImpactBatchDeletionExample,
  MediumImpactDeletionExample,
  LowImpactDeletionExample,
} from './components/DeleteAndRemoveExamples';

function App() {
  return (
    <div className="example-container">
      <h1>Delete and Remove Examples</h1>

      <section className="example-section">
        <h2>High Impact Deletion</h2>
        <HighImpactDeletionExample />
      </section>

      <section className="example-section">
        <h2>Deletion with Connected Items</h2>
        <HighImpactDeletionWithConnectedItemsExample />
      </section>

      <section className="example-section">
        <h2>Batch Deletion</h2>
        <HighImpactBatchDeletionExample />
      </section>

      <section className="example-section">
        <h2>Medium Impact Deletion</h2>
        <MediumImpactDeletionExample />
      </section>

      <section className="example-section">
        <h2>Low Impact Deletion</h2>
        <LowImpactDeletionExample />
      </section>
    </div>
  );
}

export default App;
