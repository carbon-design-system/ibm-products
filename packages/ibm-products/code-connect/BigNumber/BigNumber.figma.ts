// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=32105%3A811
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/BigNumber/BigNumber.tsx
// component=BigNumber

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const showLabel = instance.getBoolean('Label');
  const labelText = instance.getString('Label text');
  const label = showLabel && labelText ? labelText : 'Label';

  // `value` is a number in code but a string in Figma. Convert it when it is
  // numeric, otherwise fall back to a representative value.
  const rawValue = String(instance.getString('Value') ?? '')
    .replace(/,/g, '')
    .trim();
  const parsedValue = Number(rawValue);
  const value =
    rawValue !== '' && Number.isFinite(parsedValue) ? parsedValue : 1000;

  const size = instance.getEnum('Size', {
    Default: 'default',
    Large: 'lg',
    XL: 'xl',
  });
  const trending = instance.getBoolean('Trending');
  // Number props have no getter: use a representative value.
  const total = instance.getBoolean('Total') ? 10000 : undefined;
  const tooltipDescription = instance.getBoolean('Tooltip')
    ? 'Tooltip description'
    : undefined;

  const hasEditButton = instance.getBoolean('Edit button');
  const editButton = hasEditButton
    ? figma.code`
  iconButton={<Button kind="ghost" size="sm" hasIconOnly renderIcon={Edit} iconDescription="Edit" />}`
    : null;

  const imports = [
    "import { previewCandidate__BigNumber as BigNumber } from '@carbon/ibm-products';",
  ];
  if (hasEditButton) {
    imports.push("import { Button } from '@carbon/react';");
    imports.push("import { Edit } from '@carbon/react/icons';");
  }

  return {
    id: 'BigNumber',
    imports,
    example: figma.code`<BigNumber
  label="${label}"
  value={${value}}${figma.helpers.react.renderProp('total', total)}${figma.helpers.react.renderProp('size', size)}${figma.helpers.react.renderProp('trending', trending)}${figma.helpers.react.renderProp('tooltipDescription', tooltipDescription)}${editButton}
/>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
