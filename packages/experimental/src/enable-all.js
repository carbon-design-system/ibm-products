/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// NOTE: This file has a side effect of enabling all component flags

import { pkg } from './settings';
pkg._silenceWarnings = true;
pkg.setAllComponents(true);
