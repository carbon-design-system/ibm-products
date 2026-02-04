import{j as e,aB as m,aD as d,aC as p,e as n,aK as u}from"./iframe-BBf3bqTv.js";import{L as s}from"./Link-qk3ncX2u.js";import{useMDXComponents as c}from"./index-BQtCSjrU.js";import{A as b}from"./index-Bva3mllS.js";import{C as h}from"./CoachmarkStack-DDdTQDWQ.js";import{d as i,e as o}from"./CoachmarkOverlayElements-C_myZV2j.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-10-BG8-V5O3.js";import"./bucket-19-zmdOpOwk.js";import"./devtools-c2gfrTL0.js";import"./useIsomorphicEffect-ZKZ1smHY.js";import"./bucket-9-Ce7lYRrw.js";import"./CoachmarkTagline-6ucdQz1x.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-6-TRoxTq9G.js";import"./clamp-CsXXRQhr.js";import"./Carousel-Cug4A72a.js";function l(a){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
`,e.jsx(t.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,e.jsxs(t.p,{children:[`This component is deprecated and will be removed in the next major version. This
can be created as
`,e.jsx(t.a,{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/patterns-coachmark-stacked--overview",rel:"nofollow",children:"pattern"}),`
using new
`,e.jsx(t.a,{href:"https://carbon-for-ibm-products.netlify.app/?path=/docs/preview-onboarding-coachmark--overview",rel:"nofollow",children:"composable coachmark"}),`,
`,e.jsx(t.a,{href:"https://github.com/carbon-design-system/carbon/blob/main/packages/utilities/src/carousel/README.md",rel:"nofollow",children:"carousel utility"}),`
and other `,e.jsx(t.a,{href:"https://react.carbondesignsystem.com",rel:"nofollow",children:"carbon components"}),"."]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#stacked",rel:"nofollow",children:"CoachmarkStacked"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. CoachmarkStacked can include ghost buttons to
trigger another layer to slide up to stack on top of it, much like the
`,e.jsx(t.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tearsheet/usage/#navigation",rel:"nofollow",children:"stacked Tearsheet"}),`.
When dismissed, the stacked layer exits by sliding back down, revealing the main
layer. When the main layer is dismissed, it slides down off the page. Only one
layer can be stacked on the main layer.`]}),`
`,e.jsx(t.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(t.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(t.p,{children:`The CoachmarkStacked uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the child Coachmark elements. Specify
a value ('light' or 'dark') to display properly within your usage.`}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"(See bottom right)"})}),`
`,e.jsx(m,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(d,{of:r})})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(p,{})]})}function k(a={}){const{wrapper:t}={...c(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(l,{...a})}):l(a)}const g=".docs-story div{transform:none}",F={title:"Deprecated/Coachmark/CoachmarkStack",component:h,tags:["autodocs","Onboarding"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:g,docs:{page:k}},decorators:[a=>n.createElement(b,{type:"deprecation-notice",text:n.createElement("div",null,"This component is deprecated and will be removed in the next major version. This can be created as"," ",n.createElement("a",{href:"/?path=/docs/patterns-coachmark-stacked--overview"},"pattern")," ","using new composable coachmark, carousel utility and other carbon components.")},a())]},y=a=>{const t=u();return n.createElement(h,{...a,theme:t},n.createElement(i,{closeButtonLabel:"Got it"},n.createElement(o,{title:"Short Coachmark",description:"As small as it gets."})),n.createElement(i,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back"},n.createElement(o,{title:"Mid-height Coachmark",description:n.createElement(n.Fragment,null,"This should be about the same height as the base stack item.",n.createElement("br",null),n.createElement("br",null),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."),button:n.createElement(s,{href:"https://www.ibm.com"},"Learn more")}),n.createElement(o,{title:"Hello World",description:"Link opens in new tab.",button:n.createElement(s,{href:"https://www.ibm.com",target:"_blank"},"Learn more")})),n.createElement(i,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},n.createElement(o,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),n.createElement(o,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),n.createElement(o,{title:"Findings are enriched with more information and context",description:n.createElement(n.Fragment,null,"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",n.createElement("br",null),n.createElement("br",null),"Lets",n.createElement("br",null),n.createElement("br",null),"make",n.createElement("br",null),n.createElement("br",null),"this",n.createElement("br",null),n.createElement("br",null),"one",n.createElement("br",null),n.createElement("br",null),"really",n.createElement("br",null),n.createElement("br",null),"tall.")}),n.createElement(o,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),n.createElement(o,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})))},r=y.bind({});r.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix',closeIconDescription:"Close"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <CoachmarkStack {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel={'Got it'}>
        <CoachmarkOverlayElement title="Short Coachmark" description="As small as it gets." />
      </CoachmarkOverlayElements>

      <CoachmarkOverlayElements closeButtonLabel="Close" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Mid-height Coachmark" description={<>
              This should be about the same height as the base stack item.
              <br />
              <br />
              This is known as the enrichment phase. Enrichment supports you by
              emulating how an analyst would evaluate a finding—for example, by
              adding context, such as whether a certain piece of data is known
              to be malicious, or is linked...
            </>} button={<CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>} />
        <CoachmarkOverlayElement title="Hello World" description="Link opens in new tab." button={<CarbonLink href="https://www.ibm.com" target="_blank">
              Learn more
            </CarbonLink>} />
      </CoachmarkOverlayElements>

      <CoachmarkOverlayElements closeButtonLabel="Done" nextButtonText="Next" previousButtonLabel="Back">
        <CoachmarkOverlayElement title="Tall Coachmark" description="These alerts contain data gathered from your connected security systems." />
        <CoachmarkOverlayElement title="Alerts contain evidence, known as artifacts" description="These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings." />
        <CoachmarkOverlayElement title="Findings are enriched with more information and context" description={<>
              This is known as the enrichment phase. Enrichment supports you by
              emulating how an analyst would evaluate a finding—for example, by
              adding context, such as whether a certain piece of data is known
              to be malicious, or is linked to a known threat.
              <br />
              <br />
              Lets
              <br />
              <br />
              make
              <br />
              <br />
              this
              <br />
              <br />
              one
              <br />
              <br />
              really
              <br />
              <br />
              tall.
            </>} />
        <CoachmarkOverlayElement title="Next, the correlation process takes place" description="Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated." />
        <CoachmarkOverlayElement title="Between enrichment and correlation, the severity of a case is determined" description="And once you know the severity, you can easily choose which case to pick up next." />
      </CoachmarkOverlayElements>
    </CoachmarkStack>;
}`,...r.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...r.parameters?.docs?.description}}};const I=["coachmarkStack"];export{I as __namedExportsOrder,r as coachmarkStack,F as default};
//# sourceMappingURL=CoachmarkStack.stories-enxsmucq.js.map
