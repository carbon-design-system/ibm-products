import{o as i,x as c}from"./iframe-DHAVyDJv.js";import"./edit-in-place-Cg0B9_lE.js";import"./definition-tooltip-WlsPtVr7.js";var t=(e=>(e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e))(t||{}),l=(e=>(e.TOP="top",e.TOP_LEFT="top-left",e.TOP_RIGHT="top-right",e.BOTTOM="bottom",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_RIGHT="bottom-right",e.LEFT="left",e.RIGHT="right",e))(l||{});const $="edit-in-place-example",v={[`Small (${t.SMALL})`]:t.SMALL,[`Medium (${t.MEDIUM})`]:t.MEDIUM,[`Large (${t.LARGE})`]:t.LARGE},g={[`Top (${l.TOP})`]:l.TOP,[`Top left (${l.TOP_LEFT})`]:l.TOP_LEFT,[`Top right (${l.TOP_RIGHT})`]:l.TOP_RIGHT,[`Bottom (${l.BOTTOM})`]:l.BOTTOM,[`Bottom left (${l.BOTTOM_LEFT})`]:l.BOTTOM_LEFT,[`Bottom right (${l.BOTTOM_RIGHT})`]:l.BOTTOM_RIGHT,[`Left (${l.LEFT})`]:l.LEFT,[`Right (${l.RIGHT})`]:l.RIGHT},s={cancelLabel:"Cancel",containerWidth:300,editAlwaysVisible:!1,editLabel:"Edit",id:"story-id",inheritTypography:!1,invalid:!1,invalidText:"This field is required",labelText:"Label text",placeholder:"placeholder text",readOnly:!1,readOnlyLabel:"Edit off",readOnlyToggleTipText:"This field is read-only and cannot be edited",saveLabel:"Save",size:t.SMALL,toggleTipAlignment:l.BOTTOM,tooltipAlignment:l.TOP,value:"default"},p={cancelLabel:{control:"text",description:"Label for the cancel button"},containerWidth:{control:{type:"range",min:20,max:800,step:10},description:"Controls containing element width. Used for demonstration purposes, not property of the component."},editAlwaysVisible:{control:"boolean",description:"Always show the edit icon (not just on hover)"},editLabel:{control:"text",description:"Label for the edit button"},id:{control:"text",description:"Specify a custom id for the input"},inheritTypography:{control:"boolean",description:"Inherit typography from container"},invalid:{control:"boolean",description:"Determines if the input is invalid"},invalidText:{control:"text",description:"Text displayed when input is invalid"},labelText:{control:"text",description:"Text for screen readers"},placeholder:{control:"text",description:"Placeholder text for the input"},readOnly:{control:"boolean",description:"Determines if the input is in read-only mode"},readOnlyLabel:{control:"text",description:"Label for the edit off button in read-only mode"},readOnlyToggleTipText:{control:"text",description:"Text for the toggletip that displays when in read-only mode"},saveLabel:{control:"text",description:"Label for the save button"},toggleTipAlignment:{control:"select",description:"Alignment for the toggletip in read-only mode",options:g},size:{control:"select",description:"Vertical size of control",options:v},tooltipAlignment:{control:"select",description:"Tooltip alignment for buttons",options:g},value:{control:"text",description:"Current value of the input"}},a={args:s,argTypes:p,render:e=>c`
      <div style="width: ${e.containerWidth}px;">
        <c4p-edit-in-place
          id=${i(e.id)}
          cancel-label=${i(e.cancelLabel)}
          ?edit-always-visible=${e.editAlwaysVisible}
          edit-label=${i(e.editLabel)}
          ?inherit-typography=${e.inheritTypography}
          ?invalid=${e.invalid}
          invalid-text=${i(e.invalidText)}
          label-text=${i(e.labelText)}
          placeholder=${i(e.placeholder)}
          ?read-only=${e.readOnly}
          read-only-label=${i(e.readOnlyLabel)}
          read-only-toggletip-text=${i(e.readOnlyToggleTipText)}
          save-label=${i(e.saveLabel)}
          size=${i(e.size)}
          toggletip-alignment=${i(e.toggleTipAlignment)}
          tooltip-alignment=${i(e.tooltipAlignment)}
          value=${i(e.value)}
          @c4p-edit-in-place-change=${n=>{console.log("Change:",n.detail)}}
          @c4p-edit-in-place-save=${n=>{console.log("Save:",n.detail)}}
          @c4p-edit-in-place-cancel=${n=>{console.log("Cancel:",n.detail)}}
          @c4p-edit-in-place-blur=${n=>{console.log("Blur:",n.detail)}}
        ></c4p-edit-in-place>
      </div>
    `},o={args:{...s,invalid:!0},argTypes:p,render:e=>c`
      <div style="width: ${e.containerWidth}px;">
        <c4p-edit-in-place
          id=${i(e.id)}
          cancel-label=${i(e.cancelLabel)}
          ?edit-always-visible=${e.editAlwaysVisible}
          edit-label=${i(e.editLabel)}
          ?inherit-typography=${e.inheritTypography}
          ?invalid=${e.invalid}
          invalid-text=${i(e.invalidText)}
          label-text=${i(e.labelText)}
          placeholder=${i(e.placeholder)}
          ?read-only=${e.readOnly}
          read-only-label=${i(e.readOnlyLabel)}
          read-only-toggletip-text=${i(e.readOnlyToggleTipText)}
          save-label=${i(e.saveLabel)}
          size=${i(e.size)}
          toggletip-alignment=${i(e.toggleTipAlignment)}
          tooltip-alignment=${i(e.tooltipAlignment)}
          value=${i(e.value)}
          @c4p-edit-in-place-change=${n=>{console.log("Change:",n.detail)}}
          @c4p-edit-in-place-save=${n=>{console.log("Save:",n.detail)}}
          @c4p-edit-in-place-cancel=${n=>{console.log("Cancel:",n.detail)}}
          @c4p-edit-in-place-blur=${n=>{console.log("Blur:",n.detail)}}
        ></c4p-edit-in-place>
      </div>
    `},d={args:s,argTypes:p,render:e=>c`
      <div style="width: ${e.containerWidth}px;">
        <c4p-edit-in-place
          id=${i(e.id)}
          cancel-label=${i(e.cancelLabel)}
          ?edit-always-visible=${e.editAlwaysVisible}
          edit-label=${i(e.editLabel)}
          ?inherit-typography=${e.inheritTypography}
          ?invalid=${e.invalid}
          invalid-text=${i(e.invalidText)}
          label-text=${i(e.labelText)}
          placeholder=${i(e.placeholder)}
          ?read-only=${e.readOnly}
          read-only-label=${i(e.readOnlyLabel)}
          read-only-toggletip-text=${i(e.readOnlyToggleTipText)}
          save-label=${i(e.saveLabel)}
          size=${i(e.size)}
          toggletip-alignment=${i(e.toggleTipAlignment)}
          tooltip-alignment=${i(e.tooltipAlignment)}
          value=${i(e.value)}
          @c4p-edit-in-place-change=${n=>{console.log("Change:",n.detail)}}
          @c4p-edit-in-place-save=${n=>{console.log("Save:",n.detail)}}
          @c4p-edit-in-place-cancel=${n=>{console.log("Cancel:",n.detail)}}
          @c4p-edit-in-place-blur=${n=>{console.log("Cancel on blur:",n.detail)}}
        ></c4p-edit-in-place>
      </div>
    `},r={args:{...s,readOnly:!0},argTypes:p,render:e=>c`
      <div style="width: ${e.containerWidth}px;">
        <c4p-edit-in-place
          id=${i(e.id)}
          cancel-label=${i(e.cancelLabel)}
          ?edit-always-visible=${e.editAlwaysVisible}
          edit-label=${i(e.editLabel)}
          ?inherit-typography=${e.inheritTypography}
          ?invalid=${e.invalid}
          invalid-text=${i(e.invalidText)}
          label-text=${i(e.labelText)}
          placeholder=${i(e.placeholder)}
          ?read-only=${e.readOnly}
          read-only-label=${i(e.readOnlyLabel)}
          read-only-toggletip-text=${i(e.readOnlyToggleTipText)}
          save-label=${i(e.saveLabel)}
          size=${i(e.size)}
          toggletip-alignment=${i(e.toggleTipAlignment)}
          tooltip-alignment=${i(e.tooltipAlignment)}
          value=${i(e.value)}
          @c4p-edit-in-place-change=${n=>{console.log("Change:",n.detail)}}
          @c4p-edit-in-place-save=${n=>{console.log("Save:",n.detail)}}
          @c4p-edit-in-place-cancel=${n=>{console.log("Cancel:",n.detail)}}
          @c4p-edit-in-place-blur=${n=>{console.log("Blur:",n.detail)}}
        ></c4p-edit-in-place>
      </div>
    `},b={title:"Components/EditInPlace",parameters:{docs:{description:{component:`
The EditInPlace component allows users to edit text inline with save and cancel actions.

## Usage

\`\`\`html
<c4p-edit-in-place
  id="my-edit"
  value="Edit me"
  label-text="Editable field"
  edit-label="Edit"
  save-label="Save"
  cancel-label="Cancel"
></c4p-edit-in-place>
\`\`\`

## Events

- \`c4p-edit-in-place-change\` - Fired when the input value changes
- \`c4p-edit-in-place-save\` - Fired when save is triggered
- \`c4p-edit-in-place-cancel\` - Fired when cancel is triggered
- \`c4p-edit-in-place-blur\` - Fired when the input loses focus

## CSS Parts

- \`input\` - The input element
- \`actions\` - The button container
- \`invalid-text\` - The error message container
        `}}},decorators:[e=>c`
      <div class="ccs-sb--display-box ${$}__viewport">
        <div class="ccs-sb--display-box__indicator">
          <div class="ccs-sb--display-box__message">
            width available to component<br />(use containerWidth control to
            adjust)
          </div>
          <div class="ccs-sb--display-box__indicator--left"></div>
          <div class="ccs-sb--display-box__indicator--right"></div>
        </div>
        ${e()}
      </div>
    `]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes,
  render: (args: any) => {
    return html\`
      <div style="width: \${args.containerWidth}px;">
        <c4p-edit-in-place
          id=\${ifDefined(args.id)}
          cancel-label=\${ifDefined(args.cancelLabel)}
          ?edit-always-visible=\${args.editAlwaysVisible}
          edit-label=\${ifDefined(args.editLabel)}
          ?inherit-typography=\${args.inheritTypography}
          ?invalid=\${args.invalid}
          invalid-text=\${ifDefined(args.invalidText)}
          label-text=\${ifDefined(args.labelText)}
          placeholder=\${ifDefined(args.placeholder)}
          ?read-only=\${args.readOnly}
          read-only-label=\${ifDefined(args.readOnlyLabel)}
          read-only-toggletip-text=\${ifDefined(args.readOnlyToggleTipText)}
          save-label=\${ifDefined(args.saveLabel)}
          size=\${ifDefined(args.size)}
          toggletip-alignment=\${ifDefined(args.toggleTipAlignment)}
          tooltip-alignment=\${ifDefined(args.tooltipAlignment)}
          value=\${ifDefined(args.value)}
          @c4p-edit-in-place-change=\${(e: CustomEvent) => {
      console.log('Change:', e.detail);
    }}
          @c4p-edit-in-place-save=\${(e: CustomEvent) => {
      console.log('Save:', e.detail);
    }}
          @c4p-edit-in-place-cancel=\${(e: CustomEvent) => {
      console.log('Cancel:', e.detail);
    }}
          @c4p-edit-in-place-blur=\${(e: CustomEvent) => {
      console.log('Blur:', e.detail);
    }}
        ></c4p-edit-in-place>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    invalid: true
  },
  argTypes,
  render: (args: any) => {
    return html\`
      <div style="width: \${args.containerWidth}px;">
        <c4p-edit-in-place
          id=\${ifDefined(args.id)}
          cancel-label=\${ifDefined(args.cancelLabel)}
          ?edit-always-visible=\${args.editAlwaysVisible}
          edit-label=\${ifDefined(args.editLabel)}
          ?inherit-typography=\${args.inheritTypography}
          ?invalid=\${args.invalid}
          invalid-text=\${ifDefined(args.invalidText)}
          label-text=\${ifDefined(args.labelText)}
          placeholder=\${ifDefined(args.placeholder)}
          ?read-only=\${args.readOnly}
          read-only-label=\${ifDefined(args.readOnlyLabel)}
          read-only-toggletip-text=\${ifDefined(args.readOnlyToggleTipText)}
          save-label=\${ifDefined(args.saveLabel)}
          size=\${ifDefined(args.size)}
          toggletip-alignment=\${ifDefined(args.toggleTipAlignment)}
          tooltip-alignment=\${ifDefined(args.tooltipAlignment)}
          value=\${ifDefined(args.value)}
          @c4p-edit-in-place-change=\${(e: CustomEvent) => {
      console.log('Change:', e.detail);
    }}
          @c4p-edit-in-place-save=\${(e: CustomEvent) => {
      console.log('Save:', e.detail);
    }}
          @c4p-edit-in-place-cancel=\${(e: CustomEvent) => {
      console.log('Cancel:', e.detail);
    }}
          @c4p-edit-in-place-blur=\${(e: CustomEvent) => {
      console.log('Blur:', e.detail);
    }}
        ></c4p-edit-in-place>
      </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  argTypes,
  render: (args: any) => {
    return html\`
      <div style="width: \${args.containerWidth}px;">
        <c4p-edit-in-place
          id=\${ifDefined(args.id)}
          cancel-label=\${ifDefined(args.cancelLabel)}
          ?edit-always-visible=\${args.editAlwaysVisible}
          edit-label=\${ifDefined(args.editLabel)}
          ?inherit-typography=\${args.inheritTypography}
          ?invalid=\${args.invalid}
          invalid-text=\${ifDefined(args.invalidText)}
          label-text=\${ifDefined(args.labelText)}
          placeholder=\${ifDefined(args.placeholder)}
          ?read-only=\${args.readOnly}
          read-only-label=\${ifDefined(args.readOnlyLabel)}
          read-only-toggletip-text=\${ifDefined(args.readOnlyToggleTipText)}
          save-label=\${ifDefined(args.saveLabel)}
          size=\${ifDefined(args.size)}
          toggletip-alignment=\${ifDefined(args.toggleTipAlignment)}
          tooltip-alignment=\${ifDefined(args.tooltipAlignment)}
          value=\${ifDefined(args.value)}
          @c4p-edit-in-place-change=\${(e: CustomEvent) => {
      console.log('Change:', e.detail);
    }}
          @c4p-edit-in-place-save=\${(e: CustomEvent) => {
      console.log('Save:', e.detail);
    }}
          @c4p-edit-in-place-cancel=\${(e: CustomEvent) => {
      console.log('Cancel:', e.detail);
    }}
          @c4p-edit-in-place-blur=\${(e: CustomEvent) => {
      const shouldSaveValue = false;
      if (shouldSaveValue) {
        console.log('Save on blur:', e.detail);
      } else {
        console.log('Cancel on blur:', e.detail);
      }
    }}
        ></c4p-edit-in-place>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    readOnly: true
  },
  argTypes,
  render: (args: any) => {
    return html\`
      <div style="width: \${args.containerWidth}px;">
        <c4p-edit-in-place
          id=\${ifDefined(args.id)}
          cancel-label=\${ifDefined(args.cancelLabel)}
          ?edit-always-visible=\${args.editAlwaysVisible}
          edit-label=\${ifDefined(args.editLabel)}
          ?inherit-typography=\${args.inheritTypography}
          ?invalid=\${args.invalid}
          invalid-text=\${ifDefined(args.invalidText)}
          label-text=\${ifDefined(args.labelText)}
          placeholder=\${ifDefined(args.placeholder)}
          ?read-only=\${args.readOnly}
          read-only-label=\${ifDefined(args.readOnlyLabel)}
          read-only-toggletip-text=\${ifDefined(args.readOnlyToggleTipText)}
          save-label=\${ifDefined(args.saveLabel)}
          size=\${ifDefined(args.size)}
          toggletip-alignment=\${ifDefined(args.toggleTipAlignment)}
          tooltip-alignment=\${ifDefined(args.tooltipAlignment)}
          value=\${ifDefined(args.value)}
          @c4p-edit-in-place-change=\${(e: CustomEvent) => {
      console.log('Change:', e.detail);
    }}
          @c4p-edit-in-place-save=\${(e: CustomEvent) => {
      console.log('Save:', e.detail);
    }}
          @c4p-edit-in-place-cancel=\${(e: CustomEvent) => {
      console.log('Cancel:', e.detail);
    }}
          @c4p-edit-in-place-blur=\${(e: CustomEvent) => {
      console.log('Blur:', e.detail);
    }}
        ></c4p-edit-in-place>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};const f=["Default","Invalid","CustomBlurFunction","ReadOnly"],m=Object.freeze(Object.defineProperty({__proto__:null,CustomBlurFunction:d,Default:a,Invalid:o,ReadOnly:r,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{d as C,a as D,m as E,o as I,r as R};
