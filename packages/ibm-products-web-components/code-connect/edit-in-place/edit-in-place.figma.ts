// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15713%3A9775
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/edit-in-place/edit-in-place.ts
// component=c4p-edit-in-place

/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';
import {
  renderBooleanAttribute,
  renderStringAttribute,
} from '../template-helpers';

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
    id: 'c4p-edit-in-place',
    imports: [
      "import '@carbon/ibm-products-web-components/es/components/edit-in-place/index';",
    ],
    example: figma.code`<c4p-edit-in-place
  id="example-id"
  label-text="Example label text"${renderStringAttribute('size', size)}${renderStringAttribute('value', value)}${renderBooleanAttribute('invalid', invalid)}${renderStringAttribute('invalid-text', invalidText)}
  cancel-label="Cancel"
  edit-label="Edit"
  save-label="Save"
></c4p-edit-in-place>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
