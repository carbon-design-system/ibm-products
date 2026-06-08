import{u as x,j as e,M as p,C as t}from"./blocks-kYx6XcD1.js";import{E as j,D as l,I as c,C as o,R as h}from"./edit-in-place.stories-D1Tb7Q19.js";import{s as d}from"./codePreviewer-C-BirJlx.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DR1WA3L-.js";import"./edit-in-place-B_mWGWuq.js";import"./state-TBFLRUV6.js";import"./query-D0jTsbLw.js";import"./class-map-Dg3tacqA.js";import"./icon-button-BNlzycrP.js";import"./button-C8YhQ_39.js";import"./host-listener-DN1-XIwx.js";import"./definition-tooltip-CpaTfnF5.js";import"./popover-content-v84rt999.js";import"./floating-controller-O5_OP1Uj.js";import"./button-skeleton-D_sbyVTw.js";import"./16-C_7DXZKc.js";import"./16-BsOTR82k.js";import"./16-C2f9e6nj.js";import"./16-D5maUdCH.js";import"./16-C1hWzIbz.js";import"./icon-loader-DL1ZNzxN.js";import"./collection-helpers-Cnsts1JG.js";import"./tab-skeleton-BzLuhV01.js";import"./skeleton-text-Ddk8D3WD.js";import"./progress-bar-Dy0-hgLa.js";import"./16-DvgjsF02.js";import"./16-DSuDh1sQ.js";import"./16-BnGJYOZo.js";import"./breadcrumb-skeleton-CcYX_F_J.js";import"./link-DHxziJLp.js";import"./overflow-menu-item-DmU3Ov5n.js";import"./16-DYhtUhBA.js";import"./checkbox-d--H2Era.js";import"./form-BTpacr1I.js";import"./16-B8NH1ntc.js";import"./checkbox-skeleton-MD8yzuS_.js";import"./code-snippet-skeleton-DMXqxOlE.js";import"./16-iEvmxbCa.js";import"./style-map-Corv6k7L.js";import"./16-D0aIqdwb.js";import"./dropdown-skeleton-BmeMWQfZ.js";import"./validity-CzEiVmrf.js";import"./if-non-empty-DnuQKTz0.js";import"./file-uploader-item-BaoGO4ot.js";import"./loading-CktIYgrE.js";import"./inline-loading-BaC6ii-h.js";import"./form-group-CtpKPmWh.js";import"./search-skeleton-DdANnyco.js";import"./text-input-CUD5HWVf.js";import"./form-item-B3NSDFBn.js";import"./32-DU7BQPC2.js";import"./toast-notification-CzAuk7Ie.js";import"./16-D3CzXAJU.js";import"./16-Ci-Iy0jC.js";import"./text-input-skeleton-CVN-MygM.js";import"./layer-CGln1lfz.js";import"./modal-label-CjARQAxT.js";import"./20-CvqWH37X.js";import"./actionable-notification-button-Wc3ppkhL.js";import"./number-input-skeleton-C9TEtJt3.js";import"./16-DXyY1wqk.js";import"./textarea-skeleton-BK0dNBFT.js";import"./progress-step-CLnpno1_.js";import"./slider-skeleton-D05eoZNw.js";import"./tag-CyiHVrVM.js";import"./toggle-fTRHFl2P.js";import"./switcher-divider-DsYS6WXB.js";import"./stack-D7-fWBrU.js";import"./20-CvzIqpkz.js";import"./consume-DI2TaawZ.js";import"./16-DrZ0hxK3.js";import"./32-gWGFBCOY.js";import"./16-CfG0rDIQ.js";import"./16-803qFA73.js";import"./16-BpKA4nzT.js";import"./32-Dvc1-m7_.js";import"./index-DkSYGz6Z.js";import"./20-q75D_U8N.js";import"./16-B_l_7QwJ.js";import"./16-BJ-s22c-.js";import"./16-LR5LqMCE.js";import"./16-CPU3a-Kb.js";import"./20-CEm2HUGl.js";import"./16-DSpKrZTh.js";import"./16-aWrrgdCQ.js";import"./16-xraWWrlP.js";import"./16-C22St5FV.js";import"./16-DOn1njS0.js";import"./16-C-Ba_D2f.js";import"./16-gUhxGjnI.js";import"./16-BswKfa1f.js";import"./20-3muJ_g4f.js";const m=`/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';
import { EDIT_IN_PLACE_SIZE, TOOLTIP_ALIGNMENT } from './defs';

export const blockClass = \`\${prefix}--edit-in-place\`;
export const storyClass = 'edit-in-place-example';

export const sizes = {
  [\`Small (\${EDIT_IN_PLACE_SIZE.SMALL})\`]: EDIT_IN_PLACE_SIZE.SMALL,
  [\`Medium (\${EDIT_IN_PLACE_SIZE.MEDIUM})\`]: EDIT_IN_PLACE_SIZE.MEDIUM,
  [\`Large (\${EDIT_IN_PLACE_SIZE.LARGE})\`]: EDIT_IN_PLACE_SIZE.LARGE,
};

export const tooltipAlignments = {
  [\`Top (\${TOOLTIP_ALIGNMENT.TOP})\`]: TOOLTIP_ALIGNMENT.TOP,
  [\`Top left (\${TOOLTIP_ALIGNMENT.TOP_LEFT})\`]: TOOLTIP_ALIGNMENT.TOP_LEFT,
  [\`Top right (\${TOOLTIP_ALIGNMENT.TOP_RIGHT})\`]: TOOLTIP_ALIGNMENT.TOP_RIGHT,
  [\`Bottom (\${TOOLTIP_ALIGNMENT.BOTTOM})\`]: TOOLTIP_ALIGNMENT.BOTTOM,
  [\`Bottom left (\${TOOLTIP_ALIGNMENT.BOTTOM_LEFT})\`]:
    TOOLTIP_ALIGNMENT.BOTTOM_LEFT,
  [\`Bottom right (\${TOOLTIP_ALIGNMENT.BOTTOM_RIGHT})\`]:
    TOOLTIP_ALIGNMENT.BOTTOM_RIGHT,
  [\`Left (\${TOOLTIP_ALIGNMENT.LEFT})\`]: TOOLTIP_ALIGNMENT.LEFT,
  [\`Right (\${TOOLTIP_ALIGNMENT.RIGHT})\`]: TOOLTIP_ALIGNMENT.RIGHT,
};

export const defaultArgs = {
  cancelLabel: 'Cancel',
  containerWidth: 300,
  editAlwaysVisible: false,
  editLabel: 'Edit',
  id: 'story-id',
  inheritTypography: false,
  invalid: false,
  invalidText: 'This field is required',
  labelText: 'Label text',
  placeholder: 'placeholder text',
  readOnly: false,
  readOnlyLabel: 'Edit off',
  readOnlyToggleTipText: 'This field is read-only and cannot be edited',
  saveLabel: 'Save',
  size: EDIT_IN_PLACE_SIZE.SMALL,
  toggleTipAlignment: TOOLTIP_ALIGNMENT.BOTTOM,
  tooltipAlignment: TOOLTIP_ALIGNMENT.TOP,
  value: 'default',
};
`,r=[m.replace(/import\s+.*?from\s+['"].*?['"];?\s*/g,"").replace(/import\s+\{[^}]*\}\s+from\s+['"].*?['"];?\s*/g,"").replace(/export\s+/g,"").replace(/\/\*\*[\s\S]*?\*\//g,"").replace(/const\s+prefix\s*=.*?;/g,"").replace(/\$\{prefix\}/g,"${'c4p'}").replace(/\s*\{\s+args:\s*defaultArgs,\s+render:\s*\(args:\s*any\)\s*=>\s*\{\s*/g,"").trim()],s=[`import '@carbon/web-components/es/components/tooltip/index.js';
`];function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...x(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:j}),`
`,e.jsx(n.h1,{id:"edit-in-place",children:"Edit in place"}),`
`,e.jsx(n.p,{children:"The EditInPlace component allows users to edit text inline with save and cancel actions. It provides a seamless editing experience with keyboard support and validation."}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/edit-in-place/index.js';
`})}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<c4p-edit-in-place
  id="my-edit"
  value="Edit me"
  label-text="Editable field"
  edit-label="Edit"
  save-label="Save"
  cancel-label="Cancel"
></c4p-edit-in-place>
`})}),`
`,e.jsx(n.h3,{id:"javascript-event-handling",children:"JavaScript (Event Handling)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const editInPlace = document.querySelector('c4p-edit-in-place');

editInPlace.addEventListener('c4p-edit-in-place-change', (e) => {
  console.log('Value changed:', e.detail.value);
});

editInPlace.addEventListener('c4p-edit-in-place-save', (e) => {
  console.log('Saved:', e.detail.value);
});

editInPlace.addEventListener('c4p-edit-in-place-cancel', (e) => {
  console.log('Cancelled:', e.detail.value);
});
`})}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(t,{of:l,additionalActions:[{title:"Open in Stackblitz",onClick:()=>d({story:l,customFunctionDefs:r,customImports:s,componentName:"edit-in-place"})}]}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(t,{of:c,additionalActions:[{title:"Open in Stackblitz",onClick:()=>d({story:c,customFunctionDefs:r,customImports:s,componentName:"edit-in-place"})}]}),`
`,e.jsx(n.h3,{id:"custom-blur-function",children:"Custom Blur Function"}),`
`,e.jsx(t,{of:o,additionalActions:[{title:"Open in Stackblitz",onClick:()=>d({story:o,customFunctionDefs:r,customImports:s,componentName:"edit-in-place"})}]}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read Only"}),`
`,e.jsx(t,{of:h,additionalActions:[{title:"Open in Stackblitz",onClick:()=>d({story:h,customFunctionDefs:r,customImports:s,componentName:"edit-in-place"})}]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(n.h3,{id:"properties",children:"Properties"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Property"}),e.jsx(n.th,{children:"Attribute"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cancelLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"cancel-label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Cancel'"})}),e.jsx(n.td,{children:"Label for the cancel button"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"editAlwaysVisible"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"edit-always-visible"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Always show the edit icon (not just on hover)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"editLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"edit-label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Edit'"})}),e.jsx(n.td,{children:"Label for the edit button"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"id"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsx(n.td,{children:"Specify a custom id for the input"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inheritTypography"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"inherit-typography"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Inherit typography from container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"invalid"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"invalid"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Determines if the input is invalid"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"invalidText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"invalid-text"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsx(n.td,{children:"Text displayed when input is invalid"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"labelText"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"label-text"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsx(n.td,{children:"Text for screen readers"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"placeholder"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"placeholder"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsx(n.td,{children:"Placeholder text for the input"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"readOnly"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"read-only"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Determines if the input is in read-only mode"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"readOnlyLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"read-only-label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Edit off'"})}),e.jsx(n.td,{children:"Label for the edit off button in read-only mode"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"saveLabel"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"save-label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'Save'"})}),e.jsx(n.td,{children:"Label for the save button"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"size"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"size"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'sm' | 'md' | 'lg'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'sm'"})}),e.jsx(n.td,{children:"Vertical size of control"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tooltipAlignment"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"tooltip-alignment"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"TooltipAlignment"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'top'"})}),e.jsx(n.td,{children:"Tooltip alignment for buttons"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"''"})}),e.jsx(n.td,{children:"Current value of the input"})]})]})]}),`
`,e.jsx(n.h3,{id:"tooltipalignment-type",children:"TooltipAlignment Type"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type TooltipAlignment =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right';
`})}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Detail"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-edit-in-place-change"})}),e.jsx(n.td,{children:"Fired when the input value changes"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ value: string }"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-edit-in-place-save"})}),e.jsx(n.td,{children:"Fired when save is triggered (button click or Enter key)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ value: string }"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-edit-in-place-cancel"})}),e.jsx(n.td,{children:"Fired when cancel is triggered (button click or Escape key)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ value: string }"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"c4p-edit-in-place-blur"})}),e.jsx(n.td,{children:"Fired when the input loses focus"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ value: string }"})})]})]})]}),`
`,e.jsx(n.h2,{id:"css-parts",children:"CSS Parts"}),`
`,e.jsx(n.p,{children:"The component exposes the following CSS parts for external styling:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Part"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"input"})}),e.jsx(n.td,{children:"The input element"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"actions"})}),e.jsx(n.td,{children:"The button container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"invalid-text"})}),e.jsx(n.td,{children:"The error message container"})]})]})]}),`
`,e.jsx(n.h3,{id:"example-styling-with-css-parts",children:"Example: Styling with CSS Parts"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`c4p-edit-in-place::part(input) {
  font-weight: bold;
}

c4p-edit-in-place::part(actions) {
  background-color: lightgray;
}

c4p-edit-in-place::part(invalid-text) {
  font-style: italic;
}
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component uses proper ARIA attributes for screen readers"}),`
`,e.jsxs(n.li,{children:["Keyboard navigation is fully supported:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enter"}),": Save changes (when in edit mode)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Escape"}),": Cancel changes (when in edit mode)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tab"}),": Navigate between input and action buttons"]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"All buttons have accessible labels via tooltips"}),`
`,e.jsx(n.li,{children:"Invalid state is properly announced to screen readers"}),`
`]}),`
`,e.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,e.jsxs(n.p,{children:[`Help us improve this component by providing feedback, asking questions on Slack, or updating this file in
`,e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/src/components/edit-in-place/edit-in-place.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function nn(i={}){const{wrapper:n}={...x(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{r as customFunctionArr,s as customImportArr,nn as default};
