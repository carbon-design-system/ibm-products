import{e as r}from"./index-DzvNrmz8.js";import"./index-5As4T26e.js";import{L as a}from"./Link-Dprirwoi.js";import{g as x}from"./story-helper-DPPXKxdX.js";import{j as e}from"./index-Cg1swjps.js";import{useMDXComponents as p}from"./index-B7BkHM3Y.js";import"./index-TT84mNRS.js";import{C as u}from"./CoachmarkFixed-8Np84mZs.js";import{d as g,e as i}from"./CoachmarkOverlayElements-ANulXPAn.js";import{a as b,j as f,C as k}from"./index-CwcgRXWl.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bv4JGo1_.js";import"./preview-B_jYMs5d.js";import"./iframe-BsXekYnT.js";import"./DocsRenderer-CFRXHY34-Dv3JWg4F.js";import"./client-fwTTGz69.js";import"./CoachmarkTagline-YQI9Plam.js";import"./settings-CP9zVSjJ.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./devtools-B_dijMH7.js";import"./bucket-9-DBhRplFe.js";import"./usePrefersReducedMotion-g5nq1m1A.js";import"./useIsomorphicEffect-l5L8NYko.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-5-CQjaVkio.js";import"./clamp-CsXXRQhr.js";import"./Carousel-BScPKJZf.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function s(t){const o={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
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
