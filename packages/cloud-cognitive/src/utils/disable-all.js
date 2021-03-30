/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// NOTE: This file has a side effect of disabling all component flags. It is
// intended for use in contexts where all components should always be disabled
// such as test cases. It is not published as part of the component package.

import { pkg } from '../settings';
pkg.setAllComponents(false);
