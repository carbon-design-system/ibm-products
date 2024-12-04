import{R as n}from"./index-BwDkhjyp.js";import{g as h}from"./story-helper-6_fmjwZ-.js";import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-UdGwiunq.js";import{e as C,i as u,C as g}from"./index-CTiS1d2M.js";import{C as d}from"./CoachmarkButton-DDg4I1vb.js";import{C as x}from"./Coachmark-CRS2_EJe.js";import{C as k,c as f,d as b}from"./CoachmarkOverlayElements-Bqrc-vO0.js";import{C as j}from"./settings-xiNX1vM3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./tslib.es6-B4_xh3D5.js";import"./iframe-t6fBb6Y8.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-CQ0F2wkl.js";import"./devtools-Bz70ioU6.js";import"./lodash-C6Eq4oiK.js";import"./index-ABeo-Xma.js";import"./useIsomorphicEffect-D7JMtAof.js";import"./uuidv4-BQrI85uz.js";import"./bucket-5-BnP2u7x5.js";import"./SteppedAnimatedMedia-BzeU5RwP.js";import"./lottie-D0UQuq7-.js";import"./clamp-Bg2yowlN.js";import"./toNumber-DVQITUtX.js";import"./Carousel-D8bIDKXH.js";import"./index-CJvxHwuA.js";import"./events-OVwOsPzJ.js";function a(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkbutton",children:"CoachmarkButton"}),`
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
`,e.jsx(C,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(u,{of:t})})}),`
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
`,e.jsx(g,{})]})}function y(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(a,{...r})}):a(r)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",se={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkButton",component:d,tags:["autodocs"],parameters:{styles:v,docs:{page:y}}},E=r=>{const o=h();return n.createElement(x,{align:"bottom",overlayKind:k.FLOATING,target:n.createElement(d,{kind:"tertiary",label:"Show information",size:"md",renderIcon:j,...r}),theme:o},n.createElement(f,{closeButtonLabel:"Done"},n.createElement(b,{title:"Hello World",description:"this is a description test"})))},t=E.bind({});t.args={label:"Click Me",className:"myButton"};var s,i,m,c,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} overlayKind={COACHMARK_OVERLAY_KIND.FLOATING} target={<CoachmarkButton kind="tertiary" label="Show information" size="md" renderIcon={Crossroads} {...args} />} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};const ie=["coachmarkButton"];export{ie as __namedExportsOrder,t as coachmarkButton,se as default};
