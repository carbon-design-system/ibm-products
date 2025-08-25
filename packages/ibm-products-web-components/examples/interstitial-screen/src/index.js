/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@carbon/ibm-products-web-components/es/components/interstitial-screen/index.js';
// The following are used for slotted fields
import '@carbon/web-components/es/components/toggle/index.js';
import '@carbon/web-components/es/components/tag/index.js';
import Checkmark from '@carbon/web-components/es/icons/checkmark/16.js';
import ArrowRight from '@carbon/web-components/es/icons/arrow--right/16.js';

const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', function () {
  document.querySelector(`c4p-interstitial-screen`)?.toggleAttribute('open');
});
