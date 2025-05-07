/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.action-btn').forEach((btn) => {
    btn.addEventListener('click', handleButtonClick);
  });

  function handleButtonClick(event) {
    const actionType = event.target.dataset.actionType;
    const actionSeverity = event.target.dataset.actionSev;
    const resourceName = event.target.dataset.resourceName;

    let element = document.querySelector('delete-pattern');
    if (actionSeverity !== 'low') {
      element?.setAttribute('isOpen', 'true');
    }
    element?.setAttribute('resourceName', resourceName);
    element?.setAttribute('type', actionType);
    element?.setAttribute('severity', actionSeverity);
  }
});
