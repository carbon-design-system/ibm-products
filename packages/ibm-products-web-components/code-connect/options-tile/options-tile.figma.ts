// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=36228%3A14503
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/options-tile/options-tile.ts
// component=c4p-options-tile

/**
 * Copyright IBM Corp. 2025, 2026
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
  const defaultOpen = instance.getBoolean('Expanded');
  const size = instance.getEnum('Size', {
    Large: 'lg',
    'Extra large': 'xl',
  });
  const titleText = instance.getString('Heading text');

  const hasMessage = instance.getBoolean('Summary + Validation');
  const message = instance.findInstance('Summary + Validation message');
  let summary: string | undefined;
  if (hasMessage && message.type !== 'ERROR') {
    const type = message.getEnum('Type', { Summary: 'summary' });
    if (type === 'summary') {
      summary = message.getString('Summary text');
    }
  }

  const hasToggle = instance.getBoolean('Toggle');
  const isExpandable = instance.getEnum('Type', { Expandable: true });
  const slot = isExpandable
    ? instance.getInstanceSwap('Swap slot')?.executeTemplate().example
    : undefined;

  const imports = [
    "import '@carbon/ibm-products-web-components/es/components/options-tile/index';",
  ];
  if (hasToggle) {
    imports.push(
      "import '@carbon/web-components/es/components/toggle/toggle.js';"
    );
  }

  return {
    id: 'c4p-options-tile',
    imports,
    example: figma.code`<c4p-options-tile${renderBooleanAttribute(
      'defaultOpen',
      defaultOpen
    )}${renderStringAttribute('size', size)}${renderStringAttribute(
      'titleText',
      titleText
    )}>
  ${summary ? figma.code`<div slot="summary">${summary}</div>` : ''}
  ${
    hasToggle
      ? figma.code`<cds-toggle id="my-toggle" size="sm" hideLabel slot="toggle"></cds-toggle>`
      : ''
  }
  ${slot ? figma.code`<div slot="body">${slot}</div>` : ''}
</c4p-options-tile>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
