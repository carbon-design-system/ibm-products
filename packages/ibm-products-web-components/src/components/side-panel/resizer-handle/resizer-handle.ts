/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { settings } from '@carbon-labs/utilities';
import ResizerHandleTemplate from './src/resizer-handle.template.js';

const { stablePrefix: clabsPrefix } = settings;

/**
 * Resizer handle component for resizing panels
 */
@customElement(`${clabsPrefix}-resizer-handle`)
class CLABSResizerHandle extends ResizerHandleTemplate {}

export default CLABSResizerHandle;
