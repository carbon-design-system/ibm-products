// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837-338231
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/tearsheet-preview/tearsheet.ts
// component=c4p-preview-tearsheet

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
  const headerInstance = instance.findInstance('_Tearsheet header');
  let hideCloseButton: boolean | undefined;
  let title: string | undefined;
  let descriptionText: string | undefined;
  let labelText: string | undefined;
  let hasTitleLeadingSlot = false;
  let hasActions = false;
  let hasTabs = false;

  if (headerInstance.type !== 'ERROR') {
    hideCloseButton = headerInstance.getEnum('Style', {
      'Passive - With close icon': false,
      'Transactional - No close icon': true,
    });
    title = headerInstance.getString('Title');

    const hasDescription = headerInstance.getBoolean('Description');
    if (hasDescription) {
      const descInstance = headerInstance.findInstance('Description');
      if (descInstance.type !== 'ERROR') {
        descriptionText = descInstance.getString('Description text');
      }
    }

    const hasLabel = headerInstance.getBoolean('Label');
    if (hasLabel) {
      const labelNode = headerInstance.findText('Label');
      if (labelNode.type !== 'ERROR') {
        labelText = labelNode.textContent;
      }
    }

    hasTitleLeadingSlot = headerInstance.getBoolean('Title leading slot');
    hasActions = headerInstance.getBoolean('Actions');
    hasTabs = headerInstance.getBoolean('Tabs');
  }

  const hasButtons = instance.getBoolean('Buttons');
  let footerButtons: any = null;
  if (hasButtons) {
    const footerItem = instance.findInstance('R:2 | Tearsheet footer item');
    if (footerItem.type !== 'ERROR') {
      const buttons = footerItem.getEnum('Buttons', {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
      });
      if (buttons === '1') {
        footerButtons = figma.code`<cds-button slot="footer-button" kind="primary">Button</cds-button>`;
      } else if (buttons === '2') {
        footerButtons = figma.code`<cds-button slot="footer-button" kind="secondary">Button</cds-button>
  <cds-button slot="footer-button" kind="primary">Button</cds-button>`;
      } else if (buttons === '3') {
        footerButtons = figma.code`<cds-button slot="footer-button" kind="ghost">Button</cds-button>
  <cds-button slot="footer-button" kind="secondary">Button</cds-button>
  <cds-button slot="footer-button" kind="primary">Button</cds-button>`;
      } else if (buttons === '4') {
        footerButtons = figma.code`<cds-button slot="footer-button" kind="ghost">Button</cds-button>
  <cds-button slot="footer-button" kind="tertiary">Button</cds-button>
  <cds-button slot="footer-button" kind="secondary">Button</cds-button>
  <cds-button slot="footer-button" kind="primary">Button</cds-button>`;
      }
    }
  }

  const imports = [
    "import '@carbon/ibm-products-web-components/es/components/tearsheet-preview/index.js';",
  ];
  if (hasTitleLeadingSlot) {
    imports.push(
      "import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';",
      "import Bee16 from '@carbon/icons/es/bee/16.js';"
    );
  }

  return {
    id: 'c4p-preview-tearsheet',
    imports,
    example: figma.code`<c4p-preview-tearsheet open variant="narrow">
  <c4p-tearsheet-header${renderBooleanAttribute(
    'hide-close-button',
    hideCloseButton
  )}>
    <c4p-tearsheet-header-content${renderStringAttribute('title', title)}>
      ${labelText ? figma.code`<label slot="label">${labelText}</label>` : ''}
      ${
        descriptionText
          ? figma.code`<span slot="description">${descriptionText}</span>`
          : ''
      }
      ${
        hasTitleLeadingSlot
          ? figma.code`\${iconLoader(Bee16, { slot: 'title-start' })}`
          : ''
      }
      ${
        hasActions
          ? figma.code`<div slot="header-actions">
        <cds-button size="sm" kind="tertiary">Action 1</cds-button>
      </div>`
          : ''
      }
    </c4p-tearsheet-header-content>
    ${
      hasTabs
        ? figma.code`<c4p-tearsheet-navigation-bar>
      <c4p-tearsheet-scroller
        slot="scroller"
        label="Header collapse/expand"
      ></c4p-tearsheet-scroller>
      <cds-tabs value="tab-1">
        <cds-tab id="tab-1" target="tab-panel-1" value="tab-1">Tab label</cds-tab>
        <cds-tab id="tab-2" target="tab-panel-2" value="tab-2">Tab label</cds-tab>
        <cds-tab id="tab-3" target="tab-panel-3" value="tab-3">Tab label</cds-tab>
      </cds-tabs>
    </c4p-tearsheet-navigation-bar>`
        : ''
    }
  </c4p-tearsheet-header>

  <c4p-tearsheet-body>
    <div slot="main-content">
      This is the main content area.${
        hasTabs
          ? figma.code`
      <div id="tab-panel-1" role="tabpanel" aria-labelledby="tab-1" hidden="">
        Tab Panel 1
      </div>
      <div id="tab-panel-2" role="tabpanel" aria-labelledby="tab-2" hidden="">
        Tab Panel 2
      </div>
      <div id="tab-panel-3" role="tabpanel" aria-labelledby="tab-3" hidden="">
        Tab Panel 3
      </div>`
          : ''
      }
    </div>
  </c4p-tearsheet-body>

  ${
    footerButtons
      ? figma.code`<c4p-tearsheet-footer>
    ${footerButtons}
  </c4p-tearsheet-footer>`
      : ''
  }
</c4p-preview-tearsheet>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
