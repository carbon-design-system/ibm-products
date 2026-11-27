// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=41243-6410
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/PageHeader/next/PageHeaderBreadcrumbBar.tsx
// component=PageHeader.BreadcrumbBar

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const hasIcon = instance.getBoolean('Icon');
  const hasButtons = instance.getBoolean('Buttons');
  const hasActions = instance.getBoolean('Actions');
  const border = instance.getBoolean('Bottom border');

  const renderIcon = hasIcon
    ? figma.helpers.react.function('() => <Bee size={16} />')
    : undefined;
  const contentActions = hasButtons
    ? figma.helpers.react.jsxElement(
        '<Button className="breadcrumb-bar-action-button" size="sm">Button</Button>'
      )
    : undefined;
  const pageActions = hasActions
    ? figma.helpers.react.jsxElement(`<>
  <Button renderIcon={Activity} iconDescription="Icon Description 1" hasIconOnly size="md" kind="ghost" />
  <Button renderIcon={Activity} iconDescription="Icon Description 2" hasIconOnly size="md" kind="ghost" />
  <Button renderIcon={Activity} iconDescription="Icon Description 3" hasIconOnly size="md" kind="ghost" />
</>`)
    : undefined;

  const imports = [
    "import { preview__PageHeader as PageHeader } from '@carbon/ibm-products';",
    "import { BreadcrumbItem, OverflowMenu, OverflowMenuItem } from '@carbon/react';",
  ];
  const carbonImports: string[] = [];
  if (hasButtons || hasActions) {
    imports.push("import { Button } from '@carbon/react';");
  }
  if (hasIcon) {
    carbonImports.push('Bee');
  }
  if (hasActions) {
    carbonImports.push('Activity');
  }
  if (carbonImports.length) {
    imports.push(
      `import { ${carbonImports.join(', ')} } from '@carbon/react/icons';`
    );
  }

  return {
    id: 'PageHeaderBreadcrumbBar',
    imports,
    example: figma.code`<PageHeader.BreadcrumbBar${figma.helpers.react.renderProp('border', border)}${figma.helpers.react.renderProp('renderIcon', renderIcon)}${figma.helpers.react.renderProp('pageActions', pageActions)}${figma.helpers.react.renderProp('contentActions', contentActions)}>
  <PageHeader.BreadcrumbOverflow
    renderOverflowBreadcrumb={(hiddenItems) => (
      <BreadcrumbItem data-floating-menu-container>
        <OverflowMenu align="bottom" aria-label="Overflow menu in a breadcrumb">
          {hiddenItems.map((el, i) => (
            <OverflowMenuItem itemText={el.innerText} key={i} />
          ))}
        </OverflowMenu>
      </BreadcrumbItem>
    )}
  >
    <BreadcrumbItem href="/#">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem href="/#">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem href="/#">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem href="/#">Breadcrumb</BreadcrumbItem>
  </PageHeader.BreadcrumbOverflow>
</PageHeader.BreadcrumbBar>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
