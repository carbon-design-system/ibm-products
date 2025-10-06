/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { action } from 'storybook/actions';
import './index';
import { prefix } from '../../globals/settings';

import styles from './story-styles.scss?lit';

const storyPrefix = `${prefix}--checklist-stories__`;

const checklistGroupTemplate = {
  args: {
    title: 'Checklist header',
    chartLabel: '15% complete',
    chartValue: 0.15,
    groupTitle: 'Section label',
    toggleLabel: 'Toggle',
    toggleLabelAlign: 'top',
    toggleAriaLabel: 'Checklist toggle',
    viewAllLabel: 'View all (10)',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'title',
    },
    chartLabel: {
      control: 'text',
      description: 'chartLabel',
    },
    chartValue: {
      control: 'number',
      description: 'chartValue',
    },
    groupTitle: {
      control: 'text',
      description: 'groupTitle',
    },
    toggleLabel: {
      control: 'text',
      description: 'toggleLabel',
    },
    toggleAriaLabel: {
      control: 'text',
      description: 'toggleAriaLabel',
    },
    viewAllLabel: {
      control: 'text',
      description: 'toggleAriaLabel',
    },
  },
  render: (args) => {
    const {
      title,
      chartLabel,
      chartValue,
      groupTitle,
      toggleLabel,
      toggleLabelAlign,
      toggleAriaLabel,
      viewAllLabel,
    } = args;

    return html`
      <style>
        ${styles}
      </style>
      <div class="${storyPrefix}viewport">
        <c4p-checklist
          title=${title}
          chart-label=${chartLabel}
          chart-value=${chartValue}
          toggle-label=${toggleLabel}
          toggle-label-align=${toggleLabelAlign}
          toggle-aria-label=${toggleAriaLabel}
          open
          view-all-label=${viewAllLabel}
          @c4p-checklist-view-all=${action(`Clicked View All`)}
          @c4p-checklist-toggle=${action(`Clicked Toggle`)}
        >
          <c4p-checklist-group title=${groupTitle}>
            <c4p-checklist-item
              label="Task name"
              status="completed"
            ></c4p-checklist-item>
            <c4p-checklist-item
              label="Task name"
              status="error"
              @c4p-checklist-item-clicked=${action(`Clicked Checklist Item`)}
              ?clickable=${true}
            ></c4p-checklist-item>
            <c4p-checklist-item
              label="Task name"
              status="in progress"
              @c4p-checklist-item-clicked=${action(`Clicked Checklist Item`)}
              ?clickable=${true}
            ></c4p-checklist-item>
            <c4p-checklist-item
              label="Task name"
              status="not started"
              @c4p-checklist-item-clicked=${action(`Clicked Checklist Item`)}
              ?clickable=${true}
            ></c4p-checklist-item>
            <c4p-checklist-item
              label="Task name"
              status="disabled"
            ></c4p-checklist-item>
          </c4p-checklist-group>
        </c4p-checklist>
      </div>
    `;
  },
};

export const Default = {
  ...checklistGroupTemplate,
};

const meta = {
  title: 'Components/Checklist',
};

export default meta;
