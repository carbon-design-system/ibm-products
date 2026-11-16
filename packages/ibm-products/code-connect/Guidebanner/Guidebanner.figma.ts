// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=16728%3A642275
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/Guidebanner/Guidebanner.tsx
// component=Guidebanner

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const collapsible = instance.getEnum('Type', { Collapsable: true });
  const title = instance.getString('Header text');
  const open = instance.getBoolean('Expanded');
  const children = figma.properties.children(['_Insight']);

  return {
    id: 'Guidebanner',
    imports: [
      "import { previewCandidate__Guidebanner as Guidebanner } from '@carbon/ibm-products';",
    ],
    example: figma.code`<Guidebanner${figma.helpers.react.renderProp('collapsible', collapsible)}${figma.helpers.react.renderProp('title', title)}${figma.helpers.react.renderProp('open', open)}>
  ${children}
</Guidebanner>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
