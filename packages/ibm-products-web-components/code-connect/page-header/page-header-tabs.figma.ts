// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=41241-4083
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/page-header/page-header-tabs.ts
// component=c4p-page-header-tabs

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const hasTabs = instance.getBoolean('Tabs');
  const hasTags = instance.getBoolean('Tags');
  const hasScroller = instance.getBoolean('Collapsable button');

  const imports = [
    "import '@carbon/ibm-products-web-components/es/components/page-header/index.js';",
  ];

  return {
    id: 'c4p-page-header-tabs',
    imports,
    example: figma.code`<c4p-page-header-tabs>
  ${
    hasScroller
      ? figma.code`<c4p-page-header-scroller slot="scroller"></c4p-page-header-scroller>`
      : ''
  }
  ${
    hasTabs
      ? figma.code`<cds-tabs value="tab-1">
    <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">
      Tab label
    </cds-tab>
    <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">
      Tab label
    </cds-tab>
  </cds-tabs>`
      : ''
  }
  ${
    hasTags
      ? figma.code`<div slot="tags">
    <cds-tag type="blue" size="md">Tag</cds-tag>
    <cds-tag type="blue" size="md">Tag</cds-tag>
  </div>`
      : ''
  }
</c4p-page-header-tabs>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
