/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './config-experimental-commonjs.js';

// import the commonJS export from ibm-cloud-cognitive, so this
// will work both when built as ESM and as CJS by Babel
export * from '@carbon/ibm-cloud-cognitive';
