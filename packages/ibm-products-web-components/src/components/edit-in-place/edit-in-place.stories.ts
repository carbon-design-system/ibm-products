/**
 * @license
 *
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './index';
import { prefix } from '../../globals/settings';
import { EDIT_IN_PLACE_SIZE, TOOLTIP_ALIGNMENT } from './defs';

const sizes = {
  [`Small (${EDIT_IN_PLACE_SIZE.SMALL})`]: EDIT_IN_PLACE_SIZE.SMALL,
  [`Medium (${EDIT_IN_PLACE_SIZE.MEDIUM})`]: EDIT_IN_PLACE_SIZE.MEDIUM,
  [`Large (${EDIT_IN_PLACE_SIZE.LARGE})`]: EDIT_IN_PLACE_SIZE.LARGE,
};

const tooltipAlignments = {
  [`Top (${TOOLTIP_ALIGNMENT.TOP})`]: TOOLTIP_ALIGNMENT.TOP,
  [`Top left (${TOOLTIP_ALIGNMENT.TOP_LEFT})`]: TOOLTIP_ALIGNMENT.TOP_LEFT,
  [`Top right (${TOOLTIP_ALIGNMENT.TOP_RIGHT})`]: TOOLTIP_ALIGNMENT.TOP_RIGHT,
  [`Bottom (${TOOLTIP_ALIGNMENT.BOTTOM})`]: TOOLTIP_ALIGNMENT.BOTTOM,
  [`Bottom left (${TOOLTIP_ALIGNMENT.BOTTOM_LEFT})`]:
    TOOLTIP_ALIGNMENT.BOTTOM_LEFT,
  [`Bottom right (${TOOLTIP_ALIGNMENT.BOTTOM_RIGHT})`]:
    TOOLTIP_ALIGNMENT.BOTTOM_RIGHT,
  [`Left (${TOOLTIP_ALIGNMENT.LEFT})`]: TOOLTIP_ALIGNMENT.LEFT,
  [`Right (${TOOLTIP_ALIGNMENT.RIGHT})`]: TOOLTIP_ALIGNMENT.RIGHT,
};

const defaultArgs = {
  cancelLabel: 'Cancel',
  editAlwaysVisible: false,
  editLabel: 'Edit',
  id: 'edit-in-place-story',
  inheritTypography: false,
  invalid: false,
  invalidText: 'This field is required',
  labelText: 'Edit in place label',
  placeholder: 'Placeholder text',
  readOnly: false,
  readOnlyLabel: 'Edit off',
  saveLabel: 'Save',
  size: EDIT_IN_PLACE_SIZE.SMALL,
  tooltipAlignment: TOOLTIP_ALIGNMENT.TOP,
  value: 'Default value',
};

const controls = {
  cancelLabel: {
    control: 'text',
    description: 'Label for the cancel button',
  },
  editAlwaysVisible: {
    control: 'boolean',
    description: 'Always show the edit icon (not just on hover)',
  },
  editLabel: {
    control: 'text',
    description: 'Label for the edit button',
  },
  id: {
    control: 'text',
    description: 'Specify a custom id for the input',
  },
  inheritTypography: {
    control: 'boolean',
    description: 'Inherit typography from container',
  },
  invalid: {
    control: 'boolean',
    description: 'Determines if the input is invalid',
  },
  invalidText: {
    control: 'text',
    description: 'Text displayed when input is invalid',
  },
  labelText: {
    control: 'text',
    description: 'Text for screen readers',
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text for the input',
  },
  readOnly: {
    control: 'boolean',
    description: 'Determines if the input is in read-only mode',
  },
  readOnlyLabel: {
    control: 'text',
    description: 'Label for the edit off button in read-only mode',
  },
  saveLabel: {
    control: 'text',
    description: 'Label for the save button',
  },
  size: {
    control: 'select',
    description: 'Vertical size of control',
    options: sizes,
  },
  tooltipAlignment: {
    control: 'select',
    description: 'Tooltip alignment for buttons',
    options: tooltipAlignments,
  },
  value: {
    control: 'text',
    description: 'Current value of the input',
  },
};

export default {
  title: 'Components/EditInPlace',
  parameters: {
    docs: {
      description: {
        component: `
The EditInPlace component allows users to edit text inline with save and cancel actions.

## Usage

\`\`\`html
<c4p-edit-in-place
  id="my-edit"
  value="Edit me"
  label-text="Editable field"
  edit-label="Edit"
  save-label="Save"
  cancel-label="Cancel"
></c4p-edit-in-place>
\`\`\`

## Events

- \`c4p-edit-in-place-change\` - Fired when the input value changes
- \`c4p-edit-in-place-save\` - Fired when save is triggered
- \`c4p-edit-in-place-cancel\` - Fired when cancel is triggered
- \`c4p-edit-in-place-blur\` - Fired when the input loses focus

## CSS Parts

- \`input\` - The input element
- \`actions\` - The button container
- \`invalid-text\` - The error message container
        `,
      },
    },
  },
  argTypes: controls,
};

const Template = (args: any) => {
  const {
    cancelLabel,
    editAlwaysVisible,
    editLabel,
    id,
    inheritTypography,
    invalid,
    invalidText,
    labelText,
    placeholder,
    readOnly,
    readOnlyLabel,
    saveLabel,
    size,
    tooltipAlignment,
    value,
  } = args;

  return html`
    <div style="width: 300px; margin: 100px;">
      <c4p-edit-in-place
        id=${ifDefined(id)}
        cancel-label=${ifDefined(cancelLabel)}
        ?edit-always-visible=${editAlwaysVisible}
        edit-label=${ifDefined(editLabel)}
        ?inherit-typography=${inheritTypography}
        ?invalid=${invalid}
        invalid-text=${ifDefined(invalidText)}
        label-text=${ifDefined(labelText)}
        placeholder=${ifDefined(placeholder)}
        ?read-only=${readOnly}
        read-only-label=${ifDefined(readOnlyLabel)}
        save-label=${ifDefined(saveLabel)}
        size=${ifDefined(size)}
        tooltip-alignment=${ifDefined(tooltipAlignment)}
        value=${ifDefined(value)}
        @c4p-edit-in-place-change=${(e: CustomEvent) => {
          console.log('Change:', e.detail);
        }}
        @c4p-edit-in-place-save=${(e: CustomEvent) => {
          console.log('Save:', e.detail);
        }}
        @c4p-edit-in-place-cancel=${(e: CustomEvent) => {
          console.log('Cancel:', e.detail);
        }}
        @c4p-edit-in-place-blur=${(e: CustomEvent) => {
          console.log('Blur:', e.detail);
        }}
      ></c4p-edit-in-place>
    </div>
  `;
};

export const Default = {
  args: defaultArgs,
  render: Template,
};

export const Invalid = {
  args: {
    ...defaultArgs,
    invalid: true,
    invalidText: 'This field is required',
  },
  render: Template,
};

export const ReadOnly = {
  args: {
    ...defaultArgs,
    readOnly: true,
  },
  render: Template,
};

export const AlwaysVisibleEdit = {
  args: {
    ...defaultArgs,
    editAlwaysVisible: true,
  },
  render: Template,
};

export const MediumSize = {
  args: {
    ...defaultArgs,
    size: EDIT_IN_PLACE_SIZE.MEDIUM,
  },
  render: Template,
};

export const LargeSize = {
  args: {
    ...defaultArgs,
    size: EDIT_IN_PLACE_SIZE.LARGE,
  },
  render: Template,
};

export const InheritTypography = {
  args: {
    ...defaultArgs,
    inheritTypography: true,
  },
  render: Template,
  decorators: [
    (story: any) => html`
      <div
        style="font-size: 24px; font-weight: 600; width: 400px; margin: 100px;"
      >
        ${story()}
      </div>
    `,
  ],
};
