import{e as t}from"./index-DxDX2vOa.js";import{g as h}from"./story-helper-BvAgcfdm.js";import{aw as e,al as C,ax as u,ak as g}from"./index-DAMUIRRT.js";import{useMDXComponents as p}from"./index-BgI2kBcJ.js";import"./chunk-NUUEMKO5-qxTmjHpU.js";import{C as d}from"./CoachmarkButton-Qo-Vm4GM.js";import{C as x}from"./Coachmark-tKcsu4bP.js";import{C as k,c as b,d as f}from"./CoachmarkOverlayElements-CpuCSpxK.js";import{C as j}from"./settings-0ThqPtR3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_euquWE.js";import"./index-CaMJXrh2.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-C1IaBP6P.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-CRUq0TYl.js";import"./index-DrFu-skq.js";import"./react-18-DcnmlX6h.js";import"./devtools-BlxCaI1L.js";import"./lodash-C6Eq4oiK.js";import"./index-YDq2Pj7F.js";import"./useIsomorphicEffect-BPCmBl9Y.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-nfnHYhtc.js";import"./SteppedAnimatedMedia-CCRxZAru.js";import"./lottie-D0UQuq7-.js";import"./clamp-RSd2z2nT.js";import"./toNumber-CjkmaA9J.js";import"./Carousel-CwCpn3uR.js";import"./events-OVwOsPzJ.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[`CoachmarkButton components use a ghost variant Carbon button specifically
designed to be used in the target prop of a Coachmark component
`,e.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#floating",rel:"nofollow",children:"floating"}),`
variant.`]}),`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(C,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(u,{of:a})})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={
    <CoachmarkButton
      kind="tertiary"
      label="Show information"
      size="md"
      renderIcon={Crossroads}
      label="Click Me"
      className="myButton"
    />
  }
>
  ...
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(g,{})]})}function y(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",re={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:y}}},E=r=>{const o=h();return t.createElement(x,{align:"bottom",overlayKind:k.FLOATING,target:t.createElement(d,{kind:"tertiary",label:"Show information",size:"md",renderIcon:j,...r}),theme:o},t.createElement(b,{closeButtonLabel:"Done"},t.createElement(f,{title:"Hello World",description:"this is a description test"})))},a=E.bind({});a.args={label:"Click Me",className:"myButton"};var s,i,m,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const ae=["coachmarkButton"];export{ae as __namedExportsOrder,a as coachmarkButton,re as default};
