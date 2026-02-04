/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@carbon/styles/css/styles.css';
import '@carbon/ibm-products/css/index.min.css';

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
