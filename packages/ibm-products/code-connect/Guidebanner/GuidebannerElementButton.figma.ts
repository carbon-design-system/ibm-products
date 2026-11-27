// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=17606%3A27272
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/Guidebanner/GuidebannerElementButton.tsx
// component=GuidebannerElementButton

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const label = instance.findText('Button');
  const children = label.type !== 'ERROR' ? label.textContent : 'Button';

  return {
    id: 'GuidebannerElementButton',
    imports: [
      "import { previewCandidate__GuidebannerElementButton as GuidebannerElementButton } from '@carbon/ibm-products';",
    ],
    example: figma.code`<GuidebannerElementButton>${children}</GuidebannerElementButton>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
