/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, render } from 'lit';
import '../../../examples/delete-pattern/src/delete-pattern';

export default {
  title: 'Patterns/Delete and remove',
};

const handleClick = (event) => {
  const actionType = event.target.dataset.actionType;
  const actionSeverity = event.target.dataset.actionSev;
  const resourceName = event.target.dataset.resourceName;

  const element = document.querySelector('delete-pattern');
  element?.setAttribute('isOpen', 'true');
  element?.setAttribute('type', actionType);
  element?.setAttribute('severity', actionSeverity);
  element?.setAttribute('resourceName', resourceName);
};

const defaultTemplate = {
  args: {
    type: '',
    severity: '',
    resourceName: '',
  },

  argTypes: {
    type: { table: { disable: true } }, // Hides "type"
    severity: { table: { disable: true } }, // Hides "severity"
    resourceName: { table: { disable: true } }, // Hides "severity"
  },

  render: (args) => {
    const container = document.createElement('div');
    const template = html`
      <cds-button
        data-action-type=${args.type}
        data-action-sev=${args.severity}
        data-resource-name=${args.resourceName}
        class="action-btn"
        id="${args.severity}-impact-${args.type}-btn"
        type="button"
        kind="danger"
        size="md"
        @click=${handleClick}
      >
        Delete
      </cds-button>
      <delete-pattern> </delete-pattern>
    `;

    render(template, container);
    return container;
  },
};

export const highImpactDeletion = {
  ...defaultTemplate,
  args: {
    type: 'delete',
    severity: 'high',
    resourceName: 'Sample',
  },
};

export const highImpactDeletionWithConnectedItems = {
  ...defaultTemplate,
  args: {
    type: 'delete',
    severity: 'high',
    resourceName: 'Demo',
  },
};

export const highImpactBatchDeletion = {
  ...defaultTemplate,
  args: {
    type: 'delete',
    severity: 'high',
    resourceName: 'Batch Demo',
  },
};

export const mediumImpactDeletion = {
  ...defaultTemplate,
  args: {
    type: 'delete',
    severity: 'medium',
    resourceName: 'Sample',
  },
};

export const lowImpactDeletion = {
  ...defaultTemplate,
  args: {
    type: 'delete',
    severity: 'low',
    resourceName: 'Sample',
  },
};
