import{e as r}from"./index-DtHxqM--.js";import"./index-Ccw_5OKp.js";import{L as a}from"./Link-BB7CuL0w.js";import{g as x}from"./story-helper-DdgB4qR7.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as p}from"./index-CseD6FCQ.js";import"./index-Cw55I15S.js";import{C as u}from"./CoachmarkFixed-BL_qYU3S.js";import{d as g,e as i}from"./CoachmarkOverlayElements-B_yp8Opa.js";import{a as b,j as f,C as k}from"./index-DkHmASp-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CiYgQLeJ.js";import"./preview-D-c0imNg.js";import"./iframe-DnOnTP6j.js";import"./DocsRenderer-CFRXHY34-BHicNskh.js";import"./client-CZTHzaKS.js";import"./CoachmarkTagline-D7of_zkf.js";import"./settings-JuRwpTYJ.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./devtools-DSwQefcu.js";import"./bucket-9-Tu9Xse6i.js";import"./usePrefersReducedMotion-DvL5kgOM.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-5-rJc-1NLr.js";import"./clamp-CsXXRQhr.js";import"./Carousel-xPCHD9Pg.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function s(t){const o={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#fixed",rel:"nofollow",children:"CoachmarkFixed"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. When dismissed, it slides down off the page.`]}),`
`,e.jsx(o.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(o.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(o.p,{children:`The CoachmarkFixed uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the overlay. Specify a value ('light'
or 'dark') to display properly within your usage.`}),`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(o.p,{children:e.jsx(o.em,{children:"(See bottom right)"})}),`
`,e.jsx(b,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(f,{of:n})})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(k,{})]})}function w(t={}){const{wrapper:o}={...p(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}const j=".docs-story div{transform:none}",$={title:"Experimental/Onboarding/Coachmark/CoachmarkFixed",component:u,tags:["autodocs"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:j,docs:{page:w}}},y=t=>{const o=x();return r.createElement(u,{...t,theme:o},r.createElement(g,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},r.createElement(i,{title:"Hello World",description:"Link opens in new tab.",button:r.createElement(a,{href:"https://www.ibm.com",target:"_blank"},"Learn more")}),r.createElement(i,{title:"Hello World 2",description:"Link opens on this page.",button:r.createElement(a,{href:"https://www.ibm.com"},"Learn more")})))},n=y.bind({});n.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed"};var l,m,c,h,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World 2" description="Link opens on this page." button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>;
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.description}}};const ee=["coachmarkFixed"];export{ee as __namedExportsOrder,n as coachmarkFixed,$ as default};
