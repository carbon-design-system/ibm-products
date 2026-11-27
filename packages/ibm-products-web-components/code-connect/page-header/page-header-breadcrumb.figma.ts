// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=41243-6410
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/page-header/page-header-breadcrumb.ts
// component=c4p-page-header-breadcrumb

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';
import { renderBooleanAttribute } from '../template-helpers';

const instance = figma.selectedInstance;

function createTemplate() {
  const hasIcon = instance.getBoolean('Icon');
  const hasContentActions = instance.getBoolean('Buttons');
  const hasPageActions = instance.getBoolean('Actions');
  const border = instance.getBoolean('Bottom border');

  const imports = [
    "import '@carbon/ibm-products-web-components/es/components/page-header/index.js';",
  ];
  if (hasIcon || hasPageActions) {
    imports.push(
      "import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';"
    );
  }
  if (hasIcon) {
    imports.push("import Bee16 from '@carbon/icons/es/bee/16.js';");
  }
  if (hasPageActions) {
    imports.push("import Activity16 from '@carbon/icons/es/activity/16.js';");
  }

  return {
    id: 'c4p-page-header-breadcrumb',
    imports,
    example: figma.code`<c4p-page-header-breadcrumb${renderBooleanAttribute(
      'border',
      border
    )}>
  ${hasIcon ? figma.code`\${iconLoader(Bee16, { slot: 'icon' })}` : ''}
  <cds-breadcrumb>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="#">Breadcrumb</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="#">Breadcrumb</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="#">Breadcrumb</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="#">Breadcrumb</cds-breadcrumb-link>
    </cds-breadcrumb-item>
  </cds-breadcrumb>
  ${
    hasContentActions
      ? figma.code`<div slot="content-actions">
    <cds-button size="md">Button</cds-button>
  </div>`
      : ''
  }
  ${
    hasPageActions
      ? figma.code`<cds-icon-button
    slot="page-actions"
    kind="ghost"
    size="md"
    align="bottom"
  >
    \${iconLoader(Activity16, { slot: 'icon' })}
    <span slot="tooltip-content">action 1</span>
  </cds-icon-button>
  <cds-icon-button
    slot="page-actions"
    kind="ghost"
    size="md"
    align="bottom"
  >
    \${iconLoader(Activity16, { slot: 'icon' })}
    <span slot="tooltip-content">action 2</span>
  </cds-icon-button>
  <cds-icon-button
    slot="page-actions"
    kind="ghost"
    size="md"
    align="bottom"
  >
    \${iconLoader(Activity16, { slot: 'icon' })}
    <span slot="tooltip-content">action 3</span>
  </cds-icon-button>`
      : ''
  }
</c4p-page-header-breadcrumb>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
