// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=16728%3A642201
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/Guidebanner/GuidebannerElement.tsx
// component=GuidebannerElement

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const titleText = instance.findText('"Use case-specific heading"');
  const title = titleText.type !== 'ERROR' ? titleText.textContent : undefined;

  const content = instance.getEnum('Content', {
    'Plain text': 'plain',
    'Non linear': 'nonLinear',
  });
  let description: string | ReturnType<typeof figma.properties.children> = '';
  if (content === 'nonLinear') {
    description = figma.properties.children(['Non-linear reading']);
  } else {
    const descriptionText = instance.findText(
      '"Use case-specific content that explains the concept or adds context. Use case-specific content that explains the concept or adds context. Use case-specific content that explains the concept or adds context."'
    );
    description =
      descriptionText.type !== 'ERROR' ? descriptionText.textContent : '';
  }

  const button = figma.properties.children(['_Guide banner button']);

  return {
    id: 'GuidebannerElement',
    imports: [
      "import { previewCandidate__GuidebannerElement as GuidebannerElement } from '@carbon/ibm-products';",
    ],
    example: figma.code`<GuidebannerElement${figma.helpers.react.renderProp('description', description)}${figma.helpers.react.renderProp('button', button.length ? button : undefined)}${figma.helpers.react.renderProp('title', title)} />`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
