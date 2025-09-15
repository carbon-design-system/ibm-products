import{j as n,M as f,ej as u,ek as j,r as p,e as t,B as C,cO as y}from"./iframe-DoONWhft.js";import{C as a}from"./Coachmark-CITpsHTC.js";import{useMDXComponents as k}from"./index-DnlZ0ZDV.js";import{T as x}from"./index-BppxlTyQ.js";import{C as B}from"./CoachmarkBeacon-DyOXiQQl.js";import"./devtools-Bope-Kcp.js";import"./makeDraggable-DVDwDKbH.js";import"./bucket-6-Db2Sb-Fe.js";import"./useIsomorphicEffect-DNoZHH_8.js";import"./LayerContext-CR2yigRC.js";import"./useMatchMedia-CEqa61rd.js";function g(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...k(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(f,{title:"Coachmark",component:a}),`
`,n.jsx(e.h1,{id:"coachmark",children:"Coachmark"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#coachmark-code-sample",children:"Coachmark code sample"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#tooltip-example-usage",children:"Tooltip example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#floating-example-usage",children:"Floating example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
are just-in-time messages used to draw a user’s attention to a particular spot,
and explain new functionality or concepts they might not otherwise notice or
understand.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Note:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The trigger element or first child of ",n.jsx(e.code,{children:"Coachmark"}),` should always be either a
CoachmarkBeacon or a Button.`]}),`
`]}),`
`,n.jsx(e.h2,{id:"coachmark-code-sample",children:"Coachmark code sample"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Theme theme="white">
  <Coachmark
    ariaLabel="Coachmark"
    position={{ x: 151, y: 155 }}
    open={isOpen}
    onClose={handleClose}
    {...args}
  >
    <CoachmarkBeacon
      id="CoachmarkBtn"
      label="Show information"
      onClick={handleBeaconClick}
    ></CoachmarkBeacon>
    <Coachmark.Content highContrast={true}>
      <Coachmark.Content.Header
        closeIconDescription="Close"
        dragIconDescription="Drag"
      ></Coachmark.Content.Header>
      <Coachmark.Content.Body>
        <h2>Hello World</h2>
        <p>this is a description test</p>
        <Button size="sm">Done</Button>
      </Coachmark.Content.Body>
    </Coachmark.Content>
  </Coachmark>
</Theme>
`})}),`
`,n.jsx(e.h2,{id:"tooltip-example-usage",children:"Tooltip example usage"}),`
`,n.jsx(u,{className:"coachmarkExample",withSource:"none",of:s}),`
`,n.jsx(e.h2,{id:"floating-example-usage",children:"Floating example usage"}),`
`,n.jsx(u,{className:"coachmarkExample",withSource:"none",of:h}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(j,{})]})}function T(o={}){const{wrapper:e}={...k(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(g,{...o})}):g(o)}const w=".c4p--coachmark__next--coachmark-content{inline-size:290px}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body{display:flex;flex-direction:column}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body>h2{font-size:var(--cds-productive-heading-02-font-size, 1rem);font-weight:var(--cds-productive-heading-02-font-weight, 600);line-height:var(--cds-productive-heading-02-line-height, 1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing, 0);margin:0 0 .5rem}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body>p{font-size:var(--cds-body-long-01-font-size, .875rem);font-weight:var(--cds-body-long-01-font-weight, 400);line-height:var(--cds-body-long-01-line-height, 1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing, .16px)}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body>button{display:flex;align-self:flex-end;margin-block-start:1rem}",W={title:"Preview/Onboarding/Coachmark/next",component:a,tags:["autodocs","Onboarding"],argTypes:{children:{control:{type:null}},onClose:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:w,docs:{page:T}}};function b(){const[o,e]=p.useState(()=>document.documentElement.getAttribute("data-carbon-theme"));return p.useEffect(()=>{const i=document.documentElement,r=()=>{const c=i.getAttribute("data-carbon-theme");e(d=>d!==c?c:d)},l=new MutationObserver(c=>{for(const d of c)d.type==="attributes"&&d.attributeName==="data-carbon-theme"&&r()});l.observe(i,{attributes:!0,attributeFilter:["data-carbon-theme"]});const m=setInterval(r,200);return()=>{l.disconnect(),clearInterval(m)}},[]),o}const v=o=>{const e=b(),[i,r]=p.useState(!0),l=()=>{r(!1)},m=()=>{r(c=>!c)};return t.createElement(x,{theme:e},t.createElement(a,{position:{x:151,y:155},open:i,onClose:l,...o},t.createElement(B,{label:"Show information",buttonProps:{onClick:m,id:"CoachmarkBtn"}}),t.createElement(a.Content,{highContrast:!0},t.createElement(a.Content.Header,{closeIconDescription:"Close"}),t.createElement(a.Content.Body,null,t.createElement("h2",null,"Hello World"),t.createElement("p",null,"this is a description test"),t.createElement(C,{size:"sm"},"Done")))))},O=o=>{const e=b(),[i,r]=p.useState(!0),l=()=>{r(!1)},m=()=>{r(c=>!c)};return t.createElement(x,{theme:e},t.createElement(a,{open:i,onClose:l,floating:!0,...o},t.createElement(C,{id:"CoachmarkBtn",kind:"tertiary",size:"md",label:"Show information",renderIcon:y,onClick:m},"Show information"),t.createElement(a.Content,{highContrast:!0},t.createElement(a.Content.Header,{closeIconDescription:"Close",dragIconDescription:"Drag"}),t.createElement(a.Content.Body,null,t.createElement("h2",null,"Hello World"),t.createElement("p",null,"this is a description test"),t.createElement(C,{size:"sm"},"Done")))))},s=v.bind({});s.args={align:"top"};const h=O.bind({});h.args={align:"bottom"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const carbonTheme = useCarbonTheme();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleBeaconClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return <Theme theme={carbonTheme}>
      <Coachmark position={{
      x: 151,
      y: 155
    }} open={isOpen} onClose={handleClose} {...args}>
        <CoachmarkBeacon label="Show information" buttonProps={{
        onClick: handleBeaconClick,
        id: 'CoachmarkBtn'
      }}></CoachmarkBeacon>
        <Coachmark.Content highContrast={true}>
          <Coachmark.Content.Header closeIconDescription="Close"></Coachmark.Content.Header>
          <Coachmark.Content.Body>
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <Button size="sm">Done</Button>
          </Coachmark.Content.Body>
        </Coachmark.Content>
      </Coachmark>
    </Theme>;
}`,...s.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...s.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const carbonTheme = useCarbonTheme();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleButtonClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return <Theme theme={carbonTheme}>
      <Coachmark open={isOpen} onClose={handleClose} floating={true} {...args}>
        <Button id="CoachmarkBtn" kind="tertiary" size="md" label="Show information" renderIcon={Crossroads} onClick={handleButtonClick}>
          Show information
        </Button>
        <Coachmark.Content highContrast={true}>
          <Coachmark.Content.Header closeIconDescription="Close" dragIconDescription="Drag"></Coachmark.Content.Header>
          <Coachmark.Content.Body>
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <Button size="sm">Done</Button>
          </Coachmark.Content.Body>
        </Coachmark.Content>
      </Coachmark>
    </Theme>;
}`,...h.parameters?.docs?.source}}};const A=["Tooltip","Floating"];export{h as Floating,s as Tooltip,A as __namedExportsOrder,W as default};
