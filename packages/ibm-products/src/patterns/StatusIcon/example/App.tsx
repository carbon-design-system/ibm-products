/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StatusIconDefault } from './preview-components/StatusIconDefault';
import '@carbon/styles/css/styles.css';
import './index.scss';

export default function App() {
  return (
    <div className="example-container">
      <section className="example-section">
        <h2>Status Icon Pattern</h2>
        <StatusIconDefault />
      </section>
    </div>
  );
}
