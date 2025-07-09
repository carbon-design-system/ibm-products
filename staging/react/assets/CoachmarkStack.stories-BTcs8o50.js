import{e as t}from"./index-DtHxqM--.js";import"./index-4poXP75K.js";import{L as s}from"./Link-PvdHJXrE.js";import{g as k}from"./story-helper-C5uq5kSZ.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as u}from"./index-CseD6FCQ.js";import"./index-BeK2u_YJ.js";import{C as b}from"./CoachmarkStack-BKqFDNa-.js";import{d as i,e as o}from"./CoachmarkOverlayElements-Mvw_Z1DD.js";import{a as g,j as y,C as x}from"./index-Bi6vE2wr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./settings-Bzj6EGPa.js";import"./events-CdfZZS3f.js";import"./index-CiYgQLeJ.js";import"./preview-Cb0nZa6U.js";import"./iframe-Ck3ixXeo.js";import"./DocsRenderer-CFRXHY34-CMn4s62p.js";import"./client-CZTHzaKS.js";import"./devtools-B69Kc3qg.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./bucket-9-BIeYAPRu.js";import"./CoachmarkTagline-Bzp0IWBt.js";import"./uuidv4-BN2rGLQG.js";import"./bucket-6-DLW23Ky6.js";import"./clamp-CsXXRQhr.js";import"./Carousel-Cuxr4mgx.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function l(a){const n={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...u(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkstack",children:"CoachmarkStack"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage#stacked",rel:"nofollow",children:"CoachmarkStacked"}),`
appears fixed at the bottom right corner of the browser window when the page
loads. It starts in a minimized state, to cover as little of the UI as possible;
when shown in tests as expanded by default, users immediately closed it without
reading, to get it out of the way. CoachmarkStacked can include ghost buttons to
trigger another layer to slide up to stack on top of it, much like the
`,e.jsx(n.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/tearsheet/usage/#navigation",rel:"nofollow",children:"stacked Tearsheet"}),`.
When dismissed, the stacked layer exits by sliding back down, revealing the main
layer. When the main layer is dismissed, it slides down off the page. Only one
layer can be stacked on the main layer.`]}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkStacked uses the theme prop (e.g., theme='dark') to set the
appropriate background and font colors for the child Coachmark elements. Specify
a value ('light' or 'dark') to display properly within your usage.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"(See bottom right)"})}),`
`,e.jsx(g,{children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(y,{of:r})})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(x,{})]})}function f(a={}){const{wrapper:n}={...u(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}const w=".docs-story div{transform:none}",Y={title:"Experimental/Onboarding/Coachmark/CoachmarkStack",component:b,tags:["autodocs","Onboarding"],argTypes:{children:{control:{type:null}},portalTarget:{control:{type:null}},theme:{control:{type:null}}},parameters:{styles:w,docs:{page:f}}},E=a=>{const n=k();return t.createElement(b,{...a,theme:n},t.createElement(i,{closeButtonLabel:"Got it"},t.createElement(o,{title:"Short Coachmark",description:"As small as it gets."})),t.createElement(i,{closeButtonLabel:"Close",nextButtonText:"Next",previousButtonLabel:"Back"},t.createElement(o,{title:"Mid-height Coachmark",description:t.createElement(t.Fragment,null,"This should be about the same height as the base stack item.",t.createElement("br",null),t.createElement("br",null),"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked..."),button:t.createElement(s,{href:"https://www.ibm.com"},"Learn more")}),t.createElement(o,{title:"Hello World",description:"Link opens in new tab.",button:t.createElement(s,{href:"https://www.ibm.com",target:"_blank"},"Learn more")})),t.createElement(i,{closeButtonLabel:"Done",nextButtonText:"Next",previousButtonLabel:"Back"},t.createElement(o,{title:"Tall Coachmark",description:"These alerts contain data gathered from your connected security systems."}),t.createElement(o,{title:"Alerts contain evidence, known as artifacts",description:"These help to determine whether the alert is good or bad. And as alerts are added to a case, they become findings."}),t.createElement(o,{title:"Findings are enriched with more information and context",description:t.createElement(t.Fragment,null,"This is known as the enrichment phase. Enrichment supports you by emulating how an analyst would evaluate a finding—for example, by adding context, such as whether a certain piece of data is known to be malicious, or is linked to a known threat.",t.createElement("br",null),t.createElement("br",null),"Lets",t.createElement("br",null),t.createElement("br",null),"make",t.createElement("br",null),t.createElement("br",null),"this",t.createElement("br",null),t.createElement("br",null),"one",t.createElement("br",null),t.createElement("br",null),"really",t.createElement("br",null),t.createElement("br",null),"tall.")}),t.createElement(o,{title:"Next, the correlation process takes place",description:"Based on the results of the enrichment process, findings that are potentially related are grouped together, and then evaluated."}),t.createElement(o,{title:"Between enrichment and correlation, the severity of a case is determined",description:"And once you know the severity, you can easily choose which case to pick up next."})))},r=E.bind({});r.args={className:"myCoachmarkStack",closeButtonLabel:"Close",description:"This is an example of a description",title:"Example title",navLinkLabels:["Example 1","Example 2","Example 3"],onClose:()=>console.log("CLOSE"),tagline:"Why are there two types of severity scores?",portalTarget:'#root:not([hidden="true"]) .preview-position-fix'};var c,h,m,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};const Z=["coachmarkStack"];export{Z as __namedExportsOrder,r as coachmarkStack,Y as default};
