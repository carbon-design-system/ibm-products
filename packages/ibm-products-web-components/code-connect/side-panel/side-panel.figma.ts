// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=8858%3A390246
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/side-panel/side-panel.ts
// component=c4p-side-panel

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
  const size = instance.getEnum('Size', {
    'X-Small (256)': 'xs',
    'Small (320)': 'sm',
    'Medium (480)': 'md',
    'Large (640)': 'lg',
    'X-Large (<75%)': 'xl',
  });

  const slideOver = instance.getBoolean('Slide over');
  const slideIn = slideOver ? true : undefined;
  const placement = slideOver ? undefined : 'right';
  const selectorPageContent = slideOver ? undefined : '#page-content';

  const header = instance.findInstance('Header');
  let title: string | undefined;
  let subtitle: string | undefined;
  let labelText: string | undefined;
  let toolbarButtons: any = null;

  if (header.type !== 'ERROR') {
    const hasTitle = header.getBoolean('Title');
    if (hasTitle) {
      title = header.getString('Title text');
    }
    subtitle = header.getString('Description text');
    const hasEyebrow = header.getBoolean('Eyebrow');
    if (hasEyebrow) {
      labelText = header.getString('Eyebrow text');
    }

    const hasActionToolbar = header.getBoolean('Action toolbar');
    if (hasActionToolbar) {
      const actionToolbar = header.findInstance('Action toolbar');
      if (actionToolbar.type !== 'ERROR') {
        const hasButton = actionToolbar.getBoolean('Button');
        if (hasButton) {
          toolbarButtons = figma.code`<cds-button slot="action-toolbar">Copy</cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Settings"
    has-icon-only="true"
    size="sm"
    tooltip-text="Settings"
    kind="ghost"
  >
    <svg
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      slot="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        d="M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3\tc-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1\tC5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4\tc0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4\tc0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4\tc0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8\tL9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6\tC5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"
      ></path>
      <path
        d="M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8\tc0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"
      ></path>
    </svg>
  </cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Delete"
    has-icon-only="true"
    size="sm"
    tooltip-text="Delete"
    kind="ghost"
  >
    <svg
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      slot="icon"
      width="16"
      height="16"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M12 12H14V24H12zM18 12H20V24H18z"></path>
      <path
        d="M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"
      ></path>
    </svg>
  </cds-button>`;
        } else {
          toolbarButtons = figma.code`<cds-button
    slot="action-toolbar"
    aria-label="Settings"
    has-icon-only="true"
    size="sm"
    tooltip-text="Settings"
    kind="ghost"
  >
    <svg
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      slot="icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        d="M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3\tc-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1\tC5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4\tc0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4\tc0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4\tc0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8\tL9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6\tC5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"
      ></path>
      <path
        d="M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8\tc0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"
      ></path>
    </svg>
  </cds-button>
  <cds-button
    slot="action-toolbar"
    aria-label="Delete"
    has-icon-only="true"
    size="sm"
    tooltip-text="Delete"
    kind="ghost"
  >
    <svg
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      slot="icon"
      width="16"
      height="16"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M12 12H14V24H12zM18 12H20V24H18z"></path>
      <path
        d="M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"
      ></path>
    </svg>
  </cds-button>`;
        }
      }
    }
  }

  const hasPrimaryActions = instance.getBoolean('Primary actions');
  let footerButtons: any = null;
  if (hasPrimaryActions) {
    const footer = instance.findInstance('Footer');
    if (footer.type !== 'ERROR') {
      const buttons = footer.getEnum('Buttons', {
        '1': '1',
        '2': '2',
        '3': '3',
        '1 + Ghost': '1 + Ghost',
        '2 + Ghost': '2 + Ghost',
      });
      if (buttons === '1') {
        footerButtons = figma.code`<cds-button key="p" slot="actions" kind="primary">Primary</cds-button>`;
      } else if (buttons === '2') {
        footerButtons = figma.code`<cds-button slot="actions" kind="secondary">Secondary</cds-button>
  <cds-button key="p" slot="actions" kind="primary">Primary</cds-button>`;
      } else if (buttons === '3') {
        footerButtons = figma.code`<cds-button slot="actions" kind="secondary">Secondary</cds-button>
  <cds-button slot="actions" kind="secondary">Secondary 2</cds-button>
  <cds-button key="p" slot="actions" kind="primary">Primary</cds-button>`;
      } else if (buttons === '1 + Ghost') {
        footerButtons = figma.code`<cds-button slot="actions" kind="ghost">Ghost</cds-button>
  <cds-button key="p" slot="actions" kind="primary">Primary</cds-button>`;
      } else if (buttons === '2 + Ghost') {
        footerButtons = figma.code`<cds-button slot="actions" kind="ghost">Ghost</cds-button>
  <cds-button slot="actions" kind="secondary">Secondary</cds-button>
  <cds-button slot="actions" kind="primary">Primary</cds-button>`;
      }
    }
  }

  const children =
    instance.getSlot('Slot') ??
    instance.getInstanceSwap('Slot')?.executeTemplate().example;

  return {
    id: 'c4p-side-panel',
    imports: [
      "import '@carbon/ibm-products-web-components/es/components/side-panel/index';",
    ],
    example: figma.code`<c4p-side-panel
  open${renderStringAttribute('label-text', labelText)}${renderBooleanAttribute(
    'slide-in',
    slideIn
  )}${renderStringAttribute('size', size)}${renderStringAttribute(
    'placement',
    placement
  )}${renderStringAttribute(
    'selector-page-content',
    selectorPageContent
  )}${renderStringAttribute('.title', title)}
>
  ${subtitle ? figma.code`${subtitle}` : ''}
  ${toolbarButtons ? figma.code`${toolbarButtons}` : ''}
  ${footerButtons ? figma.code`${footerButtons}` : ''}
  ${children ? figma.code`${children}` : ''}
</c4p-side-panel>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
