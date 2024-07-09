import{j as e}from"./settings-BiUEFdm2.js";import{g as p}from"./story-helper-YTYnELA9.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-CsZ1lTTC.js";import{e as h,i as C,C as u}from"./index-CDYzkStP.js";import{C as d}from"./CoachmarkButton-B7-tYcr3.js";import{C as x}from"./Coachmark-DTT1Rzkr.js";import{C as g,c as k,d as j}from"./CoachmarkOverlayElements-BjzFwB1c.js";import{e as f}from"./deprecate-D9ms-jbM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-j3s5A4v9.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./devtools-BPcQvzXy.js";import"./lodash-C6Eq4oiK.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BuK6y5Rd.js";import"./SteppedAnimatedMedia-D5S8_Guu.js";import"./lottie-D0UQuq7-.js";import"./clamp-DxEmERK6.js";import"./toNumber-DNhxxDfe.js";import"./Carousel-DpP2qXaV.js";function t(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[`CoachmarkButton components use a ghost variant Carbon button specifically
designed to be used in the target prop of a Coachmark component
`,e.jsx(o.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/onboarding/coachmark/usage#floating",rel:"nofollow",children:"floating"}),`
variant.`]}),`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(h,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(C,{of:n})})}),`
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
`,e.jsx(u,{})]})}function b(r={}){const{wrapper:o}={...l(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(t,{...r})}):t(r)}const y=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",te={title:"IBM Products/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:d,tags:["autodocs"],parameters:{styles:y,docs:{page:b}}},v=r=>{const o=p();return e.jsx(x,{align:"bottom",overlayKind:g.FLOATING,target:e.jsx(d,{kind:"tertiary",label:"Show information",size:"md",renderIcon:f,...r}),theme:o,children:e.jsx(k,{closeButtonLabel:"Done",children:e.jsx(j,{title:"Hello World",description:"this is a description test"})})})},n=v.bind({});n.args={label:"Click Me",className:"myButton"};var a,s,i,m,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};const ae=["coachmarkButton"];export{ae as __namedExportsOrder,n as coachmarkButton,te as default};
