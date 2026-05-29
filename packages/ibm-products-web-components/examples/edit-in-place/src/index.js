/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@carbon/ibm-products-web-components/es/components/edit-in-place/index';

// Add event listeners for the edit-in-place component
document.addEventListener('DOMContentLoaded', () => {
  const editInPlace = document.querySelector('c4p-edit-in-place');
  
  if (editInPlace) {
    editInPlace.addEventListener('c4p-edit-in-place-change', (e) => {
      console.log('Value changed:', e.detail);
    });
    
    editInPlace.addEventListener('c4p-edit-in-place-save', (e) => {
      console.log('Saved:', e.detail);
    });
    
    editInPlace.addEventListener('c4p-edit-in-place-cancel', (e) => {
      console.log('Cancelled:', e.detail);
    });
    
    editInPlace.addEventListener('c4p-edit-in-place-blur', (e) => {
      console.log('Blur:', e.detail);
    });
  }
});
