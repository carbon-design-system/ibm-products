// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9322%3A404195
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/TagSet/TagSet.tsx
// component=TagSet

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

// Representative tag arrays mirroring the legacy mapping.
// The overflow variant shows more tags so the overflow indicator appears.
const overflowTags = `[
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
]`;

const noOverflowTags = `[
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
  { size: 'md', title: 'Tag', type: 'blue' },
]`;

function createTemplate() {
  const hasOverflow = instance.getBoolean('Tag overflow');
  const tagsLiteral = hasOverflow ? overflowTags : noOverflowTags;

  return {
    id: 'TagSet',
    imports: ["import { TagSet } from '@carbon/ibm-products';"],
    example: figma.code`<TagSet
  tags={${tagsLiteral}}
/>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
