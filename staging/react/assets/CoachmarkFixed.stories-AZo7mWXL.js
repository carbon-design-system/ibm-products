import{j as e,eo as m,eq as h,ep as d,ev as p,e as r}from"./iframe-BlQ-LkYW.js";import{L as a}from"./Link-CMYINvP1.js";import{useMDXComponents as l}from"./index-BYVA8DqO.js";import{C as c}from"./CoachmarkFixed-CjXnVLXb.js";import{d as u,e as i}from"./CoachmarkOverlayElements-DghXq7Av.js";import"./CoachmarkTagline-qFLwxaSv.js";import"./devtools-BJZSxg-N.js";import"./bucket-9-D7reDM9o.js";import"./usePrefersReducedMotion-C1fBtu2H.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-6-C4pRq2Bl.js";import"./clamp-CsXXRQhr.js";import"./Carousel-KzevvHGP.js";function s(o){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#fixed",rel:"nofollow",children:"CoachmarkFixed"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. When dismissed, it slides down off the page.`]}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/teams-across-security/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkFixed uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the overlay. Specify a value ('light'
or 'dark') to display properly within your usage.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"(See bottom right)"})}),`
`,e.jsx(m,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(h,{of:t})})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function x(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}const g=".docs-story div{transform:none}",N={title:"Experimental/Onboarding/Coachmark/CoachmarkFixed",component:c,tags:["autodocs","Onboarding"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:g,docs:{page:x}}},b=o=>{const n=p();return r.createElement(c,{...o,theme:n},r.createElement(u,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},r.createElement(i,{title:"Hello World",description:"Link opens in new tab.",button:r.createElement(a,{href:"https://www.ibm.com",target:"_blank"},"Learn more")}),r.createElement(i,{title:"Hello World 2",description:"Link opens on this page.",button:r.createElement(a,{href:"https://www.ibm.com"},"Learn more")})))},t=b.bind({});t.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed",closeIconDescription:"Close"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World 2" description="Link opens on this page." button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>;
}`,...t.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...t.parameters?.docs?.description}}};const S=["coachmarkFixed"];export{S as __namedExportsOrder,t as coachmarkFixed,N as default};
