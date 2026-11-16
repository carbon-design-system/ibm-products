// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=41241-4083
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/PageHeader/next/PageHeaderTabBar.tsx
// component=PageHeader.TabBar

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

  const tags = hasTags
    ? figma.helpers.react.jsxElement(`<>
  <Tag type="blue" id="example-tag-1" key="example-tag-1">Tag</Tag>
  <Tag type="blue" id="example-tag-2" key="example-tag-2">Tag</Tag>
</>`)
    : undefined;
  const scroller = hasScroller
    ? figma.helpers.react.jsxElement('<PageHeader.ScrollButton />')
    : undefined;

  const carbonImports: string[] = [];
  if (hasTabs) {
    carbonImports.push('Tab', 'TabList');
  }
  if (hasTags) {
    carbonImports.push('Tag');
  }
  const imports = [
    "import { preview__PageHeader as PageHeader } from '@carbon/ibm-products';",
  ];
  if (carbonImports.length) {
    imports.push(
      `import { ${carbonImports.join(', ')} } from '@carbon/react';`
    );
  }

  const props = figma.code`${figma.helpers.react.renderProp('tags', tags)}${figma.helpers.react.renderProp('scroller', scroller)}`;

  return {
    id: 'PageHeaderTabBar',
    imports,
    example: hasTabs
      ? figma.code`<PageHeader.TabBar${props}>
  <TabList>
    <Tab>Tab label</Tab>
    <Tab>Tab label</Tab>
  </TabList>
</PageHeader.TabBar>`
      : figma.code`<PageHeader.TabBar${props} />`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
