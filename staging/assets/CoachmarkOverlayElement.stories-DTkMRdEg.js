import{e as r}from"./index-CPiZ6Cnx.js";import{g as p}from"./story-helper-C7pmvIin.js";import{j as e}from"./index-B83en7q5.js";import{useMDXComponents as h}from"./index-CUO_02de.js";import"./index-Bf_H9q8r.js";import{a as d,C as u}from"./CoachmarkOverlayElements-1w_eOm7u.js";import{C as x}from"./Coachmark-BNQfUVma.js";import{C as k}from"./CoachmarkBeacon-Do1E9Bpl.js";import{a as g,f as C,C as y}from"./index-DblCLej2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BPCFiO9b.js";import"./index-ZKO_qc5e.js";import"./preview-DUa2hDsf.js";import"./iframe-DG_HeTRT.js";import"./DocsRenderer-CFRXHY34-DtZUrKsm.js";import"./client-BCQEsWlk.js";import"./uuidv4-BN2rGLQG.js";import"./devtools-Ca6Wku6c.js";import"./settings-41bnSjHp.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./bucket-5-B7bOdntf.js";import"./useIsomorphicEffect-CqAX3nH-.js";import"./clamp-CsXXRQhr.js";import"./Carousel-BCNWa9EM.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkoverlayelement",children:"CoachmarkOverlayElement"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-sample",children:"Code Sample"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElement is a composable element reserved for use within a
CoachmarkOverlayElements container, which should be used only within the scope
of a Coachmark or a CoachmarkFixed component. There can be one to N number of
CoachmarkOverlayElement components as children to a single
CoachmarkOverlayElements. When more than one CoachmarkOverlayElement components
are used in a CoachmarkOverlayElements, the components are displayed in a
paginated fashion within a carousel.`}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElement does not directly take a theme prop; rather, it
relies on the cascade from classes being set in the
Coachmark/CoachmarkFixed/CoachmarkStack components.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(g,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(C,{of:a})})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark ... >
  <CoachmarkOverlayElements ...>

    <CoachmarkOverlayElement
      title='Hello World'
      description='Link opens in new tab.'
      button={
        <Link href='https://www.ibm.com' target='_blank' renderIcon={Crossroads16}>
          Learn more
        </Link>
      } />

     <CoachmarkOverlayElement
        title='Hello World'
        description='Link opens on this page.'
        button={<Link href='https://www.ibm.com'>Learn more</Link>}
      />

  </CoachmarkOverlayElements>

</Coachmark>

`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(y,{})]})}function b(o={}){const{wrapper:n}={...h(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}const v=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;box-sizing:border-box;padding:1rem;margin-inline-start:50%;max-block-size:100%;transform:translate(-50%)}",V={title:"Experimental/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElement",component:d,tags:["autodocs"],argTypes:{button:{control:{type:null}},description:{control:{type:null}},nextButtonText:{control:{type:null}},previousButtonLabel:{control:{type:null}}},parameters:{styles:v,docs:{page:b}}},f=o=>{const n=p();return r.createElement(x,{align:"bottom",positionTune:{x:0,y:0},target:r.createElement(k,{label:"Show information",kind:"default"}),theme:n},r.createElement(u,{...o},r.createElement(d,{title:"Hello World",description:"this is a description test"})))},a=f.bind({});a.args={closeButtonLabel:"Done",className:"myOverlayElement"};var i,s,l,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} positionTune={{
    x: 0,
    y: 0
  }} target={<CoachmarkBeacon label="Show information" kind={'default'} />} theme={theme}>
      <CoachmarkOverlayElements {...args}>
        <CoachmarkOverlayElement title={'Hello World'} description={'this is a description test'} />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};const Y=["coachmarkOverlayElement"];export{Y as __namedExportsOrder,a as coachmarkOverlayElement,V as default};
