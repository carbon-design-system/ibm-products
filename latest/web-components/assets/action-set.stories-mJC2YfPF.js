import{x as c}from"./iframe-Dq7_sE-R.js";import"./action-set-BTwIGK1y.js";import"./button-CAMQBIDi.js";import"./button-skeleton-BqzEqCwi.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-lm-sIrT2.js";import"./state-145bePLO.js";import"./ref-CZgGgk6B.js";import"./host-listener-DN1-XIwx.js";const u={"Small (sm)":"sm","Medium (md)":"md","Large (lg)":"lg","Extra Large (xl)":"xl","2XL (2xl)":"2xl"},g={"Default (use size)":"","Small (sm)":"sm","Medium (md)":"md","Large (lg)":"lg","Extra Large (xl)":"xl","2XL (2xl)":"2xl"},p={"Two buttons":2,"Three buttons":3,"Four buttons":4},b={"No ghost button":!1,"Include ghost button":!0},$={title:"Utilities/ActionSet",argTypes:{size:{control:"select",options:u,description:"The size of the action set"},buttonSize:{control:"select",options:g,description:"Override button size (optional)"},disableStacking:{control:"boolean",description:"Prevent automatic stacking of buttons"},numberOfButtons:{control:"select",options:p,description:"Number of buttons to display"},includeGhost:{control:"select",options:b,description:"Include a ghost button"}},parameters:{docs:{description:{component:`
Action Set is a utility component that manages a set of action buttons with validation,
ordering, and responsive layout capabilities. It can be used with slotted buttons or
by passing an actions array prop.

## Features
- Automatic button ordering based on kind (ghost first, primary last)
- Validation of button combinations
- Responsive stacking behavior
- Focus management with button separator hiding
- Support for multiple sizes (sm, md, lg, xl, 2xl)
        `}}}},k=(t,n)=>{const r=[{kind:"secondary",label:"Cancel",onClick:()=>console.log("Cancel clicked")},{kind:"primary",label:"Submit",onClick:()=>console.log("Submit clicked")}],d={kind:"ghost",label:"Ghost",onClick:()=>console.log("Ghost clicked")},l={kind:"tertiary",label:"Tertiary",onClick:()=>console.log("Tertiary clicked")},m={kind:"danger",label:"Danger",onClick:()=>console.log("Danger clicked")};let e=[...r];return n&&(e=[d,...e]),t===3&&!n&&(e=[l,...e]),t===4&&(n?e=[d,l,...r]:e=[l,...r,m]),e},o={args:{size:"lg",buttonSize:"",disableStacking:!1,numberOfButtons:2,includeGhost:!1},render:t=>{const n=k(t.numberOfButtons,t.includeGhost);return c`
      <div style="padding: 2rem; background: var(--cds-layer-01);">
        <h3 style="margin-bottom: 1rem;">Action Set with Actions Prop</h3>
        <c4p-action-set
          size="${t.size}"
          button-size="${t.buttonSize||t.size}"
          ?disable-stacking="${t.disableStacking}"
          .actions="${n}"
        ></c4p-action-set>
      </div>
    `}},i={render:()=>c`
    <div style="padding: 2rem; background: var(--cds-layer-01);">
      <h3 style="margin-bottom: 1rem;">Action Set with Slotted Buttons</h3>
      <c4p-action-set size="lg">
        <cds-button kind="secondary">Cancel</cds-button>
        <cds-button kind="primary">Submit</cds-button>
      </c4p-action-set>
    </div>
  `},s={render:()=>{const t=[{kind:"secondary",label:"Cancel",onClick:()=>console.log("Cancel clicked")},{kind:"primary",label:"Submit",onClick:()=>console.log("Submit clicked")}];return c`
      <div style="padding: 2rem; background: var(--cds-layer-01);">
        <h3 style="margin-bottom: 1rem;">Small (sm) - Stacks automatically</h3>
        <c4p-action-set size="sm" .actions="${t}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">Medium (md)</h3>
        <c4p-action-set size="md" .actions="${t}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">Large (lg)</h3>
        <c4p-action-set size="lg" .actions="${t}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">Extra Large (xl)</h3>
        <c4p-action-set size="xl" .actions="${t}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">2XL (2xl)</h3>
        <c4p-action-set size="2xl" .actions="${t}"></c4p-action-set>
      </div>
    `}},a={render:()=>c`
    <div style="padding: 2rem; background: var(--cds-layer-01);">
      <h3 style="margin-bottom: 1rem;">Action Set with Four Buttons</h3>
      <c4p-action-set
        size="xl"
        .actions="${[{kind:"tertiary",label:"Tertiary",onClick:()=>console.log("Tertiary clicked")},{kind:"secondary",label:"Secondary",onClick:()=>console.log("Secondary clicked")},{kind:"danger",label:"Danger",onClick:()=>console.log("Danger clicked")},{kind:"primary",label:"Primary",onClick:()=>console.log("Primary clicked")}]}"
      ></c4p-action-set>
    </div>
  `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    buttonSize: '',
    disableStacking: false,
    numberOfButtons: 2,
    includeGhost: false
  },
  render: (args: any) => {
    const actions = getActions(args.numberOfButtons, args.includeGhost);
    return html\`
      <div style="padding: 2rem; background: var(--cds-layer-01);">
        <h3 style="margin-bottom: 1rem;">Action Set with Actions Prop</h3>
        <c4p-action-set
          size="\${args.size}"
          button-size="\${args.buttonSize || args.size}"
          ?disable-stacking="\${args.disableStacking}"
          .actions="\${actions}"
        ></c4p-action-set>
      </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--cds-layer-01);">
      <h3 style="margin-bottom: 1rem;">Action Set with Slotted Buttons</h3>
      <c4p-action-set size="lg">
        <cds-button kind="secondary">Cancel</cds-button>
        <cds-button kind="primary">Submit</cds-button>
      </c4p-action-set>
    </div>
  \`
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const actions: ActionButton[] = [{
      kind: 'secondary' as ButtonKind,
      label: 'Cancel',
      onClick: () => console.log('Cancel clicked')
    }, {
      kind: 'primary' as ButtonKind,
      label: 'Submit',
      onClick: () => console.log('Submit clicked')
    }];
    return html\`
      <div style="padding: 2rem; background: var(--cds-layer-01);">
        <h3 style="margin-bottom: 1rem;">Small (sm) - Stacks automatically</h3>
        <c4p-action-set size="sm" .actions="\${actions}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">Medium (md)</h3>
        <c4p-action-set size="md" .actions="\${actions}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">Large (lg)</h3>
        <c4p-action-set size="lg" .actions="\${actions}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">Extra Large (xl)</h3>
        <c4p-action-set size="xl" .actions="\${actions}"></c4p-action-set>

        <h3 style="margin: 2rem 0 1rem;">2XL (2xl)</h3>
        <c4p-action-set size="2xl" .actions="\${actions}"></c4p-action-set>
      </div>
    \`;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; background: var(--cds-layer-01);">
      <h3 style="margin-bottom: 1rem;">Action Set with Four Buttons</h3>
      <c4p-action-set
        size="xl"
        .actions="\${[{
    kind: 'tertiary',
    label: 'Tertiary',
    onClick: () => console.log('Tertiary clicked')
  }, {
    kind: 'secondary',
    label: 'Secondary',
    onClick: () => console.log('Secondary clicked')
  }, {
    kind: 'danger',
    label: 'Danger',
    onClick: () => console.log('Danger clicked')
  }, {
    kind: 'primary',
    label: 'Primary',
    onClick: () => console.log('Primary clicked')
  }]}"
      ></c4p-action-set>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};const B=["Default","WithSlottedButtons","DifferentSizes","FourActions"];export{o as Default,s as DifferentSizes,a as FourActions,i as WithSlottedButtons,B as __namedExportsOrder,$ as default};
