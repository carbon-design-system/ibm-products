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

    const existing = document.querySelector('delete-pattern');
    if (existing) {
      existing.remove(); // Remove existing element
    }

    const element = document.createElement('delete-pattern');

    element.setAttribute('resourceName', 'Sample');
    element.setAttribute('type', actionType);
    element.setAttribute('severity', actionSeverity);

    document.body.appendChild(element);
  }
});
