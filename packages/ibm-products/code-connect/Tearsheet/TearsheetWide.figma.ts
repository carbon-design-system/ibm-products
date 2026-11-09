// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837%3A338113
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/Tearsheet/next/Tearsheet.tsx
// component=Tearsheet

/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

// Actions array literals keyed by the Figma 'Buttons' enum value.
const actionsMap: Record<string, string> = {
  '1': `[{ key: 1, kind: 'primary', label: 'Button', loading: false, onClick: () => console.log('clicked primary') }]`,
  '2': `[{ key: 1, kind: 'primary', label: 'Button', loading: false, onClick: () => console.log('clicked primary') }, { key: 2, kind: 'secondary', label: 'Button', loading: false, onClick: () => console.log('clicked secondary') }]`,
  '3': `[{ key: 1, kind: 'primary', label: 'Button', loading: false, onClick: () => console.log('clicked primary') }, { key: 2, kind: 'secondary', label: 'Button', loading: false, onClick: () => console.log('clicked secondary') }, { key: 3, kind: 'ghost', label: 'Button', loading: false, onClick: () => console.log('clicked ghost') }]`,
  '4': `[{ key: 1, kind: 'primary', label: 'Button', loading: false, onClick: () => console.log('clicked primary') }, { key: 2, kind: 'secondary', label: 'Button', loading: false, onClick: () => console.log('clicked secondary') }, { key: 3, kind: 'tertiary', label: 'Button', loading: false, onClick: () => console.log('clicked tertiary') }, { key: 4, kind: 'ghost', label: 'Button', loading: false, onClick: () => console.log('clicked ghost') }]`,
};

function createTemplate() {
  // ── Header ──────────────────────────────────────────────────────────────────
  const tearsheetHeader = instance.findInstance('_Tearsheet header');

  let hideCloseButton: boolean | undefined;
  let title = '';
  let hasDescription = false;
  let descriptionText = '';
  let hasLabel = false;
  let labelText = '';
  let hasTitleStart = false;
  let hasHeaderActions = false;
  let hasTabs = false;

  if (tearsheetHeader.type !== 'ERROR') {
    hideCloseButton = tearsheetHeader.getEnum('Style', {
      'Passive - With close icon': undefined,
      'Transactional - No close icon': true,
    });
    title = tearsheetHeader.getString('Title');
    hasDescription = tearsheetHeader.getBoolean('Description');
    if (hasDescription) {
      const descInst = tearsheetHeader.findInstance('Description');
      if (descInst.type !== 'ERROR') {
        descriptionText = descInst.getString('Description text');
      }
    }
    hasLabel = tearsheetHeader.getBoolean('Label');
    if (hasLabel) {
      const labelHandle = tearsheetHeader.findText('Label');
      labelText =
        labelHandle.type !== 'ERROR' ? labelHandle.textContent : 'Label';
    }
    hasTitleStart = tearsheetHeader.getBoolean('Title leading slot');
    hasHeaderActions = tearsheetHeader.getBoolean('Actions');
    hasTabs = tearsheetHeader.getBoolean('Tabs');
  }

  // ── Footer ───────────────────────────────────────────────────────────────────
  const hasFooterActions = instance.getBoolean('Buttons');
  let actionsLiteral: string | undefined;
  if (hasFooterActions) {
    const footerItem = instance.findInstance('R:2 | Tearsheet footer item');
    if (footerItem.type !== 'ERROR') {
      const key = footerItem.getEnum('Buttons', {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
      });
      actionsLiteral = key ? actionsMap[key] : undefined;
    }
  }

  // ── Panels ───────────────────────────────────────────────────────────────────
  const hasInfluencer = instance.getBoolean('Left panel');
  const hasSummary = instance.getBoolean('Right panel');

  // ── imports ──────────────────────────────────────────────────────────────────
  const imports = [
    "import { preview__Tearsheet as Tearsheet } from '@carbon/ibm-products';",
  ];
  if (hasTitleStart) {
    imports.push("import { Bee } from '@carbon/react/icons';");
  }
  if (hasHeaderActions) {
    imports.push("import { Button } from '@carbon/react';");
  }
  if (hasTabs) {
    imports.push("import { TabList, Tab } from '@carbon/react';");
  }

  // ── Header sub-snippets ──────────────────────────────────────────────────────
  const descriptionProp = hasDescription
    ? figma.code`
      description="${descriptionText}"`
    : figma.code``;

  const labelProp = hasLabel
    ? figma.code`
      label="${labelText}"`
    : figma.code``;

  const titleStartProp = hasTitleStart
    ? figma.code`
      titleStart={<Bee size={16} />}`
    : figma.code``;

  const headerActionsProp = hasHeaderActions
    ? figma.code`
      headerActions={
        <Tearsheet.HeaderActions menuButtonProps={{ label: 'Actions', kind: 'tertiary' }}>
          <Tearsheet.HeaderActionItem overflowItemLabel="Action 1">
            <Button kind="tertiary" size="sm">Action 1</Button>
          </Tearsheet.HeaderActionItem>
          <Tearsheet.HeaderActionItem overflowItemLabel="Action 2">
            <Button kind="tertiary" size="sm">Action 2</Button>
          </Tearsheet.HeaderActionItem>
        </Tearsheet.HeaderActions>
      }`
    : figma.code``;

  const tabsSnippet = hasTabs
    ? figma.code`
        <Tearsheet.NavigationBar scroller={<Tearsheet.ScrollButton label="Header collapse/expand" />}>
          <TabList aria-label="Tab list">
            <Tab>Tab label</Tab>
            <Tab>Tab label</Tab>
            <Tab>Tab label</Tab>
          </TabList>
        </Tearsheet.NavigationBar>`
    : figma.code``;

  const influencerSnippet = hasInfluencer
    ? figma.code`
      <Tearsheet.Influencer>
        Rendered on the left, spanning the full height. Can be used to display a vertical progress indicator or similar elements.
      </Tearsheet.Influencer>`
    : figma.code``;

  const summarySnippet = hasSummary
    ? figma.code`
          <Tearsheet.SummaryContent>
            Rendered next to the main content area, this section can be used to display summary details or related information.
          </Tearsheet.SummaryContent>`
    : figma.code``;

  const footerActionsSnippet =
    hasFooterActions && actionsLiteral
      ? figma.code`
      <Tearsheet.Footer actions={${actionsLiteral}} />`
      : figma.code`
      <Tearsheet.Footer />`;

  return {
    id: 'TearsheetWide',
    imports,
    example: figma.code`<Tearsheet open>${influencerSnippet}
      <Tearsheet.Header${figma.helpers.react.renderProp('hideCloseButton', hideCloseButton)}>
        <Tearsheet.HeaderContent
          title="${title}"${descriptionProp}${labelProp}${titleStartProp}${headerActionsProp}
        />${tabsSnippet}
      </Tearsheet.Header>
      <Tearsheet.Body>
        <Tearsheet.MainContent>
          This is the main content area.
        </Tearsheet.MainContent>${summarySnippet}
      </Tearsheet.Body>${footerActionsSnippet}
    </Tearsheet>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
