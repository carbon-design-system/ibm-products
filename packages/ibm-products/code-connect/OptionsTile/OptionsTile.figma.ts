// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=36228%3A14503
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/OptionsTile/OptionsTile.tsx
// component=OptionsTile

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const title = instance.getString('Heading text');
  const open = instance.getBoolean('Expanded');
  const enabled = instance.getBoolean('Toggle');
  const size = instance.getEnum('Size', {
    Large: 'lg',
    'Extra large': 'xl',
  });

  const hasMessage = instance.getBoolean('Summary + Validation');
  const message = instance.findInstance('Summary + Validation message');
  let locked: boolean | undefined;
  let summary: string | undefined;
  let invalid: boolean | undefined;
  let invalidText: string | undefined;
  let warn: boolean | undefined;
  let warnText: string | undefined;
  if (hasMessage && message.type !== 'ERROR') {
    const type = message.getEnum('Type', {
      Summary: 'summary',
      Warning: 'warning',
      Error: 'error',
    });
    if (type === 'summary') {
      locked = message.getBoolean('Locked');
      summary = message.getString('Summary text');
    } else if (type === 'warning') {
      warn = true;
      warnText = message.getString('Warning text');
    } else if (type === 'error') {
      invalid = true;
      invalidText = message.getString('Error text');
    }
  }

  const isExpandable = instance.getEnum('Type', { Expandable: true });
  const slot = isExpandable
    ? instance.getInstanceSwap('Swap slot')?.executeTemplate().example
    : undefined;

  const props = figma.code`${figma.helpers.react.renderProp('open', open)}${figma.helpers.react.renderProp('size', size)}${figma.helpers.react.renderProp('enabled', enabled)}${figma.helpers.react.renderProp('locked', locked)}${figma.helpers.react.renderProp('summary', summary)}${figma.helpers.react.renderProp('invalid', invalid)}${figma.helpers.react.renderProp('invalidText', invalidText)}${figma.helpers.react.renderProp('warn', warn)}${figma.helpers.react.renderProp('warnText', warnText)}`;

  return {
    id: 'OptionsTile',
    imports: ["import { OptionsTile } from '@carbon/ibm-products';"],
    example: slot
      ? figma.code`<OptionsTile title="${title}"${props}>
  ${slot}
</OptionsTile>`
      : figma.code`<OptionsTile title="${title}"${props} />`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
