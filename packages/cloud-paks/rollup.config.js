/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { create } from '@carbon/rollup-config';
import packageJson from './package.json';

export default create('src/index.js', packageJson);
