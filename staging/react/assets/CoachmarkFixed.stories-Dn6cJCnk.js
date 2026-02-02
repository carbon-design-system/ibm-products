import{j as e,aB as m,aD as h,aC as d,e as t,aK as p}from"./iframe-BbTYfv9-.js";import{L as a}from"./Link-CLBD2w3u.js";import{useMDXComponents as c}from"./index-BBorVmTi.js";import{A as u}from"./index-KnhCxvuW.js";import{C as l}from"./CoachmarkFixed-qX_79C8Y.js";import{d as x,e as i}from"./CoachmarkOverlayElements-BIrdMf7L.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-10-Cya3ufu0.js";import"./bucket-19-DKyp3qQO.js";import"./CoachmarkTagline-CYIZSvt-.js";import"./devtools-KS_k4bKc.js";import"./bucket-9-CeMVumY-.js";import"./usePrefersReducedMotion-DFJAWd-w.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-6-D484BBya.js";import"./clamp-CsXXRQhr.js";import"./Carousel-BDYj-R18.js";function s(n){const o={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"coachmarkfixed",children:"CoachmarkFixed"}),`
`,e.jsx(o.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(o.p,{children:[`This component is deprecated and will be removed in the next major version. This
can be created as
`,e.jsx(o.a,{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/patterns-coachmark-fixed--overview",rel:"nofollow",children:"pattern"}),`
using new
`,e.jsx(o.a,{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/preview-onboarding-coachmark--overview",rel:"nofollow",children:"composable coachmark"}),`,
`,e.jsx(o.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/utilities/src/carousel/README.md",rel:"nofollow",children:"carousel utility"}),`
and other `,e.jsx(o.a,{href:"https://react.carbondesignsystem.com",rel:"nofollow",children:"carbon components"}),"."]}),`
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
`,e.jsx(m,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(h,{of:r})})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(d,{})]})}function b(n={}){const{wrapper:o}={...c(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}const g=".docs-story div{transform:none}",I={title:"Deprecated/Coachmark/CoachmarkFixed",component:l,tags:["autodocs","Onboarding"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:g,docs:{page:b}},decorators:[n=>t.createElement(u,{type:"deprecation-notice",text:t.createElement("div",null,"This component is deprecated and will be removed in the next major version. This can be created as"," ",t.createElement("a",{href:"/?path=/docs/patterns-coachmark-fixed--overview"},"pattern")," ","using new composable coachmark, carousel utility and other carbon components.")},n())]},f=n=>{const o=p();return t.createElement(l,{...n,theme:o},t.createElement(x,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},t.createElement(i,{title:"Hello World",description:"Link opens in new tab.",button:t.createElement(a,{href:"https://www.ibm.com",target:"_blank"},"Learn more")}),t.createElement(i,{title:"Hello World 2",description:"Link opens on this page.",button:t.createElement(a,{href:"https://www.ibm.com"},"Learn more")})))},r=f.bind({});r.args={tagline:"Why are there two types of severity scores?",onClose:()=>console.log("CLOSE"),portalTarget:'#root:not([hidden="true"])',className:"myCoachmarkFixed",closeIconDescription:"Close"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkFixed {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World 2" description="Link opens on this page." button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
      </CoachmarkOverlayElements>
    </CoachmarkFixed>;
}`,...r.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const M=["coachmarkFixed"];export{M as __namedExportsOrder,r as coachmarkFixed,I as default};
//# sourceMappingURL=CoachmarkFixed.stories-Dn6cJCnk.js.map
