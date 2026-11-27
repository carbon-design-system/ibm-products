// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=31080%3A23323
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/PageHeader/next/PageHeader.tsx
// component=PageHeader

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const style = instance.getEnum('Style', {
    Action: 'action',
    Image: 'image',
  });

  // _Title and _Summary are shared by both styles.
  const titleLayer = instance.findInstance('_Title');
  let title: string | undefined;
  let hasIcon = false;
  let hasTags = false;
  if (titleLayer.type !== 'ERROR') {
    title = titleLayer.getString('Title text');
    hasIcon = titleLayer.getBoolean('Leading icon');
    hasTags = titleLayer.getBoolean('Slot');
  }
  const summaryLayer = instance.findInstance('_Summary');
  const summary =
    summaryLayer.type !== 'ERROR'
      ? summaryLayer.getString('Summary text')
      : undefined;

  const renderIcon = hasIcon
    ? figma.helpers.react.function('() => <Bee size={32} />')
    : undefined;
  const contextualActions = hasTags
    ? figma.helpers.react.jsxElement(`<>
  <Tag className="tag" type="blue" size="lg">Tag</Tag>
  <Tag className="tag" type="blue" size="lg">Tag</Tag>
</>`)
    : undefined;

  const breadcrumbBar = instance.getBoolean('Breadcrumb bar')
    ? figma.properties.children(['_Breadcrumb bar'])
    : null;

  const carbonImports: string[] = [];
  const imports = [
    "import { preview__PageHeader as PageHeader } from '@carbon/ibm-products';",
  ];
  if (hasTags) {
    carbonImports.push('Tag');
  }

  let example;
  if (style === 'image') {
    carbonImports.push('Column', 'Grid');
    const contentLayer = instance.findInstance('_Content expressive');
    const subtitleText =
      contentLayer.type !== 'ERROR' && contentLayer.getBoolean('Subtitle')
        ? contentLayer.findText('Subtitle')
        : undefined;
    const subtitle =
      subtitleText && subtitleText.type !== 'ERROR'
        ? subtitleText.textContent
        : undefined;

    example = figma.code`<PageHeader.Root>
  <Grid>
    <Column lg={8} md={4} sm={4}>
      ${breadcrumbBar}
      <PageHeader.Content${figma.helpers.react.renderProp('title', title)}${figma.helpers.react.renderProp('renderIcon', renderIcon)}${figma.helpers.react.renderProp('contextualActions', contextualActions)}>
        <PageHeader.ContentText${figma.helpers.react.renderProp('subtitle', subtitle)}>
          ${summary}
        </PageHeader.ContentText>
      </PageHeader.Content>
    </Column>
    <Column lg={8} md={4} sm={0}>
      <PageHeader.HeroImage>
        <img
          src="https://placehold.co/600x400"
          alt="placeholder"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </PageHeader.HeroImage>
    </Column>
  </Grid>
</PageHeader.Root>`;
  } else {
    const contentLayer = instance.findInstance('_Content');
    let pageActions;
    let subtitle: string | undefined;
    if (contentLayer.type !== 'ERROR') {
      if (contentLayer.getBoolean('Actions')) {
        carbonImports.push('Button');
        pageActions = figma.helpers.react
          .jsxElement(`<PageHeader.ContentPageActions
  actions={[
    {
      id: 'action1',
      onClick: () => console.log('Action 1'),
      body: <Button size="md" kind="primary">Button</Button>,
    },
  ]}
/>`);
      }
      if (contentLayer.getBoolean('Subtitle')) {
        const subtitleText = contentLayer.findText('Subtitle');
        subtitle =
          subtitleText.type !== 'ERROR' ? subtitleText.textContent : undefined;
      }
    }
    const tabBar = instance.getBoolean('Tab bar')
      ? figma.properties.children(['_Tab bar'])
      : null;

    example = figma.code`<PageHeader.Root>
  ${breadcrumbBar}
  <PageHeader.Content${figma.helpers.react.renderProp('title', title)}${figma.helpers.react.renderProp('renderIcon', renderIcon)}${figma.helpers.react.renderProp('pageActions', pageActions)}${figma.helpers.react.renderProp('contextualActions', contextualActions)}>
    <PageHeader.ContentText${figma.helpers.react.renderProp('subtitle', subtitle)}>
      ${summary}
    </PageHeader.ContentText>
  </PageHeader.Content>
  ${tabBar}
</PageHeader.Root>`;
  }

  if (carbonImports.length) {
    imports.push(
      `import { ${[...carbonImports].sort().join(', ')} } from '@carbon/react';`
    );
  }
  if (hasIcon) {
    imports.push("import { Bee } from '@carbon/react/icons';");
  }

  return {
    id: 'PageHeader',
    imports,
    example,
    metadata: { nestable: false },
  };
}

export default createTemplate();
