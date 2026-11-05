// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15713%3A9775
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/EditInPlace/EditInPlace.tsx
// component=EditInPlace

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const size = instance.getEnum('Size', {
    Small: 'sm',
    Medium: 'md',
    Large: 'lg',
  });
  const invalid = instance.getEnum('State', { Error: true });

  const inputText = instance.findText('Input text');
  const value = inputText.type !== 'ERROR' ? inputText.textContent : '';

  const errorText = instance.findText('Error message goes here');
  const invalidText =
    invalid && errorText.type !== 'ERROR' ? errorText.textContent : undefined;

  return {
    id: 'EditInPlace',
    imports: ["import { EditInPlace } from '@carbon/ibm-products';"],
    example: figma.code`<EditInPlace
  readOnly={false}
  cancelLabel="Cancel"
  editLabel="Edit"
  id="Example-ID"
  labelText="Example label text"
  onCancel={() => console.log('Cancel clicked')}
  onChange={(val) => {
    console.log('Changed to: ' + val);
  }}
  onSave={() => console.log('Save clicked')}
  saveLabel="Save"
  value="${value}"${figma.helpers.react.renderProp('size', size)}${figma.helpers.react.renderProp('invalid', invalid)}${figma.helpers.react.renderProp('invalidText', invalidText)}
/>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
