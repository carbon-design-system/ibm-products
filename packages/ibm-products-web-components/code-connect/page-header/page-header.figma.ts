// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=31080%3A23323
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/page-header/page-header.ts
// component=c4p-page-header

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';
import { renderStringAttribute } from '../template-helpers';

const instance = figma.selectedInstance;

function createTemplate() {
  const style = instance.getEnum('Style', {
    Action: 'Action',
    Image: 'Image',
  });

  const titleInstance = instance.findInstance('_Title');
  let titleText: string | undefined;
  let hasLeadingIcon = false;
  let hasTags = false;
  if (titleInstance.type !== 'ERROR') {
    titleText = titleInstance.getString('Title text');
    hasLeadingIcon = titleInstance.getBoolean('Leading icon');
    hasTags = titleInstance.getBoolean('Slot');
  }

  const summaryInstance = instance.findInstance('_Summary');
  let summaryText: string | undefined;
  if (summaryInstance.type !== 'ERROR') {
    summaryText = summaryInstance.getString('Summary text');
  }

  const imports = [
    "import '@carbon/ibm-products-web-components/es/components/page-header/index.js';",
  ];
  if (hasLeadingIcon) {
    imports.push(
      "import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';",
      "import Bee32 from '@carbon/icons/es/bee/32.js';"
    );
  }

  if (style === 'Image') {
    const contentInstance = instance.findInstance('_Content expressive');
    let subtitleText: string | undefined;
    if (contentInstance.type !== 'ERROR') {
      const hasSubtitle = contentInstance.getBoolean('Subtitle');
      if (hasSubtitle) {
        const subtitleTextNode = contentInstance.findText('Subtitle');
        if (subtitleTextNode.type !== 'ERROR') {
          subtitleText = subtitleTextNode.textContent;
        }
      }
    }

    return {
      id: 'c4p-page-header',
      imports,
      example: figma.code`<c4p-page-header>
  <div class="cds--css-grid">
    <div
      class="cds--sm:col-span-4 cds--md:col-span-4 cds--lg:col-span-8 cds--css-grid-column"
    >
      <c4p-page-header-content within-grid${renderStringAttribute(
        'title',
        titleText
      )}>
        ${
          hasLeadingIcon
            ? figma.code`\${iconLoader(Bee32, { slot: 'icon' })}`
            : ''
        }
        ${
          hasTags
            ? figma.code`<div slot="contextual-actions">
          <cds-tag type="blue" size="lg">Tag</cds-tag>
        </div>`
            : ''
        }
        <c4p-page-header-content-text${renderStringAttribute(
          'subtitle',
          subtitleText
        )}>
          ${summaryText ? figma.code`${summaryText}` : ''}
        </c4p-page-header-content-text>
      </c4p-page-header-content>
    </div>
    <div
      class="cds--sm:col-span-0 cds--md:col-span-4 cds--lg:col-span-8 cds--css-grid-column"
    >
      <c4p-page-header-hero-image>
        <img
          src="image1"
          alt="a default image"
          style="max-width:100%;height:auto"
        />
      </c4p-page-header-hero-image>
    </div>
  </div>
</c4p-page-header>`,
      metadata: { nestable: true },
    };
  }

  // Action style
  const hasBreadcrumbBar = instance.getBoolean('Breadcrumb bar');
  const breadcrumbBar = hasBreadcrumbBar
    ? instance.findInstance('_Breadcrumb bar')?.executeTemplate().example
    : undefined;

  const contentInstance = instance.findInstance('_Content');
  let hasActions = false;
  let subtitleText: string | undefined;
  if (contentInstance.type !== 'ERROR') {
    hasActions = contentInstance.getBoolean('Actions');
    const hasSubtitle = contentInstance.getBoolean('Subtitle');
    if (hasSubtitle) {
      const subtitleTextNode = contentInstance.findText('Subtitle');
      if (subtitleTextNode.type !== 'ERROR') {
        subtitleText = subtitleTextNode.textContent;
      }
    }
  }

  const hasTabBar = instance.getBoolean('Tab bar');
  const tabBar = hasTabBar
    ? instance.findInstance('_Tab bar')?.executeTemplate().example
    : undefined;

  return {
    id: 'c4p-page-header',
    imports,
    example: figma.code`<c4p-page-header>
  ${breadcrumbBar ? figma.code`${breadcrumbBar}` : ''}
  <c4p-page-header-content${renderStringAttribute('title', titleText)}>
    ${hasLeadingIcon ? figma.code`\${iconLoader(Bee32, { slot: 'icon' })}` : ''}
    ${
      hasTags
        ? figma.code`<div slot="contextual-actions">
      <cds-tag type="blue" size="lg">Tag</cds-tag>
    </div>`
        : ''
    }
    ${
      hasActions
        ? figma.code`<div slot="page-actions">
      <cds-button size="md">Button</cds-button>
    </div>`
        : ''
    }
    <c4p-page-header-content-text${renderStringAttribute(
      'subtitle',
      subtitleText
    )}>
      ${summaryText ? figma.code`${summaryText}` : ''}
    </c4p-page-header-content-text>
  </c4p-page-header-content>
  ${tabBar ? figma.code`${tabBar}` : ''}
</c4p-page-header>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
