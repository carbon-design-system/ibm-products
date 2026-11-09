// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=8858%3A390246
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/SidePanel/SidePanel.tsx
// component=SidePanel

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const size = instance.getEnum('Size', {
    'X-Small (256)': 'xs',
    'Small (320)': 'sm',
    'Medium (480)': 'md',
    'Large (640)': 'lg',
    'X-Large (<75%)': 'xl',
  });

  const header = instance.findInstance('Header');

  let title: string | undefined;
  let subtitle: string | undefined;
  let labelText: string | undefined;
  let currentStep: number | undefined;
  let hasToolbar = false;
  let hasLeadingButton = false;
  if (header.type !== 'ERROR') {
    const showTitle = header.getBoolean('Title');
    title = showTitle ? header.getString('Title text') : undefined;
    subtitle = header.getString('Description text');
    const showEyebrow = header.getBoolean('Eyebrow');
    labelText = showEyebrow ? header.getString('Eyebrow text') : undefined;
    const showBack = header.getBoolean('Back button');
    currentStep = showBack ? 1 : undefined;
    hasToolbar = header.getBoolean('Action toolbar');
    if (hasToolbar) {
      const toolbar = header.findInstance('Action toolbar');
      if (toolbar.type !== 'ERROR') {
        hasLeadingButton = toolbar.getBoolean('Button');
      }
    }
  }

  const slideIn = instance.getBoolean('Slide over') ? true : undefined;
  const placement = !instance.getBoolean('Slide over') ? 'right' : undefined;
  const selectorPageContent = !instance.getBoolean('Slide over')
    ? '#page-content'
    : undefined;

  const hasPrimaryActions = instance.getBoolean('Primary actions');
  let actionsEnum: string | undefined;
  if (hasPrimaryActions) {
    const footer = instance.findInstance('Footer');
    if (footer.type !== 'ERROR') {
      actionsEnum = footer.getEnum('Buttons', {
        '1': '1',
        '2': '2',
        '3': '3',
        '1 + Ghost': '1 + Ghost',
        '2 + Ghost': '2 + Ghost',
      });
    }
  }

  // Build the actions literal based on the footer Buttons enum.
  const actionsMap: Record<string, string> = {
    '1': `[{ kind: 'primary', label: 'Button', onClick: () => console.log('Clicked action button') }]`,
    '2': `[{ kind: 'primary', label: 'Button', onClick: () => console.log('Clicked action button') }, { kind: 'secondary', label: 'Button', onClick: () => console.log('Clicked action button') }]`,
    '3': `[{ kind: 'primary', label: 'Button', onClick: () => console.log('Clicked action button') }, { kind: 'secondary', label: 'Button', onClick: () => console.log('Clicked action button') }, { kind: 'secondary', label: 'Button', onClick: () => console.log('Clicked action button') }]`,
    '1 + Ghost': `[{ kind: 'primary', label: 'Button', onClick: () => console.log('Clicked action button') }, { kind: 'ghost', label: 'Button', onClick: () => console.log('Clicked action button') }]`,
    '2 + Ghost': `[{ kind: 'primary', label: 'Button', onClick: () => console.log('Clicked action button') }, { kind: 'secondary', label: 'Button', onClick: () => console.log('Clicked action button') }, { kind: 'ghost', label: 'Button', onClick: () => console.log('Clicked action button') }]`,
  };
  const actionsLiteral =
    hasPrimaryActions && actionsEnum ? actionsMap[actionsEnum] : undefined;

  // actionToolbarButtons literal
  const toolbarWithLeading = `[{ leading: true, label: 'Button', icon: Add, onClick: () => console.log('Clicked toolbar action button'), kind: 'primary' }, { label: 'Copy', icon: Copy, onClick: () => console.log('Clicked toolbar action button'), hasIconOnly: true }, { label: 'Settings', icon: Settings, onClick: () => console.log('Clicked toolbar action button'), hasIconOnly: true }, { label: 'Delete', icon: TrashCan, onClick: () => console.log('Clicked toolbar action button'), hasIconOnly: true }]`;
  const toolbarWithoutLeading = `[{ label: 'Copy', icon: Copy, onClick: () => console.log('Clicked toolbar action button'), hasIconOnly: true }, { label: 'Settings', icon: Settings, onClick: () => console.log('Clicked toolbar action button'), hasIconOnly: true }, { label: 'Delete', icon: TrashCan, onClick: () => console.log('Clicked toolbar action button'), hasIconOnly: true }]`;
  const toolbarLiteral = hasToolbar
    ? hasLeadingButton
      ? toolbarWithLeading
      : toolbarWithoutLeading
    : undefined;

  const imports = ["import { SidePanel } from '@carbon/ibm-products';"];
  if (hasToolbar) {
    imports.push(
      "import { Add, Copy, Settings, TrashCan } from '@carbon/react/icons';"
    );
  }

  return {
    id: 'SidePanel',
    imports,
    example: figma.code`<SidePanel
  open={true}${figma.helpers.react.renderProp('size', size)}${figma.helpers.react.renderProp('title', title)}${figma.helpers.react.renderProp('subtitle', subtitle)}${figma.helpers.react.renderProp('labelText', labelText)}${figma.helpers.react.renderProp('slideIn', slideIn)}${figma.helpers.react.renderProp('placement', placement)}${figma.helpers.react.renderProp('selectorPageContent', selectorPageContent)}${
    actionsLiteral
      ? figma.code`
  actions={${actionsLiteral}}`
      : figma.code``
  }${
    toolbarLiteral
      ? figma.code`
  actionToolbarButtons={${toolbarLiteral}}`
      : figma.code``
  }${figma.helpers.react.renderProp('currentStep', currentStep)}
/>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
